import { useState } from "react";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <a href="#" className="brand" onClick={() => setMenuAbierto(false)}>
        <span className="brandPole"></span>

        <div className="brandText">
          <span>Pizzería</span>
          <strong>GONDOLA</strong>
        </div>
      </a>

      <nav className={menuAbierto ? "navMenu open" : "navMenu"}>
        <a href="#" onClick={() => setMenuAbierto(false)}>Inicio</a>
        <a href="#carta" onClick={() => setMenuAbierto(false)}>Carta</a>
        <a href="#pedido" onClick={() => setMenuAbierto(false)}>Llamar</a>
      </nav>

      <button
        className={menuAbierto ? "hamburger active" : "hamburger"}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}