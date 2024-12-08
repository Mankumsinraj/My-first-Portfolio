import React from 'react'
import  { useEffect} from 'react'

import { MdOutlineDesktopMac } from "react-icons/md";
import { TbPencilExclamation } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className='justify-center flex m-3 w-full ' >
        <div className=' justify-center flex w-25 mt-2 h-16 m-2 font shadow-md'  data-aos="fade-right">
          <h1 className="font-semibold text-xl inline-block mx-2 py-4">Collaborate with brands and agencies to create impactful results.</h1>
        </div>
       
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:justify-center w-full">
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

  
    </>
  )
}

export default Services