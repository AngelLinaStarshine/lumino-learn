import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure to update your CSS file as outlined below.

const HeroSection = () => (
  <div className="home-container">
    {/* Welcome Section */}
    <div className="welcome-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="welcome-banner"
      >
        {/* Part 1: Greeting */}
        <div className="welcome-greeting">
          <h1>LuminoLearn Academy</h1>
          <hr className="blue-line" />
        </div>

        {/* Part 2: Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mission-container"
        >
          <h3>Where Learning Meets Exploration</h3>
          <p>
            Empowering young minds through innovative education, creativity, and
            technology.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const ProgramCard = ({ program, ageGroups }) => {
  const [selectedAge, setSelectedAge] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const handleLearnMore = () => {
    alert(`Learn more about the ${program} program!`);
    // You can replace the alert with more sophisticated logic such as opening a modal or redirecting to another page.
  };

  return (
    <motion.div
      className="program-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h4>{program}</h4>
      <div className="dropdown-container">
        <label htmlFor={`ageGroup-${program}`}>Age Group: </label>
        <select
          id={`ageGroup-${program}`}
          value={selectedAge}
          onChange={handleDropdownChange}
          className="dropdown"
        >
          <option value="">-- Select Age --</option>
          {ageGroups.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
        <button className="learn-more-button" onClick={handleLearnMore}>
          Learn More...
        </button>
      </div>
    </motion.div>
  );
};

const SubjectSection = ({ subject, programs }) => (
  <div className="subject-section">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="subject-title"
    >
      {subject}
    </motion.h2>
    <div className="programs-grid">
      {programs.map(({ name, ageGroups }, index) => (
        <ProgramCard key={index} program={name} ageGroups={ageGroups} />
      ))}
    </div>
  </div>
);

const coursesData = [
  {
    subject: "Early Learning & Literacy",
    programs: [
      { name: "Creative Writing", ageGroups: ["3-4 years", "4-5 years", "5-6 years"] },
      { name: "Foundational Literacy", ageGroups: ["3-4 years", "4-5 years", "5-6 years"] },
      { name: "Storytelling & Reading", ageGroups: ["3-4 years", "4-5 years", "5-6 years"] },
    ],
  },
  {
    subject: "Mathematics & Critical Thinking",
    programs: [
      { name: "Basic Math Skills", ageGroups: ["3-4 years", "4-5 years", "5-6 years"] },
      { name: "Logical Reasoning", ageGroups: ["4-5 years", "5-6 years", "6-7 years"] },
      { name: "Advanced Problem Solving", ageGroups: ["5-6 years", "6-7 years", "7-8 years"] },
    ],
  },
  {
    subject: "Science, Nature & Geography",
    programs: [
      { name: "Exploring Nature", ageGroups: ["3-4 years", "4-5 years", "5-6 years"] },
      { name: "Introduction to Science", ageGroups: ["4-5 years", "5-6 years", "6-7 years"] },
      { name: "World Geography", ageGroups: ["5-6 years", "6-7 years", "7-8 years"] },
    ],
  },
  {
    subject: "Creative Arts & Expression",
    programs: [
      { name: "Art & Crafts", ageGroups: ["3-4 years", "4-5 years", "5-6 years"] },
      { name: "Digital Art", ageGroups: ["4-5 years", "5-6 years", "6-7 years"] },
    ],
  },
];

const CoursesPage = () => {
  return (
    <div className="courses-container">
      <HeroSection />
      <div className="subjects-container">
        {coursesData.map(({ subject, programs }, index) => (
          <SubjectSection key={index} subject={subject} programs={programs} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
