import React from 'react'
import press1 from '../assets/image/press-1(1).jpg'
import press2 from '../assets/image/press-2(1).jpg'
import press3 from '../assets/image/press-3(1).jpg'
import press4 from '../assets/image/press-4.jpg'
import press5 from '../assets/image/press-5.jpeg'
import press6 from '../assets/image/press-6.jpeg'

const Presscard = () => {
  return (
    <div className='py-20'>
      <div className='px-4 mx-auto max-w-1140'>
        <div className='flex flex-col space-y-11'>
          <div className="bg-bgcoklat flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 h-auto">
              <div className="px-4">
                <img src={press1} alt="The Asia Villa Guide" className="" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[300px] h-auto p-8 flex flex-col justify-center">
              <h3 className="font-gilda mb-5 font-semibold uppercase tracking-wider">Press</h3>
              <h1 className="text-3xl font-gilda text-text mb-3">The Asia Villa Guide</h1>
              <p className="text-text2 mb-5 font-barlow text-15">
                "Refurbished in 2009, four?bedroomed Casa Evaliza is a stunning villa which blends many of Bali'screative architectural touches with today's more modern requirements.” <span className='text-coklat'>Casa Evaliza, First Edition 2011</span></p>
              <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44" href="#">Download</a>
            </div>
          </div>

          <div className="bg-bgcoklat flex flex-col lg:flex-row-reverse items-center">
            <div className="w-full lg:w-1/2 h-auto">
              <div className="px-4">
                <img src={press2} alt="Trends Magazine" className="" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[300px] h-auto p-8 flex flex-col justify-center">
              <h3 className="font-gilda mb-5 font-semibold uppercase tracking-wider">Press</h3>
              <h1 className="text-3xl font-gilda text-text mb-3">Trends Magazine</h1>
              <p className="text-text2 mb-5 font-barlow text-15">
                "The appeal of Casa Evaliza is its peaceful atmosphere, thoughtful design, evocation of local cultures, and high standard of service.” <span className='text-coklat'>Islands of Dreams; Tropical Air, April 2010.</span></p>
              <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44" href="#">Download</a>
            </div>
          </div>

          <div className="bg-bgcoklat flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 h-auto">
              <div className="px-4">
                <img src={press3} alt="Panorama Travel - Italy Magazine" className="" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[300px] h-auto p-8 flex flex-col justify-center">
              <h3 className="font-gilda mb-5 font-semibold uppercase tracking-wider">Press</h3>
              <h1 className="text-3xl font-gilda text-text mb-3">Panorama Travel - Italy Magazine</h1>
              <p className="text-text2 mb-5 font-barlow text-15">
                "Casa Evaliza.” <span className='text-coklat'>Vacanze in Villa, April '10.</span></p>
              <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44" href="#">Download</a>
            </div>
          </div>

          <div className="bg-bgcoklat flex flex-col lg:flex-row-reverse items-center">
            <div className="w-full lg:w-1/2 h-auto">
              <div className="px-4">
                <img src={press4} alt="Fine Restaurants & Villas" className="w-full h-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[300px] h-auto p-8 flex flex-col justify-center">
              <h3 className="font-gilda mb-5 font-semibold uppercase tracking-wider">Press</h3>
              <h1 className="text-3xl font-gilda text-text mb-3">Fine Restaurants & Villas</h1>
              <p className="text-text2 mb-5 font-barlow text-15">
                "This impressive Bali villa is a peaceful escape in the heart of the action and is ideal for families and couples alike.” <span className='text-coklat'>Casa Evaliza; Renovated and one of the best villas in the Oberoi Area, January 2010.</span></p>
              <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44" href="#">Download</a>
            </div>
          </div>

          <div className="bg-bgcoklat flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 h-auto">
              <div className="px-4">
                <img src={press5} alt="Business Travel Magazine" className="w-full h-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[300px] h-auto p-8 flex flex-col justify-center">
              <h3 className="font-gilda mb-5 font-semibold uppercase tracking-wider">Press</h3>
              <h1 className="text-3xl font-gilda text-text mb-3">Business Travel Magazine</h1>
              <p className="text-text2 mb-5 font-barlow text-15">
                "Bali Feature.” <span className='text-coklat'>Casa Evaliza, January '10.</span></p>
              <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44" href="#">Download</a>
            </div>
          </div>

          <div className="bg-bgcoklat flex flex-col lg:flex-row-reverse items-center">
            <div className="w-full lg:w-1/2 h-auto">
              <div className="px-4">
                <img src={press6} alt="Brio Magazine" className="w-full h-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-[300px] h-auto p-8 flex flex-col justify-center">
              <h3 className="font-gilda mb-5 font-semibold uppercase tracking-wider">Press</h3>
              <h1 className="text-3xl font-gilda text-text mb-3">Brio Magazine</h1>
              <p className="text-text2 mb-5 font-barlow text-15">
              "Brio.” <span className='text-coklat'>Casa Evaliza, 2003.</span></p>
              <a className="btn relative inline-block py-3 px-10 tracking-normal text-white border border-solid font-gilda text-sm border-white cursor-pointer bg-coklat no-underline overflow-hidden uppercase z-10 max-w-44" href="#">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presscard