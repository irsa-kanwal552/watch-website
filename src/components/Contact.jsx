import React from 'react'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen scroll-mt-30 bg-pink-950 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                    <h1 className='text-4xl font-serif font-bold text-white mb-4'>Contact Us</h1>
                    <p className='text-lg text-gray-200 max-w-2xl mx-auto'>Esse ipsam animi, dignissimos magni sit maxime ad sed corporis eveniet asperiores</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            
            <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
                <h2 className='text-2xl font-semibold font-serif text-gray-900'>Send Us a Message</h2>
            
              <form className='space-y-10'>
                <div>
                    <label className='block text-lg font-medium text-gray-800 mb-1'>Your name</label>
                    <input type="text" className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent'placeholder='Your name' />
                </div>
                <div>
                    <label className='block text-lg font-medium text-gray-800 mb-1'>Your Email</label>
                    <input type="email" className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent'placeholder='Your email@.com' />
                </div>
                <div>
                    <label className='block text-lg font-medium text-gray-800 mb-1'>Your Message</label>
                    <textarea rows="5"
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent'placeholder='Tells us about your watch need...'/>
                </div>
                <button className='h-full bg-pink-700 hover:bg-pink-900 text-white px-6 py-3 rounded-lg transition duration-300 font-medium shadow-md'>
                    Send Message
                </button>
              </form>
            </div>

            <div className='space-y-8'>
                <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
                  <h2 className='text-2xl font-semibold font-serif text-gray-900 mb-6 '>Contact Information</h2>
                    <div className='space-y-12'>

                        <div className='flex items-start'>
                            <div className='bg-pink-200 p-3 rounded-full mr-4'>
                                <FaPhone className='text-pink-900 text-xl'/>
                            </div>
                            <div>
                                <h3 className='text-xl font-medium text-gray-900'>Phone</h3>
                                <p className='text-gray-800'>+2(7577)659-8754</p>
                                <p className='text-gray-600 text-sm'>Mon-Fri:9am-6pm </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='bg-pink-200 p-3 rounded-full mr-4'>
                                <FaEnvelope className='text-pink-900 text-xl'/>
                            </div>
                            <div>
                                <h3 className='text-xl font-medium text-gray-900'>Email</h3>
                                <p className='text-gray-800'>contact@watch.com</p>
                                <p className='text-gray-600 text-sm'>support@watch.com </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                             <div className='bg-pink-200 p-3 rounded-full mr-4'>
                                <FaMapMarkerAlt className='text-pink-900 text-xl'/>
                             </div>
                             <div>
                                <h3 className='text-xl font-medium text-gray-900'>Our Botique</h3>
                                <p className='text-gray-800'>678 Watch Street</p>
                                <p className='text-gray-600 text-sm'>Pakistan,Lahore 54000</p>
                            </div>
                        </div>

                    </div>
                    <div className='mt-24'>
                        <h3 className='text-lg font-medium text-gray-900 mb-4'>Follow us</h3>
                        <div className='flex space-x-4'>
                            <a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                                <FaInstagram className='text-pink-950'/>
                            </a>
                            <a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                                <FaFacebook className='text-pink-950'/>
                            </a>
                            <a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                                <FaTwitter className='text-pink-950'/>
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