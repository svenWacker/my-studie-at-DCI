// npm i react-redux
// const store = {
//   counter: 0,
//   userName: "Sven",
// };

import React from "react";
import { ReactDOM } from "react";
import "./sass/main.scss";
import App from "./App";

// step 3
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
