"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contentData from "../constants/index"; // Importing the data

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastWheelTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = (e) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 500) return; // Debounce scroll events
      lastWheelTime.current = now;

      if (e.deltaY > 0 && currentIndex < contentData.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex]);

  return (
    <div className="h-screen bg-black flex items-center justify-center text-white px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-20 mt-20">
        {/* Left Side */}
        <div className="text-left md:w-1/2 space-y-6">
          <AnimatePresence mode="wait">
            {contentData.map((content, index) =>
              index === currentIndex ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.div
                    className="bg-zinc-900/80 text-orange-500 py-2 px-6 rounded-full font-semibold uppercase tracking-wide w-fit mx-auto md:mx-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {content.title}
                  </motion.div>
                  <h2 className="text-5xl font-bold">{content.heading}</h2>
                  {content.subheading && (
                    <h3 className="text-2xl text-gray-300">{content.subheading}</h3>
                  )}
                  <p className="text-sm text-gray-300">{content.description}</p>
                  {content.points && (
                    <div className="space-y-4">
                      {content.points.map((point, i) => (
                        <motion.div
                          key={i}
                          className="bg-green-500/20 p-6 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p>{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center md:justify-end items-center">
          <motion.img
            src="/src/assets/orange.png"
            alt="Orange Slice Top"
            className="absolute top-[-100px] right-[-150px] w-62 h-62 z-0"
            animate={{
              rotate: [12, 24, 12],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/src/assets/orange.png"
            alt="Orange Slice Bottom"
            className="absolute bottom-[-1px] left-[-20px] w-62 h-62 z-0"
            animate={{
              rotate: [-12, -24, -12],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="relative"
            style={{
              transformOrigin: "center center",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
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
