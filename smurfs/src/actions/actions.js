import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("from .then", res);
      dispatchEvent({ type: UPDATE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  console.log(smurf);
  axios
    .post("http://localhost:3333/smurfs", {
      ...smurf
    })
    .then(res => dispatch({ type: UPDATE_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  return {
    name: "",
    height: "",
    age: ""
  };
};
