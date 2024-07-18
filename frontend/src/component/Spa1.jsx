import React from 'react'
import { FaStar } from "react-icons/fa6";


const Spa1 = () => {
    return (
        <div className="bg-white text-gray-800 font-playfair">
            <div className="max-w-4xl mx-auto p-8">
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500 space-x-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <span className="mt-auto text-coklat mb-2">THE LUXURY HOTEL</span>
                <h1 className="text-5xl font font-gilda">Spa Services</h1>
                <p className="text-gray-600 mt-4 leading-relaxed font-barlow">
                Guests at Casa Evaliza can enjoy massages in the privacy of the villa or in any outdoor setting. Traditional Balinese massage is a remedy that has been used by Balinese villagers for many generations to relieve muscular aches and pains and boost circulation after long days of toiling in the rice fields. Using a blend of flower oil and selected herbs, hands-on healing techniques are applied with a combination of skin rolling, gentle palm pressure, long kneading strokes, acupressure and reflexology.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed font-barlow">
                Massage treatments are provided by an outside spa therapist, and a menu of options detailing the various treatments is provided in the villa’s in-house documentation; the staff is on hand to assist with appointments.
                </p>
            </div>
        </div>
    )
}

export default Spa1
