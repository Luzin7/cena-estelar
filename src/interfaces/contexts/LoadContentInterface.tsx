import WatchedContentType from '../../types/data/ContentType';
import WishlistType from '../../types/data/WishlistType';
import WishlistProp from '../data/WishlistInterface';

interface LoadContentsContextProps {
  allMovies: WatchedContentType | null;
  setAllMovies: React.Dispatch<React.SetStateAction<WatchedContentType | null>>;
  allSeries: WatchedContentType | null;
  setAllSeries: React.Dispatch<React.SetStateAction<WatchedContentType | null>>;
  wishlist: WishlistProp[] | null;
  setWishlist: React.Dispatch<React.SetStateAction<WishlistProp[] | null>>;
}

export default LoadContentsContextProps;
