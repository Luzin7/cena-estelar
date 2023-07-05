import { useContext } from 'react';
import Carousel from '../Carousel/Carousel';
import { ContentsContext } from '../../hooks/contexts/LoadContents';
import { bestRatings, lastSeens } from '../../functions/sortArrays';
import FadeSwiper from '../Swiper';
import filterMoviesByGenre from '../../functions/filterByGenre';
import { BsTypeH1 } from 'react-icons/bs';
import Loading from '../Loading';

function Content() {
  const { allMovies, wishlist, allSeries } = useContext(ContentsContext);
  console.log(wishlist);

  // melhora e componentiza essa funcao
  const randomCategory = () => {
    const category = ['animação', 'terror', 'drama', 'comédia', 'suspense'];

    const randomCategory = Math.floor(Math.random() * category.length);
    return category[randomCategory];
  };

  return (
    <main className="home mainContainer">
      {wishlist ? (
        <>
          <FadeSwiper
            contents={filterMoviesByGenre(allMovies?.movies, randomCategory())}
          />
          <Carousel
            title="Filmes vistos recentemente"
            contents={lastSeens(allMovies?.movies) || []}
          />
          <Carousel
            title="Filmes bem avaliados"
            contents={bestRatings(allMovies?.movies) || []}
          />
          <Carousel
            title="Series vistas recentemente"
            contents={lastSeens(allSeries?.series) || []}
          />
          <Carousel title="Em breve" contents={wishlist || []} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default Content;
