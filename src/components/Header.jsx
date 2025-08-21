function Header() {
  return (
    <header className="header">
      <span className="header__logo">
        <img className="header__image" src="/img/logotipo_tienda.png" />
        <h3>Tienda on-line de pel&iacute;culas</h3>
      </span>
      <nav className="header__nav">
        <a href="/abouts">Acerca de nosotros</a> | <a href="/">Catálogo</a> |{" "}
        <a href="/rentals">Alquileres</a> | <a href="/purchases">Compras</a> |{" "}
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
