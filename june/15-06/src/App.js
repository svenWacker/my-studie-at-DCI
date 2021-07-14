import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./data.json";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
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
        {
          // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        }
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/product"
          exact
          component={() => <Products data={Data} />}
        />
        {
          // more about match
          // https://reactrouter.com/web/api/match
        }
        <Route
          path="/product/:id"
          component={({ match }) => {
            console.log(match);
            return <ProductInfo data={Data} id={match.params.id} />;
          }}
        />
        {
          //  <Route  path="/products"
          // exact >
          // <Products data={Data} />
          // </Route>
        }
        <Route path={() => "/main" || "/admin" || "/any-other-word"}>
          <Soon />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
