import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./data.json";
import Product from "./components/Product";
// import ProductInfo from "./components/ProductInfo";
import About from "./components/About";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Soon from "./components/Soon";

const App = () => {
  return (
    <Router>
      <Menu />
      <h1 className="jumbotron">Online Store</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/soon" component={Soon} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};
export default App;
