export default function ProductCard({ producto }) {
  const esEspecial = producto.especial;

  return (
    <article
      className={
        esEspecial
          ? "product productSpecial"
          : producto.popular
          ? "product popular"
          : "product"
      }
    >
      {producto.popular && !esEspecial && (
        <span className="badge">Más pedido</span>
      )}

      {esEspecial && (
        <span className="specialBadge">{producto.especial}</span>
      )}

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
          <button className="photoBtn">📸</button>
          <button className="allergenBtn">⚠️</button>
        </div>
      </div>
    </article>
  );
}