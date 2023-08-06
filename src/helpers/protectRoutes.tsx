import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserDataContext } from '../contexts/userData';
import { REGISTER } from '../utils/paths';

export const PrivateRoutes = () => {
  const { userIsLogged } = useContext(UserDataContext);
  return userIsLogged ? <Outlet /> : <Navigate to={REGISTER} />;
};
