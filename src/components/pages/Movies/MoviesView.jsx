import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Movies.module.css';

const MoviesView = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(el => (
          <li key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.release_date}</p>
            <p>{el.vote_average}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
              alt=""
            />
            <p>{el.overview}</p>
            <NavLink className={styles.moreInfo} to={`/movieId/${el.id}`}>
              More Info
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MoviesView;
