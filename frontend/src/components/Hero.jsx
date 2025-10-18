import { motion } from 'framer-motion';
import profileImage from './Profile.png'; // Ensure you have a profile.jpg in the same directory
import { SiFiverr } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Kazam Ali</span>
          </h1>
          <h2 className="hero-subtitle">MERN Stack Developer</h2>
          <p className="hero-description">
            I build modern, responsive, and scalable web applications.
          </p>
          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="primary-btn"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <SiFiverr className="fiverr-icon" /> Fiverr
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-image-container"
        >
          <div className="hero-image-circle">
          <img src={profileImage} alt="Profile" />

            <div
             className="hero-image-placeholder">             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;