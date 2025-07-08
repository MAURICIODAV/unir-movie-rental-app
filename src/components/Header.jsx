function Header() {
  return (
    <header className="header">
      <h1>Tienda on line de peliculas</h1>
      <nav>
        <a href="/abouts">Acerca de nosotros</a> |{" "}
        <a href="/">Catálogo</a> |{" "}
        <a href="/rentals">Alquileres</a> |{" "}
        <a href="/purchases">Compras</a> |{" "}
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;