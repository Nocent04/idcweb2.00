import React from 'react';
import Navbar from '../Components/Navbar';

import A from '../assets/Prodlogo/3M BLACK .png'

function Services() {
  return (
    <div name='Services' className='w-full h-screen bg-white'>
    <Navbar/>
  {/* Container */}
  <div className='max-w-[1720px] h-full mx-auto p-4 flex flex-col justify-center text-center w-full '>
      <div>
          <p className='text-5xl text-black font-bold inline font-[Poppins] '>Services</p>
      
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-10 sm:mx-auto'>
            <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 py-5'>
                <img className='mx-auto' src={A} alt="HTML icon" />
                <h3 className='sm:text-2xl font-bold font-[Poppins] pt-3'>TIRE PRESSURE MONITORING SYSTEM</h3>
            </div>

            <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 py-5'>
                <img className='mx-auto' src={A} alt="HTML icon"  />
                <h3 className='sm:text-2xl font-bold font-[Poppins] pt-3'>TIRE PRESSURE MONITORING SYSTEM</h3>
            </div>

            <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 py-5'>
                <img className='mx-auto' src={A} alt="HTML icon" />
                <h3 className='sm:text-2xl font-bold font-[Poppins] pt-3'>TIRE PRESSURE MONITORING SYSTEM</h3>
            </div>
      </div>
      
      </div>
      </div>
  )
}

export default Services;
