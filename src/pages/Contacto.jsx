import useToggle from "../hooks/useToggle";

function Contacto () {
    const { value: showContacto, toggle } = useToggle(false); 

    return(
        <div>
            <h1>Contacto</h1>
            <button onClick={toggle}>
                {showContacto ? 'ocultar contacto' : 'mostrar contacto'}
            </button>
            {showContacto && 
            <p>jecollazosdev@gmail.com</p>}
        </div>
    )
}

export default Contacto;
