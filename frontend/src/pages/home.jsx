import React from 'react'
import Navbar from '../component/navbar/navbar'
import OtherService from '../component/OtherService'
import WhatClientSay from '../component/WhatClientSay'
import Spa1 from '../component/Spa1'
import Home1 from '../component/Home1'

function Home() {
  return (
    <div>
      <Navbar/>
      <Home1/>
      <OtherService/>
      <WhatClientSay/>
      <Spa1/>
    </div>
  )
}

export default Home
