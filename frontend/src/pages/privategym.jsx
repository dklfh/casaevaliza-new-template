import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/villagym.jpg';

const Kitchen = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Private Gym");
  const [paragraphs] = useState([
    "Just because you are on holiday doesn’t mean that your fitness regimen has to take a break as well. At Casa Evaliza you will find a state-of-the-art, air-conditioned private gym room with weights, treadmill and other equipments.",
    "When the body feels tired, perhaps a body scrub or massage might help to relieve all the weary. Just ask our staff to bring the spa to you! We can recommend deluxe treatments by a reputable carried out in the villa’s spa room by fully trained therapists from a reputable local spa company (extra charges will apply).",
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Private Gym");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  );
};

export default Kitchen;
