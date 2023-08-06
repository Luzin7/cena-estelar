import ContentProps from '../data/IContent';
import WishlistProps from '../data/IWishlist';

interface CarouselProps {
  title?: string;
  movies?: ContentProps[];
  series?: ContentProps[];
  wishList?: WishlistProps[];
}

export default CarouselProps;
