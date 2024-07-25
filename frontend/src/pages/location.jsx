import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header'
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import img from '../assets/image/location.jpg'

function Location() {
  const [backgroundImage] = useState(img);
  const [subheadingText] = useState("LUXURY HOTEL");
  const [headingText] = useState("Location");

  const subtitle = "PLACE TO RELAX";
  const title = "Location Casa Evaliza";
  const paragraphs = ["Casa Evaliza is located in the very centre of what is now considered to be Seminyak's prime district, exemplified by internationally-acclaimed beachside restaurants, opulent spas, boutique hotels, trendy cocktail bars, and chic designer boutiques. Within a few hundred metres, guests will find the well-known Oberoi and Legian Hotels, in addition to the famous Ku De Ta, La Lucciola, Nutmegs at Hu'u, and Breeze beachfront restaurant and bar at The Samaya among many others.",
      "Just footsteps away is the sweeping Seminyak Beach, renowned for its world-class surf breaks and panoramic coastline views; a playground of the rich and famous, this is the place where the local and expatriate communities gather every evening to enjoy the legendary sunsets.",
      "Nearby places of interest include one of Bali's most sacred Hindu temples, Pura Petitenget, the fourth largest temple in Bali, where some of the most spectacular Balinese ceremonies may often be witnessed.",
      "The villa is located 30 minutes from Bali's International Airport, and is convenient for to all of Bali's best shopping, top restaurants, and vibrant nightspots."
  ];

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  )
}

export default Location
