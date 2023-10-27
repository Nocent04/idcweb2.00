import React from 'react'
import Marquee from "react-fast-marquee";

import M from "../assets/OurpartnersLogo/3M.png";
import RF from "../assets/OurpartnersLogo/RF 1 RED.png";
import MAI from "../assets/OurpartnersLogo/70MAI.png";
import KLAS from "../assets/OurpartnersLogo/AEROKLAS.png";
import  AIR from "../assets/OurpartnersLogo/AIR.png";
import AVT from "../assets/OurpartnersLogo/AVT.png";
import HP from "../assets/OurpartnersLogo/HP.png";
import MT from "../assets/OurpartnersLogo/MTECH.png";

export default function OurPartner() {
  return (
    <div className='mx-auto pb-10 '>
         <h1 className='text-2xl text-center font-bold font-[Poppins] py-10'>Our Partners</h1>
    <div className='md:block max-h-[autopx] mx-auto'>
    <div className=' items-center flex mx-auto'>
    <Marquee  direction="right" speed={50}
    pauseOnHover >
    
      <div className='px-10'>
        <img src={M} alt="" className='h-[40px]' />
      </div>
      <div className='px-10'>
        <img src={RF} alt="" className='h-[50px]'/>
      </div>
      <div className='px-10'>
        <img src={KLAS} alt="" className='h-[30px]'/>
      </div>
      <div className='px-10'>
        <img src={AVT} alt="" className='h-[40px]'/>
      </div>
      <div className='px-10'>
        <img src={HP} alt="" className='h-[40px]'/>
      </div>
      <div className='px-10'>
        <img src={AIR} alt="" className='h-[30px]' />
      </div>
      <div className='px-10'>
        <img src={MAI} alt="" className='h-[40px]'/>
      </div>
      <div className='px-10'>
        <img src={MT} alt="" className='h-[40px]' />
      </div>
    </Marquee>
    </div>
    </div>
    </div>
  )
}


