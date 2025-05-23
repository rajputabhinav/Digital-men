import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ServiceCard from "./templates/ServiceCard";
import service_img from "../assets/service_img3.png";
import ProcessTemplate from "./templates/ProcessTemplate";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Faq from "./templates/Faq";
import Contact_us from "./templates/Contact_us";
import QuickContact from "./templates/QuickContact";
const fontSize="text-3xl md:text-[40px]"
function Seo() {
  const[quickContact,setQuickContact]=useState(false)
  const contactHeading = "READY TO BOOST YOUR SEO PERFORMANCE?";
  const contactPara =
    "Let’s discuss how we can take your online presence to the next level. Contact us today for a free consultation!";
  const contactAtag = "Let's Discuss";
  const ProcessData = [
    {
      step: 1,
      processName: "Comprehensive SEO Audit",
      processDiscription:
        "We evaluate your website’s technical health, structure, and current search performance.",
    },
    {
      step: 2,
      processName: "Competitor & Market Analysis",
      processDiscription:
        "We study your competitors and industry trends to craft a strategy that gives you a competitive edge.",
    },
    {
      step: 3,
      processName: "Targeted Keyword Research",
      processDiscription:
        "We identify high-impact keywords tailored to your business and audience.",
    },
    {
      step: 4,
      processName: "On-Site Optimization",
      processDiscription:
        "We resolve technical SEO issues, enhance content, and improve overall website functionality.",
    },
    {
      step: 5,
      processName: "Content Development & Link Building",
      processDiscription:
        "We create valuable content and secure high-quality backlinks to strengthen your authority.",
    },
    {
      step: 6,
      processName: "Ongoing Monitoring & Reporting",
      processDiscription:
        "We track performance metrics, analyze results, and continuously refine strategies for sustained growth.",
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
  }, []);
  return (
    <div>
      <Header />
      <HeroTemplate heading="SEO Management Services" />
      <div className="py-17">
        <div className="md:w-[80%] w-full md:m-auto text-center p-2">
          <div className={`font-bold ${fontSize}`}>
            <h1>ELEVATE YOUR ONLINE PRESENCE WITH EXPERT SEO SOLUTIONS</h1>
          </div>
          <p className="text-base mt-7" data-aos="zoom-in">
            At Digital Men, we provide data-driven SEO management services
            designed to increase visibility, drive organic traffic, and boost
            your business growth. Our team of experts leverages advanced
            strategies to help you rank higher on search engines and stay ahead
            of the competition.
          </p>
        </div>
      </div>
      {/* our services section */}
      <div className="bg-[#f8faff] py-17 px-4">
        <h1 className={`font-bold text-center mb-17 ${fontSize}`}>
          OUR SEO SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              image: service_img,
              heading: "On-Page SEO",
              points: [
                { point: "Keyword Research & Optimization" },
                { point: "Meta Tags, Headers, & Content Optimization" },
                { point: "Internal Linking & URL Structuring" },
                { point: "Page Speed & User Experience Enhancement" },
              ],
            },
            {
              image: service_img,
              heading: "Off-Page SEO",
              points: [
                { point: "High-Quality Link Building" },
                { point: "Guest Blogging & Content Outreach" },
                { point: "Social Media Signals & Brand Mentions" },
              ],
            },
            {
              image: service_img,
              heading: "Technical SEO",
              points: [
                { point: "Website Audit & Technical Fixes" },
                { point: "Mobile-Friendliness & Core Web Vitals" },
                { point: "XML Sitemaps & Robots.txt Optimization" },
                { point: "Secure HTTPS Implementation" },
              ],
            },
            {
              image: service_img,
              heading: "Local SEO",
              points: [
                { point: "Google My Business (GMB) Optimization" },
                { point: "Local Citation Building" },
                { point: "Online Reputation Management" },
              ],
            },
          ].map((data, i) => (
            <ServiceCard key={i} data={data}/>
          ))}
        </div>
      </div>
      {/* why choose us section */}
      {/* <div className="w-full px-3 py-17">
        <h1 className="text-4xl font-bold mb-22 text-center">
          WHY CHOOSE HIRE DIGITAL GURU?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full">
          <div className="w-[80vw] aspect-square md:w-[100%] md:h-full m-auto  md:m-0" data-aos="fade-left">
            <img
              className=" rounded-full md:rounded-r-full md:rounded-l-none w-full md:h-fit h-full object-cover"
              src={why_choose_us}
            />
          </div>
          <div className="w-full md:w-[100%]" data-aos="fade-up">
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
        <h1 className={`font-bold text-center pb-10 ${fontSize}`}>
          OUR SEO PROCESS
        </h1>
        <ProcessTemplate ProcessData={ProcessData} />
      </div>
      {/* Contact us component */}
      <Contact_us
        contactHeading={contactHeading}
        contactPara={contactPara}
        contactAtag={contactAtag}
        setterMethod={setQuickContact}
      />
      {/* SEO Audit section  */}
      <div className="py-17 px-2 bg-[#f8faff]">
        <h1 className={`font-semibold text-center mb-20 ${fontSize}`}>
          COMPREHENSIVE SEO AUDIT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col justify-center items-center text-center gap-10 ">
            <h1 className="text-2xl">
              Our SEO audit provides an in-depth evaluation of your website’s
              current status and areas for improvement.
            </h1>
            <a
              className="text-white bg-blue-900 px-6 py-3 text-xl inline-block hover:bg-black group transition-all duration-500"
              href=""
              data-aos="fade-right"
            >
              Receive a <b>FREE SEO Audit Report</b>-Contact Us Today!
              <FontAwesomeIcon
                className="rotate-320 text-xl ml-1 group-hover:rotate-360 transition-all duration-500 ease-in-out"
                icon={faArrowRight}
              />
            </a>
          </div>
          <div className=" flex flex-wrap gap-2 p-2 justify-center">
            {[
              {
                image: "",
                discription: "Website Speed & Mobile Friendliness",
              },
              {
                image: "",
                discription: "Technical SEO Issues (Broken Links, etc)",
              },
              {
                image: "",
                discription: "Backlink Profile & Domain Authority",
              },
              {
                image: "",
                discription: "Keyword Rankings & Traffic Insights",
              },
              {
                image: "",
                discription: "Competitor Analysis & Growth Opportunities",
              },
            ].map((data,i) => (
                <div
                  className="md:w-[32%] w-[42%] px-3 py-2 text-center border-1 border-[#00000022] shadow-md text-blue-900"
                  data-aos="fade-up" key={i}
                >
                  <img className="m-auto mb-3" src={"multi_channel"} width={60} />
                  <p>{data.discription}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      {/* faq component */}
      <div className="py-16">
        <h1 className={`text-center font-bold mb-10 ${fontSize}`}>FQA</h1>
        <Faq faqData={faqData}/>
        <QuickContact  setQuickContact={setQuickContact} quickContact={quickContact}/>
      </div>
      <Footer />
    </div>
  );
}

export default Seo;
