
import './App.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import fondo from './assets/Fondo.png'

function App() {

  const  bgImagen = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "botton",
    backgroundSize: "cover",
    position: "relative"
  }

  return (
    <div style={bgImagen} className='overflow-hidden min-h-screen'>
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default App
