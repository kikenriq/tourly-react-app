import React from 'react'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'

const Gallery = () => {
  return (
    <div className='px-4 pt-7'>
        <div className='py-10 font-[Poppins]'>
            <p className='uppercase mb-2 text-sm text-[--united-nations-blue]'>PHOTO GALLERY</p>
            <h1 className='uppercase font-bold text-2xl text-[--oxford-blue]'>Photos from travellers</h1>
            <p className='text-[18px] text-left pt-3 text-[--black-coral]'>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <div>
            <ul className='grid gap-2 pt-8 grid-cols-2'>
                <li>
                    <figure className='w-full h-full overflow-hidden rounded-3xl'>
                        <img src={gallery1} alt="" />
                    </figure>
                </li>
                <li>
                    <figure className='w-full h-full overflow-hidden rounded-3xl'>
                        <img src={gallery3} alt="" />
                    </figure>
                </li>
                <li>
                    <figure className='w-full h-full overflow-hidden rounded-3xl'>
                        <img src={gallery2} alt="" />
                    </figure>
                </li>
                <li>
                    <figure className='w-full h-full overflow-hidden rounded-3xl'>
                        <img src={gallery4} alt="" />
                    </figure>
                </li>
                <li>
                    <figure className='w-full h-full overflow-hidden rounded-3xl'>
                        <img src={gallery5} alt="" />
                    </figure>
                </li>
                
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Gallery