import React from "react";
// import React, { Component } from "react";

import List from "./components/List";
//import Data from "./data.json";
// how to use data.json
// const fileData = Data.map((obj) => {
//   let { id, name, address } = obj;
//   address = address || "Not there";
//   return (
//     <h4 key={id}>
//       Hey I'm {name} and I live in {address}
//     </h4>
//   );
// });
const headerStyle = {
  backgroundColor: "gray",
  color: "white",
};
//export default class App extends Component {
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ backgroundColor: "orange" }}>Hi I am React</h1>
        {
          //fileData
        }
        <h2 style={headerStyle}>My ToDo List</h2>
        <List />
      </React.Fragment>
    );
  }
}
