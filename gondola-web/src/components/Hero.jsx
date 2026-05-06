export default function Hero({ pizzerias, pizzeriaActual, onSelect }) {
  return (
    <section className="hero">
      <div className="heroText">
        <span className="eyebrow">Góndola Pizzería & Grill</span>

        <h1>
          Elige tu local.
          <br />
          Pide tu pizza.
        </h1>

        <p>
          Cada pizzería tiene su propia carta. Selecciona tu Góndola y descubre
          qué puedes pedir hoy.
        </p>

        <div className="heroLocales">
          {pizzerias.map((pizzeria) => (
            <button
              key={pizzeria.id}
              onClick={() => onSelect(pizzeria)}
              className={
                pizzeriaActual.id === pizzeria.id
                  ? "heroLocal active"
                  : "heroLocal"
              }
            >
              <span>{pizzeria.estado}</span>
              <strong>{pizzeria.nombre}</strong>
              <small>{pizzeria.direccion}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="heroArt">
        <div className="neonCircle"></div>
        <div className="pizzaStage">
          <span>🍕</span>
        </div>

        <div className="ticket">
          <small>Local actual</small>
          <h3>{pizzeriaActual.nombre}</h3>
          <p>{pizzeriaActual.telefono}</p>
        </div>
      </div>
    </section>
  );
}