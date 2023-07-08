import { getDocs } from 'firebase/firestore';
import MOVIES from '../data/watchedMovies';
import SERIES from '../data/watchedSeries';
import WISHLIST from '../data/wishlist';
import { wishlistRepository } from './repository';
import WishlistProp from '../interfaces/data/WishlistInterface';

const getAllMovies = () => {
  return MOVIES;
};

const getAllSeries = () => {
  return SERIES;
};

const getWishlist = async (): Promise<WishlistProp[]> => {
  const data = await getDocs(wishlistRepository);
  const wishlist = data.docs.map((doc) => {
    const { name, img } = doc.data();
    return { id: doc.id, name, img };
  });
  return wishlist;
};

export { getAllMovies, getAllSeries, getWishlist };
