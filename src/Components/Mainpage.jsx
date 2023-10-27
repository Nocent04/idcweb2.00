import React from 'react';
import Navbar from "../Components/Navbar";
import About from "../Components/About"
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import OurPartners from "../Components/OurPartner";

function Mainpage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <OurPartners/>
      <About/>
      <Footer/>
    </>
  )
}

export default Mainpage
