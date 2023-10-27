import React from 'react'
import Shope from '../assets/shope.png'
import Lzda from '../assets/lzda.png'


const Footer = () => {
  const Shopee ='https://shopee.ph/idc_account';
  const Lzdaa = 'https://www.lazada.com.ph/shop/idealcar/?fbclid=IwAR16SjWoEiyILp81udn8oIeMQ8GtWH7f91UpDs9Kpb0eGY0Os3nlnD_--w0&path=promotion-40130-0.htm&tab=promotion';
  const FB = 'https://www.facebook.com/idealcaraccessories';
  const IG = 'https://www.instagram.com/idealcar_accessories/?fbclid=IwAR0ikbJfQw-BSqVQPR-IeWN838RFNilxEdDnripNFIoWhzHSgBkfQtoWu34';
  const Tiktok = 'https://www.tiktok.com/@idealcar_accessories?fbclid=IwAR2pQEKTj94QVhloTM9y4sqrpMtzW1TOnYOIijXlce1tVGSANPxR7NR8iU4';

  const handleClick = () => {
    window.open(Shopee, '_blank');
  };
  const handleClick1 = () => {
  window.open(Lzdaa, '_blank');
  };
  const handleClick2= () => {
  window.open(FB, '_blank');
  };
  const handleClick3 = () =>{
    window.open(IG, '_blank');
  }
 const handleClick4 = () => {
  window.open(Tiktok, '_blank');
 }

  return (
    <div name='Footer' className='max-w-[autopx] max-h-[500px] bg-white text-black '>

        <div className='max-w-[720px] sm:mx-auto'>
        <div className='max-w-[720px] grid grid-cols-2 sm:grid-cols-4  my-3'>
    
              <div className='justify-self-center text-center mb-3'>
              <p className='sm:text-md text-black font-bold pb-2'>Social Media</p>
              <div className='grid item-center gap-1 sm:grid-cols-3 grid-cols-3 '>
              <a href={FB} target='_blank' rel="noopener noreferrer" onClick={handleClick2}>
              <ion-icon size="large" name="logo-facebook"> </ion-icon> 
              </a>
              <a href={IG} target='_blank' rel="noopener noreferrer" onClick={handleClick3}>
              <ion-icon size="large" name="logo-instagram"></ion-icon>    
              </a>
              <a href={Tiktok} target='_blank' rel="noopener noreferrer" onClick={handleClick4}>
              <ion-icon size="large" name="logo-tiktok"></ion-icon> 
              </a>
              </div>       
              </div>

              <div className='justify-self-center text-center mb-3'>
              <p className='sm:text-md text-black font-bold pb-2'>Ecommerce </p>
              <div className='grid item-center gap-1 grid-cols-2 '>
                <a href={Shopee} target='_blank' rel="noopener noreferrer" onClick={handleClick}>
                <img src={Shope} alt='Shopee' className='h-[40px]'/>
              </a>
              <a href={Lzdaa} target='_blank' rel="noopener noreferrer" onClick={handleClick1}>
                <img src={Lzda} alt='Lazada' className='h-[40px]'/>
              </a>
              </div>
              </div>

              <div className='justify-self-center text-center'>
              <p className='sm:text-md font-bold text-black '> Contact Us</p>
              <div className='grid item-center gap-1 grid-cols-1 '>
              <p className='font-[Poppins] text-sm'>Local: 269 </p>
              <p className='font-[Poppins] text-sm'>Tel: +63 286677703</p>
              </div>
              </div>

              <div className='justify-self-center text-center'>
              <p className='sm:text-sm font-bold'> Privacy Policy </p>
              <div className='grid item-center gap-1 grid-cols-1 '>
              <p className='italic text-sm font-[Arial]'>@2023 By Idealcar Inc.</p>
              </div>

              </div>
              </div>
              </div>
        </div>

  );
};

export default Footer;
