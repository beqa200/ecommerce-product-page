import { CartWrapper } from "../styled-components";
import { image1Thumb, trash } from "../images";
import { useState } from "react";
const Cart = (props: CartPropsType) => {
  
  return (
    <CartWrapper count={props.count} cart={props.cart}>
      <div className="header">
        <p>Cart</p>
      </div>
      <div className="content">
        <div className="flex">
          <img src={image1Thumb} className="product" />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <div className="prices">
              <p>$125.00 x {props.count}</p>
              <p className="total">${125 * props.count}.00</p>
            </div>
          </div>
          <img
            src={trash}
            className="trash"
            onClick={() => {
              props.setCount(0);
            }}
          />
        </div>
        <button
          onClick={() => {
            props.setCount(0);
            props.setNum(0);
            props.setCart(false);
          }}
        >
          Checkout
        </button>
      </div>

      <div className="content2">
        <p>Your cart is empty.</p>
      </div>
    </CartWrapper>
  );
};

export default Cart;
