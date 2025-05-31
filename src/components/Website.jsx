import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ServiceCard from "./templates/ServiceCard";
import Tools from './Home_components/Tools'
import Contact_us from "./templates/Contact_us";
import Footer from "./Footer"
function Website() {
  const[quickContact,setQuickContact]=useState(false)
  const contactHeading="READY TO ELEVATE YOUR ONLINE PRESENCE?"
  const contactPara="Our expert web designers and developers create stunning, high-performing websites tailored to your business.From sleek, responsive designs to seamless user experiences, we build sites that drive results.Contact Hire Digital Guru today for a free consultation!"
  const contactAtag="Let's Discuss"
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
    <div>
      <Header />
      <HeroTemplate heading="Website Design & Development Services" />

      <div className="w-[80%] m-auto py-17">
        <h1 className="text-3xl md:text-[40px] text-center font-semibold mb-10">
          CRAFTING DIGITAL EXPERIENCES THAT DRIVE SUCCESS
        </h1>
        <p className="text-center" data-aos="zoom-in">
         At Digital Men, we craft high-performance, visually captivating, and user-friendly websites designed to elevate your online presence. Whether you're looking for a modern corporate site, a dynamic e-commerce platform, or a tailored web solution, our skilled team combines creativity and technical expertise to deliver exceptional results.
        </p>
      </div>
      {/* our services section */}
      <div className="bg-[#f8faff] py-17 px-4">
        <h1 className="text-3xl md:text-[40px] text-center font-semibold mb-15">
          OUR WEB DESIGN & DEVELOPMENT SERVICES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            {
              image: "custom-website-design.png",
              heading: "Custom Website Design",
              discription:
                "A well-crafted website is the cornerstone of your digital brand. Our talented designers create custom websites that reflect your unique identity and deliver a smooth, engaging user experience.",
              points: [
                {
                  point: "Distinctive, brand-aligned designs",
                },
                {
                  point: "Fully responsive and SEO-optimized layouts",
                },
                {
                  point: "Smart, intuitive navigation to boost user interaction",
                },
              ],
            },
            {
              image: "website-development-1.png",
              heading: "Website Development",
              discription:
                "We develop fast, secure, and scalable websites using the latest technologies to ensure exceptional performance and reliability.",
              points: [
                {
                  point: "Frontend and backend development",
                },
                {
                  point:"CMS solutions (WordPress, Shopify, Magento, and more)",
                },
                {
                  point: "Custom coding and seamless API integrations",
                },
              ],
            },
            {
              image: "e-commerce-website-development.png",
              heading: "E-Commerce Website Development",
              discription:
                "Expand your online business with a fully optimized, high-converting e-commerce store designed to meet your specific needs.",
              points: [
                {
                  point:"Secure payment gateway integration",
                },
                {
                  point:"Advanced product catalog and inventory management",
                },
                {
                  point:"Smooth, user-friendly experience to boost conversions",
                },
              ],
            },
            {
              image: "landing-page-design-development.png",
              heading: "Landing Page Design & Development",
              discription:"Boost your conversions with expertly crafted landing pages designed to capture leads and drive sales.",
              points: [
                {
                  point: "Conversion-focused layouts",
                },
                {
                  point: "A/B testing and detailed performance analytics",
                },
                {
                  point: "Optimized for speed and mobile responsiveness",
                },
              ],
            },
            {
              image: "website-redesign-optimization.png",
              heading: "Website Redesign & Optimization",
              discription:"Give your existing website a powerful upgrade to enhance performance, usability, and visual appeal.",
              points: [
                {
                  point: "UI/UX improvements for increased user engagement",
                },
                {
                  point: "Optimized loading speeds and mobile responsiveness",
                },
                {
                  point: "SEO-friendly architecture for better search engine rankings",
                },
              ],
            },
            {
              image: "web-maintenance-support.png",
              heading: "Web Maintenance & Support",
              discription:
                "Ensure your website stays secure, up-to-date, and fully functional with our reliable support and maintenance services.",
              points: [
                {
                  point: "Routine updates and security enhancements",
                },
                {
                  point: "Performance tracking and issue resolution",
                },
                {
                  point: "Content management and expert technical assistance",
                },
              ],
            },
          ].map((data, i) => (
            <ServiceCard data={data} key={i} />
          ))}
        </div>
      </div>
      <Tools/>
      <Contact_us contactHeading={contactHeading} contactPara={contactPara} contactAtag={contactAtag}/>
      <Footer/>
    </div>
  );
}

export default Website;
