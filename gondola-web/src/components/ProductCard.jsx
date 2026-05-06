export default function ProductCard({ producto }) {
  return (
    <article className={producto.popular ? "product popular" : "product"}>
      {producto.popular && <span className="badge">Más pedido</span>}

      <div className="productEmoji">🍕</div>

      <span className="category">{producto.categoria}</span>

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <div className="productFooter">
        <strong>{producto.precio.toFixed(2)} €</strong>
        <button>+</button>
      </div>
    </article>
  );
}