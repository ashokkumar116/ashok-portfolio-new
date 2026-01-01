import React from 'react'
import Hero from './Sections/Hero'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/all'
import About from './Sections/About'

const App = () => {

  useGSAP(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: false,
      })
    }
  })

  return (
    <div className='bg-black' id='smooth-wrapper'>
      <div id='smooth-content'>
        <Hero />
        <About />
        <div className='h-screen'></div>
      </div>
    </div>
  )
}

export default App