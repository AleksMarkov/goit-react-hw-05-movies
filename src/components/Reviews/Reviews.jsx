import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewById } from 'api/movies';

import style from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieReviewById(id);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className={style.reviewsContainer}>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul className={style.reviewList}>
          {reviews.map((review, index) => (
            <li key={index} className={style.reviewItem}>
              <p className={style.reviewAuthor}>Author: {review.author}</p>
              <p className={style.reviewContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
