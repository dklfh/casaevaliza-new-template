import React from 'react'

const About1 = () => {
  return (
    <div className="bg-white font-serif">
    <div className="w-full flex justify-center items-center py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://placehold.co/600x800" 
            alt="Dining Image 1" 
            className="w-auto h-auto object-cover" 
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-coklat uppercase tracking-widest font-gilda">Casaevaliza</p>
          <h2 className="text-4xl md:text-5xl font-gild font-bold my-4">About Casa Evaliza</h2>
          <p className="text-gray-600 font-gilda mb-4 text-sm md:text-base"> {/* Adjusted font size here */}
            Casa Evaliza is a spacious Bali rental villa, located 250 metres from the beach in the upmarket Seminyak area on Bali's southwest coast and accessed through the same road which serves the Club at the Legian Suites Hotel, and just minutes walk from the world famous Kudeta restaurant.
          </p>
          <p className="text-gray-600 font-gilda mb-8 text-sm md:text-base"> {/* Adjusted font size here */}
            Positioned on a block of 1200m2 (just over a quarter of an acre), and fully refurbished in 2009, the contemporary Balinese architectural design featuring a blend of both modern and traditional elements presents a splendid villa boasting four bedrooms, and extensive living and dining areas. The wrap around balcony on the second floor and high ceilings found throughout the residence provides a colonial twist and the ultimate luxurious blend of space and style.
          </p>
          <p className="text-gray-600 font-gilda mb-8 text-sm md:text-base"> {/* Adjusted font size here */}
            The sizeable gardens showcase a terraced lawn and a 14-metre swimming pool, together with a poolside 'bale' relaxation pavilion, presenting an ideal setting for weddings, parties and other special events. This inspiring Bali villa is a peaceful oasis in the heart of a trendy district. It is ideal for families and couples alike and has an extensive dedicated staff.
          </p>
          <img 
            src="https://placehold.co/200x100" 
            alt="Signature" 
            className="w-32 h-auto" 
          />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default About1
