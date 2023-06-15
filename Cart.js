import React, { useContext } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section id="cart" className="container">
      <h2>CART</h2>
      <button className="cancel">X</button>
      <div className="cart-row cart-header">
        <span className="cart-item cart-column">ITEM</span>
        <span className="cart-price cart-column">PRICE</span>
        <span className="cart-quantity cart-column">QUANTITY</span>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem item={item} removeFromCart={removeFromCart} key={index} />
        ))}
      </div>
      <div className="cart-total">
        <span>
          <span className="total-title">
            <strong>Total</strong>
          </span>
          $<span id="total-value">{total.toFixed(2)}</span>
        </span>
      </div>
      <button className="purchase-btn" type="button">
        PURCHASE
      </button>
    </section>
  );
};

export default Cart;