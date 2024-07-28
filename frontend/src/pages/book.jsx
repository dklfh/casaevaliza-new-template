import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import KitchenImg1 from '../assets/image/booknow.jpg';
import BookingForm from '../component/BookingForm';

const book = () => {
  const [backgroundImage] = useState(KitchenImg1);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Booking");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <BookingForm/>
      <Footer/>
    </div>
  );
};

export default book;
