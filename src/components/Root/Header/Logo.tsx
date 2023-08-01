import { BsStars } from 'react-icons/bs';

export function Logo() {
  return (
    <div className="hidden md:flex gap-2">
      <h1 className="text-4xl font-bold">Cena Estelar</h1>
      <BsStars className="text-4xl text-colorPrimary" />
    </div>
  );
}
