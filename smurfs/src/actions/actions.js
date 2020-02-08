import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs/")
    .then(res => {
      console.log("from .then", res);
      dispatchEvent({ type: UPDATE_SMURF, payload: { smurf: res.data.smurf } });
    })
    .catch(err => {
      console.log("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};
