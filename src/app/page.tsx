"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ResponsiveNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Ahzam Ismail</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Ahzam Ismail</div>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700">
            <div className="flex flex-col space-y-2 p-4">
              <a href="#" className="block py-2 hover:bg-gray-600">
                Home
              </a>
              <a href="#" className="block py-2 hover:bg-gray-600">
                About
              </a>
              <a href="#" className="block py-2 hover:bg-gray-600">
                Services
              </a>
              <a href="#" className="block py-2 hover:bg-gray-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* First div takes full width on medium devices */}
        <div className="md:col-span-2 lg:col-span-1 bg-blue-300 p-4">
       <b> Unlock Efficiency </b> <br/>
        
      Cutting Edge Strategies and Tools for Achieving Excellence

          
        </div>

        {/* Next two divs split evenly on medium devices */}
        <div className="bg-green-200 p-4">
          {" "}
          <b>Elevate Your Vision</b> <br/>

          Transforming Ideas into Breathtaking Designs

          
        </div>
        <div className="bg-red-300 p-4">
          {" "}
          <b>United for Success</b> <br/>

           Collaborative Partnerships for a Sustainable Tomorrow

        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavigation;
