import React, { useState, useEffect } from 'react'
import { Form, HeroList } from './components'
// import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [heroes, setHeroes] = useState([]);
  
  return (
    <div className="App">
      <h1>Superheroes</h1>
      <h2>No superhero yet, please submit a superhero...</h2>
      <Form inputText={inputText} setInputText={setInputText}/>
      <HeroList heroes={heroes}/>
    </div>
  )
}

export default App
