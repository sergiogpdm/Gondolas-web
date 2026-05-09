import { useMemo, useRef, useState } from "react";
import { pizzerias } from "./data/pizzerias";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./index.css";

import { FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function App() {
  const [pizzeriaActual, setPizzeriaActual] = useState(pizzerias[0]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const heroRef = useRef(null);
  const cartaRef = useRef(null);

  const categorias = useMemo(() => {
    const cats = pizzeriaActual.productos.map((p) => p.categoria);
    return ["Todos", ...new Set(cats)];
  }, [pizzeriaActual]);

  function elegirPizzeria(pizzeria) {
    setPizzeriaActual(pizzeria);
    setCategoriaActiva("Todos");

    setTimeout(() => {
      cartaRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function volverASelector() {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />

      <div className="activeLocationBar">
        <div className="activeLocationContent">
          <span>📍 Local activo</span>

          <strong>{pizzeriaActual.nombre}</strong>

          <small>Carta, precios y pedidos de este local</small>
        </div>

        <button onClick={volverASelector}>
          Cambiar local
        </button>
      </div>

      <div ref={heroRef}>
        <Hero
          pizzerias={pizzerias}
          pizzeriaActual={pizzeriaActual}
          onSelect={elegirPizzeria}
        />
      </div>

      <main ref={cartaRef}>
        <Menu
          pizzeria={pizzeriaActual}
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
        />
      </main>

      <Footer pizzeria={pizzeriaActual} />

      <div className="floatingButtons">
        <a
          className="floatingInstagram"
          href={pizzeriaActual.instagram}
          target="_blank"
        >
          <FaInstagram />
        </a>

        <a
          className="floatingOrder"
          href={`tel:${pizzeriaActual.telefono}`}
        >
          <FaPhoneAlt />
        </a>
      </div>

      <a href="#cartaCategorias" className="floatingCategories">
        🍕
      </a>
    </>
  );
}