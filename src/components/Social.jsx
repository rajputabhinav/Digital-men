import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ProcessTemplate from "./templates/ProcessTemplate";
import Footer from "./Footer";
import Contact_us from "./templates/Contact_us";
const headingClasses="text-3xl md:text-[40px] text-center font-bold"
function Social() {
  const heading = "Social Media Management Services";
  const contactHeading = "GET STARTED TODAY!";
  const contactPara =
    "Let’s craft a winning social media strategy for your brand. Contact us now to discuss how we can elevate your online presence.";
  const contactAtag = "Let's Discuss";
  const ProcessData = [
    {
      step: "1",
      processName: "Social Media Audit",
      processDiscription:
        "Evaluate your current performance to uncover strengths and identify areas for growth.",
    },
    {
      step: "2",
      processName: "Strategy Development",
      processDiscription: "Craft a tailored content and engagement plan aligned with your brand goals.",
    },
    {
      step: "3",
      processName: "Content Creation",
      processDiscription: "Produce eye-catching graphics, videos, and posts that resonate with your audience.",
    },
    {
      step: "4",
      processName: "Scheduling & Posting",
      processDiscription:
        "Publish content at strategic times to maximize visibility and engagement.",
    },
    {
      step: "5",
      processName: "Community Management",
      processDiscription:
        "Engage with your audience by responding to comments, messages, and interactions.",
    },
    {
      step: "6",
      processName: "Performance Analysis",
      processDiscription:
        "Track key metrics and continuously refine your strategy for optimal results.",
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
      <HeroTemplate heading={heading} />
      <div className="py-17 px-2">
        <div className="md:w-[80%] w-full md:m-auto text-center">
          <div className={headingClasses}>
            <h1>BOOST ENGAGEMENT, BUILD YOUR BRAND & DRIVE RESULTS</h1>
          </div>
          <p className="text-base mt-7" data-aos="zoom-in">
            At Digital Men, we offer strategic social media management designed
            to build a powerful online presence, connect with your audience, and
            drive real growth. Whether you're a growing startup or an
            established brand, our expert team ensures your social media
            platforms are fully optimized for engagement and results.
          </p>
        </div>
      </div>
      {/* Our social media manage process section */}
      <div className="bg-[#f8faff] w-[100%] h-auto py-17">
        <h1 className={headingClasses}>
            Our Social Media Management Process
        </h1>
        <ProcessTemplate ProcessData={ProcessData} />
      </div>

      <div className="py-17 px-2">
        <div className="md:w-[80%] w-full md:m-auto text-center">
          <div className={headingClasses}>
            <h1>DRIVE GROWTH WITH OUR EXPERTISE</h1>
          </div>
          <p className="text-base mt-7" data-aos="zoom-in">
            With 15+ years of experience, our agency has helped businesses
            across industries increase brand awareness, drive traffic, and
            generate leads through social media. Let us handle your social
            presence while you focus on growing your business.
          </p>
        </div>
      </div>
      <Contact_us
        contactHeading={contactHeading}
        contactPara={contactPara}
        contactAtag={contactAtag}
      />
      <Footer />
    </div>
  );
}

export default Social;
