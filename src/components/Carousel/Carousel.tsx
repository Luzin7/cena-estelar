import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionProp from '../../interfaces/SearchedContent/FilteredSectionInterface';

function Carousel({ title, contents }: SectionProp) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragScrollX, setDragScrollX] = useState<number>(0);

  useLayoutEffect(() => {
    const totalWidthScroll = carouselRef.current?.scrollWidth ?? 0;
    const totalOffsetScroll = carouselRef.current?.offsetWidth ?? 0;

    setCarouselWidth(totalWidthScroll - totalOffsetScroll);
  }, [contents]);

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if (event instanceof MouseEvent) {
      const clientX = event.clientX;
      setDragStartX(clientX);
    }
    if (event instanceof TouchEvent) {
      const clientX = event.touches[0].clientX;
      setDragStartX(clientX);
    }
    setDragScrollX(carouselRef.current?.scrollLeft ?? 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    event.preventDefault();
    if (event instanceof MouseEvent) {
      const currentMoveX = event.clientX;
      const positionDiffX = (currentMoveX - dragStartX) / 7;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = dragScrollX - positionDiffX;
      }
    }
    if (event instanceof TouchEvent) {
      const currentMoveX = event.touches[0].clientX;
      const positionDiffX = (currentMoveX - dragStartX) / 7;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = dragScrollX - positionDiffX;
      }
    }
  };

  return (
    <section className="categoriesSection">
      <h2 className="section_title">{title}</h2>
      <motion.div
        ref={carouselRef}
        className="carousel"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
      >
        <motion.div
          className="carousel_content"
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
        >
          {contents.map(({ id, name, img }) => (
            <motion.div className="item_carousel" key={id}>
              {id === 0 ? (
                <img src={img} alt={`front banner of ${name}`} />
              ) : (
                <Link to={`/movies/movie/${id}`}>
                  <img src={img} alt={`front banner of ${name}`} />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Carousel;
