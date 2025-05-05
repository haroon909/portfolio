import React from "react";
import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    className="sticky top-0 bg-gray-900 z-50 p-4 flex justify-between items-center shadow-md"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-primary text-2xl font-bold">Haroon Ahmed</h1>
    <nav className="space-x-4">
      {["About", "Skills", "Experience", "Education", "Certifications", "Contact"].map((item, index) => (
        <motion.a
          key={index}
          href={`#${item.toLowerCase()}`}
          className="text-white hover:text-primary transition"
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </nav>
  </motion.header>
);

export default Header;
