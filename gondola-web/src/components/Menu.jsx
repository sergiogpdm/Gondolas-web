import ProductCard from "./ProductCard";

export default function Menu({
  pizzeria,
  categorias,
  categoriaActiva,
  setCategoriaActiva,
}) {
  const productosFiltrados =
    categoriaActiva === "Todos"
      ? pizzeria.productos
      : pizzeria.productos.filter(
          (producto) => producto.categoria === categoriaActiva
        );

  return (
    <section className="menu" id="carta">
      <div className="sectionHeader centered">
        <span>Carta digital</span>
        <h2>{pizzeria.nombre}</h2>
        <p>{pizzeria.direccion}</p>
      </div>

      <div className="categoryBar">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaActiva(categoria)}
            className={categoriaActiva === categoria ? "active" : ""}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="menuGrid">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.nombre} producto={producto} />
        ))}
      </div>

      <div className="orderBox" id="pedido">
        <span>Pedido directo</span>
        <h2>¿Ya lo tienes claro?</h2>
        <p>Pide directamente en {pizzeria.nombre}.</p>

        <div className="orderActions">
          <a
            className="btn btnRed"
            href={`https://wa.me/${pizzeria.whatsapp}`}
            target="_blank"
          >
            WhatsApp
          </a>

          <a className="btn btnWhite" href={`tel:${pizzeria.telefono}`}>
            Llamar
          </a>
        </div>
      </div>
    </section>
  );
}