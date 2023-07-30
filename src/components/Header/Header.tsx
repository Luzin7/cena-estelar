import { useContext, useLayoutEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { UserDataContext } from '../../hooks/contexts/userData';
import { HOME, MOVIES } from '../../utils/paths';
import DropDownProfile from '../DropdownProfile';
import SearchBar from '../SearchBar/SearchBar';
import './css/header.css';

function Header() {
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const [isMoviesPage, setIsMoviesPage] = useState<boolean>(false);
  const [isAriaActive, setIsAriaActive] = useState<boolean>(false);
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const { userData } = useContext(UserDataContext);
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

  const handleMobileMenu = () => {
    setIsAriaActive(!isAriaActive);
    setIsDropDownActive(false);
  };

  return (
    <header className="header">
      <button
        id="btn_menu__mobile"
        aria-expanded={isAriaActive}
        onClick={() => handleMobileMenu()}
      >
        {isAriaActive ? (
          <IoCloseOutline id="menu_icon" />
        ) : (
          <BiMenu id="menu_icon" />
        )}
      </button>
      <nav className="header_nav" id={isAriaActive ? 'mobile_active' : ''}>
        <Link to={HOME}>
          <div className="header_logo">
            <h1>Cena Estelar</h1>
            <BsStars id="logo_icon" />
          </div>
        </Link>
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
        </ul>
      </nav>
      <SearchBar />

      {userData?.photoURL && (
        <div
          className="abbc"
          onClick={() => setIsDropDownActive(!isDropDownActive)}
          onBlur={() => setIsDropDownActive(false)}
        >
          <img
            className="user_icon"
            src={userData.photoURL}
            alt="User Image profile"
          />
          {isDropDownActive && (
            <div className="dropdown_content">
              <DropDownProfile />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
