import React from "react";
// import {createContext} from "react"
import Data from "../data.json";

const DataContext = React.createContext(Data);
// const DataContext = createContext(Data);

export { Data, DataContext };
