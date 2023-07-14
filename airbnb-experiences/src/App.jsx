import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Card from './components/card'
import './App.css'
import data from './components/data'
const cards = data.map(item => {
  return (
      <Card 
          key={item.id}
          item={item}
      />
  )
})  

function App() {
  

  return (
    <>
      <Nav/>
      <Hero/>
      <section className='card-list'>
        {cards}
      </section>
    </>
  )
}

export default App
