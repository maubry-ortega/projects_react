import { useState } from 'react'
import Card from './components/Card' 

import './App.css'

const App = () => {

  const persons = [
    {name : "maria rojas",   age : 25, photo : "./img/OIP.jpg"},
    {name : "jose lozano",   age : 18, photo : "./img/OIP2.jpg"},
    {name : "monik galindo", age : 21, photo : "./img/OIP3.jpg"},
  ]
  return (
    <>
      <h1 className='text-center fw-bold'>lista de personas</h1>
      {
        persons.map(person => (
          <Card 
          name  = {person.name}
          age   = {person.age}
          photo = {person.photo} />
        ))
      }
    </>
  )
}

export default App
