import React from 'react'

const Card = (props) => {
  return (
    <div className='relative h-[420px] '>
      <img className='rounded-[25px] h-full w-full object-cover absolute' src={props.img} alt="" />
      <div className='text-[Montserrat] bottom-[20px] absolute left-[20px] right-[20px] bg-white p-[20px] rounded-[25px]'>
        <div className='absolute top-[-10px] right-8 flex text-[14px] text-white px-4 py-2 rounded-full bg-[--united-nations-blue]'>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-half"></ion-icon>
        </div>
        <p className='uppercase text-sm text-[--united-nations-blue]'>{props.country}</p>
        <h1 className='text-[--oxford-blue] text-xl font-bold uppercase'>{props.place}</h1>
        <p className='text-sm text-[--black-coral]'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card