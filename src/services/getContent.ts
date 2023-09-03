import { getDocs } from 'firebase/firestore';
import SERIES from '../data/watchedSeries';
import { wishlistRepository } from './repository';
import WishlistProps from '../types/data/IWishlist';

const getAllMovies = async () => {
  const movies = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_URL_BASE}${
      import.meta.env.VITE_REACT_APP_API_MOVIES_ENDPOINT
    }`,
  )
    .then((response) => response.json())
    .then((data) => data);
  return movies;
};

const getAllSeries = () => {
  return SERIES;
};

const getWishlist = async (): Promise<WishlistProps[]> => {
  const data = await getDocs(wishlistRepository);
  const wishlist = data.docs.map((doc) => {
    const { name, img } = doc.data();
    return { id: doc.id, name, img };
  });
  return wishlist;
};

export { getAllMovies, getAllSeries, getWishlist };
