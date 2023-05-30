import React, { useContext } from 'react';
import Carousel from '../Carousel/Carousel';
import { ContentsContext } from '../../contexts/LoadContents';
import {
  bestRatings,
  lastSeens,
  getWishlist,
} from '../../functions/sortArrays';

function Content() {
  const { allMovies, wishlist } = useContext(ContentsContext);

  return (
    <main className="home mainContainer">
      <Carousel title="Vistos mais recentes" contents={lastSeens(allMovies)} />
      <Carousel title="Mais bem avaliados" contents={bestRatings(allMovies)} />
      <Carousel title="Em breve" contents={getWishlist(wishlist)} />
    </main>
  );
}

export default Content;
