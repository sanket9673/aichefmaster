import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { navItems } from "../constants";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Start the navbar animation after a delay
    setTimeout(() => setShowNavbar(true), 1000);
  }, []);

  // Determine the color based on the current route
  const isProductPage = location.pathname.includes("product"); // Adjust 'product' to match your route path
  const textColor = isProductPage ? "text-white" : "text-black"; // Dynamic text color
  const hoverColor = isProductPage
    ? "hover:text-green-300"
    : "hover:text-green-500"; // Dynamic hover color

  return (
    <nav
      className={`${
        showNavbar ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 px-8 py-8 mb-44 flex items-center justify-between absolute top-0 left-0 w-full z-10`}
      style={
        {
          // backgroundColor: 'rgba(0, 0, 0, 0.4)', // Transparent background
          // backdropFilter: 'blur(10px)', // Optional blur effect
          // marginBottom: '50px', // Adjust this value to control spacing
        }
      }
    >
      <div className="flex items-center space-x-5">
        <div className="bg-green-500 border-b-black rounded-full h-8 w-8 flex items-center justify-center font-bold">
          <span>🌿</span>
        </div>
        <span className={`text-lg font-semibold ${textColor}`}>
          AI CHEF MASTER
        </span>{" "}
        {/* Dynamic title color */}
      </div>

      <div className="flex space-x-20">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={`relative transition-all duration-300 ease-in-out transform hover:scale-125 ${textColor} ${hoverColor}`} // Dynamic text and hover colors
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #48BB78" : "none",
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <button
        className={`inline-block py-2 px-4 space-x-3 bg-transparent border-2 rounded-full text-base font-semibold uppercase tracking-wide transition-all duration-300 ease-in-out 
                ${textColor} border-[#44d723] hover:bg-[#44d723] hover:text-black hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-[#44d723] hover:ring-opacity-50 cursor-pointer`}
        style={{
          backdropFilter: "blur(5px)", // Add blur effect to the button border
          WebkitBackdropFilter: "blur(5px)", // Support for Safari
          borderWidth: "2px", // Set a thicker border
        }}
      >
        Let's Start {/* Text changes to black on hover */}
      </button>
    </nav>
  );
};

export default Navbar;
