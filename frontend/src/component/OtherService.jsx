import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const OtherService = () => {
  return (
    <div className='bg-bgcoklat'>
      <div className="xl:max-w-1140 lg:max-w-960 md:max-w-2xl max-w-lg px-4 mx-auto py-100 flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 mb-8 lg:mb-0 lg:w-2/6">
          <div className='w-fit text-center mb-4'>
            <h3 className="text-coklat text-15 tracking-custom uppercase font-barlowcondensed">Best Prices</h3>
            <h2 className="text-45 text-text font-island">Other Services</h2>
          </div>
          <p className="text-black text-15 mb-5 font-barlow">The best prices for your relaxing vacation. The utanlisen quam nesitibulum ac quame odion elementum sceiuse the aucan.</p>
          <p className="text-black text-15 mb-5 font-barlow">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbíne.</p>
          <div className="space-y-3">
            <div className="flex items-center text-coklat">
              <FaPhone className='text-xl' />
              <p className='ml-3 text-15 tracking-widest text-black font-gilda'>+62 813-3840-0215</p>
            </div>
            <div className="flex items-center text-coklat">
              <CiMail className='text-xl' />
              <p className='ml-3 text-15 tracking-widest text-black font-gilda'>ecommerce.casaevaliza@gmail.com</p>
            </div>
            <div className="flex items-center text-coklat">
              <CiGlobe className='text-xl' />
              <p className='ml-3 text-15 tracking-widest text-black font-gilda'>www.casaevaliza.com</p>
            </div>
          </div>
        </div>

        <div className='lg:w-4/6'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            modules={[Pagination, Navigation]}
            className='mySwiper'
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}>

            <SwiperSlide>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="bg-white shadow-lg rounded-lg lg:flex-1 mb-14">
                <img src="https://placehold.co/600x400" alt="Room cleaning" className="w-full" />
                <div className="p-6 bg-coklat">
                  <h3 className="font-gilda text-2xl font-bold text-white">Classic Balcony Room</h3>
                </div>
                <div className='bg-coklat pb-1'>
                  <div className="p-6 bg-white">
                    <p className="text-2xl text-coklat mb-5">
                      <span className="text-40 font-gilda text-coklat">$50</span>
                      <span className="text-15 font-barlow text-slate-600">/month</span>
                    </p>
                    <ul className="text-15 space-y-1">
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2  text-coklat" />
                        Hotel ut nisan the duru
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Orci miss natoque vasa ince
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="bg-white shadow-lg rounded-lg lg:flex-1 mb-14">
                <img src="https://placehold.co/600x400" alt="Room cleaning" className="w-full" />
                <div className="p-6 bg-coklat">
                  <h3 className="font-gilda text-2xl font-bold text-white">Room Cleaning</h3>
                </div>
                <div className='bg-coklat pb-1'>
                  <div className="p-6 bg-white">
                    <p className="text-2xl text-coklat mb-5">
                      <span className="text-40 font-gilda text-coklat">$240</span>
                      <span className="text-15 font-barlow text-slate-600">/month</span>
                    </p>
                    <ul className="text-15 space-y-1">
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2  text-coklat" />
                        Hotel ut nisan the duru
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Orci miss natoque vasa ince
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg lg:flex-1 mb-14">
                <img src="https://placehold.co/600x400" alt="Room cleaning" className="w-full" />
                <div className="p-6 bg-coklat">
                  <h3 className="font-gilda text-2xl font-bold text-white">Superior Double Room</h3>
                </div>
                <div className='bg-coklat pb-1'>
                  <div className="p-6 bg-white">
                    <p className="text-2xl text-coklat mb-5">
                      <span className="text-40 font-gilda text-coklat">$126</span>
                      <span className="text-15 font-barlow text-slate-600">/month</span>
                    </p>
                    <ul className="text-15 space-y-1">
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2  text-coklat" />
                        Hotel ut nisan the duru
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Orci miss natoque vasa ince
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-lg lg:flex-1 mb-14">
                <img src="https://placehold.co/600x400" alt="Room cleaning" className="w-full" />
                <div className="p-6 bg-coklat">
                  <h3 className="font-gilda text-2xl font-bold text-white">Balcony Double Room</h3>
                </div>
                <div className='bg-coklat pb-1'>
                  <div className="p-6 bg-white">
                    <p className="text-2xl text-coklat mb-5">
                      <span className="text-40 font-gilda text-coklat">$89</span>
                      <span className="text-15 font-barlow text-slate-600">/month</span>
                    </p>
                    <ul className="text-15 space-y-1">
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2  text-coklat" />
                        Hotel ut nisan the duru
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Orci miss natoque vasa ince
                      </li>
                      <li className="flex font-gilda items-center">
                        <FaCheck className="mr-2 text-coklat" />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination text-left"></div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default OtherService
