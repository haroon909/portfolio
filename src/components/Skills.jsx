import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "C#",
    "ASP.NET MVC",
    "React",
    "Flutter",
    "Dart",
    "Git",
  ];

  return (
    <section id="skills" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
