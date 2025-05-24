import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Tool.css'
function Tools() {
  useEffect(()=>{
    AOS.init({
      duration:1200
    })
  })
  return (
    <div className='tool-container-main py-20 mt-15'>
      <h1 className='text-4xl font-bold text-center mb-14 text-[#000000c6]'>TOOLS & TECHNOLOGIES</h1>
      <div data-aos="zoom-out">
      <div className='flex gap-5 tool-container'>
        {
          [1,2].map((_,index)=>(
          [
            {brand1:"Linkedin Ads",
              img1:"lemlist",
              brand2:"Capterra",
              img2:"capterra"
            },
            {brand1:"Google Keyword Planner",
              img1:"google_ads",
              brand2:"Youtube Ads",
              img2:"youtube"
            },
            {brand1:"Pinterest Ads",
              img1:"pinterest",
              brand2:"WordPress",
              img2:"wordpress"
            },
            {brand1:"Bing Ads",
              img1:"bing",
              brand2:"Meta Data",
              img2:"meta_ad"
            },
            {brand1:"Facebook Ads",
              img1:"facebook",
              brand2:"Hubspot",
              img2:"hubspot"
            },
            {brand1:"Google Analytics",
              img1:"google_analytics",
              brand2:"Klaviyo",
              img2:"klaviyo"
            },
            {brand1:"Google Tag Manager",
              img1:"google_tag_manager",
              brand2:"Lemlist",
              img2:"lemlist"
            },
            {brand1:"ChatGpt",
              img1:"chatgpt",
              brand2:"Shopify",
              img2:"shopify"
            },
            {brand1:"Writesonic",
              img1:"writesonic",
              brand2:"WooCommerce",
              img2:"woo"
            },
            {brand1:"MailChimps",
              img1:"mailchimp",
              brand2:"Looker Studio",
              img2:"looker"
            }
          ].map((data,i)=>(
            <div className='w-64 h-36 flex flex-col justify-between text-base  text-white tool-item' key={i}>
            <div className='w-full bg-blue-900 rounded-sm px-5 py-3 h-15 flex gap-5 items-center '>
                <img src={`Images/Logo/${data.img1}`} width={25}/>
                <p>{data.brand1}</p>
            </div>
            <div className='w-full bg-blue-900 rounded-sm px-5 py-3  h-15 flex gap-5 items-center'>
                <img src={data.img2} width={25}/>
                <p>{`Images/Icons/${data.brand2}`}</p>
            </div>
          </div>
          ))
        ))
        }
      </div>
      </div>
    </div>
    )
}

export default Tools