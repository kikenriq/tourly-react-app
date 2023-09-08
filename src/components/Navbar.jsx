import React from 'react'
import Logo from '../assets/images/logo.svg'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
          window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
      })


  return (
    <header className='absolute w-screen z-40'>
        <nav className={`${isActive ? 'bg-[--gunmetal] py-6 fixed lg:sticky top-0 border-none' :  'bg-transparent '} transition-all ease-in-out w-screen flex flex-row px-4 justify-between items-center py-3 border-b-[1px] border-white/20`}> 
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

                <button className='lg:hidden' onClick={()=>
                setMobileNav(!mobileNav)}>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
            </div>
        </nav>

        <nav className={`${isActive ? 'lg:bg-white lg:shadow-xl lg:fixed py-6 lg:top-0' :  'bg-transparent '} transition-all ease-in-out w-screen flex flex-row px-4 justify-between py-4 border-b-[1px] lg:border-none border-white/20`}>
            <div className='flex items-center text-[12px] gap-2' >
                <a href="#" className={`${isActive ? 'bg-blue-500 text-white' : 'text-white'} text-white p-1 sm:p-2 bg-transparent border-[1px] rounded-full border-white`}>
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className={`${isActive ? 'bg-blue-500 text-white' : 'text-white'} text-white p-1 sm:p-2 bg-transparent border-[1px] rounded-full border-white`}>
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className={`${isActive ? 'bg-blue-500 text-white' : 'text-white'} text-white p-1 sm:p-2 bg-transparent border-[1px] rounded-full border-white`}>
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
            </div>

            <div className='hidden lg:flex'>
                <ul className='flex items-center gap-7'>
                    <li className={`${isActive ? 'text-blue-500' : 'text-white'} uppercase text-white text-[16px]'`}><a href="#" className='hover:text-[--bright-navy-blue]'>Home</a></li>
                    <li className={`${isActive ? 'text-blue-500' : 'text-white'} uppercase text-white text-[16px]'`}><a href="#" className='hover:text-[--bright-navy-blue]'>About Us</a></li>
                    <li className={`${isActive ? 'text-blue-500' : 'text-white'} uppercase text-white text-[16px]'`}><a href="#" className='hover:text-[--bright-navy-blue]'>Destiantion</a></li>
                    <li className={`${isActive ? 'text-blue-500' : 'text-white'} uppercase text-white text-[16px]'`}><a href="#" className='hover:text-[--bright-navy-blue]'>Packages</a></li>
                    <li className={`${isActive ? 'text-blue-500' : 'text-white'} uppercase text-white text-[16px]'`}><a href="#" className='hover:text-[--bright-navy-blue]'>Gallery</a></li>
                    <li className={`${isActive ? 'text-blue-500' : 'text-white'} uppercase text-white text-[16px]'`}><a href="#" className='hover:text-[--bright-navy-blue]'>Contact us</a></li>
                </ul>
            </div>

            <button className='bg-[--united-nations-blue] text-sm border-[--united-nations-blue] px-5 rounded-full py-2 text-white font-medium'>
                BOOK NOW
            </button>
        </nav>

        <div className={`${mobileNav ? 'right-0' : '-right-full'} fixed top-0 bottom-0 transition-all duration-500 flex flex-col w-[350px] bg-white lg:hidden`}>
          <button className='absolute bg-transparent text-3xl right-6 top-8 text-black p-0' onClick={()=>
          setMobileNav(!mobileNav)}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
           <ul className='flex flex-col pt-16'>
           <li className='border-b-2 border-gray-300 w-full px-7 py-4'>
              <a className={`lg:${isActive ? 'text-black' : 'text-white'} font-semibold text-2xl hover:text-[--bright-navy-blue] ease-in-out duration-200`} href="#">Home</a>
            </li>
            <li className='border-b-2 border-gray-300 w-full px-7 py-4'>
              <a className={`lg:${isActive ? 'text-black' : 'text-white'} font-semibold text-2xl hover:text-[--bright-navy-blue] ease-in-out duration-200`} href="#">About</a>
            </li>
            <li className='border-b-2 border-gray-300 w-full px-7 py-4'>
              <a className={`lg:${isActive ? 'text-black' : 'text-white'} font-semibold text-2xl hover:text-[--bright-navy-blue] ease-in-out duration-200`} href="#">Destination</a>
            </li>
            <li className='border-b-2 border-gray-300 w-full px-7 py-4'>
              <a className={`lg:${isActive ? 'text-black' : 'text-white'} font-semibold text-2xl hover:text-[--bright-navy-blue] ease-in-out duration-200`} href="#">Packeges</a>
            </li>
            <li className='border-b-2 border-gray-300 w-full px-7 py-4'>
              <a className={`lg:${isActive ? 'text-black' : 'text-white'} font-semibold text-2xl hover:text-[--bright-navy-blue] ease-in-out duration-200`} href="#">Gallery</a>
            </li>
           </ul>
        </div>
    </header>
  )
}

export default Navbar