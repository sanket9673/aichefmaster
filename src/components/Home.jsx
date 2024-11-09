import React, { useState, useEffect } from 'react';
import { navItems } from '../constants';

const HomePage = () => {
  // State variables to control visibility of different sections
  const [showNavbar, setShowNavbar] = useState(false);
  const [showE, setShowE] = useState(false);
  const [showTextLine1, setShowTextLine1] = useState(false);
  const [showTextLine2, setShowTextLine2] = useState(false);
  const [showTextLine3, setShowTextLine3] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Start the animations with a slight delay for each element
    setTimeout(() => setShowNavbar(true), 1000); // Navbar appears after 1s
    setTimeout(() => setShowE(true), 1500); // "E" appears after 1.5s
    setTimeout(() => setShowTextLine1(true), 2000); // Text line 1 appears after 2s
    setTimeout(() => setShowTextLine2(true), 2500); // Text line 2 appears after 2.5s
    setTimeout(() => setShowTextLine3(true), 3000); // Text line 3 appears after 3s
  }, []);

  // Handle the background image load
  const handleBackgroundLoad = () => {
    setBgLoaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav
        className={`${
          showNavbar ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000 bg-black text-white px-8 py-8 flex items-center justify-between`}
      >
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
            {/* Placeholder for logo */}
            <span>🌿</span>
          </div>
          <span className="text-lg font-semibold">AI CHEF MASTER</span>
        </div>

        {/* Dynamically render nav items */}
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href} // Use a unique key for each item
              href={item.href}
              className="hover:text-gray-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded">
          Let's Start
        </button>
      </nav>

      {/* Main content with dynamic background image */}
      <div
        className={`flex flex-col min-h-screen ${
          bgLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
        style={{
          backgroundImage: 'url("/src/assets/background.jpg")', // Ensure the image path is correct
          backgroundSize: 'cover', // Ensures the image covers the container
          backgroundPosition: 'center', // Centers the image
        }}
      >
        <img
          src="/src/assets/background.jpg" // Add the image path here as a placeholder
          alt="Background"
          onLoad={handleBackgroundLoad}
          className="hidden" // Hide the image element itself, it's only used to trigger the loading event
        />
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center relative mt-52 text-center">
          {/* "E" section */}
          <h1
            className={`${
              showE ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 text-6xl font-pompiere text-black-700 mb-2`}
          >
            <span className="text-11xl font-montecarlo absolute ml-[-12rem] transform -translate-x-1/2 -translate-y-1/4 z-10">
              E
            </span>
          </h1>

          {/* Main Heading Text */}
          <h1
            className={`${
              showTextLine1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-2000 text-6xl font-pompiere text-black-700 mb-4`}
          >
            <span className="ml-32">levate Your Culinary</span>
          </h1>

          {/* Text Line 2 */}
          <h1
            className={`${
              showTextLine2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-2500 text-6xl font-pompiere text-black-700 mb-4`}
          >
            <span className="ml-72">
              xperience with <span className="text-red-500 font-bold">AI Chef Master</span>
            </span>
          </h1>

          {/* Text Line 3 */}
          <div
            className={`${
              showTextLine3 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-3000 flex justify-start w-full translate-x-1/3`}
          >
            <span className="text-4xl text-black-600 font-pompiere">
              - Personalized, Multilingual, and Step-by-Step Cooking Assistance.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
