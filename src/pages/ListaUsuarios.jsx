import { useState, useEffect } from "react";

function ListaUsuarios () {
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsuarios(data)
            setLoading(false)
        })                                                                                                                                                                                               
        }, [])

        if (loading) {
            return <p>Cargando...</p>
        }

        return (
            <div>
                <h1>Lista de Usuarios</h1>
                <ul>
                {usuarios.map(usuario => (
                    <li key = {usuario.id}>{usuario.name} - {usuario.email}</li>
                ))}
                </ul>
            </div>
        )

}

export default ListaUsuarios;