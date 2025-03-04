"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import Music from '@/components/log/Log'


const pulsateVariant = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

const Shop = () => {
  return (
    <div className="relative">
      <div className="fixed bottom-5 right-1 flex flex-col items-end space-y-4 zoom-in-100">
        <a href="tel:+998997872900">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-2xl shadow-lg hover:bg-green-700 transition duration-300"
            variants={pulsateVariant}
            initial="animate"
            animate="animate"
            whileHover="hover"
          >
            <FaPhone  className="z-100"/>
          </motion.div>
        </a>

        <a target="_blank" href="https://t.me/azimovproo">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0088CC] text-white text-2xl shadow-lg hover:bg-[#0077B5] transition duration-300"
            variants={pulsateVariant}
            initial="animate"
            animate="animate"
            whileHover="hover"
          >
            <RiTelegram2Fill className="z-100" />
          </motion.div>
        </a>
        <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0088CC] text-white text-2xl shadow-lg hover:bg-[#0077B5] transition duration-300"
            variants={pulsateVariant}
            initial="animate"
            animate="animate"
            whileHover="hover"
          >
            <Music className="z-100"/>

          </motion.div>
      </div>
    </div>
  );
};

export default Shop;
