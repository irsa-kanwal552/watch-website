import React from 'react'
import heroimg from '../assets/heroimg.jpg'

const Hero = () => {
  return (
<section id='home' className='bg-amber-50 scroll-mt-20 py-10 md:py-50'>
    <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10 '>
        <div className='text-center lg:text-left max-w-2xl ml-10'>
            <h1 className='text-4xl sm:text-6xl font-bold text-amber-950 leading-tight mb-9'>
                Discover the Best Deals on Top Products
            </h1>
            <p className='text-gray-700 text-base sm:text-xl mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est esse itaque, at fugiat praesentium voluptatum nulla inventore ipsa consectetur odit.
            </p>
            <div className='flex justify-center lg:justify-start gap-4'>
                <a href="/products" className='px-6 py-3 bg-pink-900 text-white text-lg font-semibold rounded-lg shadow hover:bg-pink-600 transition'>
                Shop Now
                </a>
                <a href="/offers" 
                className='px-6 py-3 border border-pink-600 text-lg font-semibold rounded-lg hover:bg-pink-200 transition' >Views Offers</a>
            </div>
        </div>
        <div className='w-full lg:w-1/2 flex-1 justify-center lg:justify-end'>
        <img src={heroimg} alt="Hero Image" className='w-full lg:w-auto max-w-2xl mx-auto lg:translate-x-16 rounded-xl shadow-lg' />
        </div>
    </div>
</section>
  )
}

export default Hero
