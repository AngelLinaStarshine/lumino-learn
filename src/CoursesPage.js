import React from "react";
import { motion } from "framer-motion";
import Lumi from "./Lumi";
import "./App.css"; 


const HeroSection = () => (
  <div className="hero-section">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    LuminoLearn – Where Learning Meets Exploration
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Empowering young minds through innovative education, creativity, and technology.
    </motion.p>
  </div>
);

const MissionSection = () => (
  <div className="mission-section">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Learn, Explore, and Understand
    </motion.h2>
    <p>
      At LuminoLearn Academy, we believe education should be about understanding, not memorization. Our students explore the world through the lens of multiple subjects, gaining a deeper understanding of how everything is interconnected.
    </p>
  </div>
);

const BilingualSupport = () => (
  <div className="bilingual-support">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Bridging Borders for Bilinguals
    </motion.h2>
    <p>
      We help bilingual students excel by bridging the gap between languages. They gain a strong grasp of school subjects in their new language while preserving and strengthening their native language.
    </p>
  </div>
);

const ChildPotential = () => (
  <div className="child-potential">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Unleashing Potential in Every Child
    </motion.h2>
    <p>
      Every child has the ability to solve math problems or create masterpieces. Whether it’s designing art projects or learning web design, we guide them along their unique journey of self-expression and problem-solving.
    </p>
  </div>
);

const TeachingMethodologies = () => (
  <div className="teaching-methodologies">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Innovative and Personalized Learning
    </motion.h2>
    <p>
      Our teaching methods are crafted to engage and inspire. By combining traditional learning with creative techniques, we unlock every child's potential and love for learning.
    </p>
  </div>
);

const TechEducation = () => (
  <div className="tech-education">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Safe, Responsible, and Tech-Savvy Students
    </motion.h2>
    <p>
      From coding and development to cybersecurity basics, we prepare even first-graders to be safe and responsible technology users. Our goal is to foster a lifelong love for technology, books, and learning.
    </p>
  </div>
);

const CallToAction = () => (
  <div className="cta-section">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Discover the LuminoLearn Difference
    </motion.h2>
    <p>
      Join us in shaping the future of education. Whether it’s mastering math, diving into creative projects, or exploring the world of technology, your child’s journey begins here.
    </p>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="cta-buttons"
    >
      <button className="cta-button">Learn More About Our Programs</button>
      <button className="cta-button">Contact Us Today</button>
    </motion.div>
  </div>
);

const CoursesPage = () => {
  return (
    <div className="courses-container">
  
      <HeroSection />
  
      <MissionSection />
      <BilingualSupport />
      <ChildPotential />
      <TeachingMethodologies />
      <TechEducation />
      <CallToAction />
      <Lumi randomMovement={true} />
    </div>
  );
};

export default CoursesPage;
