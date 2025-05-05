import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Snowfall = () => {
  const [flakes, setFlakes] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create snowflakes dynamically
  useEffect(() => {
    const createFlakes = Array.from({ length: 50 }).map((_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 2 + 1,
    }));
    setFlakes(createFlakes);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.x}px`,
            top: `${flake.y}px`,
          }}
          animate={{
            y: [flake.y, window.innerHeight + flake.size],
            x: [flake.x, flake.x + (mousePosition.x - window.innerWidth / 2) / 50],
          }}
          transition={{
            repeat: Infinity,
            duration: flake.speed + 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
