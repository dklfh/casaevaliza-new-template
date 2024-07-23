import React from 'react';
const WhatClientSay = () => {
   
    return (
        <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('path/to/your/local/image.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 py-16">
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <div className="flex flex-col items-center justify-center w-full h-auto p-6">
                            <div>
                            <img
                                className="w-24 h-24 rounded-full border-4 border-white mx-auto mb-4"
                                src="https://placehold.co/96x96"
                                alt="Client Photo"
                            />
                            <p className="text-gray-200 mb-6 px-4 md:px-12 lg:px-24">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="text-[#d6ad60] text-3xl mb-4">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <h4 className="text-xl font-bold">Roberta Cozza</h4>
                            <p className="text-gray-400">General Director</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default WhatClientSay;
