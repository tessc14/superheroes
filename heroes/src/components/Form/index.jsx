import React, { useState, useEffect } from 'react'

function Form({inputText, setInputText}) {

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!inputText) {
      alert('Please enter a superhero')
      }
    
    // setTodos([
    //  ...todos,
    //  {text: inputText, completed: false}
    // ])
    setInputText('')
  }


  return (
    <form>
      <input value={inputText} placeholder="Find a superhero..." type="text" className="submit-input" onChange={handleInput}/>
      <button type="submit" className="submit-button" onClick={handleSubmit}>Find</button>
    </form>
  )
}

export default Form