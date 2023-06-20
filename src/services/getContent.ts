import MOVIES from '../data/watchedMovies';
import SERIES from '../data/watchedSeries';
import WISHLIST from '../data/wishlist';

const getAllMovies = () => {
  return MOVIES;
};

const getAllSeries = () => {
  return SERIES;
};

const getWishlist = () => {
  return WISHLIST;
};

export { getAllMovies, getAllSeries, getWishlist };
