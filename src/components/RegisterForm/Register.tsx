import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../contexts/userData';
import { auth } from '../../services/firebase';
import AuthButtons from '../AuthButtons';
import './css/register.css';
export function RegisterForm() {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });
  const { setUserData } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { email, password } = formInfo;

  interface loginProp {
    email: string;
    password: string;
  }

  function registerAuth({ email, password }: loginProp) {
    const emailRegex: RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?!.*\s)(?!.*([a-zA-Z])\1{3,})(?!.*\.{17,}).{6,16}$/;

    setIsLoading(true);

    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
      alert(
        'Email ou senha não são válidos. Certifique de ter colocado um email válido ou uma senha que siga os padrões de seguranças: pelo menos uma letra maiúscula, um número e a senha deve ter, no mínimo, 6 caracteres.',
      );
      setIsLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = userCredential.user;
        setUserData(userData);
        sendEmailVerification(userCredential.user);
        setIsLoading(false);
        alert('Falta pouco! Verifique seu email e confirme sua conta.');
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
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
          <h3>Crie sua conta</h3>
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
          <label htmlFor="password">Senha (mínimo de 6 caracteres)</label>
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
            onClick={() => registerAuth({ email, password })}
            disabled={isLoading ? true : false}
          >
            {isLoading ? 'Criando...' : 'Criar conta'}
          </button>
          <span>
            Já tem uma conta? <Link to={'/login'}>Entre aqui.</Link>
          </span>
          <AuthButtons />
        </form>
      </div>
    </div>
  );
}
