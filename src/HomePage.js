import React from "react";
import { motion } from "framer-motion";
import Lumi from "./Lumi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./App.css"; 

const HomePage = () => {
  const carouselItems = [
    {
      title: "Language and Literacy Development",
      description: "Empower your child to master languages and communicate fluently.",
    },
    {
      title: "STEM Education",
      description: "Discover the world of science, technology, engineering, and math.",
    },
    {
      title: "Creative and Artistic Development",
      description: "Nurture creativity through art, music, and imaginative projects.",
    },
    {
      title: "Social and Emotional Skills",
      description: "Foster empathy, teamwork, and resilience in your child.",
    },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to LuminoLearn Academy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Shaping the future, one mind at a time.
        </motion.p>
      </div>

      <div className="story-section">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="stories">
          <motion.div
            className="story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Empowered Learning</h3>
            <p>
              Our students don't just memorize—they understand. Explore how our
              unique teaching methods help children thrive.
            </p>
          </motion.div>
          <motion.div
            className="story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Bilingual Excellence</h3>
            <p>
              We bridge the gap for bilingual learners, ensuring they excel in
              school while preserving their native language.
            </p>
          </motion.div>
          <motion.div
            className="story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Creative Pathways</h3>
            <p>
              From art and craft to web design, we inspire children to think
              outside the box and create masterpieces.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="carousel">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CarouselComponent items={carouselItems} />
        </motion.div>
      </div>

      <Lumi />
    </div>
  );
};

export default HomePage;


const CarouselComponent = ({ items }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-button" onClick={handlePrev}>
        <FaArrowCircleLeft />
      </button>
      <div className="carousel-item">
        <h3>{items[currentIndex].title}</h3>
        <p>{items[currentIndex].description}</p>
        <a href="/contact">Contact us for details</a>
      </div>
      <button className="carousel-button" onClick={handleNext}>
        <FaArrowCircleRight />
      </button>
    </div>
  );
};
