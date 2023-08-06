import ContentProps from '../data/IContent';
import WishlistProps from '../data/IWishlist';

interface FilteredSectionProp {
  title?: string;
  contents: ContentProps[] | WishlistProps[];
}

export default FilteredSectionProp;
