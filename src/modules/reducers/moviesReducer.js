import actionTypes from '../actionTypes';

const moviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_POPULAR:
      return payload.data;
    default:
      return state;
  }
};

export default moviesReducer;
