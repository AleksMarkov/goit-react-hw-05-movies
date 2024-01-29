import Posts from 'components/Posts/Posts';
import style from './home-page.module.css';

const HomePage = () => {
  return (
    <div>
      <h1>Trending today</h1>
      <Posts />
    </div>
  );
};
export default HomePage;
