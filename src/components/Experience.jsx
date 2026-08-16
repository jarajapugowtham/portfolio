import { motion } from "framer-motion";

const journey = [
  {
    year: "2023",
    title: "Intern, Visakhapatnam Port Trust",
    text: "Gained exposure to enterprise workflows and digital documentation systems."
  },
  {
    year: "2024",
    title: "Started Building Projects",
    text: "Focused on web development fundamentals and project-based learning."
  },
  {
    year: "2026",
    title: "MERN Stack Intern",
    text: "Completed hands-on internship work with real-time development tasks and project activities."
  },
  {
    year: "2026",
    title: "Open to Opportunities",
    text: "Looking for exciting developer internships and full-time opportunities."
  }
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-label">Journey</div>

      <h2 className="section-title">
        My journey <span className="gradient-text">so far.</span>
      </h2>

      <div className="timeline">
        {journey.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.year + item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-year">{item.year}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
