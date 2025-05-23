import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ServiceCard from "./templates/ServiceCard";
import ProcessTemplate from "./templates/ProcessTemplate";
import Faq from "./templates/Faq";
import Contact_us from "./templates/Contact_us";
import Footer from "./Footer";
const HeadingClasses="text-3xl md:text-[40px] text-center font-bold"
function MetaAds() {
  const heading = "Meta Ads Services";
  const para = "Drive Results with Facebook & Instagram Advertising";
  const contactHeading="GET STARTED WITH HIGH-PERFORMING META ADS TODAY!"
  const contactPara="Let’s grow your business with powerful Facebook & Instagram Ads.Contact Hire Digital Guru today for a free consultation!"
  const contactAtag="Get Started Today!"
  const ProcessData = [
    {
      step: 1,
      processName: "In-Depth SEO Audit",
      processDiscription:
        "We analyze your website's health, technical setup, and current rankings.",
    },
    {
      step: 2,
      processName: "In-Depth SEO Audit",
      processDiscription:
        "We analyze your website's health, technical setup, and current rankings.",
    },
    {
      step: 3,
      processName: "In-Depth SEO Audit",
      processDiscription:
        "We analyze your website's health, technical setup, and current rankings.",
    },
    {
      step: 4,
      processName: "In-Depth SEO Audit",
      processDiscription:
        "We analyze your website's health, technical setup, and current rankings.",
    },
    {
      step: 5,
      processName: "In-Depth SEO Audit",
      processDiscription:
        "We analyze your website's health, technical setup, and current rankings.",
    },
    {
      step: 6,
      processName: "In-Depth SEO Audit",
      processDiscription:
        "We analyze your website's health, technical setup, and current rankings.",
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

    useEffect(()=>{
      AOS.init({
        duration:1000
      })
    })

  return (
    <div>
      <Header />
      <HeroTemplate heading={heading} para={para}/>
      <div className=" md:w-[80%] m-auto py-17 px-2">
        <h1 className={HeadingClasses}>
          UNLOCK THE POWER OF META ADS
        </h1>
        <p className="text-center" data-aos="zoom-in">
          Maximize your brand’s visibility and revenue with targeted Facebook &
          Instagram Ads. At Hire Digital Guru, we craft data-driven,
          performance-focused campaigns that generate leads, boost sales, and
          enhance brand awareness.
        </p>
      </div>
      {/* our services section */}
      <div className="bg-[#f8faff] py-17 px-4">
        <h1 className={HeadingClasses}>
          OUR META ADS SERVICES
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-14">
          {[
            {
              image: "",
              heading: "Custom Website Design",
              discription:
                "A well-designed website is the foundation of your online brand. Our creative designers craft custom websites that align with your brand identity, ensuring a seamless user experience.",
              points: [
                {
                  point: "Unique, brand-focused designs",
                },
                {
                  point: "Mobile-responsive and SEO-friendly layout",
                },
                {
                  point: "Intuitive navigation for enhanced user engagement",
                },
              ],
            },
            {
              image: "",
              heading: "Website Development",
              discription:
                "We build fast, secure, and scalable websites using cutting-edge technologies to ensure top performance and reliability.",
              points: [
                {
                  point: "Frontend & backend development",
                },
                {
                  point:
                    "CMS-based solutions (WordPress, Shopify, Magento, etc.)",
                },
                {
                  point: "Custom coding & API integrations",
                },
              ],
            },
            {
              image: "",
              heading: "E-Commerce Website Development",
              discription:
                "Grow your online business with a fully optimized and high-converting e-commerce store tailored to your needs.",
              points: [
                {
                  point: "Secure payment gateway integration",
                },
                {
                  point: "Advanced product catalogs and inventory management",
                },
                {
                  point: "Seamless user experience for higher conversions",
                },
              ],
            },
            {
              image: "",
              heading: "Landing Page Design & Development",
              discription:
                "Increase your conversions with professionally designed landing pages that capture leads and drive sales.",
              points: [
                {
                  point: "High-converting layouts",
                },
                {
                  point: "A/B testing and performance tracking",
                },
                {
                  point: "Optimized for speed and mobile compatibility",
                },
              ],
            },
            {
              image: "",
              heading: "Website Redesign & Optimization",
              discription:
                "Revamp your existing website to improve its performance, usability, and aesthetics.",
              points: [
                {
                  point: "UI/UX enhancements for better engagement",
                },
                {
                  point: "Faster loading speeds and mobile optimization",
                },
                {
                  point: "SEO-friendly structure for higher rankings",
                },
              ],
            },
            {
              image: "",
              heading: "Web Maintenance & Support",
              discription:
                "Keep your website running smoothly with our ongoing support and maintenance services.",
              points: [
                {
                  point: "Regular updates and security patches",
                },
                {
                  point: "Performance monitoring and bug fixes",
                },
                {
                  point: "Content updates and technical support",
                },
              ],
            },
          ].map((data, i) => (
            <ServiceCard data={data} key={i} />
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
        <h1 className={HeadingClasses}>OUR PROCESS</h1>
        <ProcessTemplate ProcessData={ProcessData} />
      </div>
      {/* faq component */}
      <Faq faqData={faqData} />
      <Contact_us contactAtag={contactAtag} contactHeading={contactHeading} contactPara={contactPara} />
      <Footer />
    </div>
  );
}

export default MetaAds;
