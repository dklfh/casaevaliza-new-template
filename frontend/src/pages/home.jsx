import React, { useRef } from 'react';
import Navbar from '../component/navbar/navbar';
import OtherService from '../component/OtherService';
import WhatClientSay from '../component/WhatClientSay';
import Home1 from '../component/Home1';
import Footer from '../component/footer/footer';
import About1 from '../component/About1';

function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Home1 scrollToAbout={scrollToAbout} /> {/* Pass the scrollToAbout function as a prop */}
      <div ref={aboutRef}>
        <About1 />
      </div>
      <OtherService />
      <WhatClientSay />
      <Footer />
    </div>
  );
}

export default Home;
