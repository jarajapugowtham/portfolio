import { motion } from "framer-motion";

const skills = [
  ["⚛️", "React.js"],
  ["JS", "JavaScript"],
  ["🟢", "Node.js"],
  ["EX", "Express.js"],
  ["🍃", "MongoDB"],
  ["HTML", "HTML5"],
  ["CSS", "CSS3"],
  ["Git", "Git"],
  ["TW", "Tailwind CSS"],
  ["API", "REST APIs"]
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">Tech Stack</div>

      <h2 className="section-title">
        Technologies I <span className="gradient-text">work with.</span>
      </h2>

      <div className="skills-grid">
        {skills.map(([icon, name], index) => (
          <motion.div
            className="glass-card skill-card"
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="skill-icon">{icon}</div>
            <div className="skill-name">{name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
