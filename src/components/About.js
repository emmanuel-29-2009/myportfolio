import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Python/django', level: 80 },
  
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate developer with 2+ years of experience creating innovative 
            solutions for complex problems. My expertise spans across full-stack development, 
            cloud architecture, and AI integration. I believe in writing clean, maintainable 
            code and creating exceptional user experiences.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <h3 className="stat-number">2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div 
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;