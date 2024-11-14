import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [showE, setShowE] = useState(false);
  const [showTextLine1, setShowTextLine1] = useState(false);
  const [showTextLine2, setShowTextLine2] = useState(false);
  const [showTextLine3, setShowTextLine3] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowE(true), 1500);
    setTimeout(() => setShowTextLine1(true), 2000);
    setTimeout(() => setShowTextLine2(true), 2500);
    setTimeout(() => setShowTextLine3(true), 3000);
  }, []);

  const handleBackgroundLoad = () => {
    setBgLoaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className={`flex flex-col min-h-screen ${
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
        <div className="flex flex-col justify-center items-center relative mt-52 text-center">
          <h1
            className={`${
              showE ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 text-6xl font-pompiere text-black-700 mb-2`}
          >
            <span className="text-11xl font-montecarlo absolute ml-[-12rem] transform -translate-x-1/2 -translate-y-1/4 z-10">
              E
            </span>
          </h1>

          <h1
            className={`${
              showTextLine1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-2000 text-6xl font-pompiere text-black-700 mb-4`}
          >
            <span className="ml-32">levate Your Culinary</span>
          </h1>

          <h1
            className={`${
              showTextLine2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 delay-2500 text-6xl font-pompiere text-black-700 mb-4`}
          >
            <span className="ml-72">
              xperience with <span className="text-red-500 font-bold">AI Chef Master</span>
            </span>
          </h1>

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
