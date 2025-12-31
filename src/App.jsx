import React from 'react'
import Hero from './Sections/Hero'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/all'

const App = () => {

  useGSAP(()=>{
    ScrollSmoother.create({
      smooth: 1.5, 
      effects: true, 
      smoothTouch: 0.1 
    });
  })

  return (
    <div className='bg-black' id='smooth-wrapper'>
      <div id='smooth-content'>
        <Hero />
        <div className='h-screen'></div>
      </div>
    </div>
  )
}

export default App