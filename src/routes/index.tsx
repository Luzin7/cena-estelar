import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROOT, HOME, MOVIES, MOVIE, SEARCH } from '../utils/paths';
import Error from '../pages/Error';

const Root = lazy(() => import('../pages/Root'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('../pages/Movie'));
const SearchPage = lazy(() => import('../pages/Search'));

function Index() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Carregando..</h1>}>
        <Routes>
          <Route path={ROOT} element={<Root />} />
          <Route path={HOME} element={<Home />} />
          <Route path={MOVIES} element={<Movies />}>
            <Route path={MOVIE} element={<Movie />} />
          </Route>
          <Route path={SEARCH} element={<SearchPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Index;
