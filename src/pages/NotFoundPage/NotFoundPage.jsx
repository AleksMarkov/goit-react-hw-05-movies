import { Link } from 'react-router-dom';

import style from './not-foun-page.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={style.text}>Page not found.</h1>
      <Link className={style.link} to="/">
        To home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
