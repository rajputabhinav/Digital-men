import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
function AboutUs() {

    useEffect(()=>{
       AOS.init(
        {
            duration:1000
        }
       )
       AOS.refresh(); 
    },[])
  return (
    <div>
        <div className='py-20 px-5'>
            <h1 className='text-4xl text-center font-bold'>ABOUT US</h1>
            <div className='py-12 md:flex justify-between'>
                <div className='w-full md:w-[35%]  lg:w-[25%]'>
                    <p className='text-base text-[#000000bf] text-center md:text-start' data-aos="fade-right">We are advertising specialists with expertise across Google, Facebook, Microsoft, LinkedIn, and other leading social platforms. Our mission is to consistently deliver high-performing ad campaigns that drive profitable growth for businesses.</p>
                     <div className='flex md:flex-col gap-3 items-center justify-center mt-5 mb-10 flex-wrap sm:flex-nowrap' data-aos="fade-right">
                     <div className='md:border-b-1 w-full max-w-[400px] text-center md:text-start md:border-[#00000032] md:pb-3 bg-blue-900 md:bg-white md:mt-8 py-2'>
                        <p className='text-[12px] md:text-gray-500 text-white'>THE THINKING</p>
                        <p className='text-white md:text-blue-900'>Insight and Strategy</p>
                    </div>
                    <div className='md:border-b-1 w-full max-w-[400px] text-center md:text-start md:border-[#00000032] md:pb-3 bg-blue-900 md:bg-white py-2 '>
                        <p className='text-[12px] md:text-gray-500 text-white'>THE Doing</p>
                        <p className='text-white md:text-blue-900'>Channel Plannig</p>
                    </div>
                    <div className='md:border-b-1 w-full max-w-[400px] text-center md:text-start md:border-[#00000032] md:pb-3 bg-blue-900 md:bg-white md:mb-5 lg:mb-0 py-2'>
                        <p className='text-[12px] md:text-gray-500 text-white'>THE MEASURING</p>
                        <p className='text-white md:text-blue-900'>Data and Analytics</p>
                    </div>
                    </div>
                    <Link className='bg-[#101082] text-white px-5 py-3 font-bold block sm:inline text-center w-full max-w-[400px] m-auto' data-aos="fade-right" to="/About">More About Us <FontAwesomeIcon className='rotate-240' icon={faArrowDown}/></Link>
                </div>
                <div className='md:flex relative w-[40%] lg:w-[50%] lg:flex-row md:flex-col md:items-center   hidden' data-aos="zoom-in">
                    <img className=' w-[95%] lg:w-[52%]  rounded-full lg:self-start' src="Images/about-1.jpg"/>
                    <img className=' w-[95%] lg:w-[52%] rounded-full lg:self-end' src="Images/about-2.jpg"/>
                    <div className='bg-blue-900 text-white lg:w-35 lg:h-35 md:w-30 md:h-30 p-3 text-center rounded-full absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 flex flex-col justify-center'>
                          <h1 className='font-extrabold text-3xl'>11K+</h1>
                          <p>Customer Satisfied</p>
                    </div>
                </div>
                <div className='text-center flex md:flex-col items-center mt-10 md:mt-0' data-aos="zoom-in">
                   <div className='md:w-auto w-[50%] '>
                   <div className='border-b-1 border-[#0000001e] h-24'>
                        <h1 className='text-4xl font-extrabold text-blue-900 mt-4 md:mt-0'>1,500+</h1>
                        <p className='my-3 text-[#000000c0]'>Campanies Setup</p>
                    </div>
                    <div className='border-b-1 border-[#0000001e] h-24 mt-4'>
                        <h1 className='text-4xl font-extrabold text-blue-900'>500+</h1>
                        <p className='my-3 text-[#000000c0]'>Happy Clients</p>
                    </div>
                   </div>
                   <div className='md:w-auto w-[50%]'>
                   <div className='border-b-1 border-[#0000001e] h-24 mt-4'>
                        <h1 className='text-4xl font-extrabold text-blue-900'>50+</h1>
                        <p className='my-3 text-[#000000c0]'>Industries Work In</p>
                    </div>
                    <div className='border-b-1 border-[#0000001e] h-24 mt-4'>
                        <h1 className='text-4xl font-extrabold text-blue-900'>5+</h1>
                        <p className='my-3 text-[#000000c0]'>Millions Leads Generated</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs