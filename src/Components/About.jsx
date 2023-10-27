import React from 'react'
import{Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { useState } from 'react';
import 'swiper/swiper-bundle.css'





const About = () => {
  const [active, setActive] = useState(null);
  const langs = [
    {name: "What We Are?",
    logo:"help-circle-sharp",
    para:" Idealcar Inc. is engaged in providing claims, warranty, and services of quality and innovative auto spare parts and car accessories nationwide."},
    {name: "Mission",
    logo:"flag-sharp",
    para:"We deliver flexible claims, warranty, and services of innovative auto spare parts and car accessories nationwide. We are driven by highly-committed and skilled workforce, supported by excellent processes and systems meeting customers’ satisfaction to sustain the growth of our business partners and stakeholders and strive for global competitiveness and recognition."},
    {name: "Vision",
    logo: "eye-sharp",
    para:"A globally competitive and recognized company; preferred leading service provider of quality and innovative auto spare parts and car accessories.    "},
    {name: "Goals",
    logo:"stats-chart-sharp",
    para:"The cornerstones of the company’s philosophy are listening, adapting, and delivering exceptional value. What sets the organization apart is a strong and dynamic culture of entrepreneurship."},
    {name:"Company Background?", 
    logo:"search-sharp",
    para:"The company started its operation in August 2011 at 41 Aurora Boulevard, Quezon City and was established through the boundless drive and persistent effort of its President / COO, Mr. Philip L. Santos. On March 2016, the company moved to its new office at 711 Aurora Boulevard, Quezon City."},

  ];
  return (

    <div name='About' className='bg-black flex justify-center mx-auto'>
      <div className='max-w-4xl pb-10'>
      <div className='py-10 text-center text-white text-2xl font-[Poppins] font-extrabold pr-4'>About us</div>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={(cur)=> setActive(cur.realIndex)}
        loop={true}
        centeredSlides={true}
        speed={800}
        autoplay={{
          delay:3000,
        }}
        modules={[Autoplay]}
        >
       {langs.map((Lang, i)=>(
        <SwiperSlide key ={i}>
          <div className='h-96 flex pl-2'  >
            <div className={`card ${active === i && 'card-active' }` }>
            <div className='logo'>
             <ion-icon name={`${Lang.logo}`}></ion-icon>
              </div> 
            <h2 className='text-white text-center font-[Poppins] text-xl font-semibold mb-7  '>{Lang.name}</h2>
            <p className='para text-xs text-white text-center mt-10'>{Lang.para}</p>
            </div>
            </div>
        </SwiperSlide>
     ))}
        </Swiper>
        
      </div>
    </div>
            
  );
};

export default About;