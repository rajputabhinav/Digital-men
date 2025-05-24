import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import abes from "../../assets/clients/abes (1).png";
import evaahospital from "../../assets/clients/evaahospital.png";
import galgotias from "../../assets/clients/galgotiasuniversity.png";
import ganeshhospitals from "../../assets/clients/ganeshhospitals.jpg";
import kamyaaesthetics from "../../assets/clients/kamyaaesthetics.png";
import lets_talk from "../../assets/clients/lets-talk-academy.png";
import psit from "../../assets/clients/psit.png";
import rankridge from "../../assets/clients/rankridge.png";
import yashodahealthcare from "../../assets/clients/yashodahealthcare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function OurClients() {
  const [toggle, setToggle] = useState(
    {
      first:false,
      second:false,
      third:false,
      fourth:false,
      fifth:false
  });

  function toggleHandler(key) {
    setToggle((prev)=> ({...prev,[key]:!prev[key]}));
  }
  useEffect(()=>{
    AOS.init({
     duration:1000   
    })
  })
  return (
    <div className="py-20 bg-[#f8faff] w-full">
      <h1 className="text-4xl font-bold text-center mb-10">OUR CLIENTS</h1>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={2}
          loop={true}
          speed={2500}
          autoplay={{ delay: 1500 }}
          breakpoints={{
               700:{
                slidesPerView:3,
               },
               1050:{
                slidesPerView:4,
               }
          }}
        >
          {
            [abes,yashodahealthcare,rankridge,psit,lets_talk,kamyaaesthetics,ganeshhospitals,galgotias,evaahospital].map((value,i)=>{
              return   <SwiperSlide key={i}>
               <div className=" w-[70%] h-32 flex items-center object-center" data-aos="zoom-out">
                 <img className="max-h-28 w-full" src={value}/>
               </div>
             </SwiperSlide>
            })
          }
          </Swiper>
      </div>
{/* Blog setcion starts here */}
      <div className="p-5 mt-30 md:flex  justify-between">
        <div className="md:w-[47%] w-[90%] m-auto md:m-0">
          <h1 className="text-4xl font-bold text-[#000000d1]">BLOG</h1>
          <ul>
            <li className="mt-10">
              <div>
                <p className="bg-blue-900 text-white text-base inline-block px-3 rounded text-center">
                  26 Mar
                </p>
                <p className="font-bold text-lg">
                  Unleashing the Power of SEO with Hire Digital Guru
                </p>
                <p className="text-[#000000ad] font-bold mt-2">Introduction</p>
                <p className="text-lg text-[#00000079]">
                  In the fast-paced digital world, visibility is everything. If
                  your business...
                </p>
                <a className="float-right mr-3 text-blue-800 underline" href="">
                  Read more
                </a>
              </div>
            </li>
            <li className="mt-10">
              <div>
                <p className="bg-blue-900 text-white text-base inline-block px-3 rounded text-center">
                  19 Sep
                </p>
                <p className="font-bold text-lg">
                  How to Use Social Media for Branding: A Simple Guide
                </p>
                <p className="text-lg text-[#00000079]">
                  In today's digital age, social media plays a huge role in
                  building a brand. Whether you're a small business, a startup,
                  or even a personal...
                </p>
                <a className="float-right mr-3 text-blue-800 underline" href="">
                  Read more
                </a>
              </div>
            </li>
            <li className="mt-10">
              <div>
                <p className="bg-blue-900 text-white text-base inline-block px-3 rounded text-center">
                  09 Aug
                </p>
                <p className="font-bold text-lg">
                  Google Ads is always changing, here’s what you need to know
                  about the next big changes coming to the platform
                </p>
                <p className="text-lg text-[#00000079]">
                  30th September 2024: Classic Merchant Center will be phased
                  out. Ensure you’re familiar with Google Merchant Center Next.
                  Spoiler...
                </p>
                <a className="float-right mr-3 text-blue-800 underline" href="">
                  Read more
                </a>
              </div>
            </li>
          </ul>
        </div>
           {/* FQA Secton starts here */}
        <div className="md:w-[48%] w-[100%] mt-10 md:mt-0">
          <h1 className="text-[#000000c7] text-4xl font-bold mb-10">FAQ</h1>
          {/* Question one */}
        <div className={` w-full shadow-lg bg-white border-1 rounded overflow-hidden border-[#00000047]`}>
        <div className="p-2 active:bg-blue-100 cursor-pointer" onClick={()=> toggleHandler("first")}>
          <p className="text-lg w-[80%] font-bold inline-block text-[#000000c1]">
            What industries or businesses do you specialize in?
          </p>
          <span className="float-right text-2xl transition-transform duration-300">
            <FontAwesomeIcon
              className={`transition-transform duration-300 ease-in-out ${toggle.first ? "rotate-45" : "rotate-90"}`}
              icon={faXmark}
            />
          </span>
         </div>
          {/* Animated Answer Section */}
          <div className={`p-2 text-base text-[#000000c9] transition-all duration-500 ${toggle.first?"max-h-[410px] translate-y-0":"max-h-[0px] translate-y-3"}`}>
            <p className="mt-5">
              We have experience working with businesses across diverse
              industries:
            </p>
            <ul className="text-[#000000c9]">
              {[
                "Education",
                "Healthcare",
                "Technology",
                "Manufacturing",
                "Real Estate",
                "Fintech",
                "Small and large private or public companies",
              ].map((item, i) => (
                <li className="flex gap-2 mt-4" key={i}>
                  <div className="min-w-5 h-5 flex justify-center rounded-[2px] bg-blue-500">
                    <img src="Images/Icons/check.svg" width={15} />
                  </div>
                  <p>{item}</p>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
        {/* Question two */}
        <div className={` w-full shadow-lg bg-white border-1 mt-4 rounded overflow-hidden border-[#00000047]`}>
         <div className="p-2 active:bg-blue-100 cursor-pointer"  onClick={()=> toggleHandler("second")}>
          <p className="text-lg w-[80%] font-bold inline-block text-[#000000c1]">
          How long does it take to see results from digital marketing?
          </p>
          <span className="float-right text-2xl transition-transform duration-300">
            <FontAwesomeIcon
              className={`transition-transform duration-300 ease-in-out ${toggle.second ? "rotate-45" : "rotate-90"}`}
              icon={faXmark}
            />
          </span>
         </div>
          {/* Animated Answer Section */}
          <div className={`p-2 text-base text-[#000000c9] transition-all duration-500 ${toggle.second?"max-h-[360px] translate-y-0":"max-h-[0px] translate-y-3"}`}>
            <p className="mt-5">
            The timeline varies depending on the strategy:
            </p>
            <ul className="text-[#000000c9]">
              {[
               " SEO: 3–6 months for noticeable improvements.",
                "PPC: Immediate results once campaigns are live.",
                "Social media: 1–3 months for consistent engagement growth.",
                "Content Marketing: 4–6 months for organic traction."
              ].map((item, i) => (
                <li className="flex gap-2 mt-4" key={i}>
                  <div className="min-w-5 h-5 flex justify-center rounded-[2px] bg-blue-500">
                    <img src="Images/Icons/check.svg" width={15} />
                  </div>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Question three */}
        <div className={` w-full shadow-lg bg-white border-1 cursor-pointer mt-4 rounded overflow-hidden border-[#00000047]`}>
          <div className="p-2 active:bg-blue-100 cursor-pointer" onClick={()=> toggleHandler("third")}>
          <p className="text-lg w-[80%] font-bold inline-block text-[#000000c1]">
          How will digital marketing benefit my business?
          </p>
          <span className="float-right text-2xl transition-transform duration-300">
            <FontAwesomeIcon
              className={`transition-transform duration-300 ease-in-out ${toggle.third ? "rotate-45" : "rotate-90"}`}
              icon={faXmark}
            />
          </span>
         </div>
          {/* Animated Answer Section */}
          <div className={`p-2 text-base text-[#000000c9] transition-all duration-500 ${toggle.third?"max-h-[360px] translate-y-0":"max-h-[0px] translate-y-3"}`}>
            <p className="mt-5">
            Digital marketing helps:
            </p>
            <ul className="text-[#000000c9]">
              {[
                "Increase online visibility and brand awareness.",
                "Drive targeted traffic to your website.",
                "Generate more leads and conversions.",
                "Offer measurable results and ROI.",
                "Reach and engage your audience on various platforms effectively."
              ].map((item, i) => (
                <li className="flex gap-2 mt-4" key={i}>
                  <div className="min-w-5 h-5 flex justify-center rounded-[2px] bg-blue-500">
                    <img src="Images/Icons/check.svg" width={15} />
                  </div>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Question four */}
        <div className={` w-full shadow-lg bg-white border-1 mt-4 rounded overflow-hidden border-[#00000047]`}>
          <div className="p-2 active:bg-blue-100 cursor-pointer" onClick={()=> toggleHandler("fourth")}>
          <p className="text-lg w-[80%] font-bold inline-block text-[#000000c1]">
          Can you work with businesses of all sizes and industries?
          </p>
          <span className="float-right text-2xl transition-transform duration-300">
            <FontAwesomeIcon
              className={`transition-transform duration-300 ease-in-out ${toggle.fourth ? "rotate-45" : "rotate-90"}`}
              icon={faXmark}
            />
          </span>
          </div>
          {/* Animated Answer Section */}
           <div className={`p-2 text-base text-[#000000c9] transition-all duration-500 ${toggle.fourth?"max-h-[180px] translate-y-0":"max-h-[0px] translate-y-3"}`}>
            <p>Yes, we have experience working with small startups, medium-sized enterprises, and large public and private companies across various industries. Our strategies are customized to meet the unique needs of each business.</p>
           </div>
        </div>
        {/* Question five */}
        <div className={` w-full  shadow-lg bg-white   border-1 mt-4 rounded overflow-hidden border-[#00000047]`}>
         <div className="active:bg-blue-100 p-2 cursor-pointer"  onClick={()=> toggleHandler("fifth")}>
          <p className="text-lg w-[80%] font-bold inline-block text-[#000000c1]">
          How do you measure the success of a digital marketing campaign?
          </p>
          <span className="float-right text-2xl transition-transform duration-300">
            <FontAwesomeIcon
              className={`transition-transform duration-300 ease-in-out ${toggle.fifth ? "rotate-45" : "rotate-90"}`}
              icon={faXmark}
            />
          </span>
          </div>
          {/* Animated Answer Section */}
          <div className={` p-2 text-base text-[#000000c9] transition-all duration-500 ${toggle.fifth?"max-h-[180px] translate-y-0":"max-h-[0px] translate-y-2"}`}>
            <p>We use key performance indicators (KPIs) such as ROI, website traffic, conversion rates, cost-per-lead (CPL), engagement rates, and search engine rankings to measure success and provide detailed performance reports.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
