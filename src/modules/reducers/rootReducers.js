import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import movieByIdReducer from './movieByIdReducer';
import genresReducer from './genresReducer';
import recommendationsMoviesByIdReducer from './recommendationsMoviesByIdReducer';
import actorByIdReducer from './actorByIdReducer';

export default combineReducers({
  movies: moviesReducer,
  movieById: movieByIdReducer,
  genres: genresReducer,
  recommendations: recommendationsMoviesByIdReducer,
  actor: actorByIdReducer,
});
