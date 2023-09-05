import React from 'react'
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className='px-4 py-20 md:flex md:gap-16 py-8 bg-[--gunmetal]'>
        <div className='max-w-sm'>
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <p className='text-white text-[12px]'>Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, 
                praesentium magna conubia at perferendis, pretium, aenean aut ultrices.
            </p>
        </div>


  <div className='text-white'>
    <ul>
              <li class="contact-item">
                <ion-icon name="call-outline" role="img" class="md hydrated" aria-label="call outline"></ion-icon>

                <a href="tel:+01123456790" class="contact-link">+01 (123) 4567 90</a>
              </li>

              <li class="contact-item">
                <ion-icon name="mail-outline" role="img" class="md hydrated" aria-label="mail outline"></ion-icon>

                <a href="mailto:info.tourly.com" class="contact-link">info.tourly.com</a>
              </li>

              <li class="contact-item">
                <ion-icon name="location-outline" role="img" class="md hydrated" aria-label="location outline"></ion-icon>

                <address>3146 Koontz, California</address>
              </li>
      </ul>
  </div>

        <div>
            <p>Subscribe our newsletter for more update & news</p>
            <input type="email" name="" placeholder='Enter Your email' id="" />
        </div>

    </footer>
  )
}

export default Footer