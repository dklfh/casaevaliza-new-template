import React from 'react';
import { FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";


const Restaurant = () => {
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
                <span className="mt-auto text-coklat mb-2">A EXPERIENCE FOR THE SENSE</span>
                <h1 className="text-5xl font font-gilda">Food & Beverages</h1>
                <p className="text-gray-600 mt-4 leading-relaxed font-barlow">
                    Casa Evaliza boasts a dining service with a wonderful array of international dishes. Many Western meals are available, but we recommend you to try some of the local Balinese dishes for a unique cultural experience!

                    Dinner parties and small functions can all catered within the villa for group of maximum twelve guests. Please ask the chef or manager for more details at any time of the day, whether you are requesting breakfast, lunch, dinner, or snacks.
                </p>
                <h2 className="text-2xl font-gilda mt-8">Hours</h2>
                <ul className="my-7 mx-14 space-y-2">
                    <li className="flex items-center font-barlow text-gray-600">
                        <IoMdTime />
                        Breakfast: 6.30 am – 11.00 am (daily)
                    </li>
                    <li className="flex items-center  font-barlow text-gray-600">
                        <IoMdTime />
                        Lunch: 12.00 noon – 2.00 pm (daily)
                    </li>
                    <li className="flex items-center  font-barlow text-gray-600">
                        <IoMdTime />
                        Dinner: open from 7.30 pm, last order at 12.00 pm (daily)
                    </li>
                </ul>
                <h2 className="text-2xl font-gilda mt-6">Food & Beverage Charges</h2>
                <p className="mt-4 text-gray-600  font-barlow ">Food and beverage items are charged based on grocery cost system. Guests will need to provide some money in advance and the staff will do the shopping for you and keep the receipts for your reference.

                    Food items and beverage are charged at cost price. Please ask your manager if you wish to check your daily expense.</p>
                <h2 className="text-2xl font-gilda mt-6">Special Requests & Dietary Requirements</h2>
                <p className="mt-4 text-gray-600  font-barlow">Should you have a request for a dish not on the menu, or a special dietary requirement, please feel free to ask the chef, who will strive to comply with all of your wishes.</p>
                <h2 className="text-2xl font-gilda mt-6">Large Dining Groups</h2>
                <p className="mt-4 text-gray-600  font-barlow">While the villa has large food preparation areas, it is not a restaurant and cannot support each individual guest ordering different foods for same dining periods. If you have a large group it is advisable that the group dines on the same dish or that you order several dishes to be shared. Please allow at least one day’s notice, and feel free to discuss any requirements with the chef or villa manager.</p>
            </div>
        </div>
    );
};

export default Restaurant;
