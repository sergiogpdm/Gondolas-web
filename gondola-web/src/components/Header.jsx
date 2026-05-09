export default function Header() {
  return (
    <header className="header">
      <a href="#" className="brand">
        <span className="brandPole"></span>

        <div className="brandText">
          <span>Pizzería</span>
          <strong>GONDOLA</strong>
        </div>
      </a>

      <nav>
        <a href="#">Inicio</a>
        <a href="#carta">Carta</a>
        <a href="#pedido">Llamar</a>
      </nav>
    </header>
  );
}