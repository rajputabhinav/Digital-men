import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Hero() {
  const listItemData = [
    {
      image:1,
      heading: "15+",
      discription: "Years Of experince",
    },
    {
      image:2,
      heading: "15 cr+",
      discription: "In Ad Spend Managed",
    },
    {
      image:3,
      heading: "Certified",
      discription: "Google Experts",
    },
  ];

  const spinItemClass="bg-white lg:absolute flex lg:float-left justify-center items-center lg:w-20 w-24 aspect-square p-5 rounded-full"
  return (
    <div
      className="px-4 py-20 mt-30 lg:flex justify-around"
     
    >
      <div className="text-white  lg:w-[50%] w-full max-w-xl m-auto">
        <h1 className=" text-[40px] text-center lg:text-start font-bold">
          We Grow Brands Online
        </h1>
        <p className="mt-7  text-xl text-center lg:text-start">
          Custom Websites, Branding & Digital Marketing
        </p>
        <ul className="w-full flex justify-between gap-2 mt-5 sm:flex-nowrap">
          {listItemData.map((data, i) => (
            <li
              className="flex gap-3 items-center flex-wrap md:flex-nowrap justify-center md:justify-start"
              key={i}
            >
              <div className="bg-white flex w-18 lg:w-14 aspect-square justify-center items-center rounded-full">
                <img className="lg:w-7 lg:h-7 w-11 h-11" src={`Images/Icon/${data.image}`}/>
              </div>
              <div className="md:text-start text-center">
                <h1 className="text-2xl font-bold">{data.heading}</h1>
                <p className="text-base">{data.discription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* spin box */}
      <div className="lg:w-[35%] w-[100%] relative lg:h-64 hidden md:flex gap-5 justify-center mt-10 lg:mt-0">
        <div className={`top-[10%] left-[7%] ${spinItemClass}`}>
          <img className="rotate-animation" src="Images/Icons/google-ad-banner.svg"/>
        </div>
        <div className={`top-[60%] left-[10%] ${spinItemClass}`}>
          <img className="rotate-animation" src="Images/Icons/meta-ad-banner.svg"/>
        </div>
        <div className={`left-[50%] lg:-translate-x-[50%] top-[-13%] ${spinItemClass}`}>
          <img className="rotate-animation" src="Images/Icons/google-analytics-banner.svg" />
        </div>
        <div className={`bottom-[-13%] left-[50%] lg:-translate-x-[50%] ${spinItemClass}`}>
          <img className="rotate-animation" src="Images/Icons/google-tag-manager-banner.svg"/>
        </div>
        <div className={`top-[10%] right-[7%] ${spinItemClass}`}>
          <img className="rotate-animation" src="Images/Icons/seo.png"/>
        </div>
        <div className={`bottom-[5%] right-[11%] ${spinItemClass}`}>
          <img className="rotate-animation" src="Images/Icons/communication-banner.svg"/>
        </div>
        <div className={`lg:top-[50%] lg:left-[50%] lg:translate-[-50%] relative ${spinItemClass}`}>
          <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full absolute bottom-0 right-0">
            <FontAwesomeIcon
              className="text-blue-900"
              icon={faInstagram}
              size="lg"
            />
          </div>
          <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full absolute top-0 left-0">
            <FontAwesomeIcon
              className="text-blue-900"
              icon={faFacebook}
              size="lg"
            />
          </div>
          <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full absolute bottom-0 left-0">
            <FontAwesomeIcon
              className="text-blue-900"
              icon={faLinkedin}
              size="lg"
            />
          </div>
          <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full absolute top-0 right-0">
            <FontAwesomeIcon
              className="text-blue-900"
              icon={faTwitter}
              size="lg"
            />
          </div>
          <img src="Images/Icons/share.svg"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
