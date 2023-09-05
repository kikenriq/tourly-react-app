import React from 'react'
import HeroImg from '../assets/images/hero-banner.jpg'

const Hero = () => {
  return (
    <div className='w-screen place-content-center items-center overflow-hidden relative h-[700px] lg:h-[850px] flex sm:h-screen'>
        <img src={HeroImg} className=' md:h-screen h-full object-cover sm:w-screen brightness-50' alt="" />
        <div className='absolute font-[Montserrat] lg:max-w-[740px] flex flex-col gap-7 px-3'>
            <h1 className='sm:text-6xl text-white uppercase font-extrabold text-4xl text-center'>Journey to Explore World</h1>
            <p className='text-white text-center text-[14px]'>
                Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos
                voluptatibus habitant?
                Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
            </p>
            <div className='flex items-center justify-center gap-3'>
                <button className='bg-[--united-nations-blue] uppercase sm:text-[16px] text-white text-[12px] sm:py-[12px] sm:px-[30px] px-6 py-3 rounded-full'>
                    Learn More
                </button>
                <button className='bg-transparent border-2 uppercase sm:text-[16px] text-white text-[12px] sm:py-[12px] sm:px-[30px] px-6 py-3 rounded-full'>
                    Learn More
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Hero