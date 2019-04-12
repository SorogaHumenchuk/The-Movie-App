import React from 'react';
import { NavLink } from 'react-router-dom';

const MoviesView = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(el => (
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
  );
};

export default MoviesView;
