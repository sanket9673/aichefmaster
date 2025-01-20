// "use client"

// import React from "react"
// import { motion } from "framer-motion"

// // Import images from the src folder
// import leavesImage from "../assets/leaves.png"
// import burgerImage from "../assets/burger.png"

// export default function Principles() {
//   return (
//     <div className="min-h-screen w-full overflow-x-hidden bg-black relative">
//       {/* Background with Radial Gradient */}
//       <div
//         className="flex flex-col min-h-screen w-full relative"
//         style={{
//           background:
//             "radial-gradient(circle at 75% 25%, rgba(76,175,80,0.3) 0%, rgba(0,0,0,1) 70%)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Background Images */}
//         <div className="absolute top-0 right-0 w-1/2 h-full">
//           {/* Multiple floating leaves */}
//           {[...Array(2)].map((_, i) => (
//             <motion.img
//               key={i}
//               src={leavesImage} // Using imported image
//               alt="Leaf"
//               className="absolute w-auto h-auto object-contain"
//               style={{
//                 top: `${Math.random() * 60}%`,
//                 right: `${Math.random() * 40}%`,
//                 filter: "hue-rotate(60deg) brightness(1.2)",
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 10, -10, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 delay: i * 0.5,
//                 ease: "easeOut",
//               }}
//             />
//           ))}

//           {/* Burger with floating animation */}
//           <motion.img
//             src={burgerImage} // Using imported image
//             alt="Burger"
//             className="absolute bottom-20 right-20 w-128 h-auto object-contain z-10"
//             animate={{
//               y: [-10, 10, -10],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeIn",
//             }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-20 px-16 pt-24 max-w-7xl ml-40">
//           {/* Heading */}
//           <motion.h2
//             whileInView={{ x: 0, opacity: 1 }}
//             initial={{ x: -100, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="text-5xl tracking-wider leading-tight text-white mb-8"
//           >
//             The Values and Core Principles at
//             <br />
//             <span className="font-bold">AI Chef Master</span>
//           </motion.h2>

//           {/* Description */}
//           <motion.p
//             whileInView={{ x: 0, opacity: 1 }}
//             initial={{ x: -100, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-white text-lg mb-12 max-w-4xl"
//           >
//             At AI Chef Master, we are committed to delivering an exceptional culinary
//             experience by adhering to our core principles that prioritize innovation,
//             customer satisfaction, and sustainable growth.
//           </motion.p>

//           {/* Principles */}
//           <div className="space-y-6 max-w-4xl">
//             {[{
//               title: "Long-Term Growth",
//               subtitle: "🌱 Building a Sustainable Future",
//               description:
//                 "We focus on creating a platform that supports sustainable, long-term growth, ensuring that we continue to provide value for years to come.",
//             },
//             {
//               title: "Customer Priorities",
//               subtitle: "💡You Come First",
//               description:
//                 "Our mission is centered around you. We constantly listen to feedback, adapt to your needs, and prioritize features that enhance your cooking experience.",
//             },
//             {
//               title: "Innovation",
//               subtitle: "🌱 Advancing Culinary Excellence",
//               description:
//                 "We strive to push the boundaries of culinary arts by integrating technology, ensuring the best possible cooking experience for all.",
//             }].map((principle, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ x: -100, opacity: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="bg-green-900/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
//               >
//                 <h3 className="font-bold text-xl text-white mb-1">
//                   {principle.title} :
//                 </h3>
//                 <h4 className="text-green-400 text-sm mb-2">
//                   {principle.subtitle}
//                 </h4>
//                 <p className="text-gray-200">
//                   {principle.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




"use client"

import React from "react"
import { motion } from "framer-motion"

// Import images from the src folder
import leavesImage from "../assets/leaves.png"
import burgerImage from "../assets/burger.png"

export default function Principles() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-black relative">
      {/* Background with Radial Gradient */}
      <div
        className="flex flex-row min-h-screen w-full relative"
        style={{
          background:
            "radial-gradient(circle at 75% 25%, rgba(76,175,80,0.3) 0%, rgba(0,0,0,1) 70%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section: Background Images */}
        <div className="flex-1 relative">
          {/* Multiple floating leaves */}
          {[...Array(2)].map((_, i) => (
            <motion.img
              key={i}
              src={leavesImage} // Using imported image
              alt="Leaf"
              className="absolute w-auto h-auto object-contain"
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 40}%`,
                filter: "hue-rotate(60deg) brightness(1.2)",
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Burger with floating animation */}
          <motion.img
            src={burgerImage} // Using imported image
            alt="Burger"
            className="absolute bottom-20 left-20 max-w-xs h-auto object-contain z-10"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="relative z-20 w-full max-w-4xl">
            {/* Heading */}
            <motion.h2
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-5xl tracking-wider leading-tight text-white mb-8"
            >
              The Values and Core Principles at
              <br />
              <span className="font-bold">AI Chef Master</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-white text-lg mb-12"
            >
              At AI Chef Master, we are committed to delivering an exceptional
              culinary experience by adhering to our core principles that
              prioritize innovation, customer satisfaction, and sustainable
              growth.
            </motion.p>

            {/* Principles */}
            <div className="space-y-6">
              {[ 
                {
                  title: "Long-Term Growth",
                  subtitle: "🌱 Building a Sustainable Future",
                  description:
                    "We focus on creating a platform that supports sustainable, long-term growth, ensuring that we continue to provide value for years to come.",
                },
                {
                  title: "Customer Priorities",
                  subtitle: "💡You Come First",
                  description:
                    "Our mission is centered around you. We constantly listen to feedback, adapt to your needs, and prioritize features that enhance your cooking experience.",
                },
                {
                  title: "Innovation",
                  subtitle: "🌱 Advancing Culinary Excellence",
                  description:
                    "We strive to push the boundaries of culinary arts by integrating technology, ensuring the best possible cooking experience for all.",
                },
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  className="bg-green-900/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
                >
                  <h3 className="font-bold text-xl text-white mb-1">
                    {principle.title} :
                  </h3>
                  <h4 className="text-green-400 text-sm mb-2">
                    {principle.subtitle}
                  </h4>
                  <p className="text-gray-200">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
