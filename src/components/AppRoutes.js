import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout.jsx';
import HomePage from '../pages/HomePage/HomePage';
import MoviesSearchPage from '../pages/MoviesSearchPage/MoviesSearchPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from '../pages/SingleMoviePage/SingleMoviePage';
import CastPage from 'pages/CastPage/CastPage.jsx';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage.jsx';

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
          <Route path="*" element={<NotFoundPage />} />{' '}
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
