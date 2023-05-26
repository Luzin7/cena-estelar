import React from 'react';
import { BsStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HOME, MOVIES, ROOT, SERIES } from '../../utils/paths';
import './css/header.css';

function Header() {
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
            <li id="active" className="list__item">
              Início
            </li>
          </Link>
          <Link to={MOVIES}>
            <li className="list__item">Filmes</li>
          </Link>
          <Link to={SERIES}>
            <li className="list__item">Séries</li>
          </Link>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Busque por um filme, série ou anime..."
        id="input_search"
      />
    </header>
  );
}

export default Header;
