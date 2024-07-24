import React from 'react'
import Guest1 from '../component/Guest1'
import GuestbedroomImg from '../component/guestbedroomImg'
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'


const guestbedroom = () => {
    return (
        <div>
            <Navbar />
            <GuestbedroomImg />
            <Guest1 />
            <Footer/>
        </div>
    )
}

export default guestbedroom
