import React from 'react'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

const Contact = () => {
    return (
        <section id='contact' className='min-h-screen scroll-mt-20 bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl md:text-5xl font-serif font-bold text-white mb-4'>Contact Us</h1>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
                    <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
                        We are here to assist you with any inquiries about our exclusive timepieces. Reach out to us for personalized support.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                    <div className='bg-navy-950/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10'>
                        <h2 className='text-2xl font-semibold font-serif text-white mb-8'>Send Us a Message</h2>

                        <form className='space-y-6'>
                            <div>
                                <label className='block text-sm font-medium text-gold-500 mb-2 uppercase tracking-wide'>Your Name</label>
                                <input type="text" className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:ring-1 focus:ring-gold-500 focus:border-gold-500 text-white placeholder-gray-600 transition-colors' placeholder='John Doe' />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gold-500 mb-2 uppercase tracking-wide'>Your Email</label>
                                <input type="email" className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:ring-1 focus:ring-gold-500 focus:border-gold-500 text-white placeholder-gray-600 transition-colors' placeholder='email@example.com' />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gold-500 mb-2 uppercase tracking-wide'>Your Message</label>
                                <textarea rows="5"
                                    className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:ring-1 focus:ring-gold-500 focus:border-gold-500 text-white placeholder-gray-600 transition-colors' placeholder='Tell us about your requirements...' />
                            </div>
                            <button className='w-full bg-gold-500 hover:bg-gold-600 text-black px-6 py-4 rounded-lg transition duration-300 font-bold text-lg shadow-lg shadow-gold-500/10'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className='space-y-8'>
                        <div className='bg-white p-8 rounded-2xl shadow-xl border border-gray-100'>
                            <h2 className='text-2xl font-semibold font-serif text-navy-950 mb-8'>Contact Information</h2>
                            <div className='space-y-8'>

                                <div className='flex items-start'>
                                    <div className='bg-navy-50 p-4 rounded-full mr-5'>
                                        <FaPhone className='text-navy-900 text-xl' />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-navy-950 uppercase'>Phone</h3>
                                        <p className='text-gray-600 mt-1'>+1 (555) 123-4567</p>
                                        <p className='text-gray-500 text-sm'>Mon-Fri: 9am - 6pm EST</p>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <div className='bg-navy-50 p-4 rounded-full mr-5'>
                                        <FaEnvelope className='text-navy-900 text-xl' />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-navy-950 uppercase'>Email</h3>
                                        <p className='text-gray-600 mt-1'>concierge@chronomist.com</p>
                                        <p className='text-gray-500 text-sm'>24/7 Support</p>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <div className='bg-navy-50 p-4 rounded-full mr-5'>
                                        <FaMapMarkerAlt className='text-navy-900 text-xl' />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-navy-950 uppercase'>Boutique</h3>
                                        <p className='text-gray-600 mt-1'>678 Luxury Avenue</p>
                                        <p className='text-gray-500 text-sm'>New York, NY 10012</p>
                                    </div>
                                </div>

                            </div>
                            <div className='mt-12 pt-8 border-t border-gray-100'>
                                <h3 className='text-sm font-bold text-gray-500 mb-6 uppercase tracking-wide'>Follow us</h3>
                                <div className='flex space-x-4'>
                                    <a href="#" className='bg-gray-100 hover:bg-gold-500 hover:text-white p-3 rounded-full transition duration-300 text-gray-600'>
                                        <FaInstagram className='text-xl' />
                                    </a>
                                    <a href="#" className='bg-gray-100 hover:bg-gold-500 hover:text-white p-3 rounded-full transition duration-300 text-gray-600'>
                                        <FaFacebook className='text-xl' />
                                    </a>
                                    <a href="#" className='bg-gray-100 hover:bg-gold-500 hover:text-white p-3 rounded-full transition duration-300 text-gray-600'>
                                        <FaTwitter className='text-xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact