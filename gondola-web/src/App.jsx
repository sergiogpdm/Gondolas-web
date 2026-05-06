import { useMemo, useRef, useState } from "react";
import { pizzerias } from "./data/pizzerias";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [pizzeriaActual, setPizzeriaActual] = useState(pizzerias[0]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
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

  return (
    <>
      <Header />

      <Hero
        pizzerias={pizzerias}
        pizzeriaActual={pizzeriaActual}
        onSelect={elegirPizzeria}
      />

      <main ref={cartaRef}>
        <Menu
          pizzeria={pizzeriaActual}
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
        />
      </main>

      <Footer pizzeria={pizzeriaActual} />

      <a
        className="floatingOrder"
        href={`https://wa.me/${pizzeriaActual.whatsapp}`}
        target="_blank"
      >
        Pedir ahora
      </a>
    </>
  );
}