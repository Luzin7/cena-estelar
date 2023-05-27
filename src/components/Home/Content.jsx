import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ContentsContext } from '../../contexts/LoadContents';

function Carousel({ title, contents }) {
  const carouselRef = useRef();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollX, setDragScrollX] = useState(0);

  useLayoutEffect(() => {
    const totalWidthScroll = carouselRef.current?.scrollWidth;
    const totalOffsetScroll = carouselRef.current?.offsetWidth;

    setCarouselWidth(totalWidthScroll - totalOffsetScroll);
  }, [contents]);

  const handleDragStart = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX || event.touches[0].clientX);
    setDragScrollX(carouselRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;

    event.preventDefault();
    const currentMoveX = event.clientX || event.touches[0].clientX;
    const positionDiffX = (currentMoveX - dragStartX) / 7;
    carouselRef.current.scrollLeft = dragScrollX - positionDiffX;
  };

  if (!contents || contents.length === 0) {
    return null;
  }

  return (
    <section className="home categoriesSection">
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
                <Link to={`/cena-estelar/movie/${id}`}>
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
Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function Content() {
  const { allContentsTypes, wishlist } = useContext(ContentsContext);

  const bestRatings = () => {
    if (!allContentsTypes || allContentsTypes.length === 0) {
      return null;
    }

    const content = [...allContentsTypes].sort((a, b) => b.rating - a.rating);
    return content;
  };

  const lastSeens = () => {
    if (!allContentsTypes || allContentsTypes.length === 0) {
      return null;
    }

    const content = [...allContentsTypes].sort((a, b) => b.id - a.id);
    return content;
  };
  const getWishlist = () => {
    if (!wishlist || wishlist.length === 0) {
      return null;
    }

    const content = [...wishlist.movies].sort((a, b) => b.id - a.id);
    return content;
  };

  return (
    <main className="home mainContainer">
      <Carousel title="Vistos mais recentes" contents={lastSeens()} />
      <Carousel title="Mais bem avaliados" contents={bestRatings()} />
      <Carousel title="Em breve" contents={getWishlist()} />
    </main>
  );
}

export default Content;
