// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Product = () => {
//   const [scrollY, setScrollY] = useState(0);

//   // Scroll event listener to track the scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Calculate rotation based on scroll position
//   const rotation = (scrollY * 0.05) % 90; // Scroll speed adjusted for 50 degrees max rotation

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
//       {/* Container for Content and Image */}
//       <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-20 mt-16">

//         {/* Text Content (Left Side) */}
//         <div className="text-left md:w-1/2 space-y-6">
//           <div className="bg-gray-800 text-orange-500 py-2 px-6 rounded-full font-semibold uppercase tracking-wide w-fit mx-auto md:mx-0">
//             Welcome to AI Chef Master
//           </div>
//           <h2 className="text-6xl font-bold leading-snug">
//             Unlock Culinary Mastery with <br /><span className="text-orange-500">AI Chef Master</span>
//           </h2>
//           <p className="text-lg">
//             Elevate Your Cooking Experience with Intelligent, Personalized Guidance
//           </p>
//         </div>

//         {/* Image Section (Right Side) */}
//         <div className="relative flex justify-center md:justify-end items-center mt-16">
//           {/* Decorative Orange Slices - Positioned Behind the Main Image */}
//           <img
//             src="/src/assets/orange.png" // Correct path
//             alt="Orange Slice"
//             className="absolute top-[-100px] right-[-150px] w-62 h-62 transform rotate-12 opacity-80 z-0"
//           />
//           <img
//             src="/src/assets/orange.png" // Correct path
//             alt="Orange Slice"
//             className="absolute bottom-[-1px] left-[-20px] w-62 h-62 transform rotate-[-12deg] opacity-80 z-0"
//           />

//           {/* Main Plate Image (Larger Size) with Framer Motion Animation */}
//           <motion.img
//             src="/src/assets/productimg.png" // Correct path
//             alt="Grilled Chicken with Salad"
//             className="rounded-full w-[1300px] h-[800px] shadow-lg z-10"
//             style={{
//               transition: 'transform 0.1s ease-out', // Optional smooth transition
//             }}
//             // Apply dynamic rotation based on scroll position
//             animate={{ rotate: rotation }}
//             transition={{ type: 'spring', stiffness: 50 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// "use client"

// import React, { useEffect, useState } from 'react'
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const Product = () => {
//   const [scrollY, setScrollY] = useState(0)
//   const { scrollYProgress } = useScroll()
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//     triggerOnce: false
//   })

//   // Smooth rotation animation based on scroll
//   const rotation = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), {
//     stiffness: 100,
//     damping: 30
//   })

//   // Content states
//   const [showExtendedContent, setShowExtendedContent] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//       setShowExtendedContent(window.scrollY > 100) // Switch content after 100px scroll
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const initialContent = {
//     title: "Unlock Culinary Mastery with",
//     subtitle: "AI Chef Master",
//     description: "Elevate Your Cooking Experience with Intelligent, Personalized Guidance"
//   }

//   const extendedContent = {
//     title: "Welcome to AI Chef Master",
//     description: `Welcome to AI Chef Master—your ultimate kitchen companion powered by advanced artificial intelligence. Designed to make cooking not just easier, but smarter, AI Chef Master combines hands-on assistance, tailored recipe suggestions, and comprehensive nutrition tracking to support every step of your culinary journey.

//     Whether you're a seasoned chef, a busy professional, or a health-conscious individual, AI Chef Master adapts to your needs, transforming your cooking experience into a personalized adventure. Discover how our three main features—AI Assistant, Chef Intelligence, and Nutrition Manager—can make meal preparation, cooking, and healthy eating seamless and enjoyable.`
//   }

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white px-4 overflow-hidden">
//       <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-20 mt-16">
//         {/* Text Content (Left Side) */}
//         <motion.div
//           ref={ref}
//           className="text-left md:w-1/2 space-y-6"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="bg-zinc-900/80 text-orange-500 py-2 px-6 rounded-full font-semibold uppercase tracking-wide w-fit mx-auto md:mx-0"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Welcome to AI Chef Master
//           </motion.div>

//           <motion.div
//             animate={{ opacity: showExtendedContent ? 0 : 1, y: showExtendedContent ? -20 : 0 }}
//             transition={{ duration: 0.5 }}
//             className={`transition-all ${showExtendedContent ? 'hidden' : 'block'}`}
//           >
//             <h2 className="text-6xl font-bold leading-snug">
//               {initialContent.title} <br />
//               <motion.span
//                 className="text-orange-500 inline-block"
//                 animate={{ scale: [1, 1.03, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 {initialContent.subtitle}
//               </motion.span>
//             </h2>
//             <p className="text-lg mt-4">{initialContent.description}</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{
//               opacity: showExtendedContent ? 1 : 0,
//               y: showExtendedContent ? 0 : 20
//             }}
//             transition={{ duration: 0.5 }}
//             className={`transition-all ${showExtendedContent ? 'block' : 'hidden'}`}
//           >
//             <h3 className="text-4xl font-bold mb-6 text-orange-500">{extendedContent.title}</h3>
//             <p className="text-lg leading-relaxed whitespace-pre-line">
//               {extendedContent.description}
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Image Section (Right Side) */}
//         <div className="relative flex justify-center md:justify-end items-center mt-16">
//           {/* Orange Slice Decorations */}
//           <motion.img
//             src="/src/assets/orange.png"
//             alt="Orange Slice Top"
//             className="absolute top-[-100px] right-[-150px] w-62 h-62 z-0"
//             animate={{
//               rotate: [12, 24, 12],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.img
//             src="/src/assets/orange.png"
//             alt="Orange Slice Bottom"
//             className="absolute bottom-[-1px] left-[-20px] w-62 h-62 z-0"
//             animate={{
//               rotate: [-12, -24, -12],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />

//           {/* Main Dish Image */}
//           <motion.div
//             className="relative"
//             style={{ rotate: rotation }}
//           >
//             <motion.img
//               src="/src/assets/productimg.png"
//               alt="Grilled Chicken with Salad"
//               className="rounded-full w-[600px] h-[600px] object-cover shadow-[0_0_30px_rgba(255,165,0,0.3)]"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{
//                 duration: 1,
//                 ease: "easeOut"
//               }}
//             />

//             {/* Decorative elements */}
//             <motion.div
//               className="absolute inset-0 rounded-full border-2 border-orange-500/30"
//               animate={{
//                 scale: [1, 1.05, 1],
//                 opacity: [0.5, 0.8, 0.5],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Product



"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Product = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-20 mt-16">
        {/* Text Content (Left Side) */}
        <motion.div
          className="text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center">
          <motion.div
            className="bg-zinc-900/80 text-orange-500 py-2 px-6 rounded-full font-semibold uppercase tracking-wide w-fit mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Welcome to AI Chef Master
          </motion.div>
          </div>
          <div>
            <h2 className="text-6xl font-bold leading-snug text-center">
              Unlock Culinary Mastery with <br />
              <span className="text-orange-500">AI Chef Master</span>
            </h2>
            <hr className="border-t-4 border-orange-500 my-4" />
            <p className="text-lg mt-4 text-center">
              Elevate Your Cooking Experience with Intelligent, Personalized
              Guidance.
            </p>
          </div>
        </motion.div>

        {/* Image Section (Right Side) */}
        <div className="relative flex justify-center md:justify-end items-center mt-16">
          {/* Orange Slice Decorations */}
          <motion.img
            src="/src/assets/orange.png"
            alt="Orange Slice Top"
            className="absolute top-[-100px] right-[-150px] w-62 h-62 z-0"
            animate={{
              rotate: [12, 24, 12], // Oscillating rotation
              scale: [1, 1.1, 1], // Oscillating scaling
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/src/assets/orange.png"
            alt="Orange Slice Bottom"
            className="absolute bottom-[-1px] left-[-20px] w-62 h-62 z-0"
            animate={{
              rotate: [-12, -24, -12], // Oscillating rotation in the opposite direction
              scale: [1, 1.1, 1], // Oscillating scaling
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Dish Image with Continuous Rotation */}
          <motion.div
            className="relative"
            style={{
              transformOrigin: "center center", // Ensure rotation happens from the center
            }}
            animate={{
              rotate: 360, // Continuous rotation
            }}
            transition={{
              duration: 15, // Speed of rotation (in seconds)
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.img
              src="/src/assets/productimg.png"
              alt="Grilled Chicken with Salad"
              className="rounded-full w-[800px] h-[800px] object-cover"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;
