import React, { useState } from "react";
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import IDC from "../assets/IDEALCAR.png";





function Navbar  ()  {


const [nav, setNav]= useState (false);
const handleClick = () => setNav(!nav);


  return (
    
      <div className="max-w-[autopx] z-50 w-screen fixed flex justify-between items-center mx-auto bg-white px-10"> 
        <div >
          <img src={IDC}  alt="Logo" className="w-40 h-20"/>
        </div>

    
        <ul className="hidden md:flex text-black gap-9 text-md font-extrabold font-[Poppins]">
          <li className="cursor-pointer hover:text-red-500"> 
          <NavLink to='/'>
          Home
          </NavLink>
          </li>

          <li className="cursor-pointer hover:text-red-500">
          <NavLink to='/Products'>
          Products
          </NavLink> 
          </li>

          <li className="cursor-pointer hover:text-red-500">
          <NavLink to='/Services' smooth={true} duration={500}>
           Services 
          </NavLink>
          </li>

          <li className="cursor-pointer hover:text-red-500"> 
          <NavLink to='/Careers' smooth={true} duration={500}>
          Careers 
          </NavLink>
          </li>

          <li className="cursor-pointer hover:text-red-500"> 
          <Link to='About' smooth={true} duration={500}>
          Contacts
          </Link>
          </li>

          <li className="cursor-pointer hover:text-red-500" >
          <Link to='About' smooth={true} duration={500}>
             About
             </Link>
          </li>
        </ul>
       

        {/* for mobile view*/ }
        <div onClick={handleClick} className='md:hidden z-10 text-black text-4xl'>
        {!nav ? <FaBars /> :  <FaTimes />}
      </div>


      <ul
        className={
          !nav 
            ? 'hidden' : 'absolute top-0 left-0 w-screen h-screen bg-red-900 flex flex-col justify-center items-center text-white text-xl'
        }
      >
      
          <li  className="p-5 cursor-pointer hover:text-red-500">
            <NavLink onClick={handleClick} to='/' smooth={true} duration={500}>
             Home 
             </NavLink>
             
          </li>
    
          <li  className="p-5 cursor-pointer hover:text-red-500">
          <NavLink onClick={handleClick} to='/Products' smooth={true} duration={500}>
             Products
             </NavLink>
             </li>
          <li  className="p-5 cursor-pointer hover:text-red-500">
          <NavLink onClick={handleClick} to='/Services' smooth={true} duration={500}>
             Services
             </NavLink>
             </li>
          <li  className="p-5 cursor-pointer hover:text-red-500">
          <Link onClick={handleClick} to='Career' smooth={true} duration={500}>
             Careers
             </Link> 
             </li>
         <li  className="p-5 cursor-pointer hover:text-red-500">
         <Link onClick={handleClick} to='About' smooth={true} duration={500}>
              Contacts
             </Link>
             </li>
          <li  className="p-5 cursor-pointer hover:text-red-500">
          <Link onClick={handleClick} to='About' smooth={true} duration={500}>
             About
             </Link> 
             </li>

        </ul>


      </div>
  
  );
}

export default Navbar;