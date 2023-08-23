import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <header className='absolute w-screen z-40'>
        <nav className='flex flex-row justify-around items-center py-3 border-b-[1px] border-white/20'> 
            <a href="#" className='text-[15px] sm:text-2xl sm:p-4 text-white p-2 rounded-full bg-[--bright-navy-blue]'>
                <ion-icon name="call-outline"></ion-icon>
            </a>

            <a href="#">
                <img className='h-8 sm:h-16' src={Logo} alt="" />
            </a>

            <div className='flex flex-row gap-2 text-[26px] sm:text-5xl text-white'>
                <button>
                    <ion-icon name="search-outline"></ion-icon>
                </button>

                <button>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
            </div>
        </nav>

        <nav className='flex flex-row sm:px-24 justify-between py-4 border-b-[1px] px-5 border-white/20'>
            <div className='flex items-center sm:text-xl gap-2' >
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

            <button className='bg-[--united-nations-blue] text-sm border-[--united-nations-blue] px-5 rounded-full py-2 text-white font-medium'>
                BOOK NOW
            </button>
        </nav>
    </header>
  )
}

export default Navbar