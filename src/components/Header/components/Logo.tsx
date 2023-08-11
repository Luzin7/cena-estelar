import { BsStars } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { HOME } from '../../../utils/paths';

export function Logo() {
  return (
    <Link to={HOME}>
      <div className="hidden md:flex md:place-items-center md:gap-2 md:text-xl md:font-bold xl:text-2xl">
        <BsStars className="md:text-4xl text-primary" />
      </div>
    </Link>
  );
}
