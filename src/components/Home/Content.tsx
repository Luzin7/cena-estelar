import { useContext } from 'react';
import Carousel from '../Carousel/Carousel';
import { ContentsContext } from '../../hooks/contexts/LoadContents';
import {
  bestRatings,
  lastSeens,
  getWishlist,
} from '../../functions/sortArrays';
import FadeSwiper from '../Swiper';
import filterMoviesByGenre from '../../functions/filterByGenre';

function Content() {
  const { allMovies, wishlist, allSeries } = useContext(ContentsContext);

  // melhora e componentiza essa funcao
  const randomCategory = () => {
    const category = ['animação', 'terror', 'drama', 'comédia', 'suspense'];

    const randomCategory = Math.floor(Math.random() * category.length);
    return category[randomCategory];
  };

  return (
    <main className="home mainContainer">
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
      <Carousel title="Em breve" contents={getWishlist(wishlist) || []} />
    </main>
  );
}

export default Content;
