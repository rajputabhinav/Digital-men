import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ServiceCard from "./templates/ServiceCard";
import service_img from "../assets/service_img3.png";
import ProcessTemplate from "./templates/ProcessTemplate";
import Contact_us from "./templates/Contact_us";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Faq from "./templates/Faq";
const headingClasses="text-3xl md:text-[40px] font-bold text-center"
function Google_Ads() {
  const contactHeading = "READY TO SCALE YOUR BUSINESS WITH GOOGLE ADS?";
  const contactPara =
    "Let’s create a high-performing Google Ads campaign tailored for your business growth.";
  const contactAtag = "Get Started Today!";
  const heading = "Google Ads Management Services";
  const para =
    "Enhance your Google Ads campaigns with precision targeting and expert-driven strategies for maximum profitability.";
  const ProcessData = [
    {
      step: 1,
      processName: "Free Consultation & Audit",
      processDiscription:
        "We review your current strategy, website, and competitors to uncover growth opportunities.",
    },
    {
      step: 2,
      processName: "Campaign Strategy & Setup",
      processDiscription:
        "We design a tailored strategy, set up high-performing ads, and structure your campaign for optimal success.",
    },
    {
      step: 3,
      processName: "Keyword Research & Ad Creation",
      processDiscription:
        "Leveraging advanced tools, we identify the right keywords and craft engaging ad copy to drive clicks and conversions.",
    },
    {
      step: 4,
      processName: "A/B Testing & Optimization",
      processDiscription:
        "We test various ad variations and continuously optimize them to ensure top performance.",
    },
    {
      step: 5,
      processName: "Budget & Bid Management",
      processDiscription:
        "We strategically allocate your budget to maximize return on investment.",
    },
    {
      step: 6,
      processName: " Reporting & Insights",
      processDiscription:
        "Receive comprehensive reports with actionable insights and expert recommendations.",
    },
  ];

  const faqData = [
    {
      question: "How long does it take to see SEO results?",
      result:
        "SEO is a long-term strategy, and results typically take 3-6 months, depending on competition and industry.",
    },
    {
      question: "Can I do SEO on my own?",
      result:
        "Yes, but professional SEO services ensure a more effective and faster approach with expert insights.",
    },
    {
      question: "Do you follow Google’s SEO guidelines?",
      result:
        "Absolutely! We adhere to Google’s best practices and use only ethical, white-hat SEO techniques.",
    },
    {
      question: "How much does SEO management cost?",
      result:
        "SEO pricing varies based on project scope. Contact us for a customized quote.",
    },
    {
      question: "Will SEO help my business grow?",
      result:
        "Yes! SEO drives organic traffic, increases visibility, and helps in long-term brand growth.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <Header />
      <HeroTemplate heading={heading} para={para} />
      <div className="py-17 px-2">
        <div className={headingClasses}>
          <div className="text-[40px] font-bold">
            <h1>
              DRIVE TARGETED TRAFFIC & MAXIMIZE ROI WITH OUR GOOGLE ADS
              EXPERTISE
            </h1>
          </div>
          <p className="text-base mt-7">
            At Digital Men, we create results-focused Google Ads campaigns that
            help businesses efficiently reach their marketing goals. Whether
            you're aiming to generate leads, boost sales, or build brand
            awareness, our customized strategies are designed to deliver maximum
            ROI.
          </p>
        </div>
      </div>
      {/* our services section */}
      <div className="bg-[#f8faff] py-17 px-4">
        <div className="md:w-[70%] w-full md:m-auto text-center">
          <h1 className={headingClasses}>
            OUR GOOGLE ADS SERVICES
          </h1>
          <p className="md:mb-12 mb-5 mt-16" data-aos="fade-up">
            Achieve Higher Conversions and Lower CPC with Our Google Ads
            Campaigns. Unlock Powerful Strategies for Maximum Performance. Get
            Your Free Audit Today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {[
            {
              image: service_img,
              heading: "Search",
              points: [
                {
                  point:
                    "Reach high-intent customers at the perfect moment with Google Search.",
                },
              ],
            },
            {
              image: service_img,
              heading: "Performance Max",
              points: [
                {
                  point:
                    "Connect with audiences across the entire Google network with just one campaign.",
                },
              ],
            },
            {
              image: service_img,
              heading: "Demand Gen",
              points: [
                {
                  point:
                    "Boost demand and drive conversions on YouTube, Discover, and Gmail with engaging image and video ads.",
                },
              ],
            },
            {
              image: service_img,
              heading: "Remarketing Ads",
              points: [
                {
                  point:
                    "Re-engage visitors who have interacted with your website or app to boost conversion rates.",
                },
              ],
            },
            {
              image: service_img,
              heading: "Display",
              points: [
                {
                  point:
                    "Connect with customers across 3 million websites and apps using compelling creative.",
                },
              ],
            },
            {
              image: service_img,
              heading: "Shoping Ads",
              points: [
                {
                  point:
                    "Display your products to shoppers as they browse for their next purchase.",
                },
              ],
            },
            {
              image: service_img,
              heading: "Video",
              points: [
                { point: "Engage viewers on YouTube and drive conversions." },
              ],
            },
            {
              image: service_img,
              heading: "Local Services Ads",
              points: [
                {
                  point:
                    "Increase visibility for location-based businesses by ranking at the top of Google search results.",
                },
              ],
            },
          ].map((data, i) => (
            <ServiceCard key={i} data={data} />
          ))}
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
      {/* process component */}
      <div className="bg-[#f8faff] w-[100%] h-auto py-17">
        <h1 className={headingClasses}>
          Our Google Ads Process
        </h1>
        <ProcessTemplate ProcessData={ProcessData} />
      </div>
      {/* SEO Audit section  */}
      <div className="py-17  bg-[#f8faff]">
        <div className="md:w-[50%] w-full md:m-auto text-center mb-10">
          <h1 className={headingClasses}>
            Free Google Ads Audit Get a detailed expert analysis today!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col justify-center gap-10 px-4">
            <h1 className="text-2xl text-center">
            Is your Google Ads campaign falling short of expectations? Let our experts conduct a thorough audit, covering:
            </h1>
            <a
              className="text-white w-fit bg-blue-900 px-6 py-3 text-xl  hover:bg-black group transition-all duration-500"
              href=""
              data-aos="fade-right"
            >
              Rquest A Free Audit Now!
              <FontAwesomeIcon
                className="rotate-320 text-xl ml-1 group-hover:rotate-360 transition-all duration-500 ease-in-out"
                icon={faArrowRight}
              />
            </a>
          </div>
          <div className="flex flex-wrap gap-2 p-2 justify-center">
            <div
              className="md:w-[32%] w-[42%] px-3 py-2 text-center border-1 border-[#00000022] shadow-md text-blue-900"
              data-aos="fade-up"
            >
              <img className="m-auto mb-3" src={"multi_channel"} width={60} />
              <p>Account Structure & Settings Review</p>
            </div>
            <div
              className="md:w-[32%] w-[42%] px-3 py-2 text-center border-1 border-[#00000022] shadow-md text-blue-900"
              data-aos="fade-up"
            >
              <img className="m-auto mb-3" src={"multi_channel"} width={60} />
              <p>Keyword & Ad Copy Evaluation</p>
            </div>
            <div
              className="md:w-[32%] w-[42%] px-3 py-2 text-center border-1 border-[#00000022] shadow-md text-blue-900"
              data-aos="fade-up"
            >
              <img className="m-auto mb-3" src={"multi_channel"} width={60} />
              <p>Bid & Budget Optimization Recommendations</p>
            </div>
            <div
              className="md:w-[32%] w-[42%] px-3 py-2 text-center border-1 border-[#00000022] shadow-md text-blue-900"
              data-aos="fade-up"
            >
              <img className="m-auto mb-3" src={"multi_channel"} width={60} />
              <p>Conversion Tracking & Analytics Assessment</p>
            </div>
            <div
              className="md:w-[32%] w-[42%] px-3 py-2 text-center border-1 border-[#00000022] shadow-md text-blue-900"
              data-aos="fade-up"
            >
              <img className="m-auto mb-3" src={"multi_channel"} width={60} />
              <p>Competitor Analysis & Benchmarking</p>
            </div>
          </div>
        </div>
      </div>
      {/* faq component */}
      <Faq faqData={faqData}/>
      <Contact_us
        contactHeading={contactHeading}
        contactPara={contactPara}
        contactAtag={contactAtag}
      />
      <Footer />
    </div>
  );
}

export default Google_Ads;
