import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../contexts/userData';
import { auth } from '../../services/firebase';
import { HOME } from '../../utils/paths';
import AuthButtons from '../AuthButtons';
import './css/login.css';
export function LoginForm() {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });
  const { setUserData, setUserIsLogged } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const { email, password } = formInfo;

  interface loginProp {
    email: string;
    password: string;
  }

  function loginAuth({ email, password }: loginProp) {
    const emailRegex: RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?!.*\s)(?!.*([a-zA-Z])\1{3,})(?!.*\.{17,}).{6,16}$/;

    setIsLoading(true);

    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
      alert(
        'Email ou senha inválidos. A senha deve conter ao menos uma letra maiúscula, um número e deve conter 6 ou mais caracteres.',
      );
      setIsLoading(false);
      return;
    }

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const userData = userCredential.user;
            setUserData(userData);
            setIsLoading(false);
            setUserIsLogged(true);
            navigate(HOME);
          })
          .catch((error) => {
            alert('Erro ao fazer o login. Verifique seu email e senha.');
            setIsLoading(false);
            setUserIsLogged(false);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="form_wrapper">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h3>Acesse sua conta</h3>
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={({ target }) =>
              setFormInfo((prevFormInfo) => ({
                ...prevFormInfo,
                email: target.value,
              }))
            }
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            value={password}
            onChange={({ target }) =>
              setFormInfo((prevFormInfo) => ({
                ...prevFormInfo,
                password: target.value,
              }))
            }
            type="password"
            name="password"
            id="password"
            required
          />
          <button
            onClick={() => loginAuth({ email, password })}
            disabled={isLoading ? true : false}
          >
            {isLoading ? '...' : 'Entrar'}
          </button>
          <span>
            Ainda não tem uma conta? <Link to={'/register'}>Crie aqui.</Link>
          </span>
          <AuthButtons />
        </form>
      </div>
    </div>
  );
}
