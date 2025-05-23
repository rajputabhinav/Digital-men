import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navdeep_yadav from '../../assets/team/Navdeep-Yadav.jpg';
import Mukta_Gupta from '../../assets/team/Mukta-Gupta.jpg';
import Moolchandra from '../../assets/team/Moolchandra-Maurya.jpg';
import Jagrati_Gupta from '../../assets/team/Jagrati-Gupta.jpg';
import Minhazul from '../../assets/team/Minhazul-Haq.jpg';
import Seema_Yadav from '../../assets/team/Seema-Yadav.jpg';
import Swayam from '../../assets/team/Swayam-Prakash-Saini.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const teamData = [
  {
    img: Navdeep_yadav,
    name: 'Navdeep Yadav',
    role: 'Director & Founder',
    linkedin: 'https://www.linkedin.com/in/navdeepyadav/',
  },
  {
    img: Mukta_Gupta,
    name: 'Mukta Gupta',
    role: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/mukta-gupta-8930608b/',
  },
  {
    img: Jagrati_Gupta,
    name: 'Jagrati',
    role: 'Head Of Social Media Marketing',
    linkedin: 'https://www.linkedin.com/in/jagrati-gupta-bb114721/',
  },
  {
    img: Moolchandra,
    name: 'Moolchandra Maurya',
    role: 'Head Of SEO',
    linkedin: 'https://www.linkedin.com/in/moolchandra-maurya-bb608833a/',
  },
  {
    img: Swayam,
    name: 'Swayam Prakash Saini',
    role: 'Head Of Paid Marketing',
    linkedin: 'https://www.linkedin.com/in/swayam-prakash-saini-a9219a1a/',
  },
  {
    img: Minhazul,
    name: 'Minhazul Haq',
    role: 'Head Of Digital Marketing',
    linkedin: 'https://www.linkedin.com/in/minhazulhaq/',
  },
  {
    img: Seema_Yadav,
    name: 'Seema Yadav',
    role: 'SEO Manager',
    linkedin: 'https://www.linkedin.com/in/seemayadav0121/',
  },
];

function Slider() {
  useEffect(()=>{
    AOS.init({
      duration:1000
    },[])
  })
  return (
    <div className='w-full h-fit py-20 bg-[#f8faff] overflow-hidden'>
      <h1 className='text-3xl md:text-4xl text-center font-bold'>
        MEET OUR EXPERT TEAM
      </h1>
      <div className='w-full min-h-[500px] relative pb-20 mt-16'>
        {/* Custom Navigation Buttons */}
        <div className='custom-next absolute left-1/2 -translate-x-[120%] lg:bottom-3 md:bottom-5 bottom-9  hover:bg-blue-900 transition-all duration-400 bg-blue-100 w-12 h-12 text-center pt-[11px] rounded-full z-2 cursor-pointer'>
          <FontAwesomeIcon icon={faLessThan} />
        </div>
        <div className='custom-prev absolute right-1/2 translate-x-[120%]  lg:bottom-3 md:bottom-5 bottom-9 hover:bg-blue-900 transition-all duration-400 bg-blue-100 w-12 h-12 text-center pt-[11px] rounded-full z-2 cursor-pointer'>
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          loop={true}
          speed={1200}
          autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }
          }
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className='w-full h-fit p-3' data-aos="zoom-in">
                <div className='relative w-full'>
                  <img
                    className='w-full h-full object-cover rounded-lg'
                    src={member.img}
                    alt={member.name}
                  />
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-3xl w-9 h-9 flex justify-center items-center bg-white absolute text-blue-900 bottom-2 right-2  shadow-md'
                  >
                    <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                  </a>
                </div>
                <div className='mt-4 text-center'>
                  <p className='text-blue-950 text-lg font-semibold'>
                    {member.name}
                  </p>
                  <p className='text-sm text-gray-600 mt-1'>{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
