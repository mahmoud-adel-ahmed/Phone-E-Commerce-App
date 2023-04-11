import React from "react";
import CartItem from "./CartItem";

const CartList = ({ val }) => {
  let { cart } = val;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} val={val} />;
      })}
    </div>
  );
};

export default CartList;
