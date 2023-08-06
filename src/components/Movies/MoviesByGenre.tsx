import { lazy, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ContentsContext } from '../../contexts/LoadContents';
import filterMoviesByGenre from '../../functions/filterByGenre';

const Carousel = lazy(() => import('../Carousel/Carousel'));

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
            title="Comédia"
            movies={filterMoviesByGenre(allMovies, 'comédia') || []}
          />
          <Carousel
            title="Drama"
            movies={filterMoviesByGenre(allMovies, 'drama') || []}
          />
          <Carousel
            title="Ação"
            movies={filterMoviesByGenre(allMovies, 'ação') || []}
          />
          <Carousel
            title="Suspense"
            movies={filterMoviesByGenre(allMovies, 'suspense') || []}
          />
          <Carousel
            title="Terror"
            movies={filterMoviesByGenre(allMovies, 'terror') || []}
          />
          <Carousel
            title="Animação"
            movies={filterMoviesByGenre(allMovies, 'animação') || []}
          />
          <Carousel
            title="Aventura"
            movies={filterMoviesByGenre(allMovies, 'aventura') || []}
          />
        </>
      )}
    </main>
  );
}

export default Content;
