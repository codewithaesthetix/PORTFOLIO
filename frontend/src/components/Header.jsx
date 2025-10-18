// Header.jsx
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import Image from './logo.jpg'; 


const Header = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = useMemo(() => ['home', 'about', 'skills', 'projects', 'experience', 'contact'], []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      for (const section of navItems) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, setActiveSection]);

  return (
    <nav className={`portfolio-nav ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark-nav' : 'light-nav'}`}>
      <div className="nav-container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="logo-container">
          <div className="logo-circle">
            <img src={Image} alt="" />
          </div>
          <span className="logo-name">Kazam Ali</span>
        </motion.div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`nav-link ${activeSection === item ? 'active-link' : ''}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <HiOutlineSun className="theme-icon" /> : <HiOutlineMoon className="theme-icon" />}
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;
