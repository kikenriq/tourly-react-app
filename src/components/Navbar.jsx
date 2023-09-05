import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <header className='absolute w-screen z-40'>
        <nav className='flex flex-row px-4 justify-between items-center py-3 border-b-[1px] border-white/20'> 
            <a href="#" className='text-[15px] text-white p-2 rounded-full bg-[--bright-navy-blue]'>
                <ion-icon name="call-outline"></ion-icon>
            </a>

            <a href="#">
                <img className='h-12' src={Logo} alt="" />
            </a>

            <div className='flex flex-row gap-2 text-3xl text-white'>
                <button>
                    <ion-icon name="search-outline"></ion-icon>
                </button>

                <button>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
            </div>
        </nav>

        <nav className='flex flex-row px-4 justify-between py-4 border-b-[1px] lg:border-none border-white/20'>
            <div className='flex items-center text-[12px] gap-2' >
                <a href="#" className='text-white p-1 sm:p-2 bg-transparent border-[1px] rounded-full border-white'>
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className='text-white p-1 sm:p-2 bg-transparent border-[1px] rounded-full border-white'>
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className='text-white p-1 sm:p-2 bg-transparent border-[1px] rounded-full border-white'>
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
            </div>

            <div className='hidden lg:flex'>
                <ul className='flex items-center gap-7'>
                    <li className=' uppercase text-white text-[16px]'><a href="#" className='hover:text-[--bright-navy-blue]'>Home</a></li>
                    <li className=' uppercase text-white text-[16px]'><a href="#" className='hover:text-[--bright-navy-blue]'>About Us</a></li>
                    <li className=' uppercase text-white text-[16px]'><a href="#" className='hover:text-[--bright-navy-blue]'>Destiantion</a></li>
                    <li className=' uppercase text-white text-[16px]'><a href="#" className='hover:text-[--bright-navy-blue]'>Packages</a></li>
                    <li className=' uppercase text-white text-[16px]'><a href="#" className='hover:text-[--bright-navy-blue]'>Gallery</a></li>
                    <li className=' uppercase text-white text-[16px]'><a href="#" className='hover:text-[--bright-navy-blue]'>Contact us</a></li>
                </ul>
            </div>

            <button className='bg-[--united-nations-blue] text-sm border-[--united-nations-blue] px-5 rounded-full py-2 text-white font-medium'>
                BOOK NOW
            </button>
        </nav>
    </header>
  )
}

export default Navbar