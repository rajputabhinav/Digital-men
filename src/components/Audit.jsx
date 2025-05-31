import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import HeroTemplate from "./templates/HeroTemplate";
import ServiceCard from "./templates/ServiceCard";
import Contact_us from "./templates/Contact_us";
import Footer from "./Footer";
const headingClasses="text-3xl md:text-[40px] text-center font-bold"
function Audit() {
  const contactHeading = "GET YOUR DIGITAL MARKETING AUDIT TODAY!";
  const contactPara =
    "Let’s unlock your brand’s full potential with a data-backed strategy.";
  const contactAtag = "Let's Discuss";

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <Header />
      <HeroTemplate heading="Digital Marketing Audit" />

      <div className="py-17 px-2">
        <div className="md:w-[80%] w-full md:m-auto text-center">
          <div className={headingClasses}>
            <h1>UNCOVER GROWTH OPPORTUNITIES & MAXIMIZE YOUR ROI</h1>
          </div>
          <p className="text-base mt-7" data-aos="zoom-in">
            At Digital Men, we provide a thorough Digital Marketing Audit that
            examines every aspect of your online performance—from Google Ads and
            Meta Ads (Facebook & Instagram) to SEO and website effectiveness.
            Our in-depth analysis uncovers gaps, refines your strategies, and
            boosts your digital presence for improved results and maximum ROI.
          </p>
        </div>
      </div>
      {/* our services section */}
      <div className="bg-[#f8faff] py-17 px-4">
        <h1 className={headingClasses}>
          WHAT OUR DIGITAL MARKETING AUDIT COVERS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {[
            {
              image: "google-partner-agency.png",
              heading: "Google Ads Audit",
              discription:
                "Set your campaigns up for success with our detailed analysis:",
              points: [
                {
                  pointHeading: "Account Structure & Ad Quality — ",
                  point: "Are your campaigns optimized for peak performance?",
                },
                {
                  pointHeading: "Budget Allocation & Bidding Strategy — ",
                  point: "Maximize ROI with smart budgeting and bidding.",
                },
                {
                  pointHeading: "Ad Copy & Creative Effectiveness — ",
                  point:
                    "Boost click-through rates with engaging, persuasive content.",
                },
                {
                  pointHeading: "Keyword & Negative Keyword Analysis — ",
                  point: "Reach your ideal audience with precise targeting.",
                },
                {
                  pointHeading: "Conversion Tracking & Attribution — ",
                  point:
                    " Ensure you’re measuring the right metrics for true impact.",
                },
              ],
            },
            {
              image: "meta-ads-1.png",
              heading: "Meta Ads (Facebook & Instagram) Audit",
              discription:
                "Maximize your social media advertising with our expert approach.",
              points: [
                {
                  pointHeading: "Campaign Setup & Goal Alignment — ",
                  point:
                    "Ensure your ads are designed to meet your specific objectives.",
                },
                {
                  pointHeading: "Audience Targeting & Segmentation — ",
                  point:
                    "Connect with the right users precisely and effectively.",
                },
                {
                  pointHeading: "Ad Creative & Engagement Analysis — ",
                  point: "Enhance results with compelling visuals and content.",
                },
                {
                  pointHeading: "Pixel & Event Tracking Review — ",
                  point:
                    "Guarantee accurate data collection for smarter optimization.",
                },
                {
                  pointHeading: "Performance Metrics & Optimization — ",
                  point:
                    "Lower costs and boost conversions through continuous improvement.",
                },
              ],
            },
            {
              image: "seo-audit.png",
              heading: "SEO Audit",
              discription:
                "Take control of search rankings with a robust SEO strategy:",
              points: [
                {
                  pointHeading: "Technical SEO & Website Health Audit — ",
                  point: " Enhance crawlability and indexing efficiency.",
                },
                {
                  pointHeading: "On-Page SEO Optimization — ",
                  point:
                    "Fine-tune titles, meta descriptions, and content for maximum impact.",
                },
                {
                  pointHeading: "Keyword Performance & Competitor Analysis — ",
                  point: "Discover fresh opportunities to outrank competitors.",
                },
                {
                  pointHeading: "Backlink Profile Assessment — ",
                  point: "Build and strengthen your site’s authority.",
                },
                {
                  pointHeading: "Core Web Vitals & User Experience — ",
                  point:
                    "Boost site speed and ensure a seamless user experience.",
                },
              ],
            },
            {
              image: "website-audit-1.png",
              heading: "Website Audit",
              discription:
                "Your website is your digital storefront—make it fast, user-friendly, and optimized for conversions:",
              points: [
                {
                  pointHeading: "UI/UX Design & Navigation Review — ",
                  point: "Is your site intuitive and engaging for visitors?",
                },
                {
                  pointHeading: "Mobile-Friendliness & Responsiveness — ",
                  point: "Deliver a seamless experience across all devices.",
                },
                {
                  pointHeading: "Loading Speed & Performance Check — ",
                  point: "Faster websites lead to higher conversion rates.",
                },
                {
                  pointHeading: "Security & Compliance Audit — ",
                  point: "Safeguard your site against threats and ensure compliance.",
                },
                {
                  pointHeading: "Lead Generation & Conversion Funnel Analysis — ",
                  point: "Convert visitors into loyal customers.",
                },
              ],
            },
          ].map((data, i) => (
            <ServiceCard data={data} key={i} />
          ))}
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

export default Audit;
