import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "Jun 2023 - Present",
      responsibilities: [
        "Developed responsive UI components using React",
        "Collaborated with backend team to integrate APIs",
        "Implemented state management with Redux"
      ]
    },
    {
      title: "Web Developer",
      company: "Freelance",
      duration: "Jan 2022 - May 2023",
      responsibilities: [
        "Built custom websites for clients",
        "Optimized website performance",
        "Implemented SEO best practices"
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Work <span className="highlight">Experience</span>
        </motion.h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;