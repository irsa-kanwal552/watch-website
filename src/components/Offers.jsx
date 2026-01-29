import React from 'react'
import { FiClock, FiPercent, FiGift } from 'react-icons/fi'

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: "Summer Prestige",
      description: "Exclusive 30% off on our summer luxury collection.",
      discount: '30%',
      endDate: '2026-08-31',
      code: "LUXE30",
      bgColor: 'bg-navy-900',
      textColor: 'text-white',
      accentColor: 'text-gold-400'
    },
    {
      id: 2,
      title: "Collector's Gift",
      description: "Receive a complimentary travel case with 2+ purchases.",
      discount: 'Gift',
      endDate: '2026-09-21',
      code: "FREECASE",
      bgColor: 'bg-gold-50',
      textColor: 'text-navy-950',
      accentColor: 'text-gold-600'
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Introductory 20% privilege on new season models.",
      discount: '20%',
      endDate: '2026-07-25',
      code: "NEWERA",
      bgColor: 'bg-black',
      textColor: 'text-white',
      accentColor: 'text-gray-400'
    }
  ]

  return (
    <section id='offers' className='container scroll-mt-20 mx-auto px-6 py-24'>
      <div className="text-center mb-16">
        <h2 className='text-4xl font-serif font-bold text-navy-950 mb-4'>Exclusive Privileges</h2>
        <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto font-light'>
          For our distinguished clientele, we offer these exceptional opportunities.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {currentOffers.map((offer) => (
          <div key={offer.id}
            className={`${offer.bgColor} rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100`}>
            <div className='p-8 min-h-[400px] flex flex-col justify-between relative'>
              {/* Header */}
              <div className='flex justify-between items-start mb-6'>
                <h3 className={`${offer.textColor} text-2xl font-serif font-bold tracking-wide`}>
                  {offer.title}
                </h3>
                {offer.discount.includes('%') ? (
                  <span className='bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 flex items-center justify-center'>
                    <FiPercent className={`${offer.accentColor} text-2xl`} />
                  </span>
                ) : (
                  <span className='bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 flex items-center justify-center'>
                    <FiGift className={`${offer.accentColor} text-2xl`} />
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`${offer.textColor} opacity-80 text-lg mb-8 leading-relaxed font-light`}>
                {offer.description}
              </p>

              {/* Bottom Section */}
              <div>
                {/* End Date */}
                <div className={`flex items-center ${offer.textColor} opacity-70 mb-6 text-sm uppercase tracking-widest`}>
                  <FiClock className='mr-2' />
                  <span>Valid until {offer.endDate}</span>
                </div>

                {/* Code Box */}
                <div className='bg-white/10 backdrop-blur md rounded-lg p-5 mb-6 border border-white/10'>
                  <p className={`${offer.textColor} opacity-60 text-xs uppercase tracking-widest mb-1`}>Promotion Code</p>
                  <p className={`${offer.textColor} font-mono font-bold text-xl tracking-widest`}>{offer.code}</p>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-colors duration-300 
                    ${offer.bgColor === 'bg-gold-50'
                      ? 'bg-navy-950 text-white hover:bg-navy-800'
                      : 'bg-white text-navy-950 hover:bg-gold-400'}`}
                >
                  Redeem Offer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers
