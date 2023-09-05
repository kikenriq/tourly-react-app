import React from 'react'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'

const Gallery = () => {
  return (
    <div className='px-4 pt-7 mb-14 md:px-16'>
        <div className='py-10 md:text-center font-[Poppins]'>
            <p className='uppercase mb-2 text-sm text-[--united-nations-blue]'>PHOTO GALLERY</p>
            <h1 className='uppercase lg:text-4xl font-bold text-2xl text-[--oxford-blue]'>Photos from travellers</h1>
            <p className='text-[18px] mb-10 md:max-w-[100ch] mx-auto text-left pt-3 text-[--black-coral]'>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <div className='md:columns-3 columns-2 gap-3 grid-cols-3'>
            
            <img className='mb-2 rounded-[30px]' src={gallery1} alt="" />
            <img className='mb-2 rounded-[30px]' src={gallery2} alt="" />
            <img className='mb-2 rounded-[30px]' src={gallery3} alt="" />
            <img className='mb-2 rounded-[30px]' src={gallery4} alt="" />
            <img className='mb-2 rounded-[30px]' src={gallery5} alt="" />
                 
          </div>
        </div>
    </div>
  )
}

export default Gallery