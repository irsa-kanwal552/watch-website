import React from 'react'
import product1 from '../assets/product1.jpg'

const About = () => {
  return (
    <section id='about' className='min-h-screen scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-16 items-center mb-20'>
          <div className='lg:w-1/2'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-50'>
              <img src={product1} alt="Luxury Watches" className='w-full h-auto object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90'></div>
              <div className='absolute bottom-0 left-0 p-8 text-white'>
                <div className="w-12 h-1 bg-gold-500 mb-4"></div>
                <h3 className='text-4xl font-serif font-bold mb-2'>Since 2010</h3>
                <p className='text-gray-300 text-lg'>Redefining luxury, one second at a time.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 flex flex-col justify-center'>
            <h2 className='text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-6'>Our Legacy</h2>
            <p className='text-xl text-gray-600 mb-8 leading-relaxed font-light'>
              At ChronoMist, we believe that a watch is more than just a timepiece – it is an expression of character, a celebration of craftsmanship, and a legacy to be passed down.
              Our journey began with a simple mission: to curate the world's finest watches for those who appreciate the extraordinary.
            </p>
            <div className='grid grid-cols-2 gap-6 mt-4'>
              <div className='bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
                <h4 className='font-bold text-gold-600 text-3xl mb-1'>500+</h4>
                <p className='text-navy-900 font-medium'>Exclusive Models</p>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
                <h4 className='font-bold text-gold-600 text-3xl mb-1'>50+</h4>
                <p className='text-navy-900 font-medium'>Global Locations</p>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
                <h4 className='font-bold text-gold-600 text-3xl mb-1'>100%</h4>
                <p className='text-navy-900 font-medium'>Authenticity Guaranteed</p>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
                <h4 className='font-bold text-gold-600 text-3xl mb-1'>24/7</h4>
                <p className='text-navy-900 font-medium'>Concierge Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
