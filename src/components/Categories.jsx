import React from 'react'
import product8 from '../assets/product8.jpg'
import product9 from '../assets/product9.jpg'
import product10 from '../assets/product10.jpg'
import product11 from '../assets/product11.jpg'
import product12 from '../assets/product12.jpg'
import product13 from '../assets/product13.jpg'


const categories = [
    {img: product8, alt: "Men's Watches", tittle: "Men's Collection",description: "sit amet consectetur adipisicing elit."},
    {img: product9, alt: "Women's Watches", tittle: "Women's Collection",description: "sit amet consectetur adipisicing elit."},
    {img: product10, alt: "Kid's Watches", tittle: "Kids's Collection",description: "sit amet consectetur adipisicing elit."},
    {img: product11, alt: "Student's Watches", tittle: "Student's Collection",description: "sit amet consectetur adipisicing elit."},
    {img: product12, alt: "Luxury Editions", tittle: "Luxury Edition",description: "sit amet consectetur adipisicing elit."},
    {img: product13, alt: "Luminox's Watches", tittle: "Luminox's Collection",description: "sit amet consectetur adipisicing elit."},     
]

const Categories = () => {

  return (
  <section id='categories' className='py-16 scroll-mt-25 bg-white'>
   <div className='container mx-auto px-4'>
     <div className='text-center mb-12'>
       <h2 className='text-4xl font-bold text-amber-950 mb-3'>
           Explore Our Fragrance Collection
       </h2>
       <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </p>
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
         {categories.map((category,index)=>(
            <div key={index} className='relative group over overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
               <div className='h-64 md:h-94 overflow-hidden'>
                 <img src={category.img} alt={category.alt} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
               </div>
               <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                <div className='absolute bottom-0 left-0 p-6'>
                    <h3 className='text-xl font-semibold text-white'>{category.tittle}</h3>
                    <p className='text-gray-200 mt-1'>{category.description}</p>
                </div>
               </div>
            </div>
         ))}
     </div>
   </div>
  </section>
  )
}

export default Categories
