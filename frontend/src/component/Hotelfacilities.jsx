import React from 'react';
import { FaKey, FaPhone, FaInbox, FaWifi, FaSatellite, FaBook, FaBaby, FaCar } from "react-icons/fa";
import { MdOutlinePool, MdAir } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { CiSpeaker } from "react-icons/ci";
import { TbMeat } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Hotelfacilities = () => {
    const services = [
        { icon: <MdOutlinePool className="text-4xl text-coklat mb-[24px]" />, title: "Swiming Pool", description: "One private swimming pool (14.5 m x 5 m)" },
        { icon: <MdAir className="text-4xl text-coklat mb-[24px]" />, title: "Air-Conditioned", description: "4 air-conditioned bedrooms with ensuite bathroom" },
        { icon: <IoPeople className="text-4xl text-coklat mb-[24px]" />, title: "Staff", description: "Fully staffed" },
        { icon: <PiTelevisionSimple className="text-4xl text-coklat mb-[24px]" />, title: "TV And DVD", description: "Satellite TV, DVD in each room" },
        { icon: <CiSpeaker className="text-4xl text-coklat mb-[24px]" />, title: "Speaker", description: "Bluetooth speaker available" },
        { icon: <FaPhone className="text-4xl text-coklat mb-[24px]" />, title: "Call", description: "Local call available" },
        { icon: <FaInbox className="text-4xl text-coklat mb-[24px]" />, title: "Deposit Box", description: "Safety deposit box in each bedroom" },
        { icon: <FaWifi className="text-4xl text-coklat mb-[24px]" />, title: "Wifi", description: "WiFi Broadband internet connection (free of charge)" },
        { icon: <FaSatellite className="text-4xl text-coklat mb-[24px]" />, title: "Media Room", description: "Media Room featuring TV and satellite connection" },
        { icon: <FaBook className="text-4xl text-coklat mb-[24px]" />, title: "Book", description: "Book collection" },
        { icon: <FaBaby className="text-4xl text-coklat mb-[24px]" />, title: "Baby Cots", description: "Cots for baby (2)" },
        { icon: <TbMeat className="text-4xl text-coklat mb-[24px]" />, title: "BBQ equipment", description: "Equipment for making BBQ" },
        { icon: <FaCar className="text-4xl text-coklat mb-[24px]" />, title: "Car", description: "Complimentary 8 hours seven-seater Kijang Innova car and driver (exclude petrol)" },
    ];

    return (
        <div className="py-20">
            <div className='max-w-1140 px-8 mx-auto'>
                <div className="text-center mb-8">
                    <h3 className="text-15 font-barlowcondensed tracking-custom text-coklat">OUR SERVICES</h3>
                    <h1 className="text-45 font-island text-text">Hotel Facilities</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.1 + index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.1 }}
                            className="relative bg-bgcoklat rounded-lg py-7 px-5 h-auto w-full before:shadow-inner transition-all duration-300 ease-in-out before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent hover:before:border-coklat before:transition-all before:duration-300 before:ease-in-out before:pointer-events-none hover:shadow-lg"
                        >
                            <div className="flex flex-col items-start h-full">
                                {service.icon}
                                <h3 className="text-2xl mb-3 font-gilda text-text font-bold">{service.title}</h3>
                                <p className="text-sm text-gray-600 font-barlow pr-6">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hotelfacilities;