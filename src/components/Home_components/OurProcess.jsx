import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
function OurProcess() {
   useEffect(()=>{
      AOS.init({
         duration:1000
      },[])
   })
  return (
    <div className='bg-[#f1f1f170] pb-17 overflow-hidden'>
        <h1 className='font-bold text-4xl text-center my-20 '>OUR PROCESS</h1>
        <div className='w-full h-66 flex'>
         <div className='relative w-65 self-start flex justify-center items-center'  data-aos="zoom-in">
            <img className='w-full h-full ' src="Images/Icons/step-1.svg"/>
            <p className='absolute pl-20 text-lg text-[#ff3300] font-bold'>Defining Objective</p>
         </div>
         <div className='relative w-65 self-end flex  items-center' data-aos="zoom-in">
            <img className='w-full h-full ' src="Images/Icons/step-2.svg"/>
            <p className='absolute pl-20 text-lg text-[#0071bd] font-bold'>Undertanding Target Group</p>
         </div>
         <div className='relative w-65 self-start flex items-center' data-aos="zoom-in">
            <img className='w-full h-full ' src="Images/Icons/step-3.svg"/>
            <p className='absolute pl-20 text-lg text-[#ed7e2f] font-bold'>Competitor Analysis</p>
         </div>
         <div className='relative w-65 self-end flex items-center' data-aos="zoom-in">
            <img className='w-full h-full ' src="Images/Icons/step-4.svg"/>
            <p className='absolute pl-20 text-lg text-[#24a3a9] font-bold'>Defining KPIs for Tracking</p>
         </div>
         <div className='relative w-65 self-start flex items-center' data-aos="zoom-in">
            <img className='w-full h-full ' src="Images/Icons/step-5.svg"/>
            <p className='absolute pl-20 text-lg text-[#fdc200] font-bold'>Defining Objective</p>
         </div>
         <div className='relative w-65 self-end items-center flex' data-aos="zoom-in">
            <img className='w-full h-full ' src="Images/Icons/step-6.svg"/>
            <p className='absolute pl-20 text-lg text-[#66cc66] font-bold'>Analyzing / Adjusting & Reporting Result</p>
         </div>
         </div>
    </div>
  )
}

export default OurProcess