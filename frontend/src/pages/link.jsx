import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/IMG-20240618-WA0009.jpg';
import TemplateLinks from '../component/TemplateLinks';

const initialSections = [
  {
    title: "Things to Do in Bali",
    links: [
      { name: "Jari Menari", url: "https://www.JariMenari.com", description: "Spa and massage services." },
      { name: "ARC Anti-aging Beauty Clinics", url: "https://www.ARCClinics.com", description: "ARC Anti-aging Beauty Clinics are Australian-managed and specialise in cosmetic treatments on Bali, Botox and dermal fillers included." },
      { name: "Kudeta Restaurant", url: "https://www.Kudeta.net", description: "Bali's world-famous restaurant on the beach in Seminyak." },
      { name: "Kafe Warisan", url: "https://www.KafeWarisan.com", description: "World Famous French Mediterranean Cuisine in a Classic Rice Terrace Setting." },
      { name: "Manori Spa Bali", url: "https://www.ManoriSpaBali.com", description: "Provide spa treatments, in the comfort of your hotel or holiday villa, to stimulate the body's recuperative power and enhance the healing effects of your holiday." },
      { name: "Mozaic", url: "https://www.Mozaic-Bali.com", description: "Located in Ubud, Mozaic is one of the island's finest culinary experiences. In addition to fine dining in a lovely atmosphere, you can also find shopping for quality home wares." },
      { name: "Scuba Duba Doo", url: "https://www.DiveCenterBali.com", description: "PADI 5 star Dive Center located in Legian, Kuta, and offering a full range of classes, certifications, diving & snorkeling trips, and dive-related services." },
    ],
  },
  {
    title: "Travel Information Sites",
    links: [
      { name: "Bali Travel Portal", url: "https://www.BaliTravelPortal.com", description: "Bali Travel Portal contains information, tips and resources about travel to Bali. Original photos, articles and video emphasize green and responsible travel, ecotourism and self-tours." },
      { name: "Eco Travel Asia", url: "https://www.EcoTravel-Asia.com", description: "Asia-specific eco-travel resources. Lists only sites concerned with green travel, responsible travel and eco-tourism in Thailand, China, Philippines, Indonesia, Malaysia and Vietnam." },
      { name: "Macau Travel Portal", url: "https://www.MacauTravelPortal.com", description: "Macau Travel Portal is your gateway to Macau travel information and resources on Macau hotels, Macau casinos and holidays in Macau. Macau travel information and Macau hotels." },
      { name: "Luxe Guides", url: "https://www.LuxeCityGuides.com", description: "The definitive style guide to Bali, Bangkok, Hong Kong, Hanoi and Ho Chi Minh City and many more for the discerning traveler." },
    ],
  },
];

const Link = () => {
  const [backgroundImage] = useState(Img1);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Link");

  return (
    <div>
      <Navbar />
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <TemplateLinks sections={initialSections} />
      <Footer />
    </div>
  );
};

export default Link;
