import React from 'react'

const CTA = () => {
  return (
    <div className='h-[350px] font-[Montserrat] px-5 bg-[--bright-navy-blue]'>
        <p className='pt-10 uppercase mb-1 text-white '>call to action</p>
        <h1 className='uppercase mb-3 text-white text-2xl font-bold'>ready for unforgatable travel. remember us!</h1>
        <p className='text-sm mb-8 font-[Poppins] text-white'>Fusce hic augue velit wisi quibusdam pariatur, 
            iusto primis, nec nemo, rutrum. 
            Vestibulum cumque laudantium.
            Sit ornare mollitia tenetur, aptent.</p>
        <button className='border-2 text-white rounded-full py-2 px-5 border-white'>
            <a href="#">CONTACT US</a>
        </button>
    </div>
  )
}

export default CTA