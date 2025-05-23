import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import service_1 from "../../assets/service-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Why_chooseUs from "../templates/Why_chooseUs";
import { Link } from "react-router-dom";

const transition="transition-all duration-500"
function Services() {
  const serviceCradData = [
    {
      logo: "meta_ad.png",
      heading: "Search Engine Optimization",
      discription:"Boost Keyword Rankings, CTR & Organic Traffic through our exceptional SEO strategies.",
      url:"/Seo"
    },
    {
      logo: "meta_ad.png",
      heading: "Google Ads",
      discription:"Get high-quality leads within lower CPC rates through our customized PPC campaign.",
      url:"/GoogleAds"
    },
    {
      logo: "meta_ad.png",
      heading: "Meta Ads",
      discription:"Get a fascinating & functioning web structure to boost user-engagement & conversions.",
      url:"/MetaAds"
    },
    {
      logo: "meta_ad.png",
      heading: "Website Development",
      discription:"Connect with your target audience over social media to build strong connection.",
      url:"/Website"
    },
    {
      logo: "meta_ad.png",
      heading: "Social Media Marketing",
      discription:"Turn your every visitor into leads and then customer using our customized CRO Techniques.",
      url:"/Social"
    },
    {
      logo: "meta_ad.png",
      heading: "Campaigns Audits",
      discription:"Start your training from our Digital Guru’s to enhance your internet marketing skills.",
      url:"/Audit"
    }
  ];
  
  const whyChooseUsData=[
    {
      logo:"industry.png",
      heading:"Over 6 Years of Industry Experience",
      discription:"A strong track record in website design, development, and digital marketing that delivers measurable results."
    },
    {
      logo:"video-marketing.png",
      heading:"Tailored Digital Strategies",
      discription:"Customized solutions designed for businesses of all sizes—from startups to large enterprises."
    },
    {
      logo:"connection.png",
      heading:"Multi-Channel Marketing Expertise",
      discription:"Specialists in SEO, PPC, Meta Ads (Facebook & Instagram), and more to reach your audience wherever they are."
    },
    {
      logo:"communication.png",
      heading:"Honest & Transparent Communication",
      discription:"No hidden costs—just clear, honest service focused on your success."
    },
    {
      logo:"roi.png",
      heading:"ROI-Focused Campaigns",
      discription:"We craft data-driven strategies that are designed to maximize your return on investment."
    },
    {
      logo:"call.png",
      heading:"Dedicated Client Support",
      discription:"Hands-on, personalized assistance to guide your business toward lasting growth."
    }
  ]
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-[#fbf9f99e] py-4 px-2">
      <div className="py-20 px-2">
        <div className="text-center mb-10 w-full md:w-[70%] m-auto">
          <h1 className="text-4xl font-bold">OUR DIGITAL MARKETING SERVICES</h1>
          <p className="mt-5 text-[#000000a8]" data-aos="fade-up">
            We’re a full-service digital marketing agency dedicated to bringing
            your business ideas to life. With our tailored solutions and proven
            expertise, we’re confident in delivering results that make a real
            impact on your brand. Explore our services to discover the perfect
            fit for your business needs.
          </p>
        </div>
        {/* Our Services section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {serviceCradData.map((data, i) => (
            <div
              className="w-[100%]  bg-white border-1 hover:border-blue-700 border-[#0000004a] relative p-4 rounded-2xl group/card"
              data-aos="zoom-in"
              key={i}
            >
              <div
                className="bg-blue-500 w-full h-full rounded-xl overflow-hidden bg-center  p-8"
                style={{
                  backgroundImage: `Url("Images/backgroundImage/bg_pattern.png")`,
                  backgroundSize: "50px",
                }}
              >
                <div className={`ml-2 mb-4 bg-[#0c0c8d2d]  rounded-4xl w-[82px] h-[82px] flex justify-center items-center group-hover/card:bg-blue-900 ${transition}`}>
                  <img className="w-[42px] h-[42px]" src={`Images/Icons/${data.logo}`} />
                </div>
                <div className="text-white w-[100%]">
                  <h1 className=" text-2xl">{data.heading}</h1>
                  <p className="mt-3 md:text-lg">{data.discription}</p>
                  <a
                    className={`group/button px-4 py-3 bg-white text-blue-950 mt-5 inline-block rounded-2xl hover:bg-black hover:text-white ${transition}`}
                    href={data.url}
                    data-aos="fade-right">
                    Learn More
                    <FontAwesomeIcon
                      className={`rotate-45 ml-1 group-hover/button:rotate-90 ${transition}`}
                      icon={faArrowUp}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* whu choose digital guru section */}
      <Why_chooseUs whyChooseUsData={whyChooseUsData}/>
    </div>
  );
}

export default Services;
