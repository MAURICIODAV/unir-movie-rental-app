import "./MovieTrailerModal.css";

function MovieTrailerModal({ trailerId, open, onClose }) {
  if (!open) return null;

  return (
    <div className="trailer-modal">
      <div className="trailer-modal__overlay" onClick={onClose}></div>
      <div className="trailer-modal__content">
        <button className="trailer-modal__close" onClick={onClose}>×</button>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerId}`}
          title="Tráiler"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieTrailerModal;