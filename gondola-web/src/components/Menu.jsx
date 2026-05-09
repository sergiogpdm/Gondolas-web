import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const LIMITE_INICIAL = 6;

export default function Menu({
  pizzeria,
  categorias,
  categoriaActiva,
  setCategoriaActiva,
}) {
  const [limiteVisible, setLimiteVisible] = useState(LIMITE_INICIAL);

  const productosFiltrados = useMemo(() => {
    return categoriaActiva === "Todos"
      ? pizzeria.productos
      : pizzeria.productos.filter(
          (producto) => producto.categoria === categoriaActiva
        );
  }, [categoriaActiva, pizzeria.productos]);

  const productosVisibles = productosFiltrados.slice(0, limiteVisible);

  function cambiarCategoria(categoria) {
    setCategoriaActiva(categoria);
    setLimiteVisible(LIMITE_INICIAL);

    setTimeout(() => {
      document
        .getElementById("menuBoard")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function verMas() {
    setLimiteVisible((actual) => actual + 6);
  }

  function subirCarta() {
    document
      .getElementById("menuBoard")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const quedanProductos = productosFiltrados.length - productosVisibles.length;

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

        <div className="categoryBar" id="cartaCategorias">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => cambiarCategoria(categoria)}
              className={categoriaActiva === categoria ? "active" : ""}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="menuBoard" id="menuBoard">
          <div className="boardHeader">
            <div>
              <span>Ahora viendo</span>
              <h3>{categoriaActiva}</h3>
            </div>

            <strong>{productosFiltrados.length} productos</strong>
          </div>

          <div className="menuGrid">
            {productosVisibles.map((producto) => (
              <ProductCard key={producto.nombre} producto={producto} />
            ))}
          </div>

          <div className="menuPagination">
            {quedanProductos > 0 && (
              <button onClick={verMas} className="loadMoreBtn">
                Ver más {categoriaActiva.toLowerCase()} · quedan{" "}
                {quedanProductos}
              </button>
            )}

            {productosFiltrados.length > LIMITE_INICIAL && (
              <button onClick={subirCarta} className="backToTopBtn">
                Volver arriba de la carta
              </button>
            )}
          </div>
        </div>

        <div className="callBox" id="pedido">
          <div className="callIcon">🛵</div>

          <div className="callContent">
            <span>Pedido por teléfono</span>

            <h2>Llama a {pizzeria.nombre}</h2>

            <p>
              Haz tu pedido directamente en el local seleccionado.
            </p>

            <strong>{pizzeria.telefono}</strong>
          </div>

          <a className="callButton" href={`tel:${pizzeria.telefono}`}>
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}