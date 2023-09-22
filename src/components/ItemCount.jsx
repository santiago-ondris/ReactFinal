import React, { useState } from 'react';

function ItemCount({ initial, stock, onAddToCart }) {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
    console.log('Increment clicked, new quantity:', quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(quantity);
    }
  };

  return (
    <div className="item-count">
      <div className="btn-group m-2">
        <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
        <span className="btn btn-outline-secondary">{quantity}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
      </div>
      {stock > 0 ? (
        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      ) : (
        <p className="mt-3">Producto agotado</p>
      )}
    </div>
  );
}

export default ItemCount;

