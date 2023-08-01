import { useContext, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../hooks/contexts/userData';
import { HOME } from '../../utils/paths';
import DropDownProfile from '../DropdownProfile';
import SearchBar from '../SearchBar/SearchBar';
import { NavLinks } from './NavLinks';
import './css/header.css';

export function Header() {
  const [isAriaActive, setIsAriaActive] = useState<boolean>(false);
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const { userData } = useContext(UserDataContext);

  const handleMobileMenu = () => {
    setIsAriaActive(!isAriaActive);
    setIsDropDownActive(false);
  };

  return (
    <header className="flex flex-row flex-nowrap place-items-center justify-around min-h-[10vh] bg-colorBg">
      <button
        className="text-[42.5px] bg-colorPrimary rounded-md sm:hidden"
        aria-expanded={isAriaActive}
        onClick={() => handleMobileMenu()}
      >
        {isAriaActive ? (
          <IoCloseOutline id="menu_icon" />
        ) : (
          <BiMenu id="menu_icon" />
        )}
      </button>
      <nav
        className="header_nav md:flex md:gap-8"
        id={isAriaActive ? 'mobile_active' : ''}
      >
        <Link to={HOME}>
          <div className="hidden md:flex md:place-items-center md:gap-2 md:text-xl md:font-bold xl:text-2xl">
            <h1>Cena Estelar</h1>
            <BsStars className="md:text-4xl md:text-colorPrimary" />
          </div>
        </Link>
        <NavLinks />
      </nav>

      <div className="flex justify-evenly gap-11">
        <SearchBar />
        {userData?.photoURL && (
          <div
            className="relative flex items-center justify-evenly w-[50px] h-[50px]"
            onClick={() => setIsDropDownActive(!isDropDownActive)}
            onBlur={() => setIsDropDownActive(false)}
          >
            <img
              className="cursor-pointer object-cover w-[50px] h-[50px] rounded-xl"
              src={userData.photoURL}
              alt="User Image profile"
            />

            {isDropDownActive && (
              <div className="bg-colorBgSecondary absolute flex flex-col min-w-min top-[8vh] right-0 z-10 p-3 sm:top-[6vh] md:right-[-21px]">
                <DropDownProfile />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
