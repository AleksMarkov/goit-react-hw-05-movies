import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'api/movies';

import style from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieCastById(id);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className={style.castContainer}>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      {cast &&
        cast.map((hero, index) => (
          <div key={index} className={style.actorContainer}>
            <img
              src={`https://image.tmdb.org/t/p/original/${hero.profile_path}`}
              alt={hero.name}
              className={style.actorImage}
            />
            <li className={style.actorInfo}>
              <p className={style.actorName}>{hero.name}</p>
              <p className={style.actorCharacter}>
                Character: {hero.character}
              </p>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Cast;
