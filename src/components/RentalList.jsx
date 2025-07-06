import { useEffect, useState } from "react";
import "./RentalList.css";

const RENTAL_DURATION_HOURS = 48;
const RENTAL_COST = 3; 

function RentalList() {
  const [rentals, setRentals] = useState([]);

  // Función para calcular el tiempo restante
  const getTimeLeft = (startTime) => {
    const endTime = new Date(startTime).getTime() + RENTAL_DURATION_HOURS * 60 * 60 * 1000;
    const now = Date.now();
    const diff = endTime - now;
    if (diff <= 0) return null;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  // Cargar alquileres y filtrar los expirados
  useEffect(() => {
    const stored = localStorage.getItem("rentals");
    if (stored) {
      let rentalsArr = JSON.parse(stored);
      // Filtrar los expirados
      rentalsArr = rentalsArr.filter((movie) => {
        const endTime = new Date(movie.rentalStart).getTime() + RENTAL_DURATION_HOURS * 60 * 60 * 1000;
        return Date.now() < endTime;
      });
      setRentals(rentalsArr);
      localStorage.setItem("rentals", JSON.stringify(rentalsArr));
    }
    // Revisar cada minuto si hay expirados
    const interval = setInterval(() => {
      const stored = localStorage.getItem("rentals");
      if (stored) {
        let rentalsArr = JSON.parse(stored);
        rentalsArr = rentalsArr.filter((movie) => {
          const endTime = new Date(movie.rentalStart).getTime() + RENTAL_DURATION_HOURS * 60 * 60 * 1000;
          return Date.now() < endTime;
        });
        setRentals(rentalsArr);
        localStorage.setItem("rentals", JSON.stringify(rentalsArr));
      }
    }, 60000); // 1 minuto
    return () => clearInterval(interval);
  }, []);

  // Eliminar manualmente una película
  const handleRemove = (id) => {
    const newRentals = rentals.filter((movie) => movie.id !== id);
    setRentals(newRentals);
    localStorage.setItem("rentals", JSON.stringify(newRentals));
  };

  // Calcular el total
  const total = rentals.length * RENTAL_COST;

  return (
    <section className="rental-list">
      <h2 className="rental-list__title">Mis Alquileres</h2>
      {rentals.length === 0 ? (
        <p className="rental-list__empty">No has alquilado ninguna película.</p>
      ) : (
        <>
          <div className="rental-list__movies">
            {rentals.map((movie) => {
              const timeLeft = getTimeLeft(movie.rentalStart);
              return (
                <div key={movie.id} className="rental-list__card">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="rental-list__image"
                    width={100}
                  />
                  <div className="rental-list__info">
                    <h3 className="rental-list__movie-title">{movie.title}</h3>
                    <p className="rental-list__director">
                      {movie.director} ({movie.year})
                    </p>
                    <p className="rental-list__cost">
                      Costo: ${RENTAL_COST}
                    </p>
                    <p className="rental-list__time">
                      {timeLeft
                        ? `Tiempo restante: ${timeLeft}`
                        : "Alquiler finalizado"}
                    </p>
                    <button
                      className="rental-list__remove-btn"
                      onClick={() => handleRemove(movie.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rental-list__summary">
            <p>
              <strong>Total de alquileres:</strong> {rentals.length}
            </p>
            <p>
              <strong>Total a pagar:</strong> ${total}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default RentalList;