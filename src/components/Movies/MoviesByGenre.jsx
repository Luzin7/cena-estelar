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
  const { allMovies } = useContext(ContentsContext);

  const filterMoviesByGenre = (genre) => {
    if (allMovies) {
      const movies = allMovies.filter((movie) => movie.genres.includes(genre));

      return movies;
    }

    return null;
  };

  return (
    <main className="home mainContainer">
      <Carousel
        title="Filmes de comédia"
        contents={filterMoviesByGenre('comédia')}
      />
      <Carousel
        title="Filmes de drama"
        contents={filterMoviesByGenre('drama')}
      />
      <Carousel
        title="Filmes de suspense"
        contents={filterMoviesByGenre('suspense')}
      />
      <Carousel
        title="Filmes de terror"
        contents={filterMoviesByGenre('terror')}
      />
      <Carousel
        title="Filmes de animação"
        contents={filterMoviesByGenre('animação')}
      />
    </main>
  );
}

export default Content;
