import React from 'react'
import img from '../assets/image/forhome.png'

const About1 = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center py-20">
        <div className="xl:max-w-1140 lg:max-w-960 md:max-w-2xl max-w-lg px-4 mx-auto py-100 flex flex-col lg:flex-row lg:space-x-8 gap-8">
          <div className='min-w-lg'>
            <img
              src={img}
              alt="Dining Image 1"
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-coklat uppercase tracking-custom font-playfair  text-15">The Casaevaliza Hotel</p>
            <h2 className="text-4xl md:text-45 text-text font-gilda my-4">Welcome to Casa Evaliza</h2>
            <p className="text-text2 font-gilda mb-4 text-sm md:text-15 tracking-wider leading-7">
              Casa Evaliza is a spacious Bali rental villa, located 250 metres from the beach in the up market Seminyak area on Bali's southwest coast and accessed through the same road which serves the Club at The Legian Hotel, and just minutes walk from the world famous Ku De Ta restaurant.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About1
