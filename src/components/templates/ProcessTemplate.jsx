import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./ProcessTemplate.css";
function ProcessTemplate(props) {
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  },[])
  return (
      <div className="md:w-[80%] w-[90%] m-auto process-step relative p-2 mt-10">
      {props.ProcessData.map((data, i) => (
       <div
       className="mt-13 w-[100%] flex gap-10"
       key={i}
       data-aos="fade-up"
     >
       <div className="w-18 h-18 relative text-sm pt-3 text-white step-no">
         <div className="relative z-3 text-center">
           <p>STEP</p>
           <span className="md:text-3xl text-xl font-bold">
             {data.step}
           </span>
         </div>
       </div>
       <div className="text-blue-900">
         <h1 className="font-bold text-lg">{data.processName}</h1>
         <p className="bg-blue-100 px-4 py-2 rounded-4xl mt-5">
           {data.processDiscription}
         </p>
       </div>
     </div>
     
      ))}
      </div>
   );
}

export default ProcessTemplate;
