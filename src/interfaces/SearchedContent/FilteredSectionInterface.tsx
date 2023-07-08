import ContentProp from '../data/ContentInterface';
import WishlistProp from '../data/WishlistInterface';

interface SectionProp {
  title?: string;
  contents: ContentProp[] | WishlistProp[];
}

export default SectionProp;
