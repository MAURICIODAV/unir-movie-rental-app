import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieTrailerModal from "./MovieTrailerModal";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.id === Number(id));
        setMovie(found);
      });
  }, [id]);

  if (!movie) {
    return (
      <section className="movie-detail">
        <p>Cargando información de la película...</p>
      </section>
    );
  }

  return (
    <section className="movie-detail">
      <button className="movie-detail__back" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <h2 className="movie-detail__title">{movie.title}</h2>
      <img
        src={movie.image}
        alt={movie.title}
        className="movie-detail__image"
        width={220}
      />
      <p className="movie-detail__director">
        <strong>Director:</strong> {movie.director}
      </p>
      <p className="movie-detail__year">
        <strong>Año:</strong> {movie.year}
      </p>
      <p className="movie-detail__duration">
        <strong>Duración:</strong> {movie.duration} min
      </p>
      <p className="movie-detail__synopsis">{movie.synopsis}</p>
      <button
        className="movie-detail__trailer-btn"
        onClick={() => setModalOpen(true)}
      >
        Ver tráiler
      </button>
      <MovieTrailerModal
        trailerId={movie.trailerId}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

export default MovieDetail;