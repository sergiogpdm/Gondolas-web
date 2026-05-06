import { useState } from "react";
import { pizzerias } from "./data/pizzerias";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PizzeriaSelector from "./components/PizzeriaSelector";
import Menu from "./components/Menu";
import "./index.css";

export default function App() {
  const [pizzeriaActual, setPizzeriaActual] = useState(pizzerias[0]);

  return (
    <>
      <Header />

      <Hero pizzeria={pizzeriaActual} />

      <PizzeriaSelector
        pizzerias={pizzerias}
        actual={pizzeriaActual}
        onSelect={setPizzeriaActual}
      />

      <Menu pizzeria={pizzeriaActual} />
    </>
  );
}