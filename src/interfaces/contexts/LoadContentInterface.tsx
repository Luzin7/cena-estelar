import WatchedContentType from '../../types/data/ContentType';
import WishlistType from '../../types/data/WishlistType';

interface LoadContentsContextProps {
  allMovies: WatchedContentType | null;
  setAllMovies: React.Dispatch<React.SetStateAction<WatchedContentType | null>>;
  allSeries: WatchedContentType | null;
  setAllSeries: React.Dispatch<React.SetStateAction<WatchedContentType | null>>;
  wishlist: WishlistType | null;
  setWishlist: React.Dispatch<React.SetStateAction<WishlistType | null>>;
}

export default LoadContentsContextProps;
