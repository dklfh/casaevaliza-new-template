import React from 'react'
import { FaStar } from "react-icons/fa6";

const Acco1 = () => {
  return (
    <div class="bg-white text-gray-800 font-playfair my-[40px] sm:my-[60px] md:my-[80px]">
    <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <div class="flex items-center mb-4">
            <div class="flex text-yellow-500 space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </div>
        <span class="mt-2 sm:mt-auto text-coklat mb-2">A EXPERIENCE FOR THE SENSE</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-gilda">Accommodation</h1>
        <p class="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
            Accommodations at Casa Evaliza comprise an expansive living & dining room, an air-conditioned media room, and four air-conditioned bedrooms complete with ensuite bathrooms.
        </p>
        <p class="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
            The bedrooms are situated in a two-storey building, which stands adjacent to the single storey pavilion that houses the living and dining areas. Each bedroom is equipped with a satellite-channel TV and DVD player, and a safe deposit box, while WiFi Internet is accessible throughout the property.
        </p>
    </div>
</div>
  )
}

export default Acco1
