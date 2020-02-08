import { FETCH_DATA, UPDATE_SMURF, SET_ERROR } from "../actions/actions";

const initialState = {
  smurf: [],
  isFetchingData: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurf: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
