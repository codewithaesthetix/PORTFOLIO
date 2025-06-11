import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "ILM College Renala Khurd",
      duration: "2023 - 2027",
      achievements: [
        "CGPA: 3.8/4.0",
        "Dean's List Honoree"
      ]
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "ILM College Renala Khurd",
      duration: "2021 - 2023",
      achievements: [
        "Grade: A+",
        "Top 5% of class"
      ]
    }
  ];

  return (
    <section id="education">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="highlight">Education</span>
        </motion.h2>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="education-card"
            >
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-duration">{edu.duration}</p>
              <ul className="education-achievements">
                {edu.achievements.map((item, i) => (
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

export default Education;