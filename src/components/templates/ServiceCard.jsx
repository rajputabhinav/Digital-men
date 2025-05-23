import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
function ServiceCard(props) {
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
    <div className="w-[100%] h-full bg-white border-1 hover:border-blue-700 border-[#0000004a] p-4 rounded-2xl group" data-aos="zoom-in">
      <div
        className="bg-blue-500 h-full rounded-xl overflow-hidden bg-center px-8 py-4"
        style={{
          backgroundImage: `URL("Images/backgroundImage/bg_pattern.png")`,
          backgroundSize: "50px",
        }}
      >
        <div className="ml-2 mb-4 bg-[#ffffff] group-hover:-translate-y-2 rounded-4xl w-[82px] h-[82px] flex justify-center items-center transition-all duration-500">
          <img className="w-[42px] h-[42px]" src={props.data.image} />
        </div>
        <h1 className="text-white text-xl mb-2">{props.data.heading}</h1>
        <span className="group-hover:bg-blue-900 inline-block group-hover:-translate-y-1 px-2  py-1  text-sm rounded text-white border-b-1 border-b-white transition-all duration-500">
          Best For:
        </span>
        <div>
            <p className="text-white mt-2">{props.data.discription}</p>
          {props.data.points.map((data,i) => (
            <div className="flex items-start gap-2 mt-4 text-white" key={i}>
              <FontAwesomeIcon className="text-xl mt-0.5" icon={faArrowRight} />
              <p>
                <span className="font-bold mr-0.5">
                  {data.pointHeading}
                </span>
                {data.point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
