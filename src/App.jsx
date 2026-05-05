import { Routes, Route, Link } from 'react-router-dom'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import About from './pages/About'
import EjercicioMap from './pages/EjercicioMap'
import EjercicioApi from './pages/EjercicioApi'
import Contador from './components/Contador'
import ListaGimnasios from './components/ListaGimnasios'


function App(){
  return(     
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre mi</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/ejerciciomap">Ejercicio Map</Link>
        <Link to="/ejercicioapi">Ejercicio Api</Link>
        <Link to="/contador">Contador</Link>
        <Link to="/listagimnasios">Lista Gimnasios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ejerciciomap" element={<EjercicioMap />} />
        <Route path="/ejercicioapi" element={<EjercicioApi />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/listagimnasios" element={<ListaGimnasios />} />
      </Routes>
    </div>
  )
}

export default App