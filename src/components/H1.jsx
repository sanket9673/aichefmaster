import React from "react";

function H1() {
    return (
        <div className="bg-white font-sans">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Discover the Power of
            </h1>
            <h1 className="text-6xl font-bold text-blue-500 mb-8">
              AI Chef Master
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to AI Chef Master! Our platform is designed to elevate your
              cooking experience with three powerful features. Whether you're looking
              for hands-on guidance, personalized recommendations, or nutritional
              insights, AI Chef Master has it all.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Chef Assistant:</h2>
                <p className="text-gray-200">
                  Master every recipe with ease! Chef Assistant offers step-by-step
                  cooking instructions, real-time tips, and ingredient swaps to make
                  cooking stress-free and enjoyable.
                </p>
              </div>
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Chef Intelligence:</h2>
                <p className="text-gray-200">
                  Experience personalized cooking like never before. Chef
                  Intelligence adapts to your preferences, suggesting recipes and
                  techniques tailored to your taste and skill level.
                </p>
              </div>
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Nutrition Manager:</h2>
                <p className="text-gray-200">
                  Eat healthier with confidence. Nutrition Manager provides detailed
                  nutri tional analysis, customized meal plans, and health-conscious ingredient swaps to support your dietary goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default H1;