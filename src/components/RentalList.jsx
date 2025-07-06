import { useEffect, useState } from "react";
import "./RentalList.css";

function RentalList() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("rentals");
    if (stored) {
      setRentals(JSON.parse(stored));
    }
  }, []);

  return (
    <section className="rental-list">
      <h2 className="rental-list__title">Mis Alquileres</h2>
      {rentals.length === 0 ? (
        <p className="rental-list__empty">No has alquilado ninguna película.</p>
      ) : (
        <div className="rental-list__movies">
          {rentals.map((movie) => (
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
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RentalList;