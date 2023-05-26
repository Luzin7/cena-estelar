import VIEWED_CONTENT from '../data/watchedContent';
import WISHLIST from '../data/wishlist';

const getContents = () => {
  return VIEWED_CONTENT;
};

const getWishlist = () => {
  return WISHLIST;
};

export { getContents, getWishlist };
