import React from 'react'
import product1 from '../assets/product1.jpg'

const About = () => {
  return (
    <section id='about' className='min-h-screen scroll-mt-40 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-22 mb-20'>
            <div className='lg:w-1/2'>
             <div className='relative rounded-2xl overflow-hidden h-146 shadow-xl'>
                <img src={product1} alt="Luxury Watches" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'></div>
                <div className='absolute bottom-0 left-0 p-6 text-white'>
                    <h3 className='text-3xl font-bold'>Since 2010</h3>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
             </div>
            </div>
            <div className='lg:w-1/2 flex flex-col justify-center'>
            <h2 className='text-6xl font-bold text-amber-900 mb-15'>About Us</h2>
            <p className='text-xl text-gray-600 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ullam corporis sit! 
            Temporibus repellat autem repellendus architecto ducimus doloribus ab?Dignissimos ullam corporis sit</p>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <div className='bg-white p-4 rounded-lg shadow-sm  border border-gray-100'>
                    <h4 className='font-semibold text-pink-600 text-xl'>500+</h4>
                    <p className='text-gray-600 text-lg'>Unique Watches</p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-sm  border border-gray-100'>
                    <h4 className='font-semibold text-pink-600 text-xl'>50+</h4>
                    <p className='text-gray-600 text-lg'>Countries worldwide</p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-sm  border border-gray-100'>
                    <h4 className='font-semibold text-pink-600 text-xl'>100%</h4>
                    <p className='text-gray-600 text-lg'>Customer satisfaction</p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-sm  border border-gray-100'>
                    <h4 className='font-semibold text-pink-600 text-xl'>24/7</h4>
                    <p className='text-gray-600 text-lg'>Customer support</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
