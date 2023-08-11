import { lazy, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Logo } from './components/Logo';
import { NavLinks } from './components/NavLinks';

const UserAvatar = lazy(() => import('./components/UserAvatar'));
const MenuButton = lazy(() => import('./components/MenuButton'));

export function Header() {
  const [isAriaActive, setIsAriaActive] = useState<boolean>(false);
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);

  const handleMobileMenu = () => {
    setIsAriaActive(!isAriaActive);
    setIsDropDownActive(false);
  };

  return (
    <header className="flex flex-row flex-nowrap place-items-center justify-around min-h-[8vh]">
      <MenuButton isAriaActive={isAriaActive} onClick={handleMobileMenu} />
      <nav
        className={`fixed ${
          isAriaActive ? 'block' : 'hidden'
        } flex-col flex-wrap items-center justify-center h-[10vh] w-screen left-0 top-[8vh] z-10 md:static md:flex-row md:justify-center md:h-[7vh] md:w-auto md:top-0 md:flex md:gap-8`}
      >
        <Logo />
        <NavLinks />
      </nav>
      <div className="flex justify-evenly gap-7">
        <SearchBar />
        <UserAvatar
          isDropDownActive={isDropDownActive}
          onClick={() => {
            setIsAriaActive(false);
            setIsDropDownActive(!isDropDownActive);
          }}
          onBlur={() => setIsDropDownActive(false)}
        />
      </div>
    </header>
  );
}
