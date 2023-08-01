import { Logo } from './Logo';
import { Navbar } from './Navbar';

function Header() {
  return (
    <header className="flex flex-row flex-wrap items-center justify-center py-6 min-h-[10vh] md:justify-between">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
