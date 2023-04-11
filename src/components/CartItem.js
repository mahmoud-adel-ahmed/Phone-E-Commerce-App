import React from "react";

const CartItem = ({
  id,
  img,
  title,
  price,
  total,
  count,
  val: { increment, decrement, removeProduct },
}) => {
  return (
    <div className="row my-2 text-center text-capitalize gy-2 align-items-center">
      <div className="col-lg-2 col-10 mx-auto">
        <img
          src={img}
          alt="img"
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>
          <span className="d-lg-none">price :</span> ${price}
        </strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            if (count > 0) {
              decrement(id);
            } else {
              removeProduct(id);
            }
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : ${total} </strong>
      </div>
    </div>
  );
};

export default CartItem;
