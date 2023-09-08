import React from 'react'
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className='px-4 py-20 md:flex md:gap-16 bg-[--gunmetal]'>
        <div className='max-w-sm'>
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <p className='text-white text-[12px]'>Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, 
                praesentium magna conubia at perferendis, pretium, aenean aut ultrices.
            </p>
        </div>


  <div className='text-white'>
    <ul className='flex flex-col gap-6'>
              <li className='flex gap-2 text-xl'>
                <ion-icon name="call-outline" role="img" class="md hydrated" aria-label="call outline"></ion-icon>

                <a href="tel:+01123456790" class="contact-link">+01 (123) 4567 90</a>
              </li>

              <li className='flex gap-2 text-xl'>
                <ion-icon name="mail-outline" role="img" class="md hydrated" aria-label="mail outline"></ion-icon>

                <a href="mailto:info.tourly.com" class="contact-link">info.tourly.com</a>
              </li>

              <li className='flex gap-2 text-xl'>
                <ion-icon name="location-outline" role="img" class="md hydrated" aria-label="location outline"></ion-icon>

                <address>3146 Koontz, California</address>
              </li>
      </ul>
  </div>

        <div className='text-white text-2xl flex flex-col gap-6'>
            <p>Subscribe our newsletter for more update & news</p>
            <input type="email" name="" className='py-4 px-3 rounded-lg' placeholder='Enter Your email' id="" />
        </div>

    </footer>
  )
}

export default Footer