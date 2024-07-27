import React from 'react'
import { FaStar } from "react-icons/fa6";

function TemplateImg2({ image, headText, subText }) {
  return (
    <div>
      <div className="w-auto h-[410px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="bg-black bg-opacity-50 w-full h-full">
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-center mt-8 sm:mt-12 md:mt-16 flex flex-col items-center">
              <div className='flex text-bintang gap-2 mb-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h5 className="text-white text-[10px] md:text-[18px] sm:text-[16px] font-gilda md:mb-[13px] mb-[1px] uppercase tracking-widest font-semibold">{subText}</h5>
              <h1 className="capitalize text-[30px] sm:text-[40px] md:text-[50px] lg:text-6xl text-white mb-[20px] font-gilda">{headText}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateImg2
