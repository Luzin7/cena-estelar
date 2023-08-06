import ContentProp from '../data/IContent';
import WishlistProp from '../data/IWishlist';

interface LoadContentsContextProps {
  allMovies: ContentProp[];
  setAllMovies: React.Dispatch<React.SetStateAction<ContentProp[]>>;
  allSeries: ContentProp[];
  setAllSeries: React.Dispatch<React.SetStateAction<ContentProp[]>>;
  wishlist: WishlistProp[];
  setWishlist: React.Dispatch<React.SetStateAction<WishlistProp[]>>;
}

export default LoadContentsContextProps;
