import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Static project data - you can replace this with your API call
  useEffect(() => {
    const staticProjects = [
      {
        id: 1,
        title: "Amazon Clone",
        description: "A full-stack e-commerce platform inspired by Amazon with user authentication, product catalog, shopping cart, and payment integration.",
        image: "/api/placeholder/400/250",
        tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        link: "https://amazon-clone-demo.netlify.app",
        github: "https://github.com/yourusername/amazon-clone",
        features: [
          "User authentication & authorization",
          "Product search & filtering",
          "Shopping cart functionality",
          "Payment integration with Stripe",
          "Order management system"
        ],
        status: "Completed"
      },
      {
        id: 2,
        title: "EliteWebCrafters E-commerce",
        description: "Modern e-commerce store with custom WordPress integration, featuring product management, customer reviews, and analytics dashboard.",
        image: "/api/placeholder/400/250",
        tags: ["WordPress", "PHP", "JavaScript", "WooCommerce", "MySQL"],
        link: "https://elitewebcrafters-demo.netlify.app",
        github: "https://github.com/yourusername/elitewebcrafters",
        features: [
          "Custom WordPress theme development",
          "WooCommerce integration",
          "Product catalog management",
          "Customer review system",
          "Sales analytics dashboard"
        ],
        status: "Completed"
      },
      {
        id: 3,
        title: "Calculate Me! Calculator",
        description: "A sleek, responsive calculator application with advanced mathematical functions, memory operations, and modern UI design.",
        image: "/api/placeholder/400/250",
        tags: ["JavaScript", "HTML5", "CSS3", "React", "Responsive Design"],
        link: "https://calculate-me-demo.netlify.app",
        github: "https://github.com/yourusername/calculate-me",
        features: [
          "Basic arithmetic operations",
          "Memory functions (M+, M-, MC, MR)",
          "Percentage calculations",
          "Responsive mobile design",
          "Keyboard support"
        ],
        status: "Completed"
      }
    ];

    setProjects(staticProjects);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          My <span className="highlight">Projects</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-subtitle"
        >
          Here are some of my recent projects that showcase my skills in web development
        </motion.p>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(38, 31, 179, 0.2)",
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
              className="project-card"
            >
              {/* Project Image */}
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image-overlay">
                  <div className="project-status">{project.status}</div>
                  <div className="project-actions">
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="demo-btn"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="github-btn"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x250/261FB3/ffffff?text=${project.title}`;
                  }}
                />
              </motion.div>

              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Features List */}
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Project Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="project-link primary"
                  >
                    View Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="project-link secondary"
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="projects-cta"
        >
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new opportunities and exciting projects.</p>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;