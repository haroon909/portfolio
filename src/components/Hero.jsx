import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    className="h-screen flex flex-col justify-center items-center text-center space-y-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl md:text-6xl font-extrabold">
      Hi, I'm Haroon Ahmed!
    </h1>
    <p className="text-lg md:text-2xl text-primary">
      Aspiring Web Developer | Problem Solver | Creative Thinker
    </p>
    <motion.button
      className="bg-primary text-black font-bold py-2 px-4 rounded hover:bg-green-600"
      whileHover={{ scale: 1.1 }}
    >
      View My Work
    </motion.button>
  </motion.section>
);

export default Hero;
