import React from 'react'
import { Link } from 'react-router-dom'
import { FaAddressCard } from 'react-icons/fa'
function Nav() {
  return (
    <div className='shadow-md w-full fixed top-0 left-0 space-x-96 m-0 p-0'>
        <div className='md:flex bg-white py-4 md:px-10 w-full flex justify-around '>
            <div className='font-bold text-2xl cursor-pointer  mr-1  pt-2   items-center font-[poppins] text--gray-800'>
                <span >
               <FaAddressCard  size={25}/>
                </span>
                </div>
                <div className=''>
                <ul className='  flex md-cols'>
                <li>linkedin/</li>
                  <li>Dribbble/</li>
                  <li>Instagram</li>
                </ul>
                </div>
           <div className='flex space-x-4'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='services'>Services</Link>
            <Link to='contact'>Contact</Link>
           </div>

        </div>
    
    </div>
  )
}

export default Nav