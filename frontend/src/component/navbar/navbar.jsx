import React, { useEffect, useState } from 'react';
import logo from '../../assets/image/logo casa.png';
import france from '../../assets/image/france.jpg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAccommodationDropdownOpen, setIsAccommodationDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setIsFacilitiesDropdownOpen] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenAccommodation, setIsOpenAccommodation] = useState(false);
  const [isOpenFacilities, setIsOpenFacilities] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path ? 'text-coklat' : 'text-regular';
  const isActive2 = (path) => location.pathname === path ? 'bg-black text-white' : 'bg-white text-black';
  const isActive3 = (path) => location.pathname === path ? 'border-coklat' : 'lg:hover:border-coklat';

  return (
    <div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-linear transform ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:justify-center xl:justify-between mx-auto px-4 py-1">
          <Link to="/" className={`flex items-center space-x-3 rtl:space-x-reverse ${isActive('/')}`}>
            <img src={logo} className="w-48" alt="casaevaliza Logo" />
          </Link>
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
                <Link to="/about" className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/about')}`}>About Casa Evaliza</Link>
              </li>
              <li
                className='relative'
                onMouseEnter={() => setIsOpenAccommodation(true)}
                onMouseLeave={() => setIsOpenAccommodation(false)}>
                <Link to="/acco"
                  className={`flex items-center py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/acco')}`}>
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
                </Link>
                <div
                  className={`absolute top-14 left-0 z-10 font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ${isOpenAccommodation ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-2 invisible'}`}>
                  <ul className="uppercase py-1 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link to="/master" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/master')}`}>Master Suite</Link>
                    </li>
                    <li>
                      <Link to="/guest" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/guest')}`}>Guest Bedroom</Link>
                    </li>
                    <li>
                      <Link to="/living" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/living')}`}>Living & Dining Pavilion</Link>
                    </li>
                    <li>
                      <Link to="/mediaroom" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/mediaroom')}`}>Media Room</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className='relative'
                onMouseEnter={() => setIsOpenFacilities(true)}
                onMouseLeave={() => setIsOpenFacilities(false)}>
                <Link to="/facilities"
                  className={`flex items-center py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/facilities')}`}>
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
                </Link>
                <div
                  className={`absolute top-14 left-0 z-10 font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ${isOpenFacilities ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-2 invisible'}`}>
                  <ul className="uppercase py-1 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link to="/kitchen" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/kitchen')}`}>Kitchen</Link>
                    </li>
                    <li>
                      <Link to="/swimmingpool" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/swimmingpool')}`}>Swimming Pool & Garden</Link>
                    </li>
                    <li>
                      <Link to="/privategym" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/privategym')}`}>Private Gym</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className='relative'
                onMouseEnter={() => setIsOpenServices(true)}
                onMouseLeave={() => setIsOpenServices(false)}>
                <Link to="/services"
                  className={`flex items-center py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/services')}`}>
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
                </Link>
                <div
                  className={`absolute top-14 left-0 z-10 font-semibold tracking-wide bg-coklat divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ${isOpenServices ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-2 invisible'}`}>
                  <ul className="uppercase py-1 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link to="/foodbeverages" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/foodbeverages')}`}>Food & Beverages</Link>
                    </li>
                    <li>
                      <Link to="/spaservices" className={`block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out ${isActive2('/spaservices')}`}>Spa Services</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/location" className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/location')}`}>Location</Link>
              </li>
              <li>
                <Link to="/gallery" className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/gallery')}`}>Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent transition-colors duration-300 ${isActive('/contact')}`}>Contact Us</Link>
              </li>
              <li>
                <Link to="/france" className="block py-2 px-3 rounded lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  <img className={`rounded-full size-7 transition-colors duration-300 border-4 ${isActive3('/france')}`} src={france} alt="image description" />
                </Link>
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
            <Link to="/about" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About Casa Evaliza</Link>
          </li>
          <li className={`relative ${isAccommodationDropdownOpen ? 'mb-12' : ''}`}>
            <div className='flex justify-between items-center'>
              <Link to="/acco" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Accommodation</Link>
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
                  <Link to="/mastersuite" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Master Suite</Link>
                </li>
                <li>
                  <Link to="/guest" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Guest Bedroom</Link>
                </li>
                <li>
                  <Link to="/living" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Living & Dining Pavilion</Link>
                </li>
                <li>
                  <Link to="/mediaroom" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Media Room</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={`relative ${isFacilitiesDropdownOpen ? 'mb-12' : ''}`}>
            <div className='flex justify-between items-center'>
              <Link to="/facilities" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Facilities</Link>
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
                  <Link to="/kitchen" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Kitchen</Link>
                </li>
                <li>
                  <Link to="/swimmpingpool" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Swimming Pool & Garden</Link>
                </li>
                <li>
                  <Link to="/privategym" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Private Gym</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={`relative ${isServicesDropdownOpen ? 'mb-12' : ''}`}>
            <div className='flex justify-between items-center'>
              <Link to="/services" className="flex items-center py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                Services
              </Link>
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
                  <Link to="/foodbeverages" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Food & Beverages</Link>
                </li>
                <li>
                  <Link to="/spaservices" className="block px-4 py-2 bg-white hover:bg-black dark:hover:bg-gray-600 hover:text-white transition-colors duration-300 ease-in-out">Spa Services</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/Locaton" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Location</Link>
          </li>
          <li>
            <Link to="/gallery" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-3 rounded lg:hover:bg-transparent lg:border-0 hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact Us</Link>
          </li>
          <li>
            <Link to="/france" className={`flex items-center py-2 px-3 rounded lg:hover:text-coklat lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent ${isActive('/france')}`}>
              France
              <img className="rounded-full size-7 border-4 ml-4" src={france} alt="image description" />
            </Link>
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
