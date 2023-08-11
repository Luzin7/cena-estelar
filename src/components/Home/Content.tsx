import { lazy, useContext } from 'react';
import { ContentsContext } from '../../contexts/LoadContents';
import filterMoviesByGenre from '../../functions/filterByGenre';
import randomCategory from '../../functions/getRandomCategory';
import { bestRatings, lastSeens } from '../../functions/sortArrays';
import Loading from '../Loading';
import FadeSwiper from '../Swiper';

const Carousel = lazy(() => import('../Carousel/Carousel'));

function Content() {
  const { allMovies, wishlist, allSeries } = useContext(ContentsContext);

  return (
    <main>
      {wishlist ? (
        <>
          <FadeSwiper
            contents={filterMoviesByGenre(allMovies, randomCategory()) || []}
          />
          <Carousel
            title="Filmes vistos recentemente"
            movies={lastSeens(allMovies) || []}
          />
          <Carousel
            title="Filmes bem avaliados"
            movies={bestRatings(allMovies) || []}
          />
          <Carousel
            title="Series vistas recentemente"
            series={lastSeens(allSeries) || []}
          />
          <Carousel title="Em breve" wishList={wishlist} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default Content;
