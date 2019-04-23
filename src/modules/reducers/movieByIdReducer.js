import actionTypes from '../actionTypes';

const movieByIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_MOVIE_BY_ID:
      return payload.data;

    default:
      return state;
  }
};

export default movieByIdReducer;
