export default function Footer({ pizzeria }) {
  return (
    <footer className="footer">
      <div>
        <h2>GÓNDOLA</h2>
        <p>Pizzería & Grill · Sabor italiano desde 1989.</p>
      </div>

      <div>
        <h3>Local seleccionado</h3>
        <p>{pizzeria.nombre}</p>
        <p>{pizzeria.direccion}</p>
        <p>{pizzeria.telefono}</p>
      </div>
    </footer>
  );
}