// npm i react-redux
// const store ={
//     counter:0,
//     userName:"Sven"
// }

import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";
// step 3
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

// step 4
const store = createStore(
  allReducers,
  {
    counter: 0,
    userName: "Sven",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// step 5
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
