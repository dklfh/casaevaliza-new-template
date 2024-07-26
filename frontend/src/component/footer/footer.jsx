import React from 'react'
import logo from '../../assets/image/logo casa.png'
import { FaCaretRight } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className='py-20 font-gilda bg-footer'>
        <div className='max-w-1140 px-4 mx-auto flex flex-wrap text-white'>
          <div className='w-full mb-4 md:w-1/2 lg:w-1/3 px-4'>
            <img src={logo} alt="Logo Casa Evaliza" className='w-36 mb-9' />
            <p className='font-barlow mb-4 text-15'>We are many variations suffered of passages available but of the majority have suffered.</p>
          </div>
          <div className='w-full mb-4 md:w-1/2 lg:w-1/3 px-4'>
            <div className='mb-5'>
              <h5 className='text-lg font-semibold'>Useful Links</h5>
              <hr className="h-0.5 w-14 ml-1 bg-coklat border-0"></hr>
            </div>
            <ul className="text-sm font-medium grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/" className="block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Home</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/about" className="block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">About Casa Evaliza</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/acco" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>Accommodation</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/mastersuite" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Master Suite</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/guest" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Guest Bedroom</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/mediaroom" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Media Room</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/swimmingpool" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Swimming Pool & Garden</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/living" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Living & Dining Pavilion</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/facilities" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Facilities</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/kitchen" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Kitchen</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/services" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Services</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/foodbeverages" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Food & Beverages</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/spaservices" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Spa Services</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/location" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Location</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/france" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  France</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/privategym" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>Private Gym</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/gallery" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Gallery</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/contact" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Contact Us</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/press" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>Press</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <Link to="/link" className='block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300'>
                  Link</Link>
              </li>
            </ul>
          </div>
          <div className='w-full mb-4 lg:w-1/3 px-4'>
            <div className='mb-5'>
              <h5 className='text-lg font-semibold'>Newsletter</h5>
              <hr className="h-0.5 w-14 ml-1 bg-coklat border-0"></hr>
            </div>
            <p className='font-barlow text-15 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit</p>
            <input type="text" id="large-input" className="block w-full p-4 mb-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-coklat focus:border-coklat" placeholder='Email' />
            <a className="btn relative inline-block py-3 px-10 text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden z-10" href="#">
              <div className='flex items-center'>
                <MdOutlineMailOutline className='size-6 mr-2' />Subscribe Now
              </div>
            </a>
          </div>
        </div>

      </footer>
      <div className='p-2 text-center text-15'>
        <p className='font-barlow text-slate-600'>Copyright © <a href='#' className='text-black'>Casa Evaliza all rights reserved.</a> </p>
      </div>
    </div>
  )
}

export default Footer
