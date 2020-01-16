import React from 'react';
import './App.css';
import Products from "./components/Products";
import {Redirect} from "react-router-dom";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
      amount: 0,
      buy: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({buy: true});
  }

  handleAddToCart(product) {
    this.setState({
      shoppingCart: this.state.shoppingCart.concat(product),
      amount: this.state.amount + product.price
    }, () => {
      alert("Se agregó el producto al carrito.");
    });
  }

  render() {
    if (this.state.buy) {
      return <Redirect to={{
        pathname: "/shoppingCart", state: {
          shoppingCart: this.state.shoppingCart,
          amount: this.state.amount
        }
      }}/>
    }
    return (
      <div>
        <header>
          <nav className={"navbar"}>
            <a className={"navbar-brand"} href="/gamesshop">Games Shop</a>
          </nav>
        </header>
        <main className={"container"}>
          <div className={"title"}>
            <h2>Nuestros productos</h2>
            <a className={"btn btn-color"} onClick={this.handleOnClick}><img
              src={"https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"}/> {this.state.shoppingCart.length}
            </a>
          </div>
          <Products handleAddToCart={this.handleAddToCart}/>
        </main>
        <footer>
          "Games Shop" - @Copyright 2020 - Carlos Medina
        </footer>
      </div>
    );
  }
}
