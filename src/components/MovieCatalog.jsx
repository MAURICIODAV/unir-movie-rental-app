import { useEffect, useState } from "react";
import "./MovieCatalog.css";

function MovieCatalog() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/src/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <main className="movie-catalog">
      <h2 className="movie-catalog__title">Catálogo de Películas</h2>
      <div className="movie-catalog__list">
        {movies.map((movie) => (
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
          </div>
        ))}
      </div>
    </main>
  );
}

export default MovieCatalog;