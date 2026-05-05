import { useState } from "react";

function ListaGimnasios() {
  const [gimnasios, setGimnasios] = useState([
    { id: 1, nombre: "PowerGym" },
    { id: 2, nombre: "FitLife" },
    { id: 3, nombre: "IronHouse" },
  ]);

  const [nuevoGimnasio, setNuevoGimnasio] = useState("");

  const agregarGimnasio = () => {
    if (nuevoGimnasio.trim() === "") return;

    const nuevo = {
      id: Date.now(),
      nombre: nuevoGimnasio,
    };

    setGimnasios([...gimnasios, nuevo]);
    setNuevoGimnasio("");
  };

  const eliminarGimnasio = (id) => {
    setGimnasios(gimnasios.filter((gimnasio) => gimnasio.id !== id));
  };

  return (
    <div>
      <ul>
        {gimnasios.map((gimnasio) => (
          <li key={gimnasio.id}>
            {gimnasio.nombre}
            <button onClick={() => eliminarGimnasio(gimnasio.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={nuevoGimnasio}
          onChange={(e) => setNuevoGimnasio(e.target.value)}
          placeholder="Agregar nuevo gimnasio"
        />
        <button onClick={agregarGimnasio}>Agregar</button>
      </div>
    </div>
  );
}

export default ListaGimnasios;
