import { useEffect, useState } from "react";
import "./MovieCatalog.css";
import SearchBar from "./SearchBar";

function MovieCatalog() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltered(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(lower) ||
        movie.director.toLowerCase().includes(lower) ||
        movie.year.toString().includes(lower) ||
        (movie.synopsis && movie.synopsis.toLowerCase().includes(lower))        
      )
    );
  }, [search, movies]);

  const handleRent = (movie) => {
    const current = JSON.parse(localStorage.getItem("rentals") || "[]");
    if (!current.find((m) => m.id === movie.id)) {
      current.push(movie);
      localStorage.setItem("rentals", JSON.stringify(current));
      alert(`Has alquilado "${movie.title}"`);
    } else {
      alert(`Ya has alquilado "${movie.title}"`);
    }
  };

  // Añade esta función dentro del componente
  const handleBuy = (movie) => {
    const current = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!current.find((m) => m.id === movie.id)) {
      current.push({ ...movie, quantity: 1, price: 5 }); // Ejemplo: cada película cuesta 5
      localStorage.setItem("cart", JSON.stringify(current));
      alert(`Has añadido "${movie.title}" al carrito de compras`);
    } else {
      alert(`"${movie.title}" ya está en el carrito`);
    }
  };

  return (
    <main className="movie-catalog">
      <h2 className="movie-catalog__title">Catálogo de Películas</h2>
      <SearchBar onSearch={setSearch} />
      <div className="movie-catalog__list">
        {filtered.map((movie) => (
          <div key={movie.id} className="movie-catalog__card">
            <img
              src={movie.image}
              alt={movie.title}
              className="movie-catalog__image"
              width={120}
            />
            <h3 className="movie-catalog__movie-title">{movie.title}</h3>
            <p className="movie-catalog__director">
              {movie.director} ({movie.year})
            </p>
            <p className="movie-catalog__synopsis">{movie.synopsis}</p>
            <button
              className="movie-catalog__rent-btn"
              onClick={() => handleRent(movie)}
            >
              Alquilar
            </button>
            <button
              className="movie-catalog__buy-btn"
              onClick={() => handleBuy(movie)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MovieCatalog;