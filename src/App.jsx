import React from 'react'
import Hero from './components/Hero'
import { heroapi, popularsales, toprateslaes } from './data/data'
import Sales from './components/Sales'

const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative '>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main> 
    </div>
  )
}

export default App