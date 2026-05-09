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
      <div className="menuWall">
        <div className="menuTop">
          <span>Carta digital</span>

          <h2>{pizzeria.nombre}</h2>

          <p>
            Elige categoría y descubre qué puedes pedir en este local.
          </p>
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

        <div className="menuBoard">
          <div className="boardHeader">
            <div>
              <span>Ahora viendo</span>
              <h3>{categoriaActiva}</h3>
            </div>

            <strong>{productosFiltrados.length} productos</strong>
          </div>

          <div className="menuGrid">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.nombre} producto={producto} />
            ))}
          </div>
        </div>

        <div className="callBox" id="pedido">
          <div className="callIcon">
            🛵
          </div>

          <div className="callContent">
            <span>Pedido por teléfono</span>

            <h2>Llama a {pizzeria.nombre}</h2>

            <p>
              Haz tu pedido directamente en el local seleccionado.
            </p>

            <strong>{pizzeria.telefono}</strong>
          </div>

          <a
            className="callButton"
            href={`tel:${pizzeria.telefono}`}
          >
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}