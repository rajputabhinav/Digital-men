import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const WhatsAppButton = () => {
  const phoneNumber = "911234567890"; // Replace with your WhatsApp number
  const message = "Hello, I'm interested in your services."; // Optional default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (  
    <div className="fixed bottom-9 left-20 flex items-center space-x-2 z-50">
        <div className="relative">
          <div className="bg-white text-black text-sm px-3 py-1 rounded-lg shadow-md relative before:content-[''] before:absolute before:top-1/2 before:right-full before:translate-y-[-50%] before:border-8 before:border-transparent before:border-r-white">
            Hello
          </div>
        </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 aspect-square fixed bottom-6 left-4 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition duration-300 z-50"
      >
       <FontAwesomeIcon icon={faWhatsapp} size="2xl"/>
      </a>
    </div>
  );
};

export default WhatsAppButton;
