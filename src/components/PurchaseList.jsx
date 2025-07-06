import { useEffect, useState } from "react";
import "./PurchaseList.css";

function PurchaseList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Actualiza el carrito en localStorage y estado
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Cambia la cantidad de una película
  const handleQuantity = (id, delta) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    updateCart(newCart);
  };

  // Elimina una película del carrito
  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  // Calcula el total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Cantidad total de películas
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="purchase-list">
      <h2 className="purchase-list__title">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="purchase-list__empty">El carrito está vacío.</p>
      ) : (
        <>
          <div className="purchase-list__movies">
            {cart.map((movie) => (
              <div key={movie.id} className="purchase-list__card">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="purchase-list__image"
                  width={80}
                />
                <div className="purchase-list__info">
                  <h3 className="purchase-list__movie-title">{movie.title}</h3>
                  <p className="purchase-list__director">
                    {movie.director} ({movie.year})
                  </p>
                  <div className="purchase-list__controls">
                    <button
                      className="purchase-list__qty-btn"
                      onClick={() => handleQuantity(movie.id, -1)}
                    >
                      -
                    </button>
                    <span className="purchase-list__quantity">{movie.quantity}</span>
                    <button
                      className="purchase-list__qty-btn"
                      onClick={() => handleQuantity(movie.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="purchase-list__price">
                    Precio: ${movie.price} x {movie.quantity} = ${movie.price * movie.quantity}
                  </p>
                  <button
                    className="purchase-list__remove-btn"
                    onClick={() => handleRemove(movie.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="purchase-list__summary">
            <p>
              <strong>Total de películas:</strong> {totalItems}
            </p>
            <p>
              <strong>Total a pagar:</strong> ${total}
            </p>
            <button
              className="purchase-list__checkout-btn"
              onClick={() => {
                alert("¡Compra realizada con éxito!");
                updateCart([]);
              }}
            >
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default PurchaseList;