import Aprendices from './page/Aprendices'
import Menu from './page/Menu'
import PiePagina from './page/PiePagina'
import Programas from './page/Programas'
import About from './page/About'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
     <Menu />
     <div style={{minHeight: "400px"}}>
      <Routes>
        <Route path="/" element = {<Aprendices />} />
        <Route path="/about" element = {<About />} />
        <Route path="/programs" element = { <Programas /> } />
      </Routes>
     </div>
     <PiePagina />
    </>
  )
}

export default App;