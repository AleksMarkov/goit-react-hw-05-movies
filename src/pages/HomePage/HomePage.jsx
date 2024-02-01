import Movies from 'components/Movies/Movies';
import style from './home-page.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={style.title}>Trending today</div>
      <Movies />
    </div>
  );
};
export default HomePage;
