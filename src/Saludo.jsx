function Saludo(props) {
  return (
    <div>
      <h2>!Hola, {props.nombre}!</h2>
      <h3>Ciudad: {props.ciudad}</h3>
      <h3>Edad: {props.edad} años</h3>
      <p>Bienvenidos a React</p>
    </div>
  );
}

export default Saludo;
