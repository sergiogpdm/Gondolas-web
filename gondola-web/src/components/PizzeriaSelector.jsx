export default function PizzeriaSelector({
  pizzerias,
  actual,
  onSelect,
}) {
  return (
    <section className="selector" id="locales">
      <h2>Selecciona tu local</h2>

      <div className="selectorGrid">
        {pizzerias.map((pizzeria) => (
          <button
            key={pizzeria.id}
            onClick={() => onSelect(pizzeria)}
            className={
              actual.id === pizzeria.id
                ? "local active"
                : "local"
            }
          >
            <span>{pizzeria.nombre}</span>

            <small>{pizzeria.direccion}</small>
          </button>
        ))}
      </div>
    </section>
  );
}