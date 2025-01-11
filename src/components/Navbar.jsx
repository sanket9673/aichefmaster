import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../constants';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Start the navbar animation after a delay
    setTimeout(() => setShowNavbar(true), 1000);
  }, []);

  return (
    <nav
      className={`${
        showNavbar ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 bg-black text-white px-8 py-8 flex items-center justify-between`}
    >
      <div className="flex items-center space-x-5">
        <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
          <span>🌿</span>
        </div>
        <span className="text-lg font-semibold ">AI CHEF MASTER</span>
      </div>

      <div className="flex space-x-20">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className="relative text-white hover:text-green-500 transition-all duration-300 ease-in-out transform hover:scale-125"
            // This adds an underline to the active nav item with green color
            style={({ isActive }) => ({
              borderBottom: isActive ? '2px solid #48BB78' : 'none', // green underline when active
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <button className="inline-block py-2 px-2 space-x-3 bg-white text-[#000000] border-1 border-[#44d723] rounded-full text-base font-semibold uppercase tracking-wide transition-all duration-300 ease-in-out 
                  hover:bg-[#44d723] hover:text-black hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-[#44d723] hover:ring-opacity-50 cursor-pointer 
                  transform translate-x-[-40px]">
         Let's Start
      </button>
    </nav>
  );
};


export default Navbar;
