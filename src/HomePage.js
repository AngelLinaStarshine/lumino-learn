import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';  
import { Autoplay, Pagination, Navigation } from 'swiper';  
import { motion } from 'framer-motion';  
import "./App.css";

const HomePage = () => {
  return (
    <div className="home-container">
    
      <div className="welcome-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="welcome-banner">
            <h2>Welcome to </h2>
            <h1>LuminoLearn Academy</h1>
            <hr className="blue-line" />
            <h3>Empowering Minds, Illuminating Futures</h3>
            <p>
              At LuminoLearn Academy, we redefine learning by focusing on
              creativity, mastery, and personal growth. We are committed to
              preparing your child for a future filled with opportunity and
              success.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="commitment-carousel-section">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Our Commitment to Excellence
        </motion.h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]} 
          className="commitment-carousel"
        >
          <SwiperSlide className="commitment-slide">
            <div className="commitment-block block-1">
              <strong>Customized Learning Paths:</strong>
              <p>
                Tailored to meet each child’s unique learning style and pace,
                ensuring personal success.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="commitment-slide">
            <div className="commitment-block block-2">
              <strong>21st-Century Skill Building:</strong>
              <p>
                We foster critical skills like problem-solving, leadership, and
                digital literacy to prepare children for tomorrow’s challenges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="commitment-slide">
            <div className="commitment-block block-3">
              <strong>Engaging and Fun:</strong>
              <p>
                Our interactive, hands-on lessons and gamification methods
                motivate students to learn with enthusiasm.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="parent-partnership-section">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Parent Partnership and Progress Tracking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          At LuminoLearn Academy, we believe that parent involvement is key to
          student success. Our platform provides real-time progress tracking,
          detailed reports, and regular consultations to ensure your child
          reaches their full potential.
        </motion.p>
      </div>

  
      <div className="enroll-section">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Enroll Your Child Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Whether excelling in STEM, mastering literacy, or developing public
          speaking skills, LuminoLearn Academy is dedicated to nurturing your
          child’s academic and personal growth.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Join LuminoLearn Academy today and watch your child shine like never
          before!
        </motion.h3>
      </div>
    </div>
  );
};

export default HomePage;
