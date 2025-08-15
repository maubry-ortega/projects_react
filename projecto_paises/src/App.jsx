import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paises from './components/Paises'

const App = () =>  {

  return (
    <div style={{fontFamily : 'sans-serif', padding : '20px'}}>
      <h1>
        🗺️ Lista de paises
      </h1>
      <Paises />
    </div>
  )
}

export default App
