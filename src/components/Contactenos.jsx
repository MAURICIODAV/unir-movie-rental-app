import "./Contactenos.css";

function Contactenos() {
  return (
    <section className="contactenos">
      <h2 className="contactenos__title">Contáctenos</h2>
      <p className="contactenos__info">
        ¿Tienes alguna pregunta o sugerencia? ¡Estamos para ayudarte!
      </p>
      <ul className="contactenos__list">
        <li>
          <strong>Celular:</strong> +593 984 247 344
        </li>
        <li>
          <strong>Correo electrónico:</strong> correa.mauricio.david@gmail.com
        </li>
        <li>
          <strong>Dirección:</strong> Calle 123 #45-67, Quito, Ecuador
        </li>
        <li>
          <strong>Horario de atención:</strong> Lunes a Viernes, 8:00 a.m. - 6:00 p.m.
        </li>
      </ul>
    </section>
  );
}

export default Contactenos;