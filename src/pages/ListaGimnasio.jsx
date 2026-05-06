import { useState } from "react";
import TarjetaGimnasio from "./TarjetaGimnasio";

const ListaGimnasio = () => {
  const [gimnasios, setGimnasios] = useState([
    { id: 1, nombre: "gimnasio A", capacidad: 100 },
    { id: 2, nombre: "gimnasio B", capacidad: 150 },
    { id: 3, nombre: "gimnasio C", capacidad: 200 },
    { id: 4, nombre: "gimnasio D", capacidad: 250 },
  ]);

  const eliminarGimnasio = (id) => {
    setGimnasios(gimnasios.filter((gimnasio) => gimnasio.id !== id));
  };

  return  (
    <div>
        {gimnasios.map((gimnasio) => (
          <TarjetaGimnasio
            key={gimnasio.id}
            id={gimnasio.id}
            nombre={gimnasio.nombre}
            capacidad={gimnasio.capacidad}
            onEliminar={eliminarGimnasio}
          />
        ))}
    </div>
  )
};

export default ListaGimnasio;
