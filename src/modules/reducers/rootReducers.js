import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import movieByIdReducer from './movieByIdReducer';
import genresReducer from './genresReducer';
import searchMovieReducer from './searchMovieReducer';
import recommendationsMoviesByIdReducer from './recommendationsMoviesByIdReducer';

export default combineReducers({
  movies: moviesReducer,
  movieById: movieByIdReducer,
  genres: genresReducer,
  searchMovie: searchMovieReducer,
  recommendations: recommendationsMoviesByIdReducer,
});
