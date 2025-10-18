import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendarAlt,
  FaAward,
  FaTrophy,
  FaBook,
  FaUserGraduate,
  FaStar
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "ILM College Renala Khurd",
      location: "Renala Khurd, Pakistan",
      duration: "2023 - 2027",
      status: "In Progress",
      grade: "CGPA: 3.8/4.0",
      icon: <FaGraduationCap />,
      color: "#261FB3",
      achievements: [
        "Dean's List Honoree for Academic Excellence",
        "Active member of Computer Science Society",
        "Participated in national coding competitions",
        "Completed advanced coursework in Data Structures and Algorithms"
      ],
      courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"],
      description: "Pursuing comprehensive computer science education with focus on modern web technologies and software development principles."
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "ILM College Renala Khurd",
      location: "Renala Khurd, Pakistan",
      duration: "2021 - 2023",
      status: "Completed",
      grade: "Grade: A+ (90%)",
      icon: <FaBook />,
      color: "#6c63ff",
      achievements: [
        "Ranked in Top 5% of graduating class",
        "Gold Medalist in Mathematics Olympiad",
        "Class Representative for Science Department",
        "Participated in multiple science exhibitions"
      ],
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      description: "Completed intermediate education with distinction in pre-engineering, laying strong foundation for technical education."
    },
    {
      degree: "Matriculation in Science",
      institution: "Government High School Renala Khurd",
      location: "Renala Khurd, Pakistan",
      duration: "2019 - 2021",
      status: "Completed",
      grade: "Grade: A+ (95%)",
      icon: <FaUserGraduate />,
      color: "#00b894",
      achievements: [
        "School Topper in Science Stream",
        "Won multiple science project competitions",
        "Active participant in extracurricular activities",
        "Member of School Science Club"
      ],
      courses: ["Science", "Mathematics", "Computer", "English"],
      description: "Completed secondary education with outstanding academic performance and active participation in science-related activities."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (progress) => ({
      width: `${progress}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
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

  const courseVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  // Calculate progress percentage based on duration
  const calculateProgress = (duration, status) => {
    if (status === "Completed") return 100;
    
    const [start, end] = duration.split(' - ').map(Number);
    const currentYear = new Date().getFullYear();
    const totalYears = end - start;
    const yearsCompleted = currentYear - start;
    
    return Math.min((yearsCompleted / totalYears) * 100, 90);
  };

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="education-header"
        >
          <motion.h2 className="section-title">
            My <span className="highlight">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle"
          >
            My academic journey and continuous learning path in technology and computer science
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => {
            const progress = calculateProgress(edu.duration, edu.status);
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="education-card"
                style={{ '--accent-color': edu.color }}
              >
                {/* Timeline connector */}
                {index < education.length - 1 && (
                  <div className="timeline-connector"></div>
                )}

                {/* Education Icon */}
                <motion.div 
                  className="education-icon"
                  variants={iconVariants}
                  whileHover="hover"
                  style={{ background: edu.color }}
                >
                  {edu.icon}
                </motion.div>

                {/* Status Badge */}
                <motion.div 
                  className={`education-status ${edu.status.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {edu.status}
                </motion.div>

                {/* Header Section */}
                <div className="education-header-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  
                  <div className="education-institution-info">
                    <div className="institution-main">
                      <FaUniversity className="institution-icon" />
                      <span className="education-institution">{edu.institution}</span>
                    </div>
                    <div className="institution-location">
                      <FaCalendarAlt className="location-icon" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="education-meta">
                    <motion.div 
                      className="meta-item duration"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCalendarAlt className="meta-icon" />
                      <span>{edu.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="meta-item grade"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaAward className="meta-icon" />
                      <span>{edu.grade}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="education-progress-container">
                  <div className="progress-label">
                    <span>Program Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      custom={progress}
                      variants={progressVariants}
                      style={{ background: edu.color }}
                    />
                  </div>
                </div>

                {/* Description */}
                <motion.p 
                  className="education-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {edu.description}
                </motion.p>

                {/* Key Courses */}
                <div className="courses-section">
                  <h5>
                    <FaBook className="section-icon" />
                    Key Courses & Subjects
                  </h5>
                  <div className="courses-grid">
                    {edu.courses.map((course, i) => (
                      <motion.span
                        key={course}
                        custom={i}
                        variants={courseVariants}
                        whileHover="hover"
                        className="course-tag"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="achievements-section">
                  <h5>
                    <FaTrophy className="section-icon" />
                    Achievements & Activities
                  </h5>
                  <ul className="education-achievements">
                    {edu.achievements.map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={listItemVariants}
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <FaStar className="achievement-icon" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Elements */}
                <div className="education-decoration">
                  <div className="decoration-circle"></div>
                  <div className="decoration-square"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning Journey CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="education-cta"
        >
          <div className="cta-content">
            <SiGooglescholar className="cta-icon" />
            <h3>Continuous Learning Journey</h3>
            <p>Committed to lifelong learning and staying updated with the latest technologies</p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Educational Degrees</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Key Courses</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Achievements</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;