import { motion } from "framer-motion";

const projects = [
  {
    icon: "🏫",
    title: "APSCHE Practice Portal",
    description:
      "A full-stack MERN clone of the APSCHE web options entry system built for educational purposes. It features secure authentication, role-based access control, dynamic data handling, and an option-freeze workflow.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"]
  },
  {
    icon: "🌦️",
    title: "SkyCast - Weather Dashboard",
    description:
      "A responsive weather dashboard built with React.js that displays real-time weather data, location search, current conditions, and a 5-day forecast.",
    tags: ["React", "Weather API", "JavaScript", "CSS"]
  },
  {
    icon: "👝",
    title: "DigiWallet",
    description:
      "A full-stack wallet management application built with the MERN stack and TypeScript. It is designed for secure, scalable, and maintainable development.",
    tags: ["MERN", "TypeScript", "Frontend", "Backend"]
  }
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-label">Featured Projects</div>

      <h2 className="section-title">
        Some things I've <span className="gradient-text">built.</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="glass-card project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              {project.icon}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map(tag => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
