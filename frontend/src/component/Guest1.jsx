import React from 'react'
import { FaStar } from "react-icons/fa6";


const Guest1 = () => {
  return (
    <div className="bg-white text-gray-800 font-playfair my-[40px] sm:my-[60px] md:my-[80px]">
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4">
            <div className="flex text-yellow-500 space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </div>
        <span className="mt-2 sm:mt-auto text-coklat mb-2">A EXPERIENCE FOR THE SENSE</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-gilda">Guest Bedroom</h1>
        <p className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        The three air-conditioned guest bedrooms are located on the upper floor, accessed by a timber-clad staircase. Two of the rooms are bordered by a delightful covered balcony with a timber floor and elevated views of the garden. The balcony runs the length of the building and is furnished with a sofa, rattan chairs and a glass-topped table.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        The 'Poster Room' presents a fresh green and white colonial theme, with a romantic, king-size four poster bed, framed botanical prints on the walls and two white wicker planter chairs.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        The Kids' Room has a bunk bed where up to 5 kids can easily sleep. Thanks to an extension on a gorgeous featherbed, the room can be converted into a king size bedroom suitable for adult guests and couples.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        On the south side of the villa is the slightly smaller Zen Room, furnished with a queen size bed and its own ensuite bathroom with shower.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        All of these bedrooms are equipped with 30" flat screen TVs and DVD players. Two of the ensuite bathrooms are fitted with bathtubs, and all three have walk-in rain showers.
        </p>
    </div>
</div>
  )
}

export default Guest1
