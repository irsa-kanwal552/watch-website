import React from 'react'
import { FiClock, FiPercent, FiGift } from 'react-icons/fi'

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: "Hot Summer Sale",
      description: "Up to 30% off on our summer watch collection",
      discount: '30%',
      endDate: '2026-08-31',
      code: "SUMMER30",
      bgColor: 'bg-amber-200',
      textColor: 'text-amber-700'
    },
    {
      id: 2,
      title: "Free Watch Offer",
      description: "Get a free watch when you buy two products from our luxury brands",
      discount: 'Gift',
      endDate: '2026-09-21',
      code: "FREEWATCH",
      bgColor: 'bg-purple-200',
      textColor: 'text-purple-700'
    },
    {
      id: 3,
      title: "New Launch Discount",
      description: "20% off on our newly launched watches",
      discount: '20%',
      endDate: '2026-07-25',
      code: "NEW20",
      bgColor: 'bg-pink-200',
      textColor: 'text-pink-700'
    }
  ]

  return (
    <section id='offers' className='container scroll-mt-20 mx-auto px-4 py-24'>
      <h2 className='text-5xl font-bold text-center mb-4 text-amber-900'>Special Offers</h2>
      <p className='text-xl text-center text-gray-700 mb-16'>
        Take advantage of these limited-time offers
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {currentOffers.map((offer) => (
          <div key={offer.id}
            className={`${offer.bgColor} rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105`}>
            <div className='p-10 min-h-[420px] flex flex-col justify-between'>
              {/* Header */}
              <div className='flex justify-between items-start mb-6'>
                <h3 className={`${offer.textColor} text-2xl font-bold`}>
                  {offer.title}
                </h3>
                {offer.discount.includes('%') ? (
                  <span className='bg-white rounded-full p-4 shadow-md flex items-center justify-center'>
                    <FiPercent className={`${offer.textColor} text-2xl`} />
                  </span>
                ) : (
                  <span className='bg-white rounded-full p-4 shadow-md flex items-center justify-center'>
                    <FiGift className={`${offer.textColor} text-2xl`} />
                  </span>
                )}
              </div>

              {/* Description */}
              <p className='text-lg text-gray-800 mb-8 leading-relaxed'>
                {offer.description}
              </p>

              {/* End Date */}
              <div className='flex items-center text-gray-700 mb-8'>
                <FiClock className='mr-2 text-xl' />
                <span className='text-lg font-medium'>Ends on {offer.endDate}</span>
              </div>

              {/* Code Box */}
              <div className='bg-white rounded-lg p-5 mb-8 text-start'>
                <p className='text-lg text-gray-500 mb-1'>Use Code</p>
                <p className='font-mono font-bold text-2xl'>{offer.code}</p>
              </div>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-lg ${offer.textColor} font-semibold text-lg border ${offer.textColor.replace(
                  'text',
                  'border'
                )} hover:bg-white transition`}
              >
                Claim Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers
