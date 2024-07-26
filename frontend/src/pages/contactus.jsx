import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import Templateimg from '../component/TemplateImg'
import img from '../assets/image/contact.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import TemplateImg2 from '../component/TemplateImg2';

function Contactus() {
  const [backgroundImage] = useState(img);
  const [subheadingText] = useState("any question?");
  const [headingText] = useState("contact us");

  return (
    <div>
      <Navbar />
      <TemplateImg2 image={img} headText={headingText} subText={subheadingText}/>
      <section className='py-20'>
        <div className='max-w-1140 lg:px-4 mx-auto lg:flex px-7 max-sm:px-0'>
          <div className="lg:w-2/4 px-4 mb-9 lg:mb-0">
            <h1 className="font-gilda text-2xl mb-5 text-text">The Casa Evaliza Hotel</h1>
            <p className="font-barlow text-15 mb-5 text-text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro eveniet nobis, dolor consequuntur itaque? Atque facilis eum quos, optio velit deleniti fugit, veniam quod quas doloremque perspiciatis odio debitis.
            </p>
            <div className="flex flex-col sm:flex-row mb-5 items-start sm:items-center gap-3 sm:gap-5">
              <BsTelephone className="text-2xl text-coklat" />
              <div>
                <p className="font-barlow text-15 text-text2">Booking</p>
                <a href="tel:+6281338400215" className="font-barlowcondensed lg:text-2xl text-xl text-coklat font-semibold tracking-wider">+62 813-3840-0215</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mb-5 items-start sm:items-center gap-3 sm:gap-5">
              <MdOutlineMail className="text-2xl text-coklat" />
              <div>
                <p className="font-barlow text-15 text-text2">Email Info</p>
                <a href="mailto:ecommerce.casaevaliza@gmail.com" className="font-barlowcondensed lg:text-2xl text-xl text-coklat font-semibold tracking-wider">ecommerce.casaevaliza@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mb-5 items-start sm:items-center gap-3 sm:gap-5">
              <IoLocationOutline className="text-2xl text-coklat" />
              <div className="lg:max-w-60">
                <p className="font-barlow text-15 text-text2">Address</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Kayu+Aya+No.14B,+Seminyak,+Kec.+Kuta,+Kabupaten+Badung,+Bali+80361" target="_blank" rel="noopener noreferrer" className="font-gilda mb-4">Jl. Kayu Aya No.14B, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361</a>
              </div>
            </div>
          </div>

          <div className='lg:w-2/4'>
            <div className='px-4 mb-8 lg:ml-24'>
              <h1 className='font-gilda text-2xl mb-5 text-text'>Get In Touch</h1>
              <div>
                <form className="lg:max-w-md lg:mx-auto">
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer" placeholder=" " required />
                      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-coklat peer-focus:dark:text-coklat peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer" placeholder=" " required />
                      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-coklat peer-focus:dark:text-coklat peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer" placeholder=" " required />
                      <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-coklat peer-focus:dark:text-coklat peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer" placeholder=" " required />
                      <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-coklat peer-focus:dark:text-coklat peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message Subject</label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      id="message"
                      rows="4"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-coklat focus:outline-none focus:ring-0 focus:border-coklat peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-coklat peer-focus:dark:text-coklat peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                  </div>
                  <button type="submit" className="btn relative inline-block py-3 px-10 text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden z-10">Send Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contactus
