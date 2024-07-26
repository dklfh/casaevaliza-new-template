import React from 'react'
import { FaKey } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { MdAir } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { CiSpeaker } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaSatellite } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";
import { FaCar } from "react-icons/fa";




const Hotelfacilities = () => {
    return (
        <div class="w-screen-xl mx-1 lg:mx-[189px] px-4 py-[100px]">
            <div class="text-center mb-8">
                <h3 class="text-[15px] font-barlowcondensed tracking-widest text-coklat">OUR SERVICES</h3>
                <h1 class="text-[45px] font-island text-gray-700">Hotel Facilities</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <MdOutlinePool className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Swiming Pool</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">One private swimming pool (14,5 m x 5 m)                        </p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <MdAir className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda"> Air-Conditioned</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">4 air-conditioned bedrooms with ensuite bathroom</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <IoPeople className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Staff</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Fully staffed</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <PiTelevisionSimple className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">TV And DVD</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Satellite TV, DVD in each room</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <CiSpeaker className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Speaker</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Bluetooth speaker available</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaPhone  className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Call</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Local call available</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaInbox  className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Deposit Box</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Safety deposit box in each bedroom</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaWifi className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Wifi</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">WiFi Broadband internet connection (free of charge).                        </p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaSatellite className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Media Room</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">LMedia Room featuring TV and satellite connection                        </p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaBook className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Book</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Book collection                        </p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaBaby className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Baby Cots</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Cots for baby (2)                        </p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <TbMeat className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">BBQ equipment</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">equipment for making BBQ</p>
                    </div>
                </div>
                <div class="bg-[#f8f5f0] rounded-lg py-10 px-4 h-auto w-full">
                    <div class="flex flex-col items-start h-full p-4">
                        <FaCar className='size-14 text-coklat mb-[24px]' />
                        <h3 class="text-2xl mb-3 font-gilda">Car</h3>
                        <p class="text-sm text-gray-600 font-barlow pr-6">Complimentary 8 hours seven-seater Kijang Innova car and driver (exclude petrol)                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotelfacilities
