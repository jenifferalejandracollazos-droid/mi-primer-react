import { Link } from "react-router-dom";
import useMascotas from "../hooks/useMascotas";


function EjercicioMap() {
  const { mascotas, cargando } = useMascotas();

  if (cargando) {
    return <p>Cargando mascotas...</p>;
  }

  return (
    <div>
      <h1>Mis Mascotas</h1>
      {mascotas.map((mascota) => (
        <div
          key={mascota.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{mascota.nombre}</h3>
          <Link to={`/mascota/${mascota.nombre}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
}
export default EjercicioMap;