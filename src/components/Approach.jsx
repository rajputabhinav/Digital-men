import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import our_approach1 from "../assets/our-approach-1.jpg";
import our_approach2 from "../assets/our-approach-2.jpg";
import our_approach3 from "../assets/our-approach-3.jpg";
import Contact_us from "./templates/Contact_us";
import Footer from "./Footer"
const textSize="text-3xl md:text-[40px]"
function Approach() {
  const heading = "Our Approach";
  const contactHeading="LET’S TAKE YOUR BRAND TO THE NEXT LEVEL WITH A STRATEGIC DATA-DRIVEN APPROACH"
  const contactPara="Let’s discuss how we can take your online presence to the next level. Contact us today for a free consultation!"
  const contactAtag="Contact Us Today To get Started!"

  useEffect(()=>{
    AOS.init({

    })
  },[])
  return (
    <div>
      <Header />
      <HeroTemplate heading={heading} />
      <div className="py-17">
        <div className="md:w-[70%] w-full md:m-auto text-center p-2">
          <div className={`font-bold leading-13 ${textSize}`}>
            <h1>OUR APPROACH</h1>
            <h1> THE DIGITAL MEN WAY</h1>
          </div>
          <p className="text-base mt-7" data-aos="zoom-in">
            At Digital Men, we believe in delivering honest,
            results-driven, and tailor-made digital marketing solutions. With
            15+ years of experience, we have mastered the art of blending
            creativity, technology, and strategy to help businesses of all sizes
            thrive online.
          </p>
        </div>
      </div>
      {/* how we work section */}
      <div>
        <div className={`font-bold text-center leading-12 bg-[#f8faff] py-17 px-5 ${textSize}`}>
          <h1>HOW WE WORK:</h1>
          <h1>A STRATEGIC, DATA-DRIVEN APPROACH</h1>
        </div>
        {/* approach one */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <img src={our_approach1} />
          </div>
          <div className="px-8 py-8 flex flex-col justify-center gap-8 order-2 md:order-1 text-blue-900">
            <h1 className="md:text-[40px] text-3xl font-bold">
              UNDERSTANDING YOUR BUSINESS
            </h1>
            <p className="text-base">
              Every brand is unique, and so is our strategy. We begin with{" "}
              <strong>in-depth research</strong> to understand your industry,
              competitors, and target audience.
            </p>
          </div>
        </div>
        {/* approach two section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={our_approach2} />
          </div>
          <div className="px-3 py-8 flex flex-col justify-center gap-8 text-blue-900">
            <h1 className="md:text-[40px] text-3xl font-bold">
            SETTING CLEAR GOALS
            </h1>
            <p className="text-base">
            Our team collaborates with you to define clear, measurable objectives—whether it's increasing brand awareness, driving traffic, generating leads, or boosting sales.
            </p>
          </div>
        </div>
        {/* approach three section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <img src={our_approach3} />
          </div>
          <div className="py-8 px-3 flex flex-col justify-center gap-8 order-2 md:order-1 text-blue-900">
            <h1 className="md:text-[40px] text-3xl font-bold">
            CUSTOM STRATEGY DEVELOPMENT
            </h1>
            <p className="text-base">
              Every brand is unique, and so is our strategy. We begin with{" "}
              <strong>in-depth research</strong> to understand your industry,
              competitors, and target audience.
            </p>
          </div>
        </div>
        {/* approach four section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={our_approach3} />
          </div>
          <div className="px-3 py-8 flex flex-col justify-center gap-8 text-blue-900">
            <h1 className="md:text-[40px] text-3xl font-bold">
            EXECUTION WITH PRECISION
            </h1>
            <p className="text-base">
            We implement strategies with precision, continuously monitoring performance to optimize for maximum ROI.
            </p>
          </div>
        </div>
        {/* approach five section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <img src={our_approach1} />
          </div>
          <div className="px-3 py-8 flex flex-col justify-center gap-8 order-2 md:order-1 text-blue-900">
            <h1 className="md:text-[40px] text-3xl font-bold">
            DATA-DRIVEN OPTIMIZATION
            </h1>
            <p className="text-base">
            With advanced analytics, A/B testing, and real-time tracking, we refine campaigns to ensure ongoing growth and success.
            </p>
          </div>
        </div>
        {/* approach seven section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={our_approach2} />
          </div>
          <div className="px-3 py-8 flex flex-col justify-center gap-8 text-blue-900">
            <h1 className="md:text-[40px] text-3xl font-bold">
            TRANSPARENT REPORTING & COMMUNICATION
            </h1>
            <p className="text-base">
            We believe in 100% transparency. Our clients receive detailed reports and insights, ensuring they stay informed at every step.
            </p>
          </div>
        </div>
      </div>
      {/* why choose us section */}
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
                </div>
              </div>
            </div> */}
            {/* contact us section */}
            <Contact_us contactHeading={contactHeading} contactPara={contactPara} contactAtag={contactAtag}/>
            <Footer/>
    </div>
  );
}

export default Approach;
