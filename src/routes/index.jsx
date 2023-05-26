import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import { ROOT, HOME, MOVIES, MOVIE } from '../utils/paths';
import Error from '../pages/Error';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('../pages/Movie'));

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: HOME,
    element: (
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: MOVIES,
    element: (
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Movies />
      </Suspense>
    ),
  },
  {
    path: MOVIE,
    element: (
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Movie />
      </Suspense>
    ),
  },
]);

export default router;
