import React, { useEffect, useState } from 'react';
import logo from '../../assets/image/logo casa.png';
import france from '../../assets/image/france.jpg';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAccommodationDropdownOpen, setIsAccommodationDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setIsFacilitiesDropdownOpen] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenAccommodation, setIsOpenAccommodation] = useState(false);
  const [isOpenFacilities, setIsOpenFacilities] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-linear transform ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:justify-center xl:justify-between mx-auto px-4 py-1">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-48" alt="casaevaliza Logo" />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            {isNavOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
            )}
          </button>
          <div className="hidden w-full lg:block lg:w-auto font-gilda text-sm">
            <ul className={`flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row items-center ${isScrolled ? 'text-black' : 'text-white'} lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700`}>
              <li>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 transition-colors duration-300">About Casa Evaliza</a>
              </li>
              <li
                className='relative'
                onMouseEnter={() => setIsOpenAccommodation(true)}
                onMouseLeave={() => setIsOpenAccommodation(false)}>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">
                  Accommodation
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${isOpenAccommodation ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </a>
                <div
                  className={`absolute top-14 left-0 z-10 font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ${isOpenAccommodation ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-2 invisible'}`}>
                  <ul className="uppercase py-1 text-sm text-gray-700 dark:text-gray-400">
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
              <li
                className='relative'
                onMouseEnter={() => setIsOpenFacilities(true)}
                onMouseLeave={() => setIsOpenFacilities(false)}>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">
                  Facilities
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${isOpenFacilities ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </a>
                <div
                  className={`absolute top-14 left-0 z-10 font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ${isOpenFacilities ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-2 invisible'}`}>
                  <ul className="uppercase py-1 text-sm text-gray-700 dark:text-gray-400">
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
              <li
                className='relative'
                onMouseEnter={() => setIsOpenServices(true)}
                onMouseLeave={() => setIsOpenServices(false)}>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">
                  Services
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${isOpenServices ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </a>
                <div
                  className={`absolute top-14 left-0 z-10 font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ${isOpenServices ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-2 invisible'}`}>
                  <ul className="uppercase py-1 text-sm text-gray-700 dark:text-gray-400">
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
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Location</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300">Contact Us</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  <img className="rounded-full size-7 lg:hover:border-coklat transition-colors duration-300 border-4" src={france} alt="image description" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 shadow-lg font-gilda transition-all duration-500 ease-linear transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent text-white'} z-40 overflow-y-auto`}>
        <ul className="p-4 pr-10 mt-24 space-y-4">
          <li>
            <a href="#" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About Casa Evaliza</a>
          </li>
          <li className={`relative ${isAccommodationDropdownOpen ? 'mb-12' : ''}`}>
            <div className='flex justify-between items-center'>
              <a href="#" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Accommodation</a>
              <svg
                onClick={() => setIsAccommodationDropdownOpen(!isAccommodationDropdownOpen)}
                className={`w-2.5 h-2.5 ms-2.5 transition-transform transform cursor-pointer duration-300 ease-in-out ${isAccommodationDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </div>
            <div className={`uppercase font-semibold  bg-coklat divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${isAccommodationDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
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
          <li className={`relative ${isFacilitiesDropdownOpen ? 'mb-12' : ''}`}>
            <div className='flex justify-between items-center'>
              <a href="#" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Facilities</a>
              <svg
                onClick={() => setIsFacilitiesDropdownOpen(!isFacilitiesDropdownOpen)}
                className={`w-2.5 h-2.5 ms-2.5 transition-transform transform cursor-pointer duration-300 ease-in-out ${isFacilitiesDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </div>
            <div className={`uppercase font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${isFacilitiesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
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
          <li className={`relative ${isServicesDropdownOpen ? 'mb-12' : ''}`}>
            <div className='flex justify-between items-center'>
              <a href="#" className="flex items-center py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                Services
              </a>
              <svg
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`w-2.5 h-2.5 ms-2.5 transition-transform transform cursor-pointer duration-300 ease-in-out ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </div>
            <div className={`uppercase font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${isServicesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
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
            <a href="#" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Location</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Gallery</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact Us</a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-3 rounded lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
              France
              <img className="rounded-full size-7 border-4 ml-4" src={france} alt="image description" />
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleNav}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
