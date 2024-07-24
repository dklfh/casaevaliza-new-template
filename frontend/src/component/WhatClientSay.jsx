import React, { useState, useEffect } from 'react';
import image from '../assets/image/contact.jpg';
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const WhatClientSay = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white py-130">
                <div className="">
                    <div className="sm:px-4 mx-auto max-w-screen-lg">
                        <div className='text-white mb-12'>
                            <h3 className='uppercase font-barlowcondensed text-15 tracking-custom'>testimonials</h3>
                            <h1 className='font-island text-45'>What Client's Say?</h1>
                        </div>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={isSmallScreen ? { clickable: true } : false}
                            modules={[Pagination, Navigation]}
                            className='mySwiper'>

                            <SwiperSlide>
                                <div className='px-4 mb-14 lg:mb-0'>
                                    <img
                                        className="lg:size-36 size-20 rounded-full border-4 border-white mx-auto"
                                        src="https://placehold.co/96x96"
                                        alt="Client Photo"
                                    />
                                    <div className='flex justify-center'>
                                        <p className="text-gray-200 mb-5 px-7 pt-8 pb-3 font-rubik lg:w-4/5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <RiDoubleQuotesL className='rotate-180 size-10' />
                                    </div>
                                    <h4 className="text-xl font-gilda pt-1 font-bold">Roberta Cozza</h4>
                                    <p className="text-white text-xs pt-1 font-barlow">General Director</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='px-4 mb-14 lg:mb-0'>
                                    <img
                                        className="lg:size-36 size-20 rounded-full border-4 border-white mx-auto"
                                        src="https://placehold.co/96x96"
                                        alt="Client Photo"
                                    />
                                    <div className='flex justify-center'>
                                        <p className="text-gray-200 mb-5 px-7 pt-8 pb-3 font-rubik lg:w-4/5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <RiDoubleQuotesL className='rotate-180 size-10' />
                                    </div>
                                    <h4 className="text-xl font-gilda pt-1 font-bold">Jessica UK</h4>
                                    <p className="text-white text-xs pt-1 font-barlow">General Manager</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatClientSay;