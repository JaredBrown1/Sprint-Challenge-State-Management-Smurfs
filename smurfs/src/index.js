import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddlware } from "redux";
import { Provider } from "react-redux";
import { smurfReducer as reducer } from "./reducers/reducers";
import thunk from "redux-thunk";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
