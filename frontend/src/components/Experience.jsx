import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaRocket, 
  FaUsers, 
  FaChartLine,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { SiReact, SiJavascript, SiRedux, SiCss3 } from 'react-icons/si';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "Jun 2023 - Present",
      type: "Full-time",
      icon: <FaCode />,
      technologies: ["React", "JavaScript", "Redux", "CSS3"],
      responsibilities: [
        "Developed responsive UI components using React and modern JavaScript",
        "Collaborated with backend team to integrate RESTful APIs and GraphQL endpoints",
        "Implemented state management with Redux Toolkit for complex application state",
        "Optimized application performance, reducing load time by 40%",
        "Participated in agile development processes and code reviews"
      ],
      achievements: [
        "Led development of key features used by 10,000+ monthly active users",
        "Reduced bundle size by 25% through code splitting and lazy loading",
        "Mentored 2 junior developers on React best practices"
      ]
    },
    {
      title: "Web Developer",
      company: "Freelance",
      location: "Remote",
      duration: "Jan 2022 - May 2023",
      type: "Contract",
      icon: <FaLaptopCode />,
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      responsibilities: [
        "Built custom websites and web applications for diverse client portfolio",
        "Optimized website performance achieving 95+ Lighthouse scores",
        "Implemented SEO best practices resulting in 60% organic traffic growth",
        "Developed responsive designs ensuring cross-browser compatibility",
        "Integrated third-party APIs and payment gateways"
      ],
      achievements: [
        "Delivered 15+ projects with 100% client satisfaction rate",
        "Increased client conversion rates by 35% through UX improvements",
        "Built e-commerce platform processing $50k+ in monthly sales"
      ]
    },
    {
      title: "UI/UX Developer",
      company: "Digital Creations Agency",
      location: "New York, NY",
      duration: "Mar 2021 - Dec 2021",
      type: "Full-time",
      icon: <FaMobileAlt />,
      technologies: ["Figma", "Adobe XD", "HTML5", "CSS3", "JavaScript"],
      responsibilities: [
        "Transformed wireframes into interactive prototypes using Figma",
        "Collaborated with design team to create pixel-perfect implementations",
        "Conducted user research and A/B testing to improve user experience",
        "Developed design systems and component libraries for consistency",
        "Implemented accessibility standards (WCAG 2.1) across all projects"
      ],
      achievements: [
        "Improved user engagement by 45% through UX optimization",
        "Reduced development time by 30% with reusable component library",
        "Achieved 100% accessibility compliance across all projects"
      ]
    }
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  // Technology icon mapping
  const getTechIcon = (tech) => {
    const techIcons = {
      'React': <SiReact />,
      'JavaScript': <SiJavascript />,
      'Redux': <SiRedux />,
      'CSS3': <SiCss3 />,
      'Node.js': <FaCode />,
      'MongoDB': <FaCode />,
      'HTML5': <FaCode />,
      'Figma': <FaCode />,
      'Adobe XD': <FaCode />
    };
    return techIcons[tech] || <FaCode />;
  };

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <motion.h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle"
          >
            My journey through the world of web development and digital innovation
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="experience-card"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}
              
              {/* Experience Icon */}
              <motion.div 
                className="experience-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                {experience.icon}
              </motion.div>

              {/* Experience Header */}
              <div className="experience-header-content">
                <div className="experience-title-section">
                  <h3 className="experience-title">{experience.title}</h3>
                  <motion.span 
                    className="experience-type"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {experience.type}
                  </motion.span>
                </div>
                
                <div className="experience-company-info">
                  <h4 className="experience-company">{experience.company}</h4>
                  <div className="experience-meta">
                    <motion.div 
                      className="meta-item"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{experience.location}</span>
                    </motion.div>
                    <motion.div 
                      className="meta-item"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCalendarAlt className="meta-icon" />
                      <span>{experience.duration}</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <motion.div 
                className="experience-technologies"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h5>Technologies Used</h5>
                <div className="tech-tags">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      custom={techIndex}
                      variants={techVariants}
                      whileHover="hover"
                      className="tech-tag"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <div className="experience-content">
                <div className="responsibilities-section">
                  <h5>
                    <FaRocket className="section-icon" />
                    Key Responsibilities
                  </h5>
                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={listItemVariants}
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="achievements-section">
                  <h5>
                    <FaChartLine className="section-icon" />
                    Key Achievements
                  </h5>
                  <ul className="experience-achievements">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        custom={i + experience.responsibilities.length}
                        variants={listItemVariants}
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress Bar */}
              <motion.div 
                className="experience-progress"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="experience-cta"
        >
          <div className="cta-content">
            <FaUsers className="cta-icon" />
            <h3>Ready to Bring My Experience to Your Team</h3>
            <p>Let's work together to build something amazing</p>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;