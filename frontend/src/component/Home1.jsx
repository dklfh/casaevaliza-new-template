import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
import Gallery1 from '../assets/image/home1.jpg';
import Gallery2 from '../assets/image/home2.jpg';
import Gallery3 from '../assets/image/home3.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home1 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={isSmallScreen ? { clickable: true } : false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-center tracking-custom relative flex flex-col items-center justify-center h-900 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Gallery1})` }}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className='max-w-lg lg:max-w-full'>
            <div className="relative z-10 flex justify-center text-bintang mb-6 gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="relative z-10 text-xs mb-6 font-barlow">UNIQUE PLACE TO RELAXE & ENJOY</p>
            <h1 className="relative z-10 text- lg:text-5xl font-gilda mb-6">CASA EVALIZA HOTEL EXPERIENCE</h1>
            {/* <button className="relative z-10 bg-coklat tracking-normal px-10 py-3 border-solid border-2 font-gilda border-white">FIND OUT MORE</button> */}
            <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10" href="#">find out more</a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="text-center tracking-custom relative flex flex-col items-center justify-center h-900 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Gallery2})` }}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className='max-w-lg lg:max-w-full'>
            <div className="relative z-10 flex justify-center text-bintang mb-6 gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="relative z-10 text-xs mb-6 font-barlow">UNIQUE PLACE TO RELAXE & ENJOY</p>
            <h1 className="relative z-10 text- lg:text-5xl font-gilda mb-6">CASA EVALIZA HOTEL IN THE WORLD</h1>
            {/* <button className="relative z-10 bg-coklat tracking-normal px-10 py-3 border-solid border-2 font-gilda border-white">FIND OUT MORE</button> */}
            <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10" href="#">find out more</a>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="text-center tracking-custom relative flex flex-col items-center justify-center h-900 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Gallery3})` }}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className='max-w-lg lg:max-w-full'>
            <div className="relative z-10 flex justify-center text-bintang mb-6 gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="relative z-10 text-xs mb-6 font-barlow">UNIQUE PLACE TO RELAXE & ENJOY</p>
            <h1 className="relative z-10 text- lg:text-5xl font-gilda mb-6">SUPERIOR RESTAURENT IN THE WORLD</h1>
            <a className="btn relative inline-block py-3 px-10 text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10" href="#">find out more</a>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default Home1
