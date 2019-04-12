import actionTypes from '../actionTypes';

const searchMovieReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_SEARCH_MOVIE:
      return payload.data;
    default:
      return state;
  }
};

export default searchMovieReducer;
