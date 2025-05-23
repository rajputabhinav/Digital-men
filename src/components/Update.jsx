import React from "react";
import Header from "./Header";
import img1 from "../assets/our-approach-1.jpg";
import Footer from './Footer'
function Update() {
  const cardData = [
    {
      heading: "Unleashing The Power Of SEO With Hire Digital Guru",
      date: "Posted on March 26, 2025 by admin",
      discription:
        "IntroductionIn the fast-paced digital world, visibility is everything. If your business isn’t ranking on the first page of search engine results, you’re missing out on valuable traffic and potential customers. This is where Search Engine Optimization (SEO) comes into play. …",
      readmoreLink: "",
    },
    {
      heading: "Unleashing The Power Of SEO With Hire Digital Guru",
      date: "Posted on March 26, 2025 by admin",
      discription:
        "IntroductionIn the fast-paced digital world, visibility is everything. If your business isn’t ranking on the first page of search engine results, you’re missing out on valuable traffic and potential customers. This is where Search Engine Optimization (SEO) comes into play. …",
      readmoreLink: "",
    },
    {
      heading: "Unleashing The Power Of SEO With Hire Digital Guru",
      date: "Posted on March 26, 2025 by admin",
      discription:
        "IntroductionIn the fast-paced digital world, visibility is everything. If your business isn’t ranking on the first page of search engine results, you’re missing out on valuable traffic and potential customers. This is where Search Engine Optimization (SEO) comes into play. …",
      readmoreLink: "",
    },
    {
      heading: "Unleashing The Power Of SEO With Hire Digital Guru",
      date: "Posted on March 26, 2025 by admin",
      discription:
        "IntroductionIn the fast-paced digital world, visibility is everything. If your business isn’t ranking on the first page of search engine results, you’re missing out on valuable traffic and potential customers. This is where Search Engine Optimization (SEO) comes into play. …",
      readmoreLink: "",
    },
    {
      heading: "Unleashing The Power Of SEO With Hire Digital Guru",
      date: "Posted on March 26, 2025 by admin",
      discription:
        "IntroductionIn the fast-paced digital world, visibility is everything. If your business isn’t ranking on the first page of search engine results, you’re missing out on valuable traffic and potential customers. This is where Search Engine Optimization (SEO) comes into play. …",
      readmoreLink: "",
    },
  ];
  return (
    <div>
      <Header />
      <div className="mt-48 px-4">
        <div className="w-[70%]">
          {cardData.map((data, i) => (
            <div className="my-10" key={i}>
              <div>
                <img className="w-full object-cover" src={img1} />
              </div>
              <div className="mt-8">
                <h1 className="text-3xl text-[#000000dc]">
                  {data.heading}
                </h1>
                <p className="text-sm text-[#000000a0]">
                 {data.date}
                </p>
                <p className="text-lg text-[#000000a0] mt-8">{data.discription}</p>
              </div>
              <a className="inline-block mt-5 border-2 border-blue-500 px-5 py-2 rounded-4xl text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-500" href={data.readmoreLink}>
                Continue Reading...
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Update;
