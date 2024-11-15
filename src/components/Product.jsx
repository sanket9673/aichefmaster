// import React from 'react';

// const Product = () => {
//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
//       {/* Container for Content and Image */}
//       <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-100">
        
//         {/* Text Content (Left Side) */}
//         <div className="text-center md:text-left md:w-1/2 space-y-100">
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
//         <div className="relative flex justify-center md:justify-end item-left">
//           {/* Decorative Orange Slices - Positioned Behind the Main Image */}
//           <img
//             src="src/assets/orange.png" // Update with actual path
//             alt="Orange Slice"
//             className="absolute top-[-100px] right-[-150px] w-62 h-62 transform rotate-12 opacity-80"
//           />
//           <img
//             src="src/assets/orange.png" // Update with actual path
//             alt="Orange Slice"
//             className="absolute bottom-[-1px] left-[-20px] w-62 h-62 transform rotate-[-12deg] opacity-80"
//           />

//           {/* Main Plate Image (Larger Size) */}
//           <img
//             src="src/assets/productimg.png" // Update with actual path
//             alt="Grilled Chicken with Salad"
//             className="rounded-full w-[1300px] h-[800px] shadow-lg z-10 relative"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;




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
//       <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-20">
        
//         {/* Text Content (Left Side) */}
//         <div className=" text-left md:w-1/2 space-y-6">
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
//         <div className="relative flex justify-center md:justify-end item-left transform translate-x-[200px]">
//           {/* Decorative Orange Slices - Positioned Behind the Main Image */}
//           <img
//             src="src/assets/orange.png" // Update with actual path
//             alt="Orange Slice"
//             className="absolute top-[-100px] right-[-150px] w-62 h-62 transform rotate-12 opacity-80"
//           />
//           <img
//             src="src/assets/orange.png" // Update with actual path
//             alt="Orange Slice"
//             className="absolute bottom-[-1px] left-[-20px] w-62 h-62 transform rotate-[-12deg] opacity-80"
//           />

//           {/* Main Plate Image (Larger Size) with Framer Motion Animation */}
//           <motion.img
//             src="src/assets/productimg.png" // Update with actual path
//             alt="Grilled Chicken with Salad"
//             className="rounded-full w-[1300px] h-[800px] shadow-lg z-10 relative"
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




import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Product = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate rotation based on scroll position
  const rotation = (scrollY * 0.05) % 90; // Scroll speed adjusted for 50 degrees max rotation

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
      {/* Container for Content and Image */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-20">
        
        {/* Text Content (Left Side) */}
        <div className="text-left md:w-1/2 space-y-6">
          <div className="bg-gray-800 text-orange-500 py-2 px-6 rounded-full font-semibold uppercase tracking-wide w-fit mx-auto md:mx-0">
            Welcome to AI Chef Master
          </div>
          <h2 className="text-6xl font-bold leading-snug">
            Unlock Culinary Mastery with <br /><span className="text-orange-500">AI Chef Master</span>
          </h2>
          <p className="text-lg">
            Elevate Your Cooking Experience with Intelligent, Personalized Guidance
          </p>
        </div>

        {/* Image Section (Right Side) */}
        <div className="relative flex justify-center md:justify-end items-center">
          {/* Decorative Orange Slices - Positioned Behind the Main Image */}
          <img
            src="/src/assets/orange.png" // Correct path
            alt="Orange Slice"
            className="absolute top-[-100px] right-[-150px] w-62 h-62 transform rotate-12 opacity-80 z-0"
          />
          <img
            src="/src/assets/orange.png" // Correct path
            alt="Orange Slice"
            className="absolute bottom-[-1px] left-[-20px] w-62 h-62 transform rotate-[-12deg] opacity-80 z-0"
          />

          {/* Main Plate Image (Larger Size) with Framer Motion Animation */}
          <motion.img
            src="/src/assets/productimg.png" // Correct path
            alt="Grilled Chicken with Salad"
            className="rounded-full w-[1300px] h-[800px] shadow-lg z-10"
            style={{
              transition: 'transform 0.1s ease-out', // Optional smooth transition
            }}
            // Apply dynamic rotation based on scroll position
            animate={{ rotate: rotation }}
            transition={{ type: 'spring', stiffness: 50 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
