import React, { Component } from "react";
import { Consumer } from "../context";
import Product from "./Product";
import Title from "./Title";

class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <Consumer>
                {({ products }) =>
                  products.map((product) => (
                    <Product key={product.id} {...product} />
                  ))
                }
              </Consumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
