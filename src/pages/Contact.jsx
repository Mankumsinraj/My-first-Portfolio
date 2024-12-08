import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center p-4 space-y-8">
      
      <div className="text-center ">
        <h1 className="shadow-md font-semibold text-2xl sm:text-3xl md:text-4xl mx-3 py-4 px-4">
          Contact Us
        </h1>
      </div>

    
      <div className="w-full flex lg-flex-row  justify-evenly">
        <div className=' sm:flex-col'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.8997436296363!2d85.35837907525666!3d23.39184390244728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3e41a615ed9%3A0x1c412897325fc8f3!2sBirla%20Hanuman%20Mandir!5e0!3m2!1sen!2sin!4v1730709361483!5m2!1sen!2sin"
          className="w-full h-60 sm:h-80 md:h-96 lg:w-[600px] lg:h-[450px] rounded-md shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
         <div className="w-full  max-w-md px-4 sm:px-6 md:px-8">
          <div className=''>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            autoComplete="off"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            autoComplete="off"
            required
            rows={5}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="bg-blue-600 text-white p-3 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300"
          />
        </form>
        </div>
      </div>

      </div>

      
         </div>
  );
}

export default Contact;
