"use client";

import React from "react";
import { motion } from "framer-motion";
// Import images from the assets folder
import dish1 from "../../assets/dish1.png";
import dish2 from "../../assets/dish2.png";
import dish3 from "../../assets/dish3.png";
import dish4 from "../../assets/dish3.png";
import table from "../../assets/table.png"; // Import the table image

const dishes = [
  {
    src: dish1,
    rotation: 0,
  },
  {
    src: dish2,
    rotation: 90,
  },
  {
    src: dish3,
    rotation: 180,
  },
  {
    src: dish4,
    rotation: 270,
  },
];

export function RotatingTable() {
  return (
    <motion.div
      className="relative w-[800px] h-[800px]"
      animate={{ rotate: 360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        transformOrigin: "center center",
      }}
    >
      {/* Wooden Table */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <img
          src={table}
          alt="Rotating Table"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dishes */}
      {dishes.map((dish, index) => (
        <motion.div
          key={index}
          className="absolute w-[250px] h-[250px]"
          style={{
            top: "35%",
            left: "35%",
            transform: `rotate(${dish.rotation}deg) translate(0, -250px)`,
            transformOrigin: "center center",
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full rounded-full overflow-hidden bg-white shadow-xl"
          >
            <img
              src={dish.src}
              alt={`Dish ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
