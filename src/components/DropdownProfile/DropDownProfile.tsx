import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../contexts/userData';
import { RECOMMENDATION, ROOT } from '../../utils/paths';

export default function DropDownProfile() {
  const { userIsLogged } = useContext(UserDataContext);
  return (
    <ul className="flex flex-col flex-wrap text-center min-w-[7vw] text-[0.6rem]">
      <li>
        <Link to={RECOMMENDATION}>
          {userIsLogged ? 'Recomendar' : 'Entrar'}
        </Link>
      </li>
      <li>
        <Link to={ROOT}>Contato e Suporte</Link>
      </li>
    </ul>
  );
}
