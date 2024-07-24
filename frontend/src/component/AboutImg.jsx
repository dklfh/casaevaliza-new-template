import React from 'react'
import AboutImg1 from '../assets/image/IMG-20240618-WA0003.jpg';

const AboutImg = () => {
    return (
    <div class="w-auto h-[410px] bg-cover bg-center"style={{ backgroundImage: `url(${AboutImg1})` }}>
    <div class="bg-black bg-opacity-50 w-full h-full">
        <div class="container mx-auto h-full flex items-center justify-center">
            <div class="text-center mt-8 sm:mt-12 md:mt-16">
                <h5 class="text-white text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] font-gilda mb-[13px]">Luxury Hotel</h5>
                <h1 class="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] text-white mb-[20px] font-gilda">Accommodation</h1>
            </div>
        </div>
    </div>
</div>

    )
}

export default AboutImg
