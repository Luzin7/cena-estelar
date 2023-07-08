import { Navigate, Outlet } from 'react-router-dom';
import { REGISTER } from '../utils/paths';
import { useContext } from 'react';
import { UserDataContext } from '../hooks/contexts/userData';

export const PrivateRoutes = () => {
  const { userIsLogged } = useContext(UserDataContext);
  return userIsLogged ? <Outlet /> : <Navigate to={REGISTER} />;
};
