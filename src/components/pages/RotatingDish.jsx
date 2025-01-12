"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const dishes = [
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400"
]

export function RotatingDish() {
  const [currentDish, setCurrentDish] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % dishes.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentDish}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="w-[400px] h-[400px] rounded-full overflow-hidden bg-white shadow-xl"
      >
        <img
          src={dishes[currentDish]}
          alt={`Dish ${currentDish + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
  )
}

