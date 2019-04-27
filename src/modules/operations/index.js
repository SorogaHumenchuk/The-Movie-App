import axios from 'axios';
import * as actions from '../moviesActions';

export const fetchSuccessMovies = (
  sort = 'popularity.desc',
  genre,
  pageNum = 1,
) => dispatch => {
  dispatch(actions.fetchPopularRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&sort_by=${sort}&include_adult=false&page=${pageNum}${genre}`,
    )
    .then(data => {
      dispatch(actions.fetchPopularSeccess(data.data));
      console.log(data.request.responseURL);
    })
    .catch(error => dispatch(actions.fetchPopularError(error)));
};

export const fetchSuccessMovieById = id => dispatch => {
  dispatch(actions.fetchMovieByIdRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5874acfd11651a28c55771624f7021f4&append_to_response=credits,videos&language=en-US`,
    )
    .then(({ data }) => dispatch(actions.fetchMovieByIdSeccess(data)))
    .catch(error => dispatch(actions.fetchMovieByIdError(error)));
};

export const fetchSuccessGenres = () => dispatch => {
  dispatch(actions.fetchGenresRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=5874acfd11651a28c55771624f7021f4&language=en-US`,
    )
    .then(({ data }) => dispatch(actions.fetchGenresSeccess(data)))
    .catch(error => dispatch(actions.fetchGenresError(error)));
};

export const fetchSuccessSearchMovie = search => dispatch => {
  dispatch(actions.fetchSearchMovieRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=${search}&page=1&include_adult=false`,
    )
    .then(({ data }) => dispatch(actions.fetchSearchMovieSeccess(data)))
    .catch(error => dispatch(actions.fetchSearchMovieError(error)));
};

export const fetchRecommendationsById = (id, offer) => dispatch => {
  dispatch(actions.fetchRecommendationsMovieRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/${offer}?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&page=1`,
    )
    .then(({ data }) =>
      dispatch(actions.fetchRecommendationsMovieSeccess(data)),
    )
    .catch(error => dispatch(actions.fetchRecommendationsMovieError(error)));
};

export const fetchActorInfoById = id => dispatch => {
  dispatch(actions.fetchActorInfoRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/credit/${id}?api_key=5874acfd11651a28c55771624f7021f4`,
    )
    .then(({ data }) => dispatch(actions.fetchActorInfoSeccess(data)))
    .catch(error => dispatch(actions.fetchActorInfoError(error)));
};
