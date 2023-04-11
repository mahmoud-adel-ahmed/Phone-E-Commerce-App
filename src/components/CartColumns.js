import React, { Component } from "react";

class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block my-3">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bold">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bold">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bold">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bold">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bold">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase fw-bold">total</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartColumns;
