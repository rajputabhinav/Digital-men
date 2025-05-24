import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Why_chooseUs(props) {
    useEffect(()=>{
    AOS.init({
      duration:1200
    })
  })
  return (
    <div>
        <h1 className='text-4xl font-bold text-center'>Why Choose Digital Men?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-18 mt-10 md:items-stretch'>
            <div className='w-[95%] md:w-full m-auto md:m-0 pt-4'>
                 <img className='w-full aspect-square md:aspect-auto md:h-full rounded-full  md:rounded-r-full md:rounded-l-xl object-cover' src="Images/why-choose-us.jpg" data-aos="fade-left"/>
            </div>
            <div data-aos="fade-up">
            {
                props.whyChooseUsData.map((data,i)=>(
                <div className='flex gap-3 items-center mt-4' key={i}>
                    <img src={`Images/Icons/${data.logo}`} width={50}/>
                  <div>
                    <h1>{data.heading}</h1>
                     <p>{data.discription}</p>
                  </div>
                </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Why_chooseUs