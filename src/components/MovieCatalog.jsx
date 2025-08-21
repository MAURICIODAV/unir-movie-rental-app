import { useEffect, useState } from "react";
import "./MovieCatalog.css";
import SearchBar from "./SearchBar";
import MovieTrailerModal from "./MovieTrailerModal";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faFilm,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

function MovieCatalog() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState(null);

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
      movies.filter(
        (movie) =>
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
      current.push({ ...movie, rentalStart: new Date().toISOString() });
      localStorage.setItem("rentals", JSON.stringify(current));
      toast.success(`Has alquilado "${movie.title}"`);
    } else {
      toast.warning(`Ya has alquilado "${movie.title}"`);
    }
  };

  const handleBuy = (movie) => {
    const current = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!current.find((m) => m.id === movie.id)) {
      current.push({ ...movie, quantity: 1, price: 5 }); // Ejemplo: cada película cuesta 5
      localStorage.setItem("cart", JSON.stringify(current));
      toast.success(`Has añadido "${movie.title}" al carrito de compras`);
    } else {
      toast.warning(`"${movie.title}" ya está en el carrito`);
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
            <div className="movie-catalog__actions">
              <button
                className="movie-catalog__rent-btn"
                onClick={() => handleRent(movie)}
                title="Alquilar película"
              >
                <FontAwesomeIcon icon={faTicket} />
              </button>
              <button
                className="movie-catalog__buy-btn"
                onClick={() => handleBuy(movie)}
                title="Comprar película"
              >
                <FontAwesomeIcon icon={faFilm} />
              </button>
              <button
                className="movie-catalog__trailer-btn"
                onClick={() => {
                  setSelectedTrailer(movie.trailerId);
                  setModalOpen(true);
                }}
                title="Ver tráiler"
              >
                <FontAwesomeIcon icon={faCirclePlay} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <MovieTrailerModal
        trailerId={selectedTrailer}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}

export default MovieCatalog;
