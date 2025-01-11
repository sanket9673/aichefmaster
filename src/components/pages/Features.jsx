// import React from 'react';
// import { motion } from 'framer-motion';

// const Features = () => {
//   return (
//     <div className="pb-4 w-full overflow-x-hidden mb-10">
//       {/* Heading */}
//       <motion.h2 
//         whileInView={{ x: 0, opacity: 1 }}
//         initial={{ x: -100, opacity: 0 }}
//         transition={{ duration: 0.2 }}
//         className="ml-56 px-4 mt-32 text-left text-6xl tracking-wider leading-snug max-w-6xl">
//         Discover the power of <br />
//         <span className="text-neutral-500 font-bold"> AI CHEF MASTER</span>
//       </motion.h2>
      
//       {/* Description */}
//       <motion.div 
//         whileInView={{ x: 0, opacity: 1 }}
//         initial={{ x: -100, opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-wrap max-w-7xl px-4 mt-6"
//       >
//         <motion.div 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ x: -200, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:max-w-4xl"
//         >
//           <div className="flex justify-start">
//             <p className="ml-56 max-w-6xl py-6 text-xl">
//               Welcome to AI Chef Master! Our platform is designed to elevate your cooking experience with three powerful features. 
//               Whether you're looking for hands-on guidance, personalized recommendations, or nutritional insights, AI Chef Master has it all.
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Feature Boxes with Motion */}
//       <div className="ml-56 px-4 mt-10 grid gap-6 max-w-4xl">
//         {/* Feature 1 */}
//         <motion.div 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ x: -100, opacity: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="bg-blue-900 text-white p-6 rounded-lg shadow-md"
//         >
//           <h3 className="font-bold text-xl">Chef Assistant :</h3>
//           <p className="mt-2 text-lg">
//             Master every recipe with ease! Chef Assistant offers step-by-step cooking instructions, real-time tips, and ingredient swaps to make cooking stress-free and enjoyable.
//           </p>
//         </motion.div>

//         {/* Feature 2 */}
//         <motion.div 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ x: -100, opacity: 0 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           className="bg-blue-900 text-white p-6 rounded-lg shadow-md"
//         >
//           <h3 className="font-bold text-xl">Chef Intelligence :</h3>
//           <p className="mt-2 text-lg">
//             Experience personalized cooking like never before. Chef Intelligence adapts to your preferences, suggesting recipes and techniques tailored to your taste and skill level.
//           </p>
//         </motion.div>

//         {/* Feature 3 */}
//         <motion.div 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ x: -100, opacity: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="bg-blue-900 text-white p-6 rounded-lg shadow-md"
//         >
//           <h3 className="font-bold text-xl">Nutrition Manager :</h3>
//           <p className="mt-2 text-lg">
//             Eat healthier with confidence. Nutrition Manager provides detailed nutritional analysis, customized meal plans, and health-conscious ingredient swaps to support your dietary goals.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Features;




"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { RotatingTable } from './RotatingTable'

const Features = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Main grid layout */}
      <div className="grid grid-cols-2">
        {/* Left side - Content */}
        <div className="p-12 pr-0">
          {/* Heading */}
          <motion.h2 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-6xl tracking-wider leading-snug"
          >
            Discover the power of <br />
            <span className="text-neutral-500 font-bold">AI CHEF MASTER</span>
          </motion.h2>
          
          {/* Description */}
          <motion.div 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <p className="text-xl py-6">
              Welcome to AI Chef Master! Our platform is designed to elevate your cooking experience with three powerful features. 
              Whether you're looking for hands-on guidance, personalized recommendations, or nutritional insights, AI Chef Master has it all.
            </p>
          </motion.div>

          {/* Feature Boxes with Motion */}
          <div className="mt-10 space-y-6">
            {/* Feature 1 */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#000033] text-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-xl mb-1">Chef Assistant :</h3>
                <span className="text-sm text-blue-300 mb-2">Your Personal Cooking Guide</span>
                <p className="text-lg">
                  Master every recipe with ease! Chef Assistant offers step-by-step cooking instructions, real-time tips, and ingredient swaps to make cooking stress-free and enjoyable.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-[#000033] text-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-xl mb-1">Chef Intelligence :</h3>
                <span className="text-sm text-blue-300 mb-2">Smart Recipes, Just for You</span>
                <p className="text-lg">
                  Experience personalized cooking like never before. Chef Intelligence adapts to your preferences, suggesting recipes and techniques tailored to your taste and skill level.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#000033] text-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-xl mb-1">Nutrition Manager :</h3>
                <span className="text-sm text-blue-300 mb-2">Nourish with Knowledge</span>
                <p className="text-lg">
                  Eat healthier with confidence. Nutrition Manager provides detailed nutritional analysis, customized meal plans, and health-conscious ingredient swaps to support your dietary goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Rotating Table */}
        <div className="relative h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <RotatingTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

