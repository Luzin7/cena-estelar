import { Link } from 'react-router-dom';
// import { PROFILE } from '../../utils/paths';
import { RECOMMENDATION, ROOT } from '../../utils/paths';
import './css/dropdown.css';
export default function DropDownProfile() {
  return (
    <ul className="dropdown_menu">
      {/* <Link to={ROOT}>Meu Perfil</Link> */}
      <Link to={RECOMMENDATION}>Recomendar</Link>
      {/* <Link to={ROOT}>Tema: ${currentTheme}</Link> */}
      <Link to={ROOT}>Contato e Suporte</Link>
    </ul>
  );
}
