import React from 'react'
import product8 from '../assets/product8.jpg'
import product9 from '../assets/product9.jpg'
import product10 from '../assets/product10.jpg'
import product11 from '../assets/product11.jpg'
import product12 from '../assets/product12.jpg'
import product13 from '../assets/product13.jpg'


const categories = [
  { img: product8, alt: "Men's Watches", title: "Men's Collection", description: "Precision & Power" },
  { img: product9, alt: "Women's Watches", title: "Women's Collection", description: "Grace & Beauty" },
  { img: product10, alt: "Kid's Watches", title: "Junior Series", description: "Fun & Durable" },
  { img: product11, alt: "Student's Watches", title: "Academic", description: "Smart & Reliable" },
  { img: product12, alt: "Luxury Editions", title: "Luxury Edition", description: "Gold & Diamond" },
  { img: product13, alt: "Luminox's Watches", title: "Luminox Elite", description: "Night Vision" },
]

const Categories = () => {

  return (
    <section id='categories' className='py-20 scroll-mt-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-serif font-bold text-navy-950 mb-3'>
            Discover by Category
          </h2>
          <div className='h-1 w-20 bg-gold-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Find the perfect timepiece that reflects your personal style.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {categories.map((category, index) => (
            <div key={index} className='group relative overflow-hidden rounded-xl shadow-lg cursor-pointer'>
              <div className='h-80 w-full overflow-hidden'>
                <img src={category.img} alt={category.alt} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out' />
              </div>
              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity'></div>

              <div className='absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                <div className='h-1 w-10 bg-gold-500 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <h3 className='text-2xl font-serif font-bold text-white mb-1'>{category.title}</h3>
                <p className='text-gray-300 text-sm font-medium tracking-wider uppercase'>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
