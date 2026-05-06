export default function Hero({ pizzeria }) {
  return (
    <section className="hero">
      <div className="heroContent">
        <span className="tag">
          Desde 1989 · Pizzería Góndola
        </span>

        <h1>
          Elige tu Góndola y pide las mejores pizzas.
        </h1>

        <p>
          Pizzas artesanas, hamburguesas y recetas
          irresistibles.
        </p>

        <div className="heroActions">
          <a
            className="btnPrimary"
            href={`https://wa.me/${pizzeria.whatsapp}`}
            target="_blank"
          >
            Pedir por WhatsApp
          </a>

          <a
            className="btnSecondary"
            href="#carta"
          >
            Ver carta
          </a>
        </div>
      </div>

      <div className="heroCard">
        <div className="pizzaCircle">🍕</div>

        <h3>{pizzeria.nombre}</h3>

        <p>{pizzeria.direccion}</p>

        <strong>{pizzeria.telefono}</strong>
      </div>
    </section>
  );
}