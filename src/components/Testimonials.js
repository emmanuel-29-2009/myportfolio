import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/testimonials.css';

// Using placeholder images from Random User API
const client1Image = "https://randomuser.me/api/portraits/women/44.jpg";
const client2Image = "https://randomuser.me/api/portraits/men/32.jpg";
const client3Image = "https://randomuser.me/api/portraits/women/68.jpg";

const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // Removed unused 'opacity' variable

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Elysian unisex Salon",
      content: "Working with Emmanuel was an absolute pleasure. He delivered a stunning salon website that perfectly captures our brand identity. The booking system works flawlessly and our clients love it!",
      rating: 5,
      image: client1Image,
      project: "Unisex Salon Website"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, Shopmore",
      content: "The e-commerce platform Emmanuel built for us exceeded all expectations. Clean code, excellent performance, and the conversion rate has increased by 40%. Highly recommended!",
      rating: 5,
      image: client2Image,
      project: "E-Commerce Website"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateLabs",
      content: "TaskFlow Pro transformed how our team works. The intuitive interface and real-time updates have boosted our productivity significantly. Emmanuel's attention to detail is remarkable.",
      rating: 5,
      image: client3Image,
      project: "TaskFlow Pro"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section" ref={containerRef}>
      {/* Background orbs */}
      <div className="testimonials-background">
        <div className="gradient-orb gold-orb"></div>
        <div className="gradient-orb dark-orb"></div>
      </div>

      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-subtitle">CLIENT FEEDBACK</span>
        <h2 className="section-title">
          What <span className="gradient-text">Clients Say</span>
        </h2>
        <div className="title-decoration">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card"
            style={{ y: index === 1 ? y : 0 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Card shine effect */}
            <div className="card-shine"></div>
            
            {/* Quote icon */}
            <div className="quote-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H6V16H10V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 11H14V16H18V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Rating stars */}
            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial content */}
            <p className="testimonial-content">"{testimonial.content}"</p>

            {/* Project tag */}
            <div className="project-tag">
              <span>{testimonial.project}</span>
            </div>

            {/* Client info */}
            <div className="client-info">
              <div className="client-image-wrapper">
                <div className="client-image-border"></div>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="client-image"
                />
              </div>
              <div className="client-details">
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-role">{testimonial.role}</p>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="corner-decoration"></div>
          </motion.div>
        ))}
      </div>

      {/* Stats section */}
      <motion.div 
        className="testimonials-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Satisfaction Rate</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;