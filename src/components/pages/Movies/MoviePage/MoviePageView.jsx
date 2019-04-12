import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MoviePage.module.css';

const MoviePageView = ({ movieById, recommendations }) => {
  return (
    <>
      <NavLink to="/" className={styles.btnComeBack} title="Go back">
        &#8249;
      </NavLink>
      {movieById && (
        <div>
          <h2>{movieById.title}</h2>
          <h3>{movieById.tagline}</h3>
          <p>{movieById.vote_average}</p>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieById.backdrop_path}`}
            alt=""
          />
          <p>{movieById.overview}</p>
        </div>
      )}
      <ul>
        {recommendations &&
          recommendations.map(el => (
            <li key={el.id}>
              <NavLink to={`/movieId/${el.id}`}>
                <h2>{el.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                  alt=""
                />
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviePageView;
