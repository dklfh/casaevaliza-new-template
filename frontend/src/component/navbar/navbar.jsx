import React from 'react';
import logo from '../../assets/image/casa-evaliza-removebg-preview.png';

function Navbar() {
  return (
    <div>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-48" alt="casaevaliza Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto font-gilda text-sm" id="navbar-default">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Casa Evaliza</a>
              </li>
              <li className='relative group'>
                <a href="#" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Accommodation
                  <svg className="w-2.5 h-2.5 ms-2.5 transition-transform transform group-hover:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </a>
                <div id="dropdownNavbar" className="uppercase absolute left-0 z-10 hidden group-hover:block font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Master Suite</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Guest Bedroom</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Living & Dining Pavilion</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Media Room</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='relative group'>
                <a href="#" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Facilities
                  <svg className="w-2.5 h-2.5 ms-2.5 transition-transform transform group-hover:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </a>
                <div id="dropdownNavbar2" className="uppercase absolute left-0 z-10 hidden group-hover:block font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Kitchen</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Swimming Pool & Garden</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Private Gym</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='relative group'>
                <a href="#" className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Services
                  <svg className="w-2.5 h-2.5 ms-2.5 transition-transform transform group-hover:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </a>
                <div id="dropdownNavbar3" className="uppercase absolute left-0 z-10 hidden group-hover:block font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Food & Beverages</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Spa Services</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Location</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;