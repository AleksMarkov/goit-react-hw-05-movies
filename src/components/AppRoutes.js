import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('../pages/MoviesSearchPage/MoviesSearchPage.jsx')
);
const SingleMoviePage = lazy(() =>
  import('../pages/SingleMoviePage/SingleMoviePage')
);
const CastPage = lazy(() => import('../pages/CastPage/CastPage.jsx'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

// import HomePage from '../pages/HomePage/HomePage';
// import MoviesSearchPage from '../pages/MoviesSearchPage/MoviesSearchPage.jsx';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import SingleMoviePage from '../pages/SingleMoviePage/SingleMoviePage';
// import CastPage from '../pages/CastPage/CastPage.jsx';
// import ReviewsPage from '../pages/ReviewsPage/ReviewsPage.jsx';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<NotFoundPage />} />{' '}
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
