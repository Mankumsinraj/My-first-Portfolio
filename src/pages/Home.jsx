import React from 'react'
import { useEffect } from 'react';
import bgImage from '../assets/bg_image_1.jpg';
import candidate from '../assets/candidate.jpg'
import { HiHand } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import About from './About';
import Services from './Services';
import Footer from './Footer';
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    < >
     <div 
        className="m-0 p-0 mt-0 sm:justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${bgImage})` }}

        data-aos="fade-right" 
        data-aos-duration="3000"
      >
        <div className="items-center justify-center py-8 mx-auto sm:px-6 lg:w-1/2 rounded-md">
          <img 
            className="w-56 h-56 sm:w-40 sm:h-40 mx-auto justify-center rounded-full items-center" 
            src={candidate} 
            alt="Candidate" 
          />
          <h6 className="text-center ml-0 mx-auto py-1">  
            <span>Hi, I'm Manisha</span>
            <HiHand className="yellow-bg text-yellow-500 inline-block ml-2" size={25} />
          </h6>
        </div>
        <div 
          className="mx-auto py-2 text-center justify-center font-semibold text-2xl h-64 sm:h-48 sm:w-56 w-64 place-items-center" 
          data-aos="fade-left" 
          data-aos-duration="2000"
        >
          <h1>Building digital products and brands</h1>
          {/* <button className="bg-blue-900 text-white font-bold py-2 mt-3 px-4 rounded-3xl">Click me</button> */}
        </div> 
      </div>

      <About />
      {/* <Services /> */}
      {/* <Contact /> */}
      <Footer /> 
    </>
  )
};
  

export default Home