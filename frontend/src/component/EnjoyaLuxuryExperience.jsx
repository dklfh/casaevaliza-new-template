import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";


const EnjoyaLuxuryExperience = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 space-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <span className=" text-coklat">THE LUXURY HOTEL</span>
        <h1 className="text-5xl font font-gilda mt-4">Enjoy a Luxury Experience</h1>
        <p className="text-gray-600 mt-4 leading-relaxed font-barlow">
          Casa Evaliza boasts a dining service with a wonderful array of international dishes. Many Western meals are available, but we recommend you to try some of the local Balinese dishes for a unique cultural experience!

          Dinner parties and small functions can all catered within the villa for group of maximum twelve guests. Please ask the chef or manager for more details at any time of the day, whether you are requesting breakfast, lunch, dinner, or snacks.
        </p>
        <div class="mt-16">
          <p class="text-gray-500 ml-9 font-gilda">Reservation</p>
          <div class="flex items-center space-x-2 text-lg text-brown-700">
            <FaPhone className='text-coklat size-6'/>
            <span className='font-barlow text-coklat'>+91 0009988767</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EnjoyaLuxuryExperience
