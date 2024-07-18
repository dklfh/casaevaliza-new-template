import React from 'react'

const OtherService = () => {
  return (
    <div className="bg-[#f7f3ee] font-playfair">
    <div className="w-[1440px] mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-[#cca97b] text-lg">THE RUDRA HOTEL</h2>
        <h1 className="text-4xl text-[#494949] italic">Rooms & Suites</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Standard Room */}
        <div className="relative">
          <img src="https://placehold.co/600x400" alt="Standard Room" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            Standard Room
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#f7f3ee] text-[#c1b09c] py-1 px-3 text-xs font-semibold rotate-90">
            $150/DAY
          </div>
        </div>
        {/* Family Room */}
        <div className="relative">
          <img src="https://placehold.co/600x400" alt="Family Room" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            Family Room
          </div>
        </div>
        {/* Double Room */}
        <div className="relative">
          <img src="https://placehold.co/600x400" alt="Double Room" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            Double Room
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#f7f3ee] text-[#c1b09c] py-1 px-3 text-xs font-semibold rotate-90">
            $57/NIGHT
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OtherService
