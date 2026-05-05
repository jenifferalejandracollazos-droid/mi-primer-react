import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [nombre, setNombre] = useLocalStorage("nombre", "");
  const frutas = ["Manzana", "Banano", "Mango", "Fresa"];

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Hola, {nombre}</p>
      <h1>Lista de frutas</h1>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
