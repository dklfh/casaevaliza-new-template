import React from 'react'
import { FaStar } from "react-icons/fa6";


const Kitchen1 = () => {
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
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-gilda">Kitchen</h1>
        <p class="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        The fully equipped, modern kitchen is strategically positioned between the Living & Dining Pavilion and the staff service area.
        </p>
        <p class="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
        Presenting fresh white walls, grey marble work surfaces, a central island bench and immaculate stainless steel appliances, this is both a workspace and a space of inspiration.</p>
    </div>
</div>
  )
}

export default Kitchen1
