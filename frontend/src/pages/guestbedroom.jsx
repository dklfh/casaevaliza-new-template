import React from 'react'
import Guest1 from '../component/Guest1'
import GuestbedroomImg from '../component/guestbedroomImg'
import Navbar from '../component/navbar/navbar'


const guestbedroom = () => {
    return (
        <div>
            <Navbar />
            <GuestbedroomImg />
            <Guest1 />
        </div>
    )
}

export default guestbedroom
