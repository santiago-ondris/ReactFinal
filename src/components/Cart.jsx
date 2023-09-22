import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './ContextCart';
import addOrder from './Ordenes';

function Cart() {
  const { cartItems, removeItem, clear } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Estado para controlar si se ha realizado la compra

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handlePlaceOrder = async () => {
    try {
      const buyer = {
        name: 'Jesus Bertola',
        phone: '3514854949',
        email: 'jesus@yahoo.com',
      };

      const items = cartItems.map((item) => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      // Función para agregar la orden a Firestore
      const orderId = await addOrder(buyer, items, totalPrice);

      // Marca que la orden se ha realizado con éxito y limpia el carrito
      setIsOrderPlaced(true);
      clear();

    } catch (error) {
      console.error('Error al realizar la orden:', error);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mi carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>No hay ítems en el carrito.</p>
          <Link to="/" className="btn btn-primary">
            Volver al Inicio
          </Link>
        </div>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-weight-bold">Precio Total: ${totalPrice}</p>
          <div>
            <Link to="/" className="btn btn-primary">
              Seguir Comprando
            </Link>
            {cartItems.length > 0 && !isOrderPlaced && (
              <button
                className="btn btn-success ms-3"
                onClick={handlePlaceOrder}
              >
                Finalizar Compra
              </button>
            )}
            {isOrderPlaced && (
              <p className="text-success">¡Orden realizada con éxito!</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;


