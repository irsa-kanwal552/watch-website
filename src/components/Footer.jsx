import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiApplepay, SiMastercard, SiPaypal, SiVisa } from 'react-icons/si';

const Footer = () => {
  const sections = [
    {
      title: 'Quick links',
      links: ['Home', 'Shop', 'New Arrivals', 'Best Sellers', 'Gift Sets'],
    },
    {
      title: 'Customer Services',
      links: ['Contact Us', 'FAQs', 'Shipping Policy', 'Returns & Exchange', 'Privacy Policy'],
    },
  ];

  const socialIcons = [FaFacebook, FaTwitter, FaInstagram];
  const paymentIcons = [SiVisa, SiMastercard, SiPaypal, SiApplepay];
  return (
    <footer className='bg-black text-gray-400 pt-16 pb-8 border-t border-gray-900'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Section */}
          <div>
            <h3 className='text-3xl font-bold text-white mb-6 tracking-wide'>Chrono<span className="text-gold-500">Mist</span></h3>
            <p className='mb-6 leading-relaxed text-sm'>
              Elevating your style with timeless elegance. ChronoMist offers premium timepieces for the modern individual.
            </p>
            <div className='flex space-x-4'>
              {socialIcons.map((Icon, i) => (
                <a href="#" key={i} className='text-gray-400 hover:text-gold-500 transition-colors duration-300'>
                  <Icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {sections.map(({ title, links }, i) => (
            <div key={i}>
              <h3 className='text-lg font-bold text-white mb-6 uppercase tracking-wider'>{title}</h3>
              <ul className='space-y-3'>
                {links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className='text-sm hover:text-gold-500 transition-colors duration-200'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className='text-lg font-bold text-white mb-6 uppercase tracking-wider'>Newsletter</h3>
            <p className='mb-4 text-sm'>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className='flex flex-col space-y-3'>
              <input
                type="email"
                placeholder='Your email address'
                className='px-4 py-3 w-full bg-gray-900 border border-gray-800 rounded text-white focus:outline-none focus:border-gold-500 transition-colors'
                required
              />
              <button type='submit' className='bg-gold-500 hover:bg-gold-600 text-black font-bold px-4 py-3 rounded transition-colors duration-300'>
                Subscribe
              </button>
            </form>
            <div className='mt-6 flex items-center text-sm'>
              <FaEnvelope className='w-4 h-4 mr-2 text-gold-500' />
              <span>support@chronomist.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm'>
          <p>&copy; {new Date().getFullYear()} ChronoMist. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0 opacity-70'>
            {paymentIcons.map((Icon, i) => (
              <Icon key={i} className='h-8 w-8' />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
