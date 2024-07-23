import React from 'react'

const Ourroompres = () => {
  return (
    <div>
    {/* First Section */}
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center mb-10">
        <div className="w-full lg:w-1/2 lg:h-[300px] h-auto">
            <div className="w-full h-full">
                <img src={require('./image/9.png').default} alt="Restaurant Table" className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#f7f3eb] lg:h-[300px] h-auto p-10">
            <h3 className="text-sm font-semibold text-[#60584e] mb-2">OUR ROOM</h3>
            <h1 className="text-4xl font-bold text-[#2f2e2a] mb-4">Presidential</h1>
            <p className="text-[#2f2e2a] mb-6">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the
                nesudea seneocie misuscipit non sagie the fermen ziverra tristiuie duru the ivite dianne onen nivami
                ascestion augue artine...</p>
            <a href="#" className="bg-[#9d8660] text-white text-sm font-semibold py-3 px-8 rounded inline-block">FIND OUT MORE</a>
        </div>
    </div>

    {/* Second Section */}
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 bg-[#f7f3eb] lg:h-[300px] h-auto p-10">
            <h3 className="text-sm font-semibold text-[#60584e] mb-2">OUR ROOM</h3>
            <h1 className="text-4xl font-bold text-[#2f2e2a] mb-4">Presidential</h1>
            <p className="text-[#2f2e2a] mb-6">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the
                nesudea seneocie misuscipit non sagie the fermen ziverra tristiuie duru the ivite dianne onen nivami
                ascestion augue artine...</p>
            <a href="#" className="bg-[#9d8660] text-white text-sm font-semibold py-3 px-8 rounded inline-block">FIND OUT MORE</a>
        </div>
        <div className="w-full lg:w-1/2 lg:h-[300px] h-auto">
            <div className="w-full h-full">
                <img src={require('./image/9.png').default} alt="Restaurant Table" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Ourroompres
