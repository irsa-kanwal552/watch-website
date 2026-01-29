import React from 'react'
import heroimg from '../assets/heroimg.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id='home' className='relative w-full min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-black overflow-hidden flex items-center py-20 lg:py-0'>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gold-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-navy-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className='relative max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-center lg:text-left z-10'
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block py-1 px-3 rounded-full bg-gold-500/10 text-gold-400 text-sm font-semibold tracking-wider mb-6 border border-gold-500/20"
                    >
                        NEW COLLECTION 2026
                    </motion.span>

                    <h1 className='text-5xl sm:text-7xl font-bold text-white leading-tight mb-6 font-serif'>
                        Timeless <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500'>Elegance</span>
                    </h1>

                    <p className='text-gray-400 text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed'>
                        Discover the epitome of craftsmanship with our exclusive range of luxury timepieces. Designed for those who value time.
                    </p>

                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                        <a href="/products" className='px-8 py-4 bg-gold-500 text-navy-950 text-lg font-bold rounded-xl shadow-lg shadow-gold-500/20 hover:bg-gold-400 hover:scale-105 transition-all duration-300'>
                            Shop Collection
                        </a>
                        <a href="/offers" className='px-8 py-4 border border-gray-600 text-white text-lg font-bold rounded-xl hover:bg-white/5 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300'>
                            View Offers
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className='relative z-10 flex justify-center lg:justify-end'
                >
                    <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
                        <img
                            src={heroimg}
                            alt="Luxury Watch"
                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 font-bold">
                                50%
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold">Limited Offer</p>
                                <p className="text-gray-400 text-xs">Ends soon</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
