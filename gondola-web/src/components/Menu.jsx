import ProductCard from "./ProductCard";

export default function Menu({ pizzeria }) {
  return (
    <section className="menu" id="carta">
      <div className="sectionTitle">
        <span>Carta</span>

        <h2>{pizzeria.nombre}</h2>
      </div>

      <div className="menuGrid">
        {pizzeria.productos.map((producto) => (
          <ProductCard
            key={producto.nombre}
            producto={producto}
          />
        ))}
      </div>

      <div className="orderBox" id="pedido">
        <h2>Haz tu pedido ahora</h2>

        <a
          className="btnPrimary"
          href={`https://wa.me/${pizzeria.whatsapp}`}
          target="_blank"
        >
          Pedir ahora
        </a>
      </div>
    </section>
  );
}