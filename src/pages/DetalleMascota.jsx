import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function DetalleMascota () {
    const { nombre } = useParams() 

    return (
        <div style={{padding: '20px'}}>
            <h2>Detalle de: {nombre}</h2>
            <p>Este es el detalle de la mascota {nombre}.</p>
            <Link to="/"> Volver a la lista de mascotas</Link>
        </div>
    )
}

export default DetalleMascota;