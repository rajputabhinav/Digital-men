import React from 'react'
import './HeroTemplate.css'
function HeroTemplate(props) {
  return (
    <div className='mt-40 w-full overflow-hidden p-7 template-container'>
        <div className='md:w-[60%] w-full md:m-auto text-center text-[#ffffff]'>
            <h1 className='text-[40px] font-semibold my-5'>{props.heading}</h1>
            <p className='text-lg'>{props.para}</p>
        </div>
        {/* our services section  */}
        <div>
           <h1></h1>
        </div>
    </div>
  )
}

export default HeroTemplate