import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="bg-[#000720] text-white text-base overflow-hidden ">
      <div className="flex flex-wrap lg:flex-nowrap lg:justify-between">
        <div className="lg:w-[20%] w-[30%] min-w-90  lg:m-0 px-4 pt-[90px]">
          <ul>
            <li>
              <div className="flex items-center gap-3">
                <img className="w-9 h-9 self-start" src="Images/Icons/location.png"/>
                <p>1/22, 2nd Floor Kamla Market New Delhi, India 110006</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 mt-5">
                <img className="w-9 h-9" src="Images/Icons/phone.png"/>
                <a href="tel:+91 9773630932">+91 9773630932</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3 mt-5">
                <img className="w-9 h-9" src="Images/Icons/email.png"/>
                 <a href="mailto:info@hiredigitalguru.com">info@hiredigitalguru.com</a>
              </div>
            </li>
            <li className="mt-5">
                <div className="flex gap-3">
                    <a className="w-10 h-10 rounded-full  flex justify-center items-center hover:bg-white transition-colors duration-400" href="https://www.facebook.com/hiredigitalguru"><img className="w-5 h-5" src="Images/Icons/facebook.svg"/></a>
                    <a className="w-10 h-10 rounded-full  flex justify-center items-center hover:bg-white transition-colors duration-400" href="https://twitter.com/digitalguruhire"><img className="w-5 h-5" src="Images/Icons/x_logo.svg"/></a>
                    <a className="w-10 h-10 rounded-full  flex justify-center items-center hover:bg-white transition-colors duration-400" href="https://twitter.com/digitalguruhire"><img className="w-5 h-5" src="Images/Icons/linkedin.svg"/></a>
                </div>
            </li>
          </ul>
        </div>
        <div className="lg:w-[30%] w-[40%] min-w-90  px-4 lg:m-0  pt-[90px]">
           <h1 className="font-bold text-2xl text-[#ffffff] relative mb-8 underLine">Quick Links</h1>
           <div className="flex justify-between">
            <ul>
              <li className="quickLinks"><Link to="/Seo">SEO</Link></li>
              <li className="quickLinks"><Link to="/GoogleAds">Google Ads</Link></li>
              <li className="quickLinks"><Link to="/MetaAds">Meta Ads</Link></li>
              <li className="quickLinks"><Link to="/Website">Website</Link></li>
              <li className="quickLinks"><Link to="/Social">Social</Link></li>
              <li className="quickLinks"><Link to="/Communication">Communication</Link></li>
            </ul>
            <ul>
              <li className="quickLinks"><Link to="/Branding">Branding</Link></li>
              <li className="quickLinks"><Link to="/Audits">Audits</Link></li>
              <li className="quickLinks"><Link to="/Consulting">Consulting</Link></li>
              <li className="quickLinks"><Link to="/About">About</Link></li>
              <li className="quickLinks"><Link to="/Approach">Our Approach</Link></li>
              <li className="quickLinks"><Link to="">Updates</Link></li>
            </ul>
           </div>
        </div>
        <div className="w-[34%] min-w-90 pl-5 pt-[90px]">
        <h1 className="font-bold text-2xl text-[#ffffff] relative mb-10 underLine">Certified Partner</h1>
        <div className="flex gap-5">
          <img className="w-[28%]" src="Images/Icons/PartnerBadgeClickable.png"/>
          <img className="w-[28%]" src="Images/Icons/meta.png"/>
          <img className="w-[28%]" src="Images/Icons/semrush.png"/>
        </div>
        </div>
      </div>
      <div className="w-full mt-12 py-6 text-center bg-[rgba(255,255,255,0.2)]">
        <p>Copyright ©2025 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
