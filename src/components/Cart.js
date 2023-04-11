import React, { Component } from "react";
import { Consumer } from "../context";
import Title from "./Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export class Cart extends Component {
  render() {
    return (
      <Consumer>
        {(val) => {
          let { cart } = val;
          if (cart.length === 0) {
            return <EmptyCart />;
          }
          return (
            <section className="overflow-hidden my-3">
              <Title name="your" title="cart" />
              <CartColumns />
              <CartList val={val} />
              <CartTotals val={val} />
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
