import { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ContentsContext } from '../../contexts/LoadContents';
import Carousel from '../Carousel/Carousel';
import filterMoviesByGenre from '../../functions/filterByGenre';

function Content() {
  const { allMovies } = useContext(ContentsContext);
  const { pathname } = useLocation();

  return (
    <main className="home mainContainer">
      {pathname.includes('/movies/movie/') ? (
        <Outlet />
      ) : (
        <>
          <Carousel
            title="Filmes de comédia"
            contents={filterMoviesByGenre(allMovies?.movies, 'comédia')}
          />
          <Carousel
            title="Filmes de drama"
            contents={filterMoviesByGenre(allMovies?.movies, 'drama')}
          />
          <Carousel
            title="Filmes de suspense"
            contents={filterMoviesByGenre(allMovies?.movies, 'suspense')}
          />
          <Carousel
            title="Filmes de terror"
            contents={filterMoviesByGenre(allMovies?.movies, 'terror')}
          />
          <Carousel
            title="Filmes de animação"
            contents={filterMoviesByGenre(allMovies?.movies, 'animação')}
          />
        </>
      )}
    </main>
  );
}

export default Content;
