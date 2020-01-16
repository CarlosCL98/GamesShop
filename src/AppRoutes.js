import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";
import ShoppingCart from "./components/ShoppingCart";

export default class AppRoutes extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/gamesshop" component={App}/>
            <Route exact path="/shoppingCart" component={ShoppingCart}/>
          </div>
        </div>
      </Router>
    );
  }
}