import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Destination from './components/Destination'
import Checkout from './components/Checkout'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <Destination />
      <Checkout />
      <Gallery />
      <CTA />
      <Footer />
    </>
  )
}

export default App
