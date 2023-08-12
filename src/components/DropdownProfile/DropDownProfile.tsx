import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../contexts/userData';
import { auth } from '../../services/firebase';
import { HOME, RECOMMENDATION, ROOT } from '../../utils/paths';

export default function DropDownProfile() {
  const { userIsLogged, setUserIsLogged } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('Logout realizado com sucesso.');
        setUserIsLogged(false);
        navigate(HOME);

        window.location.reload();
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
      });
  };

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
      {userIsLogged && (
        <li onClick={handleLogout}>
          <a href="logout">Sair</a>
        </li>
      )}
    </ul>
  );
}
