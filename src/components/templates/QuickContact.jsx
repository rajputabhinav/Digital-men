import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const before =
  "before:content-[''] before:w-full before:h-[1px] before:border-1 border before:absolute before:top-[50%] before:left-0 before:-z-1";
const textFieldClasess =
  "w-full px-3.5 py-4 mt-3 border-1 border-gray-300 shadow-sm rounded-sm text-gray-500 outline-0";
const textAreaClasess =
  "w-full h-34 px-3.5 py-4 mt-3 border-1 border-gray-300 shadow-sm rounded-sm text-gray-500 outline-0";
function QuickContact(props) {
  return (
    <div className={`w-full h-full bg-[#000000d0] fixed top-0 left-0 z-10 flex justify-center items-center ${props.quickContact? "":"hidden"}`}>
       <div className="w-[370px] h-full max-h-[600px] bg-white rounded-xl py-3 px-2.5 overflow-auto">
      <div>
        <div className="flex justify-end">
          <h1 className="text-2xl m-auto">Quick Contact</h1>
          <FontAwesomeIcon
            className="bg-white text-blue-900 text-4xl cursor-pointer"
            icon={faCircleXmark}
            onClick={()=> props.setQuickContact(false)}
          />
        </div>
        <div className="w-[98%] m-auto mt-7">
          <a
            className="w-[50%]  text-center py-2 text-white rounded-l-md inline-block bg-blue-950"
            href=""
          >
            <FontAwesomeIcon icon={faPhone} /> +91 9764567274
          </a>
          <a
            className="w-[50%] text-center py-2 text-white rounded-r-md inline-block bg-green-600"
            href=""
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>
        <div className="mt-4 text-center relative z-0 ">
          <span
            className={`text-xl font-bold text-blue-900 px-1 bg-white border-0 ${before}`}
          >
            OR
          </span>
        </div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className={` ${textFieldClasess}`}
          required
        />
        <input
          type="text"
          placeholder="Your Email"
          className={textFieldClasess}
          required
        />
        <input
          type="text"
          placeholder="Your Phone No."
          className={textFieldClasess}
          required
        />
        <textarea placeholder="Your Message" className={textAreaClasess} />
        <button className="w-full bg-blue-900 text-white py-4 rounded-sm mt-2 hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
          SUBMIT
        </button>
      </form>
    </div>
    </div>
  );
}

export default QuickContact;
