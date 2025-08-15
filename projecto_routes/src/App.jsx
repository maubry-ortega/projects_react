// import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Menu from './components/Menu'
import PiePagina from './components/PiePagina'

const App = () => {

  return (
    <>
      <Menu/>
      <div style={{minHeigth: '400px'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacto" element={<Contact/>} />
        </Routes>

      </div>
      <PiePagina></PiePagina>
    </>
  )
}

export default App
