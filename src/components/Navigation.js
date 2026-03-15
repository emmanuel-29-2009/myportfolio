import React from 'react';
import { motion } from 'framer-motion';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <motion.div 
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="logo-text">EMMANUEL</span>
        <span className="logo-dev">WEB DEV</span>
      </motion.div>
      <motion.ul 
        className="nav-links"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </motion.ul>
    </nav>
  );
};

export default Navigation;