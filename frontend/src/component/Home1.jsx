import React from 'react'
import { FaStar } from "react-icons/fa6";


const Home1 = () => {
  return (
    <div className="bg-gray-900 font-playfair">
  <div
    className="w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hotel,room')" }}
  >
    <div className="container mx-auto h-full flex items-center justify-center">
      <div className="text-center text-white">
        <div className="flex justify-center text-yellow-500 mb-6">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <p className="text-xs mb-6 font-barlow">UNIQUE PLACE TO RELAX & ENJOY</p>
        <h1 className="text-5xl font-gilda mb-6">CASA EVALIZA EXPERIENCE</h1>
        <button className="bg-coklat text-xs text-white px-10 py-3 border-solid border-2 font-gilda border-white">FIND OUT MORE</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home1
