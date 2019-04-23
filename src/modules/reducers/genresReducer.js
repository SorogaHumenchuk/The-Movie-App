import actionTypes from '../actionTypes';

const genresReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_GENRES:
      return payload.data.genres;

    default:
      return state;
  }
};

export default genresReducer;
