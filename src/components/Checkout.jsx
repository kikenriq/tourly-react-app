import React from 'react'
import Packege from './Packege'
import banner1 from '../assets/images/packege-1.jpg'
import banner2 from '../assets/images/packege-2.jpg'
import banner3 from '../assets/images/packege-3.jpg'

const Checkout = () => {
  return (
    <div className='px-4 lg:px-20 mb-16 pt-7'>
        <div className='py-10 font-[Poppins] md:text-center'>
            <p className='uppercase mb-2 text-sm text-[--united-nations-blue]'>Popular Packeges</p>
            <h1 className='uppercase font-bold text-2xl lg:text-4xl text-[--oxford-blue]'>Checkout our packeges</h1>
            <p className='text-[18px] max-w-[80ch] mx-auto text-left md:text-center md:px-16 pt-3 text-[--black-coral]'>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>
        </div>
        <div>
          <ul className='flex flex-col gap-10'>
            <li>
              <Packege
              banner={banner1}
              title='Experience the great holiday on beach'
              description='Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.'
              review='(25 reviews)'
              price='$750'
              />
            </li>
            <li>
              <Packege
              banner={banner2}
              title='Experience the great holiday on beach'
              description='Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.'
              review='(25 reviews)'
              price='$750'
              />
            </li>
            <li>
              <Packege
              banner={banner3}
              title='Experience the great holiday on beach'
              description='Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.'
              review='(25 reviews)'
              price='$750'
              />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Checkout