import { zodResolver } from '@hookform/resolvers/zod';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { UserDataContext } from '../../contexts/userData';
import { auth } from '../../services/firebase';
import { LOGIN } from '../../utils/paths';
import AuthButtons from '../AuthButtons';
import './css/register.css';

const schemaRegisterForm = z.object({
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

type formProps = z.infer<typeof schemaRegisterForm>;

export function RegisterForm() {
  const { setUserData } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaRegisterForm),
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

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
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
  };

  return (
    <div className="container">
      <div className="form_wrapper">
        <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <h3>Crie sua conta</h3>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('userData.email')}
            placeholder="Email"
          />
          {errors.userData?.email?.message && (
            <span>{errors.userData?.email?.message}</span>
          )}
          <label htmlFor="password">Senha (mínimo de 6 caracteres)</label>
          <input
            type="password"
            autoComplete="currentPassword"
            id="password"
            {...register('userData.password')}
            placeholder="Senha"
          />
          {errors.userData?.password?.message && (
            <span>{errors.userData?.password?.message}</span>
          )}
          <button type="submit" disabled={isLoading ? true : false}>
            {isLoading ? 'Criando...' : 'Criar conta'}
          </button>
          <span>
            Já tem uma conta? <Link to={LOGIN}>Entre aqui.</Link>
          </span>
          <AuthButtons />
        </form>
      </div>
    </div>
  );
}
