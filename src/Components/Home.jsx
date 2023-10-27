import React from 'react'
import{Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css'


import WebCR1 from "../assets/HomePic/Web CR 1.jpg"
import WebCR2 from "../assets/HomePic/Web CR 2.jpg"
import WebIR1 from "../assets/HomePic/Web IR 1.jpg"
import WebIR2 from "../assets/HomePic/Web IR 2.jpg"
import WebRF1 from "../assets/HomePic/Web RF 1.jpg"






export default function About () {

  return (
    
    <div name='Home' className='w-screen z-10' >
      <div className='max-w-8xl pt-20 flex items-center justify-center mx-auto cursor-pointer '>
        <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
  
        loop={true}
        centeredSlides={true}
        speed={800}
        autoplay={{
          delay:3000,
        }}
        modules={[Autoplay,Navigation]}
        >
        <div>
        <SwiperSlide>
          <img src={WebCR1} alt="WebCR1"/>        
        </SwiperSlide>
        <SwiperSlide>
          <img src={WebCR2} alt="WebCR2"/>        
        </SwiperSlide>
        <SwiperSlide>
          <img src={WebIR1} alt="WebIR1"/>        
        </SwiperSlide>
        <SwiperSlide>
          <img src={WebIR2} alt="WebIR2"/>        
        </SwiperSlide>
        <SwiperSlide>
          <img src={WebRF1} alt="WebRF1"/>        
        </SwiperSlide>
       
        <div className='bg-black'> </div>
        </div>
        </Swiper>
        </div>
      </div>

  );
};
