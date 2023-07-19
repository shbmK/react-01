import React from 'react'
import { useState } from 'react'
import Main from './components/main'
import Nav from './components/nav'
import './App.css'

function App(){
  const[darkMode,setDarkMode]=useState(true)
  function toggleDarkMode(){
    setDarkMode(prev=>!prev)
  }
  return(
    <div className='container'>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
