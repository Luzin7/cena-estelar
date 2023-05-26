import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import { ContentsContext } from '../../contexts/LoadContents';

function Carousel({ title, carouselRef, carouselWidth, renderMovies }) {
  return (
    <section className="home categoriesSection">
      <h2 className="section_title">{title}</h2>
      <motion.div
        ref={carouselRef}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="carousel_content"
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
        >
          {renderMovies()}
        </motion.div>
      </motion.div>
    </section>
  );
}

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  carouselRef: PropTypes.object.isRequired,
  carouselWidth: PropTypes.number.isRequired,
  renderMovies: PropTypes.func.isRequired,
};

function MoviesByGenre() {
  const { allMovies } = useContext(ContentsContext);

  const carouselRefs = useRef({
    lastSeens: useRef(null),
    comedy: useRef(null),
    drama: useRef(null),
    suspense: useRef(null),
    terror: useRef(null),
    animation: useRef(null),
  });
  const [carouselWidths, setCarouselWidths] = useState({
    lastSeens: 0,
    comedy: 0,
    drama: 0,
    suspense: 0,
    terror: 0,
    animation: 0,
  });

  const calculateCarouselWidth = (carouselName) => {
    const carouselRef = carouselRefs.current[carouselName];
    const totalWidthScroll = carouselRef?.current?.scrollWidth;
    const totalOffsetScroll = carouselRef?.current?.offsetWidth;
    return totalWidthScroll - totalOffsetScroll;
  };

  useLayoutEffect(() => {
    const carouselNames = Object.keys(carouselRefs.current);
    const newCarouselWidths = {};

    carouselNames.forEach((carouselName) => {
      newCarouselWidths[carouselName] = calculateCarouselWidth(carouselName);
    });

    setCarouselWidths(newCarouselWidths);
  }, [allMovies]);

  const filterMoviesByGenre = (genre) => {
    if (allMovies) {
      const movies = allMovies.filter((movie) => movie.genres.includes(genre));

      return movies.map(({ id, name, img }) => (
        <motion.div className="item_carousel" key={id}>
          <img src={img} alt={`front banner of ${name}`} />
        </motion.div>
      ));
    }

    return null;
  };

  const lastSeens = () => {
    if (allMovies) {
      const movies = allMovies.sort((a, b) => b.id - a.id);

      return movies.map(({ id, name, img }) => (
        <motion.div className="item_carousel" key={id}>
          <img src={img} alt={`front banner of ${name}`} />
        </motion.div>
      ));
    }

    return null;
  };

  return (
    <main className="home mainContainer">
      <Carousel
        title="Vistos mais recentes"
        carouselRef={carouselRefs.current.lastSeens}
        carouselWidth={carouselWidths.lastSeens}
        renderMovies={() => lastSeens()}
      />
      <Carousel
        title="Filmes de comédia"
        carouselRef={carouselRefs.current.comedy}
        carouselWidth={carouselWidths.comedy}
        renderMovies={() => filterMoviesByGenre('comédia')}
      />
      <Carousel
        title="Filmes de drama"
        carouselRef={carouselRefs.current.drama}
        carouselWidth={carouselWidths.drama}
        renderMovies={() => filterMoviesByGenre('drama')}
      />
      <Carousel
        title="Filmes de suspense"
        carouselRef={carouselRefs.current.suspense}
        carouselWidth={carouselWidths.suspense}
        renderMovies={() => filterMoviesByGenre('suspense')}
      />
      <Carousel
        title="Filmes de terror"
        carouselRef={carouselRefs.current.terror}
        carouselWidth={carouselWidths.terror}
        renderMovies={() =>
          filterMoviesByGenre('terror') || filterMoviesByGenre('horror')
        }
      />
      <Carousel
        title="Animações"
        carouselRef={carouselRefs.current.animation}
        carouselWidth={carouselWidths.animation}
        renderMovies={() => filterMoviesByGenre('animação')}
      />
    </main>
  );
}

export default MoviesByGenre;
