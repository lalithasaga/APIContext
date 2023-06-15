import React, { useContext } from 'react';
import './CartButton.css';
import { CartContext } from './CartContext';

const CartButton = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <button className="cart-btn-bottom">
      <a href="#cart" className="cart-bottom">
        See the cart ({cartItems.length})
      </a>
    </button>
  );
};

export default CartButton;
