import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import candidate from "../assets/candidate.jpg";
import { HiMenu, HiX } from "react-icons/hi";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={candidate} alt="Logo" className="w-12 h-12 rounded-full mr-4" />
            <span className="text-white font-bold text-lg">Manisha</span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="text-white sm:hidden block focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4`}
          >
            <li className="text-white hover:text-gray-200">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-gray-200">
              <Link to="/About">About</Link>
            </li>
            <li className="text-white hover:text-gray-200">
              <Link to="/Services">Services</Link>
            </li>
            <li className="text-white hover:text-gray-200">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
