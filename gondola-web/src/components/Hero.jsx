import pizzaSticker from "../assets/stickers/pizza.png";
import burgerSticker from "../assets/stickers/hamburguesa.png";
import friesSticker from "../assets/stickers/patatas.png";
import buenoSticker from "../assets/stickers/top.png";

export default function Hero({ pizzerias, pizzeriaActual, onSelect }) {
  return (
    <section className="hero">
      <div className="heroLocalBanner">
        <span>Estás viendo la carta de</span>
        <strong>{pizzeriaActual.nombre}</strong>
        <small>{pizzeriaActual.direccion}</small>
      </div>

      <div className="heroText">


        <h1>
          Pizzería Góndola
          <br />
          <span className="heroHighlight">
            Tus pizzas de siempre
          </span>
        </h1>

        <p>
          Estás viendo los productos y precios de este local.
          Si quieres otra pizzería, cámbiala aquí abajo.
        </p>

        <div className="localChooser">
          <div className="chooserTitle">
            <span>📍</span>

            <div>
              <strong>Cambia de local</strong>
              <small>La carta se actualiza automáticamente</small>
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

                {pizzeriaActual.id === pizzeria.id && (
                  <em>Viendo esta carta</em>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="heroCollage">
        <div className="collageGlow"></div>

        <img src={pizzaSticker} className="sticker pizzaSticker" />
        <img src={burgerSticker} className="sticker burgerSticker" />
        <img src={friesSticker} className="sticker friesSticker" />
        <img src={buenoSticker} className="sticker buenoSticker" />

        <div className="heroOrderCard">
          <span>Pedido en</span>

          <h3>{pizzeriaActual.nombre}</h3>

          <p>
            Haz tu pedido directamente por teléfono en{" "}
            {pizzeriaActual.nombre}
          </p>

          <a href={`tel:${pizzeriaActual.telefono}`}>
            Llamar al local
          </a>
        </div>
      </div>
    </section>
  );
}