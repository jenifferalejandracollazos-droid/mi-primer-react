import { useState, useEffect } from "react";

const useMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const datos = [
      { id: 1, nombre: "Afrodita", especie: "gato" },
      { id: 2, nombre: "Athenea", especie: "gato" },
      { id: 3, nombre: "Otto", especie: "perro" },
    ];

    setMascotas(datos);
    setCargando(false);
  }, []);
  return { mascotas, cargando };
};

export default useMascotas;
