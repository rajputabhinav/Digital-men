import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAdd,
  faBars,
  faCaretDown,
  faChevronDown,
  faEnvelope,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const headerNavLinkClasess="border-r px-3"
const sideBarNavLinksClasess="mt-5 pb-2 text-blue-950 font-semibold text-2xl border-b-1"
function Header() {
  const [toggle, setToggle] = useState(false);
  const [isDropdownVisible,setIsDropDownVisible]=useState(false)
  function toggleHandler() {
    setToggle(() => !toggle);
  }
  return (
    <div className="fixed w-full z-10 top-0 header">
      {/* header uper section */}
      <div
        className="flex justify-between px-2 py-1"
        style={{
          background: "linear-gradient(135deg, #3089e3 0%,#233783 75%)",
        }}
      >
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
            <span className="md:hidden font-semibold">phone 977-363-0932</span>
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
      {/* header bottom section */}
      <div className="flex justify-between items-center p-4 bg-white relative ">
        <div className="">
          <Link to="/"><img className="w-40" src="Images/Logo/logo.png" /></Link>
        </div>
        {/* Nav links above mediam size device section */}
        <ul className="md:flex hidden gap-2 font-bold lg:text-lg cursor-pointer text-sm text-[#000000c1]">
          <li className={headerNavLinkClasess}><Link to={'/About'}>ABOUT</Link></li>
          <li className={headerNavLinkClasess}><Link to={'/Approach'}>OUR APPROACH</Link></li>
          <li className={`services ${headerNavLinkClasess}`}>
            SERVICES
            <FontAwesomeIcon className="m-1 text-sm " icon={faChevronDown} />
            <div className="flex w-[100%] invisible h-84 top-20 left-0 absolute z-4 opacity-0 transition-all duration-500 ease-in-out p-8 bg-white rounded-b-4xl services_dropdown">
              <div className="ml-13">
                <div className="text-lg w-80 flex gap-3 items-center border-r-1 mt-4 p-1 ">
                  <img src="Images/Icons/seo.png" width={50} />
                   <Link to={'/Seo'}>SEO</Link>
                </div>
                <div className="text-lg w-80 flex gap-3 items-center border-r-1 mt-4 p-1 ">
                  <img src="Images/Icons/world-wide-web.png" width={50} />
                  <Link to={'/Website'}>WEBSITE</Link>
                </div>
                <div className="text-lg w-80 flex gap-3 items-center border-r-1 mt-4 p-1 ">
                  <img src="Images/Icons/brand.png" width={50} />
                  <Link to={"/Branding"}>BRANDING</Link>
                </div>
              </div>

              <div className="ml-13">
                <div className="text-lg w-80 flex gap-3 items-center border-r-1 mt-4 p-1 ">
                  <img src="Images/Icons/google-ad-banner.svg" width={50} />
                    <Link to={"/GoogleAds"}>GOOGLE ADS</Link>
                </div>
                <div className="text-lg w-80 flex gap-3 items-center border-r-1 mt-4 p-1 ">
                  <img src="Images/Icons/social.png" width={50} />
                  <Link to={'/Social'}>SOCIAL</Link>
                </div>
                <div className="text-lg w-80 flex gap-3 items-center border-r-1 mt-4 p-1 ">
                  <img src="Images/Icons/audit.png" width={50} />
                  <Link to={"/Audit"}>AUDIT</Link>
                </div>
              </div>

              <div className="ml-13">
                <div className="text-lg w-80 flex gap-3 items-center mt-4 p-1 ">
                  <img src="Images/meta-ad-banner.svg" width={50} />
                  <Link to={"/MetaAds"}>META ADS</Link>
                </div>
                <div className="text-lg w-80 flex gap-3 items-center mt-4 p-1 ">
                  <img src="Images/Icons/communication-banner.svg" width={50} />
                  <Link to={"/Communication"}>COMMUNICATION</Link>
                </div>
                <div className="text-lg w-80 flex gap-3 items-center mt-4 p-1 ">
                  <img src="Images/Icons/cunsulting.png" width={50} />
                  <Link to={"/Consulting"}>CONSULTING</Link>
                </div>
              </div>
            </div>
          </li>
          <li className="px-3"> <Link to={'/Update'}>UPDATES</Link></li>
        </ul>
        {/* sildebar section  */}
        <span
          className={`text-black text-4xl ${
            toggle ? "hidden" : "inline-block md:hidden"
          }`}
        >
          <FontAwesomeIcon icon={faBars} onClick={toggleHandler} />
        </span>
        <div
          className={`md:hidden w-[80%] h-[100vh] absolute right-0 top-0 overflow-auto bg-white transition-all duration-700 ease-in-out p-4 ${
            toggle
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full h-[100vh]"
          }`}
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-blue-950">
               DIGITAL MEN
            </h1>
            <FontAwesomeIcon
              className="text-4xl text-[#f30909d0]"
              icon={faXmark}
              onClick={toggleHandler}
            />
          </div>
          <ul className="my-10">
            <li className={sideBarNavLinksClasess}>
             <Link to={'/About'}>About</Link>
            </li>
            <li className={sideBarNavLinksClasess}>
            <Link to={'/Approach'}>  Our Approach</Link>
            </li>
            <li className={sideBarNavLinksClasess} onClick={()=> setIsDropDownVisible(!isDropdownVisible)}>
              Services <FontAwesomeIcon icon={faCaretDown} />
              <div className={`w-[100%] bg-white transition-all duration-1000 overflow-hidden ${isDropdownVisible? "opacity-100 max-h-[700px]":"opacity-0 max-h-0"}`}>
                {
                  [
                    {
                      path:'/Seo',
                      linkName:"SEO"
                    },
                     {
                      path:'/Website',
                      linkName:"WEBSITE"
                    },
                     {
                      path:'/branding',
                      linkName:"BRANDING"
                    },
                     {
                      path:'/GoogleAds',
                      linkName:"GOOGLE ADS"
                    },
                     {
                      path:'/Social',
                      linkName:"SOCIAL"
                    },
                     {
                      path:'/Audit',
                      linkName:"AUDIT"
                    },
                     {
                      path:'/MetaAds',
                      linkName:"META ADS"
                    },
                     {
                      path:'/Communication',
                      linkName:"COMMUNICATION"
                    },
                     {
                      path:'/Consulting',
                      linkName:"CONSULTING"
                    }
                  ].map((data,i)=>(
                    <div className="text-lg w-45 flex gap-3 items-center mt-1 p-1" key={i}>
                    <Link to={data.path}>{data.linkName}</Link>
                  </div>
                  ))
                }
                </div>
            </li>
            <li className={sideBarNavLinksClasess}>
              Updates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
