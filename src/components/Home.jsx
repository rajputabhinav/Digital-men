import React from 'react'
import Header from './Header'
import Hero from './Home_components/Hero'
import Services from './Home_components/Services'
import OurProcess from './Home_components/OurProcess'
import Slider from './Home_components/Slider'
import Testimonial from './Home_components/Testimonial'
import OurClients from './Home_components/OurClients'
import Footer from './Footer'
import Tools from './Home_components/Tools'
import AboutUs from './Home_components/AboutUs'

function Home() {
  return (
    <div className='overflow-hidden'>
        <Header/>
        <Hero/>
        <AboutUs/>
        <Services/>
        <Tools/>
        <Slider/>
        <Testimonial/>
        <OurClients/>
        <Footer/>
    </div>
  )
}

export default Home