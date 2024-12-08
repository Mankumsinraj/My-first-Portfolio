import React from 'react';
import  { useEffect} from 'react'
import candidate from './assets/candidate.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards.jsx";


import { HiHand } from 'react-icons/hi';
import { MdOutlineDesktopMac } from "react-icons/md";
import { TbPencilExclamation } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import cococola from './assets/cococola.png';
import boltShift from './assets/boltshift.png';
import lightboxLogo from './assets/lightbox-logo.jpg';
import nationalBank from './assets/National Bank.png';
import mattered from './assets/mattered.png';
import subwayLogo from './assets/Subway-Logo.png';



function Section() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=' m-0 p-0 mt-16  sm:justify-center' data-aos='fade-right' data-aos-duration='3000'>
      
      <div className='  items-center justify-center  py-8   mx-auto sm:px-6 lg:w-1/2  rounded-md'>
        
        <img  className='w-56 h-56   sm:w-40 sm:h-40   mx-auto justify-center rounded-full items-center'src={candidate} alt="" />
        <h6 className='text-center ml-0 mx-auto py-1'>  <span>Hi, i'm Manisha</span><HiHand className="yellow-bg text-yellow-500 inline-block ml-2" size={25}/></h6>
      </div>
         <div className=' mx-auto py-2 text-center justify-center  font-semibold text-2xl h-64 sm:h-48 sm:w-56 w-64 place-items-center'data-aos='fade-left' data-aos-duration='2000' >
          <h1  >Building digital products,brands, and iuuh</h1>
          <button  className="bg-blue-900 text-white font-bold py-2 mt-3 px-4  rounded-3xl">click me</button>
          </div> 
          <div>
           
          <div className=" w-full  px-4  bg-red  sm:px-6  lg:px-8 flex flex-col items-center">
        <div className="w-full justify-center flex  py-0 px-2 mx-0   h-44 overflow-hidden border-2">
          {/* <marquee behavior="alternate" direction="right"> */}
          <img src={ cococola } alt="" className='m-1  mx-1 p-2 size-44 '/>
          <img src={ boltShift } alt=""  className='m-1 p-2 size-40 ' />
          <img src={  lightboxLogo } alt=""  className='m-1 p-2 size-44 '/>
          <img src={ nationalBank } alt=""  className='m-1 p-2 size-44 ' />
          <img src={ mattered } alt=""  className='m-1 p-2 size-49   '/>
          <img src={ subwayLogo } alt=""  className='m-1 p-17 size-44 '/>
          {/* </marquee> */}

         

          {/* <InfiniteMovingCards
            items={boxs}
            direction="right"
            speed="slow"
          /> */}
        </div>
      </div>
      <div className='justify-center flex m-3 w-full ' >
        <div className=' justify-center flex w-25 mt-2 h-16 m-2 font shadow-md'  data-aos="fade-right">
          <h1 className="font-semibold text-xl inline-block mx-2 py-2">Collaborate with brands and agencies to create impactful results.</h1>
        </div>
       
      </div>
      <div className="flex  flex-col  sm:flex-row  sm:space-x-4 sm:justify-center  space-x-4 justify-center  w-full" >
  <div className="bg-gray-500 text-white p-4 m-2 sm:w-64 sm:justify-center w-64 h-64 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div  className='font-semibold p-2 mt-16' >
    <TbPencilExclamation  className='font-semibold 'size={25}/>
    </div>
    <h5 className='font-bold'>UX & UI</h5>
    <p>Desiging interfaces that are intuitive,efficient and Enjoyable to use.

    </p>
  </div>
  <div className="bg-gray-500 text-white p-4  m-1 sm:w-64 sm:center w-64 h-64 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div className='font-semibold p-2 mt-16'>
    <BsMessenger className='font-semibold 'size={25}/>
    </div>
    <h5 className='font-bold'>Web & Mobile App</h5>
    <p className='m-1'>Transforming Ideas into Expectional Web and Mobile App Experience.</p>
  </div>
  <div className="bg-gray-500 text-white p-4   m-1 sm:w-64 sm:center w-64 h-64 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div  className='font-semibold p-2 mt-16'>
    <MdOutlineEventNote  className='font-semibold 'size={25}/>
    </div>
    <h5 className='font-bold'>Design & Creative </h5>
    <p>Crafting and Visually stunning designs that connect with your Audience.</p>
  </div>
  <div className="bg-gray-500 text-white p-4  m-1 sm:w-64  sm:center w-64 h-64 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div  className='font-semibold p-2 mt-16' >
  <MdOutlineDesktopMac  className='font-semibold 'size={25}/>
  </div>
    <h5 className='font-bold'>Development</h5>
    <p>Bringing Your Vision to life with the latest technology  and design trends .</p>
  </div>
</div>

          </div>
          <div>
            
          </div>
    </div>
  )
}

export default Section