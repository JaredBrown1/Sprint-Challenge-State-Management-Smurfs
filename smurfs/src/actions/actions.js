import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios.get("");
};
