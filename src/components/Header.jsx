import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faEnvelope,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const headerNavLinkClasess = "border-r px-3 active:bg-blue-100";
const dropDownNavLinksClasses = "text-lg active:bg-blue-100 flex gap-5 items-center py-2 pl-5 relative cursor-pointer border-b-1";
const sideBarNavLinksClasess =
  "mt-5 pb-2 pl-4 text-xl border-b-1 border-gray-600 active:bg-[#2d2d31]";
function Header() {
  const [toggle, setToggle] = useState(false);
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  function toggleHandler() {
    setToggle(() => !toggle);
  }
  return (
    <div className="fixed w-full z-10 top-0 header">
      {/* header uper section */}
      <div
        style={{
          background: "linear-gradient(135deg, #3089e3 0%,#233783 75%)",
        }}
      >
        <div className="max-w-[1440px] m-auto flex justify-between px-2 py-1">
          <div className="md:flex hidden items-center gap-4 ml-5 text-white">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </div>
          <div className=" w-full md:w-auto text-center ">
            <a
              className="md:bg-white p-2.5 md:text-sm text-xl text-white  md:font-bold rounded-sm md:text-blue-950  mr-1"
              href="tel:+91 9773630932"
            >
              <FontAwesomeIcon className="mr-2" icon={faPhone} />
              <span className="hidden md:inline-block">+91 9773630932</span>
              <span className="md:hidden font-semibold">
                phone 977-363-0932
              </span>
            </a>
            <a
              className="bg-white p-2 md:inline-block hidden text-sm rounded-sm text-blue-950 font-bold mr-2"
              href="mailto:info@hiredigitalguru.com"
            >
              <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
              info@hiredigitalguru.com
            </a>
          </div>
        </div>
      </div>
      {/* header bottom section */}
      <div className="bg-white">
        <div className="flex justify-between items-center p-4 max-w-[1440px] m-auto">
          <div>
            <Link to="/">
              <img className="w-32" src="Images/Logo/digital_men2.png" />
            </Link>
          </div>
          {/* Nav links above mediam size device section */}
          <ul className="md:flex hidden gap-2 font-bold lg:text-lg text-sm text-[#000000c1]">
            <li className={headerNavLinkClasess}>
              <Link to={"/About"}>ABOUT</Link>
            </li>
            <li className={headerNavLinkClasess}>
              <Link to={"/Approach"}>OUR APPROACH</Link>
            </li>
            <li className="border-r px-3 services cursor-pointer relative">
               SERVICES
              <FontAwesomeIcon className="m-1 text-sm " icon={faChevronDown} />
              <div className="w-96  invisible top-10 right-0 absolute opacity-0 transition-all duration-300 ease-in-out py-8 bg-white rounded-b-4xl services_dropdown">
                <ul>
                  <li>
                    <Link to={"/Seo"}>
                    <div className={`${dropDownNavLinksClasses}`}>
                      <img src="Images/Icons/seo.png" width={50} />
                      SEO
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Website"}>
                    <div className={`${dropDownNavLinksClasses}`}>
                      <img src="Images/Icons/world-wide-web.png" width={50} />
                      WEBSITE
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/GoogleAds"}>
                    <div className={`${dropDownNavLinksClasses}`}>
                      <img src="Images/Icons/google-ad-banner.svg" width={50} />
                      GOOGLE ADS
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Social"}>
                    <div className={`${dropDownNavLinksClasses}`}>
                      <img src="Images/Icons/social.png" width={50} />
                      SOCIAL
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Audit"}>
                    <div className={`${dropDownNavLinksClasses}`}>
                      <img src="Images/Icons/audit.png" width={50} />
                      AUDIT
                    </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* sildebar section  */}
          <span
            className={`text-blue-900 text-4xl ${
              toggle ? "hidden" : "inline-block md:hidden"
            }`}
          >
            <FontAwesomeIcon icon={faBars} onClick={toggleHandler}/>
          </span>
          <div
            className={`md:hidden w-[80%] h-[100vh] absolute right-0 top-0 overflow-auto bg-[#262629] text-[#e7e3e3] transition-all duration-700 ease-in-out py-4 ${
              toggle
                ? "opacity-100"
                : "translate-x-full h-[100vh]"
            }`}
          >
            <div className="flex justify-between px-4">
              <h1 className="text-2xl font-bold">DIGITAL MEN</h1>
              <FontAwesomeIcon
                className="text-4xl text-[#f30909d0] cursor-pointer"
                icon={faXmark}
                onClick={toggleHandler}
              />
            </div>
            <ul className="my-10">
              <li className={sideBarNavLinksClasess}>
                <Link to={"/About"}>About</Link>
              </li>
              <li className={sideBarNavLinksClasess}>
                <Link to={"/Approach"}> Our Approach</Link>
              </li>
              <li
                className="mt-5 pb-2 text-[#e7e3e3] text-xl "
                onClick={() => setIsDropDownVisible(!isDropdownVisible)}
              >
               <span className="ml-4">Services</span>
                <div
                  className={`w-[100%] bg-[#38383c]`}
                >
                  {[
                    {
                      path: "/Seo",
                      linkName: "SEO",
                    },
                    {
                      path: "/Website",
                      linkName: "WEBSITE DESIGN & DEVELOPMENT",
                    },
                    {
                      path: "/GoogleAds",
                      linkName: "GOOGLE ADS",
                    },
                    {
                      path: "/Social",
                      linkName: "SOCIAL MEDIA MANAGEMENT",
                    },
                    {
                      path: "/Audit",
                      linkName: "DIGITAL MARKETING AUDIT",
                    }
                  ].map((data, i) => (
                    <div
                      className="text-base flex gap-3 items-center mt-1 p-1 pl-4 border-b-1 border-gray-600 active:bg-[#3d3d42]"
                      key={i}
                    >
                      <Link to={data.path}>{data.linkName}</Link>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
