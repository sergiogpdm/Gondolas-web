export default function ProductCard({ producto }) {
  return (
    <article className="product">
      <span>{producto.categoria}</span>

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <strong>
        {producto.precio.toFixed(2)} €
      </strong>
    </article>
  );
}