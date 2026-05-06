import pizzaSticker from "../assets/stickers/pizza.png";
import burgerSticker from "../assets/stickers/hamburguesa.png";
import friesSticker from "../assets/stickers/patatas.png";
import buenoSticker from "../assets/stickers/top.png";

export default function Hero({
  pizzerias,
  pizzeriaActual,
  onSelect,
}) {
  return (
    <section className="hero">
      <div className="heroText">
        <span className="eyebrow">
          Góndola Pizzería & Grill
        </span>

        <h1>
          Tu Góndola.
          <br />
          Tus Pizzas de Siempre
        </h1>

        <p>
          Selecciona el local más cercano y descubre
          su carta al instante.
        </p>

        <div className="currentLocal">
          <span>Estás viendo ahora</span>

          <strong>{pizzeriaActual.nombre}</strong>

          <small>{pizzeriaActual.direccion}</small>
        </div>

        <div className="localChooser">
          <div className="chooserTitle">
            <span>1</span>

            <div>
              <strong>Elige tu local</strong>

              <small>
                La carta cambia según el local
              </small>
            </div>
          </div>

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

                {pizzeriaActual.id ===
                  pizzeria.id && (
                  <em>Local seleccionado</em>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="heroCollage">
        <div className="collageGlow"></div>

        <img
          src={pizzaSticker}
          className="sticker pizzaSticker"
        />

        <img
          src={burgerSticker}
          className="sticker burgerSticker"
        />

        <img
          src={friesSticker}
          className="sticker friesSticker"
        />

        <img
          src={buenoSticker}
          className="sticker buenoSticker"
        />

        <div className="heroOrderCard">
          <span>Pedido rápido</span>

          <h3>
            Pizzas recién
            <br />
            horneadas
          </h3>

          <p>
            Haz tu pedido en segundos desde
            {` ${pizzeriaActual.nombre}`}
          </p>

          <a
            href={`https://wa.me/${pizzeriaActual.whatsapp}`}
            target="_blank"
          >
            Pedir ahora
          </a>
        </div>
      </div>
    </section>
  );
}