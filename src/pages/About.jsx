import React from 'react';
import Services from './Services';
import Contact from './Contact';

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-center font-semibold shadow-md m-6 text-2xl ">About Us</h1>
        <p className="text-center max-w-md">
          Hi, I'm Manisha Rajput, a passionate Front-end Web Developer with expertise in crafting visually stunning UI pages using React.
          <br />
          With a keen eye for detail and a drive to stay up-to-date with the latest technologies, I specialize in building responsive, user-friendly interfaces that elevate user experiences.
        </p>
      </div>
      {/* <div className="flex justify-center w-full mt-4">
        <div className="rounded bg-gray-200 p-4">
        
        </div>
      </div> */}
        <Services />
        <Contact />
    </div>
  );
};

export default About;
