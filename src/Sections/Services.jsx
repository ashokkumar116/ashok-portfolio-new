import React from 'react'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section id='services' className='min-h-screen py-20 px-10 flex flex-col items-center justify-center gap-16 bg-[#050505] text-white'>
        <div className='text-center max-w-3xl flex flex-col gap-4'>
            <h1 className='text-4xl md:text-6xl font-bold bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent'>
                My Services
            </h1>
            <p className='text-gray-400 text-lg'>
                I offer a range of premium services to help you achieve your goals and grow your business with modern, high-performance solutions.
            </p>
        </div>
        <div className='flex flex-wrap justify-center gap-8 w-full max-w-6xl'>
            <ServicesCard />
        </div>
    </section>
  )
}

export default Services