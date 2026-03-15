import React from 'react';
import { motion } from 'framer-motion';
import '../styles/projects.css';
import salonImage from '../assets/images/salon.png';
import taskflowImage from '../assets/images/taskflow.png'; // Import your TaskFlow image

const Projects = () => {
  const projects = [
    {
      title: "Unisex Salon Website",
      description: "Full-featured salon booking platform with appointment scheduling, stylist profiles, and service management",
      tech: ["Html", "Javascript", "Css", "React"],
      color: "#FFD700",
      image: salonImage,
      liveUrl: "https://elysian-unisex-salon-x4fw.vercel.app/#home",
      githubUrl: "https://github.com/emmanuel-29-2009/elysian-unisex-salon"
    },
    // {
    //   title: "E-Commerce Website",
    //   description: "Modern online store with product catalog, shopping cart, payment integration, and admin dashboard",
    //   tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    //   color: "#DAA520",
    //   image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    //   liveUrl: "https://your-ecommerce-project.com",
    //   githubUrl: "https://github.com/yourusername/ecommerce-project"
    // },
    {
      title: "TaskFlow Pro",
      description: "Collaborative project management tool with real-time updates, task assignments, and team analytics",
      tech: ["Html", "Css", "React", "Javascript"],
      color: "#FFF3B0",
      image: taskflowImage, // Now using the imported image (no quotes!)
      liveUrl: "https://taskmanagement-ten-sand.vercel.app/",
      githubUrl: "https://github.com/emmanuel-29-2009/taskmanagement"
    }
  ];

  const handleViewProject = (liveUrl) => {
    window.open(liveUrl, '_blank', 'noopener noreferrer');
  };

  const handleGithubClick = (githubUrl, e) => {
    e.stopPropagation();
    window.open(githubUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image" style={{ backgroundColor: project.color + '20' }}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <motion.button 
                  className="project-button live-button"
                  whileHover={{ x: 5 }}
                  onClick={() => handleViewProject(project.liveUrl)}
                >
                  Live Demo →
                </motion.button>
                <motion.button 
                  className="project-button github-button"
                  whileHover={{ x: 5 }}
                  onClick={(e) => handleGithubClick(project.githubUrl, e)}
                >
                  GitHub →
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;