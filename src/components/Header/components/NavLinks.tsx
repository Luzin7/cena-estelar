import { useContext, useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserDataContext } from '../../../contexts/userData';
import { HOME, MOVIES, RECOMMENDATION } from '../../../utils/paths';

export function NavLinks() {
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const [isMoviesPage, setIsMoviesPage] = useState<boolean>(false);
  const { userIsLogged } = useContext(UserDataContext);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const homePath: boolean = pathname === HOME;
    const moviesPath: boolean = pathname === MOVIES;

    if (homePath) {
      setIsMoviesPage(false);
      setIsHomePage(!isHomePage);
    }
    if (moviesPath) {
      setIsHomePage(false);
      setIsMoviesPage(!isMoviesPage);
    }
  }, [pathname]);
  return (
    <ul className="flex justify-center items-center gap-6 font-medium">
      <Link to={HOME}>
        <li id={isHomePage ? 'active' : ''} className="text-xl home">
          Início
        </li>
      </Link>
      <Link to={MOVIES}>
        <li id={isMoviesPage ? 'active' : ''} className="text-xl movies">
          Filmes
        </li>
      </Link>
      {!userIsLogged && (
        <Link to={RECOMMENDATION}>
          <li id={isMoviesPage ? 'active' : ''} className="text-xl movies">
            Recomendar
          </li>
        </Link>
      )}
    </ul>
  );
}
