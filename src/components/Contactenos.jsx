import "./Contactenos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

function Contactenos() {
  return (
    <section className="contactenos">
      <h2 className="contactenos__title">Contáctenos</h2>
      <p className="contactenos__info">
        ¿Tienes alguna pregunta o sugerencia? ¡Estamos para ayudarte!
      </p>
      <ul className="contactenos__list">
        <li>
          <strong>
            <FontAwesomeIcon className="contactenos__icon" icon={faPhone} /> 
            Celular:
          </strong> 
          &nbsp;+593 984 247 344
        </li>
        <li>
          <strong>
            <FontAwesomeIcon className="contactenos__icon" icon={faEnvelope} />
            &nbsp;Correo electr&oacute;nico:
          </strong>
          &nbsp;tienda_online_peliculas@gmail.com
        </li>
        <li>
          <strong>
            <FontAwesomeIcon className="contactenos__icon" icon={faMapMarkerAlt} />
            &nbsp;Direcci&oacute;n:
          </strong>
          &nbsp;Calle 123 #45-67, Quito, Ecuador
        </li>
        <li>
          <strong>
            <FontAwesomeIcon className="contactenos__icon" icon={faClock} />
            &nbsp;Horario de atenci&oacute;n:
          </strong>
          &nbsp;Lunes a Viernes, 8:00 a.m. - 6:00 p.m.
        </li>
      </ul>
    </section>
  );
}

export default Contactenos;