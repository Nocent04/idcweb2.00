import React from 'react';

import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';

import M from '../assets//Prodlogo/3M BLACK .png'
import MAI from '../assets//Prodlogo/70 ORANGE.png'
import KLAS from '../assets//Prodlogo/AK BLUE.png'
import AIR from '../assets//Prodlogo/AS BLUE.png'
import AVT from '../assets//Prodlogo/AVT BLAC.png'
import HP from '../assets//Prodlogo/HP BLUE.png'
import MT from '../assets//Prodlogo/MTECH BLACK.png'
import RF from '../assets//Prodlogo/RF RED.png'

function Products() {
  return (
    <div name='Products' className='w-full h-screen bg-white'>
      <Navbar/>
    {/* Container */}
    <div className='max-w-[1900px] h-full mx-auto p-4 flex flex-col justify-center text-center w-full '>
        <div>
            <p className='text-5xl text-black font-bold inline font-[Poppins] '>BRANDS</p>
        
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-10 sm:mx-auto'>

             <NavLink to='/ThreeM'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 '>
                  <img className='mx-auto py-4' src={M} alt="HTML icon" />
              </div>
              </NavLink>
             
              <NavLink to='/Mai'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 '>
                  <img className='mx-auto py-5' src={MAI} alt="HTML icon"  />
              </div>
              </NavLink>

              <NavLink to='/RF'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500'>
                  <img className='mx-auto py-5' src={RF} alt="HTML icon" />
              </div>
              </NavLink>

              <NavLink to='/Klas'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500'>
                  <img className='mx-auto py-5' src={KLAS} alt="HTML icon" />
              </div>
              </NavLink>

              <NavLink to='/Air'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 '>
                  <img className='mx-auto py-7 px-2' src={AIR} alt="HTML icon" />
              </div>
              </NavLink>

              <NavLink to='/Avt'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 '>
                  <img className='mx-auto py-5' src={AVT} alt="HTML icon" />
              </div>
              </NavLink>

              <NavLink to='/HP'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 '>
                  <img className='mx-auto py-5' src={HP} alt="HTML icon" />
              </div>
              </NavLink>
              
              <NavLink to='/Mtech'>
              <div className= 'shadow-md shadow-[#040c16] hover:scale-110 mx-5 duration-500 '>
                  <img className='mx-auto py-5' src={MT} alt="HTML icon" />
              </div>
              </NavLink>
           
              </div>
        </div>
        </div>
  )
}

export default Products
