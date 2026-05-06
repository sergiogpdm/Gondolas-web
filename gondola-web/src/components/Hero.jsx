export default function Hero({ pizzeria }) {
  return (
    <section className="hero">
      <div className="heroText">
        <span className="eyebrow">Desde 1989 · Sabor italiano</span>

        <h1>
          La pizza que apetece antes incluso de pedirla.
        </h1>

        <p>
          Elige tu Góndola, descubre la carta de ese local y pide por WhatsApp
          en segundos.
        </p>

        <div className="heroActions">
          <a
            className="btn btnRed"
            href={`https://wa.me/${pizzeria.whatsapp}`}
            target="_blank"
          >
            Pedir por WhatsApp
          </a>

          <a className="btn btnWhite" href="#carta">
            Ver carta
          </a>
        </div>

        <div className="heroStats">
          <div>
            <strong>+35</strong>
            <span>años</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>recién hecho</span>
          </div>

          <div>
            <strong>🔥</strong>
            <span>horno caliente</span>
          </div>
        </div>
      </div>

      <div className="heroVisual">
        <div className="pizzaBig">🍕</div>

        <div className="heroPanel">
          <span>{pizzeria.estado}</span>
          <h3>{pizzeria.nombre}</h3>
          <p>{pizzeria.direccion}</p>
          <strong>{pizzeria.telefono}</strong>
        </div>
      </div>
    </section>
  );
}