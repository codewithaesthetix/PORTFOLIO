import { SiGithub, SiLinkedin, SiX, SiFiverr } from 'react-icons/si';
import loImage from './logo.jpg'; 


const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span><img src={loImage} alt="" /></span>
            <p>Kazam Ali</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <SiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <SiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <SiX />
            </a>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer">
              <SiFiverr />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Kazam Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;