import React, { Component } from "react";
import { Consumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <Consumer>
        {(val) => {
          let { detailProduct, addToCart } = val;
          let { id, img, title, price, company, inCart, info } = detailProduct;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-10 mx-auto my-3">
                  <img src={img} alt="productImg" className="img-fluid" />
                </div>
                <div className="col-md-6 col-10 mx-auto text-capitalize my-3">
                  <h3>Modal : {title}</h3>
                  <h4 className="text-uppercase text-title my-3 text-muted">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize fw-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div className="d-flex">
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    {/* <Link to="/cart"> */}
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => addToCart(id)}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Details;
