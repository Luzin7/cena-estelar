import { lazy, useContext } from 'react';
import { ContentsContext } from '../../contexts/LoadContents';
import filterMoviesByGenre from '../../functions/filterByGenre';
import randomCategory from '../../functions/getRandomCategory';
import { bestRatings, lastSeens } from '../../functions/sortArrays';
import Loading from '../Loading';
import FadeSwiper from '../Swiper';

const Carousel = lazy(() => import('../Carousel/SwiperSlide'));

function Content() {
  const { allMovies, wishlist, allSeries } = useContext(ContentsContext);

  return (
    <main>
      {wishlist && allMovies ? (
        <>
          <FadeSwiper
            contents={filterMoviesByGenre(allMovies, randomCategory()) || []}
          />
          <Carousel title="Filmes vistos" movies={lastSeens(allMovies) || []} />
          <Carousel
            title="Filmes bem avaliados"
            movies={bestRatings(allMovies) || []}
          />
          <Carousel title="Series vistas" series={lastSeens(allSeries) || []} />
          <Carousel title="Em breve" wishList={wishlist} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default Content;
