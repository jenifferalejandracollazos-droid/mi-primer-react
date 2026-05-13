import { Routes, Route, Link } from 'react-router-dom'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import About from './pages/About'
import EjercicioMap from './pages/EjercicioMap'
import EjercicioApi from './pages/EjercicioApi'
import Contador from './components/Contador'
import ListaGimnasios from './components/ListaGimnasios'
import DetalleMascota from './pages/DetalleMascota'
import UserContext from './context/UserContext'
import EjercicioFormulario from './pages/EjercicioFormulario'


function App(){
  const usuario = {nombre: "Jeniffer Collazos", rol: "Frontend Developer"}
  
  return( 
    <UserContext.Provider value={usuario}>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre mi</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/ejerciciomap">Ejercicio Map</Link>
        <Link to="/ejercicioapi">Ejercicio Api</Link>
        <Link to="/contador">Contador</Link>
        <Link to="/listagimnasios">Lista Gimnasios</Link>
        <Link to="/ejercicioformulario">Ejercicio Formulario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ejerciciomap" element={<EjercicioMap />} />
        <Route path="/ejercicioapi" element={<EjercicioApi />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/listagimnasios" element={<ListaGimnasios />} />
        <Route path="/mascota/:nombre" element={<DetalleMascota />} />
        <Route path="/ejercicioformulario" element={<EjercicioFormulario />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
    </UserContext.Provider>
  )
}

export default App
