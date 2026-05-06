export default function Header() {
  return (
    <header className="header">
      <a href="#" className="brand">
        <span className="brandIcon"></span>

        <div>
          <strong>GÓNDOLA</strong>
          <small>Pizzería & Grill</small>
        </div>
      </a>

      <nav>
        <a href="#">Inicio</a>
        <a href="#carta">Carta</a>
        <a href="#pedido">Pedir</a>
      </nav>
    </header>
  );
}