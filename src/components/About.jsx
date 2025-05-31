import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos'
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import about from "../assets/about.svg";
import who_we_are from "../assets/who-we-are.svg";
import Footer from "./Footer";
import our_mission from "../assets/our-mission.svg";
import our_vision from "../assets/our-vision.svg";
import Contact_us from "./templates/Contact_us";
const textSize="text-3xl md:text-[40px]"
function About() {
  const heading = "About Us";
  const para = "Know More About  Digital Men Services & Offerings";
  const contactHeading="LET’S TRANSFORM YOUR DIGITAL PRESENCE!";
  const contactPara="Partner with Hire Digital Guru today and take your business to the next level.";
  const contactAtag="Contact Us Today!"

  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
    <div>
      <Header/>
      <HeroTemplate heading={heading} para={para} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 my-20">
        <div className=" flex flex-col justify-center order-2 md:order-1">
          <h1 className={`font-semibold ${textSize}`}>
            ABOUT<span className="text-blue-900 ml-2">DIGITAL MEN</span>
          </h1>
          <p className="mt-10" data-aos="zoom-in">
            Welcome to <strong>Digital Men</strong>, your trusted partner
            in
            <strong>
              digital marketing, website design & development, and complete
              digital solutions.
            </strong>{" "}
            With <strong>over 15 years of experience,</strong> we are a{" "}
            <strong>Google Partner agency based in India</strong>, delivering{" "}
            <strong>
              honest, bespoke, and multi-channel digital marketing services
            </strong>{" "}
            to businesses of all sizes.
          </p>
        </div>
        <div className="p-4 order-1 md:order-2">
          <img className="w-full h-full" src={about} />
        </div>
      </div>
      {/* who we are section start here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-17 justify-between my-20 bg-[#f8faff]">
        <div className="p-4">
          <img className="w-full h-full" src={who_we_are} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className={`font-semibold ${textSize}`}>WHO WE ARE</h1>
          <p className="mt-10" data-aos="zoom-in">
            At <strong>Digital Men</strong>, we are more than just a
            digital agency—we are strategists, innovators, and problem solvers
            committed to helping brands{" "}
            <strong>grow, scale, and succeed in the digital world.</strong>
            Whether you are a startup or an established enterprise, our team
            brings expertise in{" "}
            <strong>
              SEO, PPC, Meta Ads (Facebook & Instagram), social media marketing,
              website development, and more
            </strong>{" "}
            to create custom-tailored solutions that drive measurable results.
          </p>
        </div>
      </div>
      {/* why choose us */}
    {/* <div className="w-full h-fit px-3 py-17">
        <h1 className="text-4xl font-bold mb-22 text-center">
          WHY CHOOSE HIRE DIGITAL GURU?
        </h1>
        <div className="flex md:flex-nowrap flex-wrap gap-19 md:h-80 w-full">
          <div className="w-[80vw] h-[80vw] md:w-[50%] md:h-full m-auto  md:m-0" data-aos="fade-left">
            <img
              className=" rounded-full md:rounded-r-full md:rounded-l-none w-full h-full  object-cover"
              src={why_choose_us}
            />
          </div>
          <div data-aos="fade-up">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img src={google_partner_agency} />
              </div>
              <div>
                <p className="text-base font-bold text-blue-950">
                  Google Partner Agency:
                </p>
                <p className="text-[#000000d0] text-base">
                  We leverage Google-certified strategies for maximum impact.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-5 ">
              <div className="w-10 h-10">
                <img src={experince_15_years} />
              </div>
              <div>
                <p className="text-base font-bold text-blue-950">
                  15+ Years of Industry Experience:
                </p>
                <p className="text-[#000000d0] text-base">
                  Proven track record in delivering digital success stories.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <div className="w-10 h-10">
                <img src={compliance_security} />
              </div>
              <div>
                <p className="text-base font-bold text-blue-950">
                  Client-Centric Approach
                </p>
                <p className="text-[#000000d0] text-base">
                  Every business is unique, and so are our tailored solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center  mt-5">
              <div className="w-10 h-10">
                <img src={multi_channel} />
              </div>
              <div>
                <p className="text-base font-bold text-blue-950">
                  Result-Oriented Strategies
                </p>
                <p className="text-[#000000d0] text-base">
                  We focus on ROI-driven campaigns that grow your business.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center  mt-5">
              <div className="w-10 h-10">
                <img src={transeparent_reporting} />
              </div>
              <div>
                <p className="text-base font-bold text-blue-950">
                  Transparent & Honest Approach:
                </p>
                <p className="text-[#000000d0] text-base">
                  No hidden charges, no false promises—just real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* our mission section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-5 my-8 bg-[#f8faff]">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className={`font-semibold ${textSize}`}>OUR MISSION</h1>
          <p className="mt-10" data-aos="zoom-in">
            To empower brands with innovative digital marketing solutions that{" "}
            <strong>
              maximize reach, boost engagement, and drive business growth.
            </strong>
          </p>
        </div>
        <div className="p-4 order-1 md:order-2">
          <img className="w-full h-full" src={our_mission} />
        </div>
      </div>
      {/* our vission section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-5 my-10 bg-white">
        <div className="p-4">
          <img className="w-full h-full" src={our_vision} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className={`font-semibold ${textSize}`}>OUR VISION</h1>
          <p className="mt-10" data-aos="zoom-in">
            OUR VISION To be a globally recognized digital marketing agency
            known for <strong>exceptional results, innovative strategies, and client
            satisfaction.</strong>
          </p>
        </div>
      </div>
      <Contact_us contactHeading={contactHeading} contactPara={contactPara} contactAtag={contactAtag} />
      {/* footer section */}
      <Footer/>
    </div>
  );
}

export default About;





 