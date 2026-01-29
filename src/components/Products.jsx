import React, { useState, useEffect } from 'react'
import product from '../assets/product.jpg'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'
import product6 from '../assets/product6.jpg'
import product7 from '../assets/product7.jpg'
import { FiChevronLeft, FiChevronRight, FiShoppingCart, FiStar, FiHeart, FiEye } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Products = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const products = [
        { id: 1, name: 'Axis Royale', price: 299.99, rating: 5, image: product, discount: 0, category: "Luxury" },
        { id: 2, name: 'Aero Sport', price: 189.99, rating: 4.5, image: product1, discount: 15, category: "Sport" },
        { id: 3, name: 'Luxe Gold', price: 479.99, rating: 4.8, image: product2, discount: 0, category: "Classic" },
        { id: 4, name: 'Nova Chrono', price: 199.99, rating: 4.6, image: product3, discount: 10, category: "Modern" },
        { id: 5, name: 'Vibe Elite', price: 299.99, rating: 4.9, image: product4, discount: 0, category: "Luxury" },
        { id: 6, name: 'Pulse Digital', price: 149.99, rating: 4.2, image: product5, discount: 20, category: "Digital" },
        { id: 7, name: 'Mist Silver', price: 399.99, rating: 4.7, image: product6, discount: 5, category: "Classic" },
        { id: 8, name: 'Zen Minimal', price: 129.99, rating: 4.4, image: product7, discount: 0, category: "Modern" },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setProductsPerPage(1);
            else if (window.innerWidth < 1024) setProductsPerPage(2);
            else setProductsPerPage(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(products.length / productsPerPage);

    const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

    const visibleProducts = products.slice(
        currentSlide * productsPerPage,
        (currentSlide + 1) * productsPerPage
    );

    return (
        <section id='products' className='py-24 bg-gray-50'>
            <div className='container mx-auto px-6'>

                {/* Section Header */}
                <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className='text-3xl md:text-4xl font-serif font-bold text-navy-950 mb-3'>Exquisite Timepieces</h2>
                        <div className="h-1 w-20 bg-gold-500 mx-auto md:mx-0"></div>
                        <p className="mt-4 text-gray-500 max-w-md">Explore our curated collection of premium watches, designed for elegance and precision.</p>
                    </motion.div>

                    <div className='flex space-x-3'>
                        <button onClick={prevSlide} className='p-3 rounded-full border border-gray-300 hover:border-gold-500 hover:text-gold-500 transition-colors duration-300' aria-label='Previous slide'>
                            <FiChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className='p-3 rounded-full border border-gray-300 hover:border-gold-500 hover:text-gold-500 transition-colors duration-300' aria-label='Next slide'>
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className='min-h-[500px]'>
                    <motion.div
                        layout
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
                    >
                        <AnimatePresence mode='popLayout'>
                            {visibleProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className='group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100'
                                >
                                    {/* Image Container */}
                                    <div className='relative h-80 overflow-hidden bg-gray-100'>
                                        <img src={product.image} alt={product.name} className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' />

                                        {product.discount > 0 && (
                                            <span className='absolute top-4 left-4 bg-navy-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider'>
                                                -{product.discount}% Sale
                                            </span>
                                        )}

                                        {/* Overlay Icons */}
                                        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3'>
                                            <button className='p-3 bg-white text-navy-900 rounded-full hover:bg-gold-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75'>
                                                <FiShoppingCart size={20} />
                                            </button>
                                            <button className='p-3 bg-white text-navy-900 rounded-full hover:bg-gold-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100'>
                                                <FiEye size={20} />
                                            </button>
                                            <button className='p-3 bg-white text-navy-900 rounded-full hover:bg-gold-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150'>
                                                <FiHeart size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className='p-6'>
                                        <div className="text-xs text-gold-600 font-semibold uppercase tracking-wider mb-2">{product.category}</div>
                                        <h3 className='text-lg font-bold text-navy-950 mb-2 truncate'>{product.name}</h3>

                                        <div className='flex justify-between items-center mt-4 border-t border-gray-100 pt-4'>
                                            <div className='flex flex-col'>
                                                <span className='text-lg font-bold text-navy-900'>
                                                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                                                </span>
                                                {product.discount > 0 && (
                                                    <span className='text-sm text-gray-400 line-through'>
                                                        ${product.price.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                            <div className='flex items-center gap-1 text-gold-500'>
                                                <FiStar className="fill-current" size={16} />
                                                <span className='text-sm font-medium text-gray-600'>{product.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className='flex justify-center mt-12 space-x-3'>
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-gold-500' : 'w-2 bg-gray-300 hover:bg-gold-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products
