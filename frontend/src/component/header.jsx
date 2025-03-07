import React from 'react'
import { FaStar } from "react-icons/fa6";

function Header({ subtitle, title, paragraphs }) {
  return (
    <div>
      <section className='py-20 my-[40px] sm:my-[60px] md:my-[80px]"'>
        <div className='max-w-1140 px-4 mx-auto'>
          <div className='px-4'>
            <div className='flex text-bintang gap-0.5'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h2 className='mt-3 mb-1 font-gilda tracking-custom text-text2'>{subtitle}</h2>
            <h1 className='font-gilda mb-5 text-text text-3xl sm:text-4xl md:text-5xl'>{title}</h1>
            {paragraphs.map((paragraph, index) => (
              <p className='font-barlow text-15 text-text2 mb-5'>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
