import { zodResolver } from '@hookform/resolvers/zod';
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { UserDataContext } from '../../contexts/userData';
import { auth } from '../../services/firebase';
import { HOME, REGISTER } from '../../utils/paths';
import AuthButtons from '../AuthButtons';
import './css/login.css';

const schemaLoginForm = z.object({
  userData: z.object({
    email: z.string().min(4, 'Por favor, informe um email válido'),
    password: z
      .string()
      .min(6, 'Por favor, insira uma senha válida')
      .max(
        16,
        'Tamanho da senha maior do que 16 caracteres não são permitidos',
      ),
  }),
});

type formProps = z.infer<typeof schemaLoginForm>;

export function LoginForm() {
  const { setUserData, setUserIsLogged } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaLoginForm),
    defaultValues: {
      userData: {
        email: '',
        password: '',
      },
    },
  });

  const handleFormSubmit = (data: formProps) => {
    const { userData } = data;

    const emailRegex: RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?!.*\s)(?!.*([a-zA-Z])\1{3,})(?!.*\.{17,}).{6,16}$/;

    setIsLoading(true);

    if (
      !emailRegex.test(userData.email) ||
      !passwordRegex.test(userData.password)
    ) {
      alert(
        'Email ou senha não são válidos. Certifique de ter colocado um email válido ou uma senha que siga os padrões de seguranças: pelo menos uma letra maiúscula, um número e a senha deve ter, no mínimo, 6 caracteres.',
      );
      setIsLoading(false);
      return;
    }

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, userData.email, userData.password)
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
        console.log(error.message);
      });
  };

  return (
    <div className="container flex justify-center items-center m-auto">
      <div className="form_wrapper w-full md:w-4/5 lg:w-2/5">
        <form
          className="form rounded-lg flex flex-col flex-wrap justify-center items-center gap-4 p-8"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h3 className="text-4xl font-bold mb-7">Acesse sua conta</h3>
          <label className="self-start" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full p-4 outline-none rounded-lg text-base placeholder:opacity-50"
            type="email"
            id="email"
            {...register('userData.email')}
            placeholder="Email"
          />
          {errors.userData?.email?.message && (
            <span className="text-red-400">
              {errors.userData?.email?.message}
            </span>
          )}
          <label className="self-start" htmlFor="password">
            Senha
          </label>
          <input
            className="w-full p-4 outline-none rounded-lg text-base placeholder:opacity-50"
            type="password"
            autoComplete="currentPassword"
            id="password"
            {...register('userData.password')}
            placeholder="Senha"
          />
          {errors.userData?.password?.message && (
            <span className="text-red-400">
              {errors.userData?.password?.message}
            </span>
          )}
          <button
            className="py-3 w-full font-semibold text-lg mt-7"
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
          <div className="flex items-center pt-4">
            <div className="line"></div>
            <p className="px-4">Login com Google</p>
            <div className="line"></div>
          </div>
          <AuthButtons />
          <span className="pt-4">
            Ainda não tem uma conta?{' '}
            <Link className="font-bold underline" to={REGISTER}>
              Crie aqui.
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
