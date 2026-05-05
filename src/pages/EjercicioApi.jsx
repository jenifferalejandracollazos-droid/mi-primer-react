import {useState, useEffect,} from 'react';

function EjercicioApi() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsuarios(data);
            setCargando(false);
        })
},[]) 

if (cargando) {
    return <p>Cargando data...</p>
}

return (
    <div>
        <h1>Lista de Ususarios</h1>
        {usuarios.map((usuario) => (
            <div key={usuario.id} style={{
                border: '1px solid blue',
                margin: '10px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: 'lightblue'
            }}>
                <h3>{usuario.name}</h3>
                <p>{usuario.email}</p>
            </div>
        ))}
    </div>

)
}

export default EjercicioApi;