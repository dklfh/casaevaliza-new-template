import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";




const OtherService = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col lg:flex-row lg:space-x-8">
      <div className="flex-1 mb-8 lg:mb-0">
        <h3 className="text-coklat text-lg font-barlow px-24">Best Prices</h3>
        <h2 className="text-6xl mb-4 font-island">Other Services</h2>
        <p className="text-black mb-4 font-barlow">The best prices for your relaxing vacation. The utanlisen quam nesitibulum ac quame odion elementum sceiuse the aucan.</p>
        <p className="text-black font-barlow mb-8">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbíne.</p>
        <div className="space-y-4">
          <div className="flex items-center text-coklat">
            <FaPhone />
            <p className='ml-1 text-black font-gilda'>+91 0009988767</p>
          </div>
          <div className="flex items-center text-coklat">
            <CiMail />
            <p className='ml-1 text-black font-gilda'>info@Rudrahotel.com</p>
          </div>
          <div className="flex items-center text-coklat">
            <CiGlobe />
            <p className='ml-1 text-black font-gilda'>www.rudra.com</p>
          </div>
        </div>
      </div>


      <div className="flex-1 lg:flex lg:space-x-8">
        <div className="bg-white shadow-lg mb-8 lg:mb-0 lg:flex-1 lg:w-2/3">
          <img src="https://placehold.co/600x400" alt="Classic Balcony Room" className="w-full" />
          <div className="p-6 bg-coklat">
            <h3 className="font-gilda text-3xl font-bold text-white">Classic Balcony Room</h3>
          </div>
          <div className="p-6">
            <p className="text-2xl text-coklat mb-4">
              <span className="text-4xl font-gilda text-coklat">$50</span>
              <span className="text-2xl font-gilda text-black">/month</span>
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex font-gilda items-center">
                <FaCheck className="mr-2  text-coklat" />
                Hotel ut nisan the duru
              </li>
              <li className="flex font-gilda items-center">
                <FaCheck className="mr-2 text-coklat" />
                Orci miss natoque vasa ince
              </li>
              <li className="flex font-gilda items-center">
                <FaCheck className="mr-2 text-coklat" />
                Clean sorem ipsum morbin
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg lg:flex-1">
        <img src="https://placehold.co/600x400" alt="Room cleaning" className="w-full" />
        <div className="p-6 bg-coklat">
          <h3 className="font-gilda text-3xl font-bold text-white">Room Cleaning</h3>
        </div>
        <div className="p-6">
          <p className="text-2xl text-coklat mb-4">
            <span className="text-4xl font-gilda text-coklat">$240</span>
            <span className="text-2xl font-gilda text-black">/month</span>
          </p>
          <ul className="text-gray-700 space-y-2">
              <li className="flex font-gilda items-center">
                <FaCheck className="mr-2  text-coklat" />
                Hotel ut nisan the duru
              </li>
              <li className="flex font-gilda items-center">
                <FaCheck className="mr-2 text-coklat" />
                Orci miss natoque vasa ince
              </li>
              <li className="flex font-gilda items-center">
                <FaCheck className="mr-2 text-coklat" />
                Clean sorem ipsum morbin
              </li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default OtherService
