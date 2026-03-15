import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials'; // Add this import
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDScene from './components/ThreeDScene';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <ThreeDScene />
      <Hero />
       <About />
      <Projects />
     <Testimonials /> {/* Add this line */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;