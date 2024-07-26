import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/spaservicev.jpg';

const Spaservices = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Spa Services");
  const [paragraphs] = useState([
    "Guests at Casa Evaliza can enjoy massages in the privacy of the villa or in any outdoor setting. Traditional Balinese massage is a remedy that has been used by Balinese villagers for many generations to relieve muscular aches and pains and boost circulation after long days of toiling in the rice fields. Using a blend of flower oil and selected herbs, hands-on healing techniques are applied with a combination of skin rolling, gentle palm pressure, long kneading strokes, acupressure and reflexology.",
    "Massage treatments are provided by an outside spa therapist, and a menu of options detailing the various treatments is provided in the villa’s in-house documentation; the staff is on hand to assist with appointments.",
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Spa Services");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  );
};

export default Spaservices;
