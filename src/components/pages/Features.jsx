// "use client"

// import React from 'react'
// import { motion } from 'framer-motion'
// import { RotatingTable } from './RotatingTable'

// const Features = () => {
//   return (
//     <div className="min-h-screen w-full overflow-x-hidden relative">
//       {/* Main grid layout */}
//       <div className="grid grid-cols-2">
//         {/* Left side - Content */}
//         <div className="p-12 pr-0">
//           {/* Heading */}
//           <motion.h2 
//             whileInView={{ x: 0, opacity: 1 }}
//             initial={{ x: -100, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="text-6xl tracking-wider leading-snug"
//           >
//             Discover the power of <br />
//             <span className="text-neutral-500 font-bold">AI CHEF MASTER</span>
//           </motion.h2>
          
//           {/* Description */}
//           <motion.div 
//             whileInView={{ x: 0, opacity: 1 }}
//             initial={{ x: -100, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-6"
//           >
//             <p className="text-xl py-6">
//               Welcome to AI Chef Master! Our platform is designed to elevate your cooking experience with three powerful features. 
//               Whether you're looking for hands-on guidance, personalized recommendations, or nutritional insights, AI Chef Master has it all.
//             </p>
//           </motion.div>

//           {/* Feature Boxes with Motion */}
//           <div className="mt-10 space-y-6">
//             {/* Feature 1 */}
//             <motion.div 
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ x: -100, opacity: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="bg-[#000033] text-white p-6 rounded-lg shadow-md"
//             >
//               <div className="flex flex-col">
//                 <h3 className="font-bold text-xl mb-1">Chef Assistant :</h3>
//                 <span className="text-sm text-blue-300 mb-2">Your Personal Cooking Guide</span>
//                 <p className="text-lg">
//                   Master every recipe with ease! Chef Assistant offers step-by-step cooking instructions, real-time tips, and ingredient swaps to make cooking stress-free and enjoyable.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Feature 2 */}
//             <motion.div 
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ x: -100, opacity: 0 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//               className="bg-[#000033] text-white p-6 rounded-lg shadow-md"
//             >
//               <div className="flex flex-col">
//                 <h3 className="font-bold text-xl mb-1">Chef Intelligence :</h3>
//                 <span className="text-sm text-blue-300 mb-2">Smart Recipes, Just for You</span>
//                 <p className="text-lg">
//                   Experience personalized cooking like never before. Chef Intelligence adapts to your preferences, suggesting recipes and techniques tailored to your taste and skill level.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Feature 3 */}
//             <motion.div 
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ x: -100, opacity: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="bg-[#000033] text-white p-6 rounded-lg shadow-md"
//             >
//               <div className="flex flex-col">
//                 <h3 className="font-bold text-xl mb-1">Nutrition Manager :</h3>
//                 <span className="text-sm text-blue-300 mb-2">Nourish with Knowledge</span>
//                 <p className="text-lg">
//                   Eat healthier with confidence. Nutrition Manager provides detailed nutritional analysis, customized meal plans, and health-conscious ingredient swaps to support your dietary goals.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Right side - Rotating Table */}
//         <div className="relative h-screen mt-52">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <RotatingTable />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Features



"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { RotatingTable } from './RotatingTable'

const Features = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white relative">
      {/* Main grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Content */}
        <div className="p-8 md:p-12">
          {/* Heading */}
          <motion.h2 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-4xl md:text-6xl tracking-wide leading-snug text-black"
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
            <p className="text-lg md:text-xl py-6 text-gray-900">
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
                <h3 className="font-bold text-lg md:text-xl mb-1">Chef Assistant :</h3>
                <span className="text-sm text-blue-300 mb-2">Your Personal Cooking Guide</span>
                <p className="text-base md:text-lg">
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
                <h3 className="font-bold text-lg md:text-xl mb-1">Chef Intelligence :</h3>
                <span className="text-sm text-blue-300 mb-2">Smart Recipes, Just for You</span>
                <p className="text-base md:text-lg">
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
                <h3 className="font-bold text-lg md:text-xl mb-1">Nutrition Manager :</h3>
                <span className="text-sm text-blue-300 mb-2">Nourish with Knowledge</span>
                <p className="text-base md:text-lg">
                  Eat healthier with confidence. Nutrition Manager provides detailed nutritional analysis, customized meal plans, and health-conscious ingredient swaps to support your dietary goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Rotating Table */}
        <div className="relative h-[60vh] md:h-screen flex items-center justify-center mt-20 md:mt-[200px]">
          <RotatingTable />
        </div>
      </div>
    </div>
  )
}

export default Features
