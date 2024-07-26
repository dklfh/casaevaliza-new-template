import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import img from '../assets/image/tatanan meja.jpg'
import Templateimg from '../component/TemplateImg'
import Header from '../component/header'
import Templatefrance from '../component/Templatefrance';

function Foodbeverages() {
  const [backgroundImage] = useState(img);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Food & Beverages");

  const subtitle = "L'HÔTEL DE LUXE";
  const title = "Food & Beverages";
  const paragraphs = [
    "Casa Evaliza boasts a dining service with a wonderful array of international dishes. Many Western meals are available, but we recommend you to try some of the local Balinese dishes for a unique cultural experience!",
    "Dinner parties and small functions can all catered within the villa for group of maximum twelve guests. Please ask the chef or manager for more details at any time of the day, whether you are requesting breakfast, lunch, dinner, or snacks.",
  ];

  const textfrance1 = [
    {
      titlefrance: "Food & Beverage Charges",
      paragraphsfrance: [
        "Food and beverage items are charged based on grocery cost system. Guests will need to provide some money in advance and the staff will do the shopping for you and keep the receipts for your reference.",
        "Food items and beverage are charged at cost price. Please ask your manager if you wish to check your daily expense.",
      ]
    }
  ];

  const textfrance2 = [
    {
      titlefrance: "Special Requests & Dietary Requirements",
      paragraphsfrance: [
        "Should you have a request for a dish not on the menu, or a special dietary requirement, please feel free to ask the chef, who will strive to comply with all of your wishes.",
      ]
    }
  ];

  const textfrance3 = [
    {
      titlefrance: "Large Dining Groups",
      paragraphsfrance: [
        "While the villa has large food preparation areas, it is not a restaurant and cannot support each individual guest ordering different foods for same dining periods. If you have a large group it is advisable that the group dines on the same dish or that you order several dishes to be shared. Please allow at least one day’s notice, and feel free to discuss any requirements with the chef or villa manager.",
      ]
    }
  ];


  return (
    <div>
      <Navbar />
      <Templateimg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Templatefrance textfrance={textfrance1} />
      <Templatefrance textfrance={textfrance2} />
      <Templatefrance textfrance={textfrance3} />
      <Footer />
    </div>
  );
}

export default Foodbeverages;