import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Templateservices from '../component/Templateservices'; // Corrected the import name
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/services.jpg';
import TemplateImg2 from '../component/TemplateImg2';

const Services = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [content] = useState([
    {
      title: "Services",
      paragraphs: [
        "Casa Evaliza, boast a dedicated team of staff (their positions and responsibilities outlined below) to service guests in the villa.",
      ]
    }
  ]);
  const [staf] = useState([
    {
      jabatan: "Manager :",
      paragraphs: [
        "meets and greets guests on arrival, leads the staffing team to meet the expectations of each guest.",
      ]
    },
    {
      jabatan: "Butler :",
      paragraphs: [
        "in charge of housekeeping, laundry and Food and Beverage service.",
      ]
    },
    {
      jabatan: "Driver :",
      paragraphs: [
        "a car and driver is included with each rental booking. The driver is knowledgeable about local attractions.",
      ]
    },
    {
      jabatan: "Security Guard :",
      paragraphs: [
        "on-duty at night to ensure the safety and security of the guests and the premises. The complex also has full-time security at its entrance.",
      ]
    },
    {
      jabatan: "Gardener & Pool Attendant :",
      paragraphs: [
        "work discreetly in maintaining the landscape and the pool without disturbing the guests.",
      ]
    },
  ]);

  const [subheadingText] = useState("our hotel services");
  const [headingText] = useState("Services");

  return (
    <div>
      <Navbar />
      <TemplateImg2 image={Img1} headText={headingText} subText={subheadingText}/>
      <Templateservices subtitle={subtitle} content={content} staf={staf} />
      <Footer />
    </div>
  );
};

export default Services;
