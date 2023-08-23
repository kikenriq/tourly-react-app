import React from 'react'

const Form = () => {
  return (
    <div className=' bg-[--bright-navy-blue] py-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-items-center h-auto'>

      <div>
        <label className='text-white ml-5 text-[15px] pb-1' htmlFor="Destinantios">Search Destinations*</label>
        <input className='w-[350px] h-11 rounded-full px-5' placeholder='Enter Destination' type="search" />
      </div>
      <div>
        <label className='text-white ml-5 text-[15px] pb-1' htmlFor="Destinantios">Pax Number*</label>
        <input className='w-[350px] h-11 rounded-full px-5' placeholder='Enter Destination' type="number" />
      </div>
      <div>
        <label className='text-white ml-5 text-[15px] pb-1' htmlFor="Destinantios">Checkin Date*</label>
        <input className='w-[350px] h-11 rounded-full px-5' placeholder='Enter Destination' type="date" />
      </div>
      <div>
        <label className='text-white ml-5 text-[15px] pb-1' htmlFor="Destinantios">Checkout Date*</label>
        <input className='w-[350px] h-11 rounded-full px-5' placeholder='Enter Destination' type="date" />
      </div>
      
      <button className='bg-transparent uppercase text-white py-2 px-10 border-2 rounded-full'>
        Inquiere now
      </button>
    </div>
  )
}

export default Form