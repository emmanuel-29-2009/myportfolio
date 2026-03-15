import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/emmanuel-29-2009" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        <a href="https://www.linkedin.com/in/emmanuel-dev-22a77b380/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a> */}
      </div>
    </footer>
  );
};

export default Footer;