import { useMemo, useState } from "react";
import { pizzerias } from "./data/pizzerias";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PizzeriaSelector from "./components/PizzeriaSelector";
import Menu from "./components/Menu";
import "./index.css";

export default function App() {
  const [pizzeriaActual, setPizzeriaActual] = useState(pizzerias[0]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const categorias = useMemo(() => {
    const cats = pizzeriaActual.productos.map((p) => p.categoria);
    return ["Todos", ...new Set(cats)];
  }, [pizzeriaActual]);

  return (
    <>
      <Header />

      <Hero pizzeria={pizzeriaActual} />

      <PizzeriaSelector
        pizzerias={pizzerias}
        actual={pizzeriaActual}
        onSelect={(pizzeria) => {
          setPizzeriaActual(pizzeria);
          setCategoriaActiva("Todos");
        }}
      />

      <Menu
        pizzeria={pizzeriaActual}
        categorias={categorias}
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
      />

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