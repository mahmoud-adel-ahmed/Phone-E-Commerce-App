import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types";
import { Consumer } from "../context";

class Product extends Component {
  render() {
    let { title, price, img, inCart, id } = this.props;
    return (
      <Consumer>
        {(val) => {
          let { handleDetail, addToCart, openModal } = val;
          return (
            <ProductWrapper
              onClick={() => handleDetail(id)}
              className="col-9 col-lg-3 col-md-6 mx-auto my-3"
            >
              <div className="card">
                <div className="img-container p-5">
                  <Link to={`/details`}>
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      addToCart(id);
                      openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                  </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">{title}</p>
                  <h5 className="text-blue fst-italic mb-0">
                    <span className="ms-1">$</span>
                    {price}
                  </h5>
                </div>
              </div>
            </ProductWrapper>
          );
        }}
      </Consumer>
    );
  }
}

Product.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  inCart: propTypes.bool.isRequired,
  img: propTypes.string.isRequired,
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    cursor: pointer;
    &:hover {
      border: 0.04rem solid rgb(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      .card-footer {
        background: rgb(247, 247, 247);
      }
      .img-container {
        .cart-btn {
          transform: translate(0, 0);
        }
      }
    }
    .img-container {
      position: relative;
      overflow: hidden;
      .cart-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        transition: all 1s linear;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: 0;
        font-size: 1.4rem;
        color: var(--mainWhite);
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        &:hover {
          color: var(--mainBlue);
        }
      }
      .card-img-top {
        transition: all 1s linear;
      }
      &:hover {
        .card-img-top {
          transform: scale(1.2);
        }
      }
    }
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
`;
