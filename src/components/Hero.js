import React, { useRef } from 'react'; // Removed unused useEffect
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/hero.css';

// Import your profile image
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="home" ref={containerRef} className="hero-section">
      {/* Animated background elements */}
      <div className="hero-background">
        <div className="gradient-orb gold-orb"></div>
        <div className="gradient-orb dark-orb"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="badge-line"></span>
            <span className="badge-text">FULL-STACK DEVELOPER</span>
            <span className="badge-line"></span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting <span className="gradient-text">Digital Excellence</span>
            <br />With Precision & Passion
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Transforming complex problems into elegant, scalable solutions. 
            Specialized in building exceptional digital experiences that drive results.
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="stat">
              <span className="stat-value">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </motion.div>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button 
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button 
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Picture with Animation */}
        <motion.div 
          className="hero-image-wrapper"
          style={{ y, opacity, scale }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="image-container">
            {/* Decorative elements */}
            <div className="image-frame frame-1"></div>
            <div className="image-frame frame-2"></div>
            <div className="image-frame frame-3"></div>
            
            {/* Main image */}
            <div className="profile-image-wrapper">
              <img 
                src={profileImage} 
                alt="Emmanuel - Full Stack Developer" 
                className="profile-image"
              />
              
              {/* Overlay gradient */}
              <div className="image-overlay"></div>
              
              {/* Floating particles */}
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
            </div>

            {/* Experience badge */}
            <motion.div 
              className="experience-badge"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg viewBox="0 0 100 100" className="badge-ring">
                <path 
                  id="curve" 
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                  fill="none"
                />
                <text className="badge-text">
                  <textPath href="#curve" startOffset="0%">
                    • EXPERIENCE • EXCELLENCE • INNOVATION •
                  </textPath>
                </text>
              </svg>
              <div className="badge-content">
                <span className="years">2+</span>
                <span className="label">Years</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll</span>
        <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;