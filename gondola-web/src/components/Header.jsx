export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="barber"></span>

        <div>
          <strong>GÓNDOLA</strong>

          <small>Pizzería</small>
        </div>
      </div>

      <nav>
        <a href="#carta">Carta</a>

        <a href="#locales">Locales</a>

        <a href="#pedido">Pedir</a>
      </nav>
    </header>
  );
}