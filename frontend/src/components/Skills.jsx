import {
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact,
  SiTailwindcss, 
  SiBootstrap,
  SiGit,
  SiGithub, 
  SiDocker, 
  SiFigma, 
  SiNodedotjs,  // Now used in Backend section
  SiTypescript,  // Now used in Backend section
  SiExpress,     // Now used in Backend section
  SiMongodb,     // Now used in Backend section
  SiMysql        // Now used in Backend section
} from 'react-icons/si';

const skillsCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Mongoose", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#f1502f" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
    ],
  },
  {
    name: "Design & Prototyping",
    skills: [
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
];
const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-content">
        {skillsCategories.map((category) => (
          <div key={category.name} className="skills-category">
            <h3 className="skills-category-title">{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
