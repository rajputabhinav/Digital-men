import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ServiceCard from "./templates/ServiceCard";
import Contact_us from "./templates/Contact_us";
import Footer from "./Footer";

function Branding() {
    const contactHeading="LET’S ELEVATE YOUR BRAND!"
    const contactPara="Ready to build a strong and lasting brand presence? Hire Digital Guru is here to make your vision a reality."
    const contactAtag="Let's Discuss"

    useEffect(()=>{
      AOS.init({
     duration:1000
      })
    })
  return (
    <div>
      <Header />
      <HeroTemplate heading="Branding Management Services" />

      <div className="w-[80%] m-auto py-17">
        <h1 className="md:text-[40px] text-3xl text-center font-semibold mb-10">
          BUILD A POWERFUL BRAND WITH HIRE DIGITAL GURU
        </h1>
        <p className="text-center" data-aos="zoom-in">
          Your brand is more than just a logo—it’s your story, your voice, and
          your promise to your customers. At Hire Digital Guru, we craft
          compelling brand identities that drive trust, recognition, and
          loyalty. With 15+ years of expertise in digital marketing and
          branding, we help businesses of all sizes establish a strong and
          consistent brand presence across all platforms.
        </p>
      </div>

      {/* Our services section */}
      <div className="bg-[#f8faff] py-17 px-4">
        <h1 className="text-3xl md:text-[40px] text-center font-semibold mb-15">
          OUR BRANDING SERVICES
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
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
      <Contact_us contactHeading={contactHeading} contactPara={contactPara} contactAtag={contactAtag}/>
      <Footer/>
    </div>
  );
}

export default Branding;
