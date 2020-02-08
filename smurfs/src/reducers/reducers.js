import { FETCH_DATA, UPDATE_SMURF, SET_ERROR } from "../actions/actions";

const initialState = {
  smurf: [],
  isFetchingData: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
