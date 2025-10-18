import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    // Add more technologies
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span className="highlight">Me</span>
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p className="about-paragraph">
              I am a Full-Stack Developer with expertise in MERN stack.
            </p>
            <p className="about-paragraph">
              I build smooth UI/UX and efficient backends.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="tech-grid"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="tech-card"
              >
                <img 
  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`} 
  alt={tech.name}
  className="tech-icon"
/>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;