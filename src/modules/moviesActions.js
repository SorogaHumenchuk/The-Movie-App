import types from './actionTypes';

export const fetchPopularRequest = () => ({
  type: types.FETCH_REQUEST_POPULAR,
});

export const fetchPopularSeccess = data => ({
  type: types.FETCH_SUCCESS_POPULAR,

  payload: {
    data,
  },
});

export const fetchPopularError = error => ({
  type: types.FETCH_ERROR_POPULAR,

  payload: {
    error,
  },
});

// for movie page

export const fetchMovieByIdRequest = () => ({
  type: types.FETCH_REQUEST_MOVIE_BY_ID,
});

export const fetchMovieByIdSeccess = data => ({
  type: types.FETCH_SUCCESS_MOVIE_BY_ID,

  payload: {
    data,
  },
});

export const fetchMovieByIdError = error => ({
  type: types.FETCH_ERROR_MOVIE_BY_ID,

  payload: {
    error,
  },
});

// for genres

export const fetchGenresRequest = () => ({
  type: types.FETCH_REQUEST_GENRES,
});

export const fetchGenresSeccess = data => ({
  type: types.FETCH_SUCCESS_GENRES,

  payload: {
    data,
  },
});

export const fetchGenresError = error => ({
  type: types.FETCH_ERROR_GENRES,

  payload: {
    error,
  },
});

// for search movie

export const fetchSearchMovieRequest = () => ({
  type: types.FETCH_REQUEST_SEARCH_MOVIE,
});

export const fetchSearchMovieSeccess = data => ({
  type: types.FETCH_SUCCESS_SEARCH_MOVIE,

  payload: {
    data,
  },
});

export const fetchSearchMovieError = error => ({
  type: types.FETCH_ERROR_SEARCH_MOVIE,

  payload: {
    error,
  },
});

// for recommendations movie by id

export const fetchRecommendationsMovieRequest = () => ({
  type: types.FETCH_REQUEST_REACOMMENDATIONS,
});

export const fetchRecommendationsMovieSeccess = data => ({
  type: types.FETCH_SUCCESS_REACOMMENDATIONS,

  payload: {
    data,
  },
});

export const fetchRecommendationsMovieError = error => ({
  type: types.FETCH_ERROR_REACOMMENDATIONS,

  payload: {
    error,
  },
});

// for actor info

export const fetchActorInfoRequest = () => ({
  type: types.FETCH_REQUEST_ACTORS_INFO,
});

export const fetchActorInfoSeccess = data => ({
  type: types.FETCH_SUCCESS_ACTORS_INFO,

  payload: {
    data,
  },
});

export const fetchActorInfoError = error => ({
  type: types.FETCH_ERROR_ACTORS_INFO,

  payload: {
    error,
  },
});
