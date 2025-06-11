import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'; // Don't forget to import hooks

const Projects = () => {
  // Single declaration of projects state
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="highlight">Projects</span>
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <div className="project-image">
                <span>{project.title}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;