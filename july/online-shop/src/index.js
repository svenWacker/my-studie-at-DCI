import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";
// step 3
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
// products
import products from "./data.json";

// step 4
const store = createStore(
  allReducers,
  {
    products: products,
    cart: {},
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
