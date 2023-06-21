import { useContext } from 'react';
import Carousel from '../Carousel/Carousel';
import { ContentsContext } from '../../contexts/LoadContents';
import {
  bestRatings,
  lastSeens,
  getWishlist,
} from '../../functions/sortArrays';

function Content() {
  const { allMovies, wishlist, allSeries } = useContext(ContentsContext);

  return (
    <main className="home mainContainer">
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
