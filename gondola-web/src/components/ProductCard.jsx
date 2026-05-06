export default function ProductCard({ producto }) {
  return (
    <article className={producto.popular ? "product popular" : "product"}>
      {producto.popular && <span className="badge">Más pedido</span>}

      <div className="productTape"></div>

      <div className="productHeader">
        <span>{producto.categoria}</span>
      </div>

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <div className="productBottom">
        <div className="priceTag">
          <small>Precio</small>

          <strong>{producto.precio.toFixed(2)} €</strong>
        </div>

        <div className="productActions">
          <button className="photoBtn">
            📸
          </button>

          <button className="allergenBtn">
            ⚠️
          </button>
        </div>
      </div>
    </article>
  );
}