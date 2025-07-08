import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutus">
      <h2 className="aboutus__title">¿Quiénes somos?</h2>
      <p className="aboutus__intro">
        Somos una plataforma líder en alquiler y compra de películas en línea, comprometidos con brindar la mejor experiencia de entretenimiento a nuestros usuarios.
      </p>
      <div className="aboutus__block">
        <h3 className="aboutus__subtitle">Misión</h3>
        <p>
          Ofrecer acceso fácil, rápido y seguro a una amplia variedad de películas para todos los gustos, promoviendo la cultura y el entretenimiento digital.
        </p>
      </div>
      <div className="aboutus__block">
        <h3 className="aboutus__subtitle">Visión</h3>
        <p>
          Ser la plataforma de streaming preferida en Latinoamérica, reconocida por su innovación, calidad de servicio y compromiso con la satisfacción del cliente.
        </p>
      </div>
      <div className="aboutus__block">
        <h3 className="aboutus__subtitle">Nuestros valores</h3>
        <ul className="aboutus__values">
          <li>Pasión por el cine y la tecnología</li>
          <li>Atención personalizada</li>
          <li>Innovación constante</li>
          <li>Seguridad y confianza</li>
          <li>Compromiso con la diversidad cultural</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;