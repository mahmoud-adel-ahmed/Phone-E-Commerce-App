import React, { Component, createContext } from "react";
import { detailProduct, storeProducts } from "./data/data";

let Context = createContext();

class ProductContext extends Component {
  state = {
    products: [],
    cart: [],
    detailProduct,
    modalProduct: detailProduct,
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  setProducts = () => {
    let copiedProducts = [];
    storeProducts.forEach((item) => {
      let singleProduct = { ...item };
      copiedProducts = [...copiedProducts, singleProduct];
    });
    this.setState(() => {
      return { products: copiedProducts };
    });
  };

  getProduct = (id) => {
    let product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    let product = tempProducts.find((item) => item.id === id);
    tempProducts = tempProducts.map((item) => {
      if (item.id === product?.id) {
        product.count++;
        product.total = item.price * item.count;
        product.inCart = true;
      }
      return item;
    });
    this.setState(
      () => {
        return {
          cart: [
            ...this.state.cart,
            {
              ...product,
            },
          ],
          detailProduct: {
            ...product,
          },
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleDetail = (id) => {
    let product = this.getProduct(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  openModal = (id) => {
    let product = this.getProduct(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    // console.log("qty incremented");
    let cart = this.state.cart.map((item) => {
      if (item.id === id) {
        item.count++;
        item.total = item.price * item.count;
      }
      return item;
    });
    this.setState(
      () => {
        return {
          cart,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    // console.log("qty decremented");
    let product = this.getProduct(id);
    let cart = this.state.cart.filter((item) => {
      if (item.id === id) {
        item.count--;
        item.total = item.price * item.count;
        if (item.count === 0) {
          item.inCart = false;
          product.inCart = false;
          product.count = 0;
          product.total = 0;
          return item.id !== id;
        }
      }
      return item;
    });
    this.setState(
      () => {
        return {
          cart,
          detailProduct: product,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  removeProduct = (id) => {
    let cart = this.state.cart.filter((item) => item.id !== id);
    this.setState(() => {
      return {
        cart,
      };
    });
  };

  clearCart = () => {
    this.setState(() => {
      return { cart: [], cartSubTotal: 0, cartTax: 0, cartTotal: 0 };
    });
  };

  addTotals = () => {
    let subTotal = 0;
    let { cartSubTotal, cartTax, cartTotal } = this.state.cart
      .map((item) => item)
      .reduce((item, acc) => {
        subTotal += acc.total;
        item.cartSubTotal = subTotal;
        let tax = parseFloat((subTotal * 0.1).toFixed(2));
        item.cartTax = tax;
        let total = subTotal + tax;
        item.cartTotal = total;
        return item;
      }, {});

    this.setState(() => {
      return { cartSubTotal, cartTax, cartTotal };
    });
  };

  componentDidMount() {
    this.setProducts();
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeProduct: this.removeProduct,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export let { Provider, Consumer } = Context;
export default ProductContext;
