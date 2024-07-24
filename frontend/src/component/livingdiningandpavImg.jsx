import React from 'react'
import LivImg1 from '../assets/image/livingdinning.jpg';

const livingdiningandpavImg = () => {
  return (
    <div class="w-auto h-[410px] bg-cover bg-center" style={{ backgroundImage: `url(${LivImg1})` }}>
            <div class="bg-black bg-opacity-50 w-full h-full">
                <div class="container mx-auto h-full flex items-center justify-center">
                    <div class="text-center mt-8 sm:mt-12 md:mt-16">
                        <h5 class="text-white text-[18px] font-gilda mb-[13px]">Luxury Hotel                      </h5>
                        <h1 class="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white mb-[20px] font-gilda">Living & Dining Pavilion 
                        </h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default livingdiningandpavImg
