export default function PizzeriaSelector({ pizzerias, actual, onSelect }) {
  return (
    <section className="locals" id="locales">
      <div className="sectionHeader">
        <span>Elige tu local</span>
        <h2>Cada Góndola, su carta.</h2>
        <p>Selecciona la pizzería y la web cambia automáticamente.</p>
      </div>

      <div className="localsGrid">
        {pizzerias.map((pizzeria) => (
          <button
            key={pizzeria.id}
            onClick={() => onSelect(pizzeria)}
            className={
              actual.id === pizzeria.id
                ? "localCard active"
                : "localCard"
            }
          >
            <div>
              <span className="status">{pizzeria.estado}</span>
              <h3>{pizzeria.nombre}</h3>
              <p>{pizzeria.direccion}</p>
            </div>

            <strong>{pizzeria.destacado}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}