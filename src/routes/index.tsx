import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from '../components/Loading';
import { PrivateRoutes } from '../helpers/protectRoutes';
import Error from '../pages/Error';
import {
  CATEGORIES,
  HOME,
  LOGIN,
  MOVIE,
  MOVIES,
  RECOMMENDATION,
  REGISTER,
  ROOT,
  SEARCH,
} from '../utils/paths';

const Root = lazy(() => import('../pages/Root'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('../pages/Movie'));
const SearchPage = lazy(() => import('../pages/Search'));
const Recommendation = lazy(() => import('../pages/Recommendation'));

function Index() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* private routes */}
          <Route element={<PrivateRoutes />}>
            <Route
              path={RECOMMENDATION}
              element={
                <Suspense fallback={<Loading />}>
                  <Recommendation />
                </Suspense>
              }
            />
          </Route>
          {/* public routes */}
          <Route path={ROOT} element={<Root />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
          <Route
            path={HOME}
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={CATEGORIES}
            element={
              <Suspense fallback={<Loading />}>
                <Movies />
              </Suspense>
            }
          />
          <Route path={MOVIE} element={<Movie />} />
          <Route path={SEARCH} element={<SearchPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Index;
