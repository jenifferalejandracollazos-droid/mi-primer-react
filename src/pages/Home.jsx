import { useContext } from "react"
import UserContext from "../context/UserContext"

function Home(){
  const usuario = useContext(UserContext)

  return (
    <div>
      <h1>Bienvenida, {usuario.nombre}!</h1>
      <h2>Tu rol es: {usuario.rol}</h2>
    </div>
  )
}

export default Home;