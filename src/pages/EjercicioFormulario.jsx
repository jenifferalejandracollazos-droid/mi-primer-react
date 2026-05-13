import { useState } from "react";

function EjercicioFormulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = () => {
    console.log({ nombre, email });
    setEnviado(true);
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>

      {enviado && (
        <div>
          <h2> Datos Enviados</h2>
          <p> Nombre:{nombre}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default EjercicioFormulario;
