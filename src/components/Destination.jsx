import React from 'react'
import place1 from '../assets/images/popular-1.jpg'
import place2 from '../assets/images/popular-2.jpg'
import place3 from '../assets/images/popular-3.jpg'
import Card from './Card'

const Destination = () => {
  return (
    <div className='px-4 pt-7'>
        <div className='py-10 md:text-center md:px-16 font-[Poppins]'>
            <p className='uppercase text-sm text-[--united-nations-blue]'>uncover place</p>
            <h1 className='uppercase font-bold text-2xl text-[--oxford-blue]'>popular destination</h1>
            <p className='text-[18px] text-left md:text-center pt-3 text-[--black-coral]'>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

        <Card
            img={place1}
            country='italy'
            place='San Miguel'
            description='Fusce hic augue velit wisi ips quibusdam pariatur, iusto.'
        />
        <Card
            img={place2}
            country='italy'
            place='San Miguel'
            description='Fusce hic augue velit wisi ips quibusdam pariatur, iusto.'
        />
        <Card
            img={place3}
            country='italy'
            place='San Miguel'
            description='Fusce hic augue velit wisi ips quibusdam pariatur, iusto.'
        />

      </div>

      <div className='py-8 flex justify-center'>
        <button className='bg-[--united-nations-blue] uppercase sm:text-[16px] text-white text-[14px] sm:py-[12px] sm:px-[30px] px-6 py-3 rounded-full'>
          More Destinations
        </button>
      </div>
    </div>
  )
}

export default Destination