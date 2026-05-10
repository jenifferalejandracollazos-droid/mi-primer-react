import { Link } from 'react-router-dom'

const mascotas = [
  { id: 1, nombre: "Afrodita" },
  { id: 2, nombre: "Atenea" },
  { id: 3, nombre: "Otto" },
];

function EjercicioMap() {
  return (
    <div>
      <h2>Mis mascotas</h2>
      <div>
        {mascotas.map((mascota) => (
          <div key ={mascota.id} style={{
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
          }}>
            <h3>{mascota.nombre}</h3>
            <Link to={`/mascota/${mascota.nombre}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EjercicioMap;
