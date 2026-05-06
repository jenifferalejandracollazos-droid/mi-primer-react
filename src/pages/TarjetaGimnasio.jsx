const TarjetaGimnasio = ({ id, nombre, capacidad, onEliminar}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>ID del gimnasio:{id}</p>
            <p>Capacidad del Gimnasio: {capacidad} personas</p>
            <button onClick={() => onEliminar(id)}>Eliminar Gimnasio</button>
        </div>
    )
}

export default TarjetaGimnasio;
