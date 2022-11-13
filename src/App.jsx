import React from 'react'
import Hero from './components/Hero'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'
import Sales from './components/Sales'
import FlexContent from './components/FlexContent'
import Stories from './components/Stories'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative '>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  )
}

export default App