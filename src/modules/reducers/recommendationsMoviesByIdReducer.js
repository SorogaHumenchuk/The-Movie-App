import actionTypes from '../actionTypes';

const recommendationsMoviesByIdReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_REACOMMENDATIONS:
      return payload.data;
    default:
      return state;
  }
};

export default recommendationsMoviesByIdReducer;
