/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BsStars, BsGithub } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import { HOME } from '../../utils/paths';
import './css/header.css';

function Header() {
  return (
    <header className="root_header">
      <div className="header_logo">
        <h1>Cena Estelar</h1>
        <BsStars id="logo_icon" />
      </div>
      <nav className="header_nav">
        <ul className="root_nav__list">
          <li className="root_list__item">
            <a
              href="https://github.com/Luzin7"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub id="root_list__icon" />
            </a>
          </li>
          <li className="root_list__item">
            <a
              href="https://lvictor-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Sobre mim
            </a>
          </li>
          <Link to={HOME}>
            <li className="root_list__item btn">Início</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
