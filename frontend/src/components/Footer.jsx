import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiX, SiFiverr, SiGmail, SiWhatsapp } from 'react-icons/si';
import { FiHeart, FiExternalLink } from 'react-icons/fi';
import loImage from './logo.jpg';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  // Social links data
  const socialLinks = [
    {
      icon: <SiGithub />,
      href: "https://github.com/codewithaesthetix",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: <SiLinkedin />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "#0077b5"
    },
    {
      icon: <SiX />,
      href: "https://twitter.com/codewithaesthetix",
      label: "Twitter",
      color: "#000"
    },
    {
      icon: <SiFiverr />,
      href: "http://fiverr.com/users/ghulaammuhammad",
      label: "Fiverr",
      color: "#1dbf73"
    },
    {
      icon: <SiGmail />,
      href: "mailto:kazamali562@gmail.com",
      label: "Email",
      color: "#ea4335"
    },
    {
      icon: <SiWhatsapp />,
      href: "https://wa.me/message/WXQYDK2JHMBMD1",
      label: "WhatsApp",
      color: "#25d366"
    }
  ];

  // Quick links data
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  // Service links data
  const services = [
    "Web Development",
    "Frontend Development",
    "React Applications",
    "UI/UX Design",
    "E-commerce Solutions",
    "WordPress Development"
  ];

  // Additional resource links
  const resourceLinks = [
    {
      category: "Learning Resources",
      links: [
        { name: "React Documentation", href: "https://reactjs.org", external: true },
        { name: "MDN Web Docs", href: "https://developer.mozilla.org", external: true },
        { name: "CSS Tricks", href: "https://css-tricks.com", external: true },
        { name: "Frontend Mentor", href: "https://frontendmentor.io", external: true }
      ]
    },
    {
      category: "Tools & Utilities",
      links: [
        { name: "VS Code", href: "https://code.visualstudio.com", external: true },
        { name: "GitHub", href: "https://github.com", external: true },
        { name: "Figma", href: "https://figma.com", external: true },
        { name: "Netlify", href: "https://netlify.com", external: true }
      ]
    },
    {
      category: "Community",
      links: [
        { name: "Dev.to", href: "https://dev.to", external: true },
        { name: "Stack Overflow", href: "https://stackoverflow.com", external: true },
        { name: "FreeCodeCamp", href: "https://freecodecamp.org", external: true },
        { name: "Codepen", href: "https://codepen.io", external: true }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.footer 
      className={`footer ${darkMode ? 'dark' : 'light'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        {/* Main Footer Content */}
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            variants={itemVariants}
          >
            <div className="footer-logo">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={loImage} alt="Kazam Ali" />
              </motion.div>
              <div className="brand-info">
                <h3>Kazam Ali</h3>
                <p className="brand-tagline">Full stack Developer & UI/UX Enthusiast</p>
                <p className="brand-description">
                  Creating beautiful, functional, and user-friendly web experiences 
                  that make a difference.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="social-section">
              <h4>Let's Connect</h4>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ '--social-color': social.color }}
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links-section"
            variants={itemVariants}
          >
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, color: "var(--primary-color)" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-services"
            variants={itemVariants}
          >
            <h4>Services</h4>
            <div className="services-list">
              {services.map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="service-tag"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            variants={itemVariants}
          >
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <SiGmail className="contact-icon" />
                <span>kazamali@gmail.com</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <SiWhatsapp className="contact-icon" />
                <span>+923166058193</span>
              </motion.div>
              <motion.a
                href="#contact"
                className="contact-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Resource Links Section */}
        <motion.div 
          className="footer-resources"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>Developer Resources & Tools</h4>
          <div className="resources-grid">
            {resourceLinks.map((resourceCategory, categoryIndex) => (
              <motion.div 
                key={resourceCategory.category}
                className="resource-category"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h5>{resourceCategory.category}</h5>
                <div className="resource-links">
                  {resourceCategory.links.map((link, linkIndex) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                      whileHover={{ x: 5, color: "var(--primary-color)" }}
                    >
                      {link.name}
                      {link.external && <FiExternalLink className="external-icon" />}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="copyright-content">
            <p>
              &copy; {currentYear} Kazam Ali. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="heart-icon"
              >
                <FiHeart />
              </motion.span>{" "}
              and lots of ☕
            </p>
            <div className="copyright-links">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>

          {/* Additional Links Below Copyright */}
          <motion.div 
            className="footer-additional-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="additional-links-grid">
              <div className="link-group">
                <h6>Quick Access</h6>
                <div className="link-list">
                  <a href="/blog">Blog & Articles</a>
                  <a href="/portfolio">Portfolio Gallery</a>
                  <a href="/testimonials">Client Testimonials</a>
                  <a href="/case-studies">Case Studies</a>
                </div>
              </div>
              
              <div className="link-group">
                <h6>Support</h6>
                <div className="link-list">
                  <a href="/help">Help Center</a>
                  <a href="/faq">FAQ</a>
                  <a href="/contact-support">Contact Support</a>
                  <a href="/status">System Status</a>
                </div>
              </div>
              
              <div className="link-group">
                <h6>Business</h6>
                <div className="link-list">
                  <a href="/about-company">About Company</a>
                  <a href="/careers">Careers</a>
                  <a href="/partners">Partnerships</a>
                  <a href="/press">Press Kit</a>
                </div>
              </div>
              
              <div className="link-group">
                <h6>Connect</h6>
                <div className="link-list">
                  <a href="/newsletter">Newsletter</a>
                  <a href="/blog-rss">RSS Feed</a>
                  <a href="/social-media">Social Media</a>
                  <a href="/community">Community</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        ↑
      </motion.button>
    </motion.footer>
  );
};

export default Footer;