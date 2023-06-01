import ContentType from '../../types/data/ContentType';
import WishlistType from '../../types/data/WishlistType';
import ContentProp from '../data/ContentInterface';

interface LoadContentsContextProps {
  contents: ContentType | null;
  setContents: React.Dispatch<React.SetStateAction<ContentType | null>>;
  allMovies: ContentProp[] | null;
  setAllMovies: React.Dispatch<React.SetStateAction<ContentProp[] | null>>;
  allSeries: ContentProp[] | null;
  setAllSeries: React.Dispatch<React.SetStateAction<ContentProp[] | null>>;
  wishlist: WishlistType | null;
  setWishlist: React.Dispatch<React.SetStateAction<WishlistType | null>>;
}

export default LoadContentsContextProps;
