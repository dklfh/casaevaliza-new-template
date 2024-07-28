import React from 'react'
import logo from '../../assets/image/logo casa.png'
import { FaCaretRight } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-coklat' : '';
  };

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
                <FaCaretRight className={`mr-4 ${isActive('/')}`} />
                <Link to="/" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/')}`}>Home</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/about')}`} />
                <Link to="/about" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/about')}`}>About Casa Evaliza</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/acco')}`} />
                <Link to="/acco" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/acco')}`}>Accommodation</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/mastersuite')}`} />
                <Link to="/mastersuite" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/mastersuite')}`}>Master Suite</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/guest')}`} />
                <Link to="/guest" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/guest')}`}>Guest Bedroom</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/mediaroom')}`} />
                <Link to="/mediaroom" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/mediaroom')}`}>Media Room</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/swimmingpool')}`} />
                <Link to="/swimmingpool" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/swimmingpool')}`}>Swimming Pool & Garden</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/living')}`} />
                <Link to="/living" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/living')}`}>Living & Dining Pavilion</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/facilities')}`} />
                <Link to="/facilities" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/facilities')}`}>Facilities</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/kitchen')}`} />
                <Link to="/kitchen" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/kitchen')}`}>Kitchen</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/services')}`} />
                <Link to="/services" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/services')}`}>Services</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/foodbeverages')}`} />
                <Link to="/foodbeverages" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/foodbeverages')}`}>Food & Beverages</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/spaservices')}`} />
                <Link to="/spaservices" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/spaservices')}`}>Spa Services</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/location')}`} />
                <Link to="/location" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/location')}`}>Location</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/france')}`} />
                <Link to="/france" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/france')}`}>France</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/privategym')}`} />
                <Link to="/privategym" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/privategym')}`}>Private Gym</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/gallery')}`} />
                <Link to="/gallery" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/gallery')}`}>Gallery</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/contact')}`} />
                <Link to="/contact" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/contact')}`}>Contact Us</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/press')}`} />
                <Link to="/press" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/press')}`}>Press</Link>
              </li>
              <li className="flex items-center mb-1.5">
                <FaCaretRight className={`mr-4 ${isActive('/link')}`} />
                <Link to="/link" className={`block rounded lg:hover:text-coklat lg:p-0 transition-colors duration-300 ${isActive('/link')}`}>Link</Link>
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
