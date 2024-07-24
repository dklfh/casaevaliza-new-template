import React from 'react'
import logo from '../../assets/image/logo casa.png'
import { FaCaretRight } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

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
            <ul className="text-sm font-medium">
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <a href="#" className="block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Home</a>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <a href="#" className="block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">About</a>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <a href="#" className="block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Link</a>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className='mr-4' />
                <a href="#" className="block rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Press</a>
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
