import React, { useState } from "react";
import { motion } from "framer-motion";
import Lumi from "./Lumi"; 
import "./App.css";


const HeroSection = () => (
  <div className="hero-section">
    <div className="welcome-section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="welcome-banner">
          <h1>LuminoLearn</h1>
          <hr className="blue-line" />
          <h3>Where Learning Meets Exploration</h3>
        </div>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Empowering young minds through innovative education, creativity, and technology.
      </motion.p>
    </div>
  </div>
);


const CourseSection = ({ title, programs, ageGroups }) => {
  const [selectedAge, setSelectedAge] = useState("");

  const handleAgeClick = (age) => {
    setSelectedAge(age);
  };

  return (
    <div className="course-section">
      <h2>{title}</h2>
      <div className="age-buttons">
        {ageGroups.map((age) => (
          <motion.button
            key={age}
            className="age-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAgeClick(age)}
          >
            {age}
          </motion.button>
        ))}
      </div>
      <div className="programs">
        <h3>Programs: {selectedAge}</h3>
        {programs
          .filter((program) => program.ageGroup === selectedAge)
          .map((program, index) => (
            <div className="program" key={index}>
              <h4>{program.name}</h4>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
      </div>
    </div>
  );
};

const coursesData = [
  { name: "Literature", ageGroup: "3-4 years" },
  { name: "Russian Literature", ageGroup: "4-5 years" },
  { name: "Coding", ageGroup: "5-6 years" },
  { name: "Minecraft", ageGroup: "6-7 years" },
  { name: "Art", ageGroup: "3-4 years" },
  { name: "Craft", ageGroup: "4-5 years" },
  { name: "Web Design", ageGroup: "5-6 years" },
  { name: "Public Speaking", ageGroup: "9-10 years" },
  { name: "Presentation Skills", ageGroup: "10-11 years" },
];


const CoursesPage = () => {
  return (
    <div className="courses-container">
      <HeroSection />
      <CourseSection
        title="Language and Literacy Development"
        programs={coursesData}
        ageGroups={["3-4 years", "4-5 years", "5-6 years", "6-7 years"]}
      />
      <CourseSection
        title="STEM Education"
        programs={coursesData}
        ageGroups={["5-6 years", "6-7 years", "7-8 years", "8-9 years"]}
      />
      <CourseSection
        title="Creative and Artistic Development"
        programs={coursesData}
        ageGroups={["3-4 years", "4-5 years", "5-6 years", "6-7 years"]}
      />
      <CourseSection
        title="Social and Emotional Skills"
        programs={coursesData}
        ageGroups={["7-8 years", "8-9 years", "9-10 years", "10-11 years"]}
      />
    </div>
  );
};

export default CoursesPage;
