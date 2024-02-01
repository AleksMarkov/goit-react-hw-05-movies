import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SingleMovie from 'components/SingleMovie/SingleMovie';

const SingleMoviePage = () => {
  return (
    <div>
      <SingleMovie />
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        <Suspense> {<Outlet />}</Suspense>
      </ul>
    </div>
  );
};

export default SingleMoviePage;
