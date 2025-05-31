import React, { useEffect,useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import QuickContact from "./QuickContact";
function Contact_us(props) {
  const[quickContact,setQuickContact]=useState(false)
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
      <div className="w-full h-fit bg-blue-900 py-13 px-2 text-center">
       <div className="md:w-[80%] w-full md:m-auto">
       <h1 className="text-3xl md:text-[40px] font-semibold text-white">
          {props.contactHeading}
        </h1>
        <p className="text-white text-base my-6" data-aos="zoom-in">
          {props.contactPara}
        </p>
        <div
          className="text-blue-900 text-lg bg-white font-bold md:px-12 px-8 py-3 rounded-4xl inline-block transition-all duration-400  hover:text-white hover:bg-black group cursor-pointer"
           data-aos="fade-right" onClick={()=>setQuickContact(true)}>
          {props.contactAtag}
          <FontAwesomeIcon
            className="rotate-320 ml-1 text-blue-900 group-hover:rotate-360 group-hover:text-white transition-all duration-400"
            icon={faArrowRight}
          />
        </div>
       </div>
        <QuickContact  setQuickContact={setQuickContact} quickContact={quickContact}/>
      </div>
  );
}

export default Contact_us;
