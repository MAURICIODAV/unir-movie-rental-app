function Header() {
  return (
    <header className="header">
      <h1>Plataforma de Streaming</h1>
      <nav>
        <a href="/">Catálogo</a> |{" "}
        <a href="/rentals">Alquileres</a> |{" "}
        <a href="/purchases">Compras</a>
      </nav>
    </header>
  );
}

export default Header;