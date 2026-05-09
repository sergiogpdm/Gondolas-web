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
      <div className="heroLocalBanner">
        <span>📍 Local seleccionado</span>

        <strong>{pizzeriaActual.nombre}</strong>

        <small>{pizzeriaActual.direccion}</small>
      </div>

      <div className="heroText">
        <div className="sectionHeader">
          <span>Góndola Pizzería & Grill</span>
        </div>

        <h1>
          Tus pizzas
          <span className="heroHighlight">
            de siempre
          </span>
        </h1>

        <p>
          Selecciona tu local y descubre su carta,
          promociones y pedidos disponibles.
        </p>

        <div className="heroStatus">
          <span>{pizzeriaActual.horario.estado}</span>

          <strong>
            Hoy · {pizzeriaActual.horario.hoy}
          </strong>
        </div>

        <div className="localChooser">
          <div className="chooserTitle">
            <span>1</span>

            <div>
              <strong>Elige tu local</strong>

              <small>
                Cada Góndola tiene su propia carta
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
          <span>Pedido telefónico</span>

          <h3>
            Llama a
            <br />
            tu Góndola
          </h3>

          <p>
            Haz tu pedido directamente en{" "}
            {pizzeriaActual.nombre}
          </p>

          <a href={`tel:${pizzeriaActual.telefono}`}>
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}