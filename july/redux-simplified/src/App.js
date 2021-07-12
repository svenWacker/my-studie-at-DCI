import React, { Fragment } from "react";
import ParentComponent from "./components/ParentComponent";

const App = () => {
  return (
    <Fragment>
      <h1>Redux Simple App</h1>
      <ParentComponent />
    </Fragment>
  );
};

export default App;
