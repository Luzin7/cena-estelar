import React, { useLayoutEffect, useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { HOME, MOVIES, ROOT } from '../../utils/paths';
import './css/header.css';

function Header() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isMoviesPage, setIsMoviesPage] = useState(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const homePath = pathname === '/cena-estelar/home';
    const moviesPath = pathname === '/cena-estelar/movies';

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
    <header className="header">
      <Link to={ROOT}>
        <div className="header_logo">
          <h1>Cena Estelar</h1>
          <BsStars id="logo_icon" />
        </div>
      </Link>

      <nav className="header_nav">
        <ul className="nav_list">
          <Link to={HOME}>
            <li id={isHomePage ? 'active' : ''} className="list__item home">
              Início
            </li>
          </Link>
          <Link to={MOVIES}>
            <li id={isMoviesPage ? 'active' : ''} className="list__item movies">
              Filmes
            </li>
          </Link>
          <Link to={'/'}>
            <li className="list__item">Gêneros</li>
          </Link>
        </ul>
      </nav>
      {/* <input
        type="text"
        placeholder="Busque por um filme, série ou anime..."
        id="input_search"
      /> */}
    </header>
  );
}

export default Header;
