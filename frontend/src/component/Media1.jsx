import React from 'react'
import { FaStar } from "react-icons/fa6";


const Media1 = () => {
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
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-gilda">Media Room
        </h1>
        <p class="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        The Media Room is situated on the ground floor next to the living & dining area. This cosy, air-conditioned room is accessed by folding glass doors and features a cool terrazzo floor.
        </p>
        <p class="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        A built-in L-shaped couch hugs the walls, creating a comfortable space for watching the 45" satellite-channel TV, complete with DVD/CD player and a good selection of DVDs. WiFi Internet access is available throughout the villa.</p>
    </div>
</div>
  )
}

export default Media1
