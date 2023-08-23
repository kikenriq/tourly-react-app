import React from 'react'

const Packege = (props) => {
  return (
    <div className='overflow-hidden md:flex rounded-2xl'>
        <figure>
            <img className='md:h-full md:object-cover' src={props.banner} alt="" />
        </figure>
        <div className='px-5 py-8 md:p-10'>
            <h3 className=' text-[17px] font-[Montserrat] uppercase mb-2 font-bold text-[--gunmetal]'>{props.title}</h3>
            <p className='font-[Poppins] mb-5 text-[14px] text-left text-[--black-coral]'>{props.description}</p>
            <ul className='flex rounded-full justify-center gap-2 shadow-xl p-2 flex-wrap w-max'>
                <li>
                    <div className='flex gap-1 items-center text-xs font-[Poppins] text-[--united-nations-blue]'>
                        <ion-icon name="time"></ion-icon>

                        <p class="text-[--black-coral]">7D/6N</p>
                    </div>
                </li>
                <li>
                    <div className='flex gap-1 items-center text-xs font-[Poppins] text-[--united-nations-blue]'>
                        <ion-icon name="people"></ion-icon>

                        <p class="text-[--black-coral]">pax: 10</p>
                    </div>
                </li>
                <li>
                    <div className='flex gap-1 items-center text-xs font-[Poppins] text-[--united-nations-blue]'>
                        <ion-icon name="location"></ion-icon>

                        <p class="text-[--black-coral]">Malaysia</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className='text-white font-[poppins] py-5 px-5 flex items-center flex-col bg-[--united-nations-blue]'>
            <div className='flex items-center gap-4 mb-3'>
                <p className='text-[14px]'>{props.review}</p>
                <div className='flex'>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                </div>
            </div>

            <p className='text-3xl mb-7 font-[Montserrat] font-bold'>{props.price} <span className='font-normal text-center text-xs'>/ per person</span></p>
            <button className='border-white border rounded-full uppercase font-semibold px-6 py-3'>Book Now</button>
        </div>
    </div>
  )
}

export default Packege