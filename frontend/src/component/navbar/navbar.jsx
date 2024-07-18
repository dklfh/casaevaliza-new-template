import React from 'react'
import logo from '../../assets/image/casa-evaliza-removebg-preview.png'

function Navbar() {
  return (
    <div>
      <div className='font-gilda'>
        <div className='flex'>
          <div className='bg-yellow-300'>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
