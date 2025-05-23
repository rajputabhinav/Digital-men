import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan, faStar } from '@fortawesome/free-solid-svg-icons';
function Testimonial() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        })
    },[])
  return (
    <div className='w-full h-fit py-20'>
        <h1 className='text-4xl font-bold text-center mb-16'>WHAT OUR CLIENT SAY</h1>
        <div className='w-full min-h-[330px] relative  mt-16'>
             <div className='custom-next  absolute left-[50%] -translate-x-[120%] hover:bg-blue-900 transition-all duration-400 bg-blue-100 w-13 h-13 text-center pt-4 rounded-full  bottom-0 z-3 text-sm cursor-pointer'><FontAwesomeIcon icon={faLessThan}/></div>
            <div className='custom-prev  absolute right-[50%] translate-x-[120%] hover:bg-blue-900 transition-all duration-400 bg-blue-100 w-13 h-13 text-center pt-4 rounded-full bottom-0 z-3 text-sm cursor-pointer'><FontAwesomeIcon icon={faGreaterThan}/></div>
        <Swiper 
        modules={[Navigation,Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        speed={1500}
        autoplay={{delay:1200}}
        loop={true}
        navigation={
          {
            prevEl: '.custom-prev',
            nextEl: '.custom-next',        
          }
        }
        breakpoints={{
            600:{
              slidesPerView:2,
            },
            1024:{
                slidesPerView:3,
            }
        }}
        >
         <SwiperSlide>
            <div className='w-full p-4' data-aos="zoom-out">
                <div>
                    <img src="Images/Icons/quito2.svg"/>
                </div>
                <div className='text-base'>
                    <p className='my-4'>Amazing ROI! HDG's tailored Google Ads campaigns boosted our sales by 60%. Their team is proactive, skilled, and result-driven.</p>
                    <p className='font-semibold'>David M.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <ul className='text-yellow-400 text-xl flex gap-1'>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                    </ul>
                    <img src="Images/Icons/google1.svg"/>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='w-full p-4' data-aos="zoom-out">
                <div>
                    <img src="Images/Icons/quito2.svg"/>
                </div>
                <div className='text-base'>
                    <p className='my-4'>We saw incredible growth with Hire Digital Guru's Google Ads service. Transparent, efficient, and effective!.
                    </p>
                    <p className='font-semibold'>Emily R.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <ul className='text-yellow-400 text-xl flex gap-1'>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                    </ul>
                    <img src="Images/Icons/google1.svg"/>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='w-full p-4' data-aos="zoom-out">
                <div>
                    <img src="Images/Icons/quito2.svg"/>
                </div>
                <div className='text-base'>
                    <p className='my-4'>Hire Digital Guru transformed our ad strategy! Our leads doubled in just 3 months. Their expertise in Google Ads is unmatched. Highly recommended!</p>
                    <p className='font-semibold'>Sarah L.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <ul className='text-yellow-400 text-xl flex gap-1'>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                    </ul>
                    <img src="Images/Icons/google1.svg"/>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='w-full p-4' data-aos="zoom-out">
                <div>
                    <img src="Images/Icons/quito2.svg"/>
                </div>
                <div className='text-base'>
                    <p className='my-4'>Impressive SEO results! Our website now ranks on the first page for key terms. Thanks to Hire Digital Guru’s expertise, we’ve seen a steady increase in leads.</p>
                    <p className='font-semibold'>David M.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <ul className='text-yellow-400 text-xl flex gap-1'>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                    </ul>
                    <img src="Images/Icons/google1.svg"/>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='w-full p-4' data-aos="zoom-out">
                <div>
                    <img src="Images/Icons/quito2.svg"/>
                </div>
                <div className='text-base'>
                    <p className='my-4'>Amazing ROI! HDG's tailored Google Ads campaigns boosted our sales by 60%. Their team is proactive, skilled, and result-driven.</p>
                    <p className='font-semibold'>David M.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <ul className='text-yellow-400 text-xl flex gap-1'>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                    </ul>
                    <img src="Images/Icons/google1.svg"/>
                </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='w-full p-4' data-aos="zoom-out">
                <div>
                    <img src="Images/Icons/quito2.svg"/>
                </div>
                <div className='text-base'>
                    <p className='my-4'>Professional, results-driven, and creative. Hire Digital Guru transformed our all digital campaigns generate 3X revenue!</p>
                    <p className='font-semibold'>Emily R.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <ul className='text-yellow-400 text-xl flex gap-1'>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                        <li><FontAwesomeIcon icon={faStar}/></li>
                    </ul>
                    <img src="Images/Icons/google1.svg"/>
                </div>
            </div>
         </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Testimonial