import React, { useState, useEffect } from 'react';
import Features from './pages/Features';
import Principles from './Principles';

const HomePage = () => {
  const [showE, setShowE] = useState(false);
  const [showTextLine1, setShowTextLine1] = useState(false);
  const [showTextLine2, setShowTextLine2] = useState(false);
  const [showTextLine3, setShowTextLine3] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowE(true), 1500);
    setTimeout(() => setShowTextLine1(true), 2050);
    setTimeout(() => setShowTextLine2(true), 2100);
    setTimeout(() => setShowTextLine3(true), 2650);
  }, []);

  const handleBackgroundLoad = () => {
    setBgLoaded(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-100">
      <div
        className={`flex flex-col min-h-screen w-full ${
          bgLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
        style={{
          backgroundImage: 'url("/src/assets/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="/src/assets/background.jpg"
          alt="Background"
          onLoad={handleBackgroundLoad}
          className="hidden"
        />
        <div className="flex flex-col justify-center items-center relative mt-52 text-center w-full">
          <h1
            className={`${
              showE ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 text-6xl font-pompiere text-black-700 mb-2 w-full`}
          >
            <span className="lg:text-11xl md:text-9xl sm:text-6xl font-montecarlo absolute left-1/4 transform translate-x-[50px] -translate-y-10 z-10">
              E
            </span>
          </h1>

          <h1
            className={`${
              showTextLine1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-2000 text-6xl font-pompiere text-black-700 mb-4 w-full -translate-x-20`}
          >
            <span className="ml-32">levate Your Culinary</span>
          </h1>

          <h1
            className={`${
              showTextLine2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-2500 text-6xl font-pompiere text-black-700 mb-4 w-full`}
          >
            <span className="ml-32">
              xperience with <span className="text-red-500 font-bold">AI Chef Master</span>
            </span>
          </h1>

          <div
            className={`${
              showTextLine3 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-3000 flex justify-center w-full`}
          >
            <span className="text-4xl text-black-600 font-pompiere">
              - Personalized, Multilingual, and Step-by-Step Cooking Assistance.
            </span>
          </div>
        </div>
      </div>
      <Features />
      <Principles />
    </div>
  );
};

export default HomePage;

