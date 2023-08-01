import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HOME } from '../../../utils/paths';

export function Navbar() {
  return (
    <nav>
      <ul className="flex place-items-center list-none gap-6">
        <li>
          <a href="https://github.com/Luzin7" target="_blank" rel="noreferrer">
            <BsGithub className="text-4xl" />
          </a>
        </li>
        <li>
          <a
            href="https://lvictor-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-xl underline"
          >
            Sobre mim
          </a>
        </li>
        <Link to={HOME}>
          <li className="border-2 border-colorPrimary rounded-xl py-2 px-6">
            Início
          </li>
        </Link>
      </ul>
    </nav>
  );
}
