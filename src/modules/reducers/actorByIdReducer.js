import actionTypes from '../actionTypes';

const actorByIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS_ACTORS_INFO:
      return payload.data;

    default:
      return state;
  }
};

export default actorByIdReducer;
