import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductInfo from "./components/ProductInfo";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    <Router>
      <Menu />
      <h1>Mr online-store</h1>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/product" exact component={ProductList} />
        <Route
          path="/product/:id"
          component={({ match }) => <ProductInfo id={match.params.id} />}
        />
        <Route path="/cart" exact component={ShoppingCart} />
      </Switch>
    </Router>
  );
};

export default App;
