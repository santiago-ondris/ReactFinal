import React from 'react';
import { useCart } from './ContextCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className='none'>
      <i className="bi bi-cart"></i>
      </Link>
      <span className="notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
