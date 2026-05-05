const mascotas = [
  { id: 1, nombre: "Afrodita" },
  { id: 2, nombre: "Atenea" },
  { id: 3, nombre: "Otto" },
];

function EjercicioMap() {
  return (
    <div>
      <h2>Mis mascotas</h2>
      {mascotas.map((mascota) => (
        <div key={mascota.id}>
          <h3>{mascota.nombre}</h3>
        </div>
      ))}
    </div>
  );
}

export default EjercicioMap;
