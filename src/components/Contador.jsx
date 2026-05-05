import {useState} from 'react';

function Contador() {
    const[contador, setContador] = useState(0);

    const condicionDecremento = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    return (
        <div>
            <h1>Mi contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={condicionDecremento}>Decrementar</button>

            {contador >= 10 && <p>¡Has llegado al máximo!</p>}
            {contador !== 0 && <button onClick={() => setContador(0)}>Reiniciar</button>}
        </div>
    )

}


export default Contador