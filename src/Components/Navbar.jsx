import React, { useState } from 'react'

const Navbar = () => {
      const [scrolled, setScrolled] = useState(false)
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })

  return (
    <nav className={`w-full mx-auto flex justify-center`}>
        <div className={`${scrolled ? 'bg-white/10 backdrop-blur-sm w-[80%] text-white shadow-md shadow-pink-400/10 mx-auto top-5 rounded-2xl' : 'top-0 bg-transparent text-white w-full mx-auto'} flex justify-between items-center fixed p-5 transition-all duration-300 ease-in-out z-50`}>
          <div>
            <h1 className='text-2xl font-bold'>ASHOK KUMAR P</h1>
          </div>
          <div>
            <ul className='flex gap-5'>
                <li className='hover:text-pink-400 transition-all duration-300 ease-in-out cursor-pointer'>About</li>
                <li className='hover:text-pink-400 transition-all duration-300 ease-in-out cursor-pointer'>Services</li>
                <li className='hover:text-pink-400 transition-all duration-300 ease-in-out cursor-pointer'>Featured Works</li>
                <li className='hover:text-pink-400 transition-all duration-300 ease-in-out cursor-pointer'>Testimonials</li>
                <li className='hover:text-pink-400 transition-all duration-300 ease-in-out cursor-pointer'>Contact</li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar