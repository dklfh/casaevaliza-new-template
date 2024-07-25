import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar'
import Aboutimg from '../component/AboutImg'
import Footer from '../component/footer/footer'
import Header from '../component/header'
import KitchenImg from '../component/TemplateImg'
import image from '../assets/image/casa-vila-20.jpg'

const about = () => {
    const subtitle = "THE LUXURY HOTEL";
    const title = "About Casa Evaliza";
    const paragraphs = [
        "Casa Evaliza is a spacious Bali rental villa, located 250 metres from the beach in the upmarket Seminyak area on Bali's southwest coast and accessed through the same road which serves the Club at the Legian Suites Hotel, and just minutes walk from the world famous Kudeta restaurant.",
        "Positioned on a block of 1200m2 (just over a quarter of an acre), and fully refurbished in 2009, the contemporary Balinese architectural design featuring a blend of both modern and traditional elements presents a splendid villa boasting four bedrooms, and extensive living and dining areas. The wrap around balcony on the second floor and high ceilings found throughout the residence provides a colonial twist and the ultimate luxurious blend of space and style.",
        "The sizeable gardens showcase a terraced lawn and a 14-metre swimming pool, together with a poolside 'bale' relaxation pavilion, presenting an ideal setting for weddings, parties and other special events. This inspiring Bali villa is a peaceful oasis in the heart of a trendy district. It is ideal for families and couples alike and has an extensive dedicated staff."
    ];
    const [backgroundImage] = useState(image);
    const [subheadingText] = useState("Luxury Hotel");
    const [headingText] = useState("About");

    return (
        <div>
            <Navbar />
            <KitchenImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
            <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
            <Footer />
        </div>
    )
}

export default about
