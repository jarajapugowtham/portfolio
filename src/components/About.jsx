import { motion } from "framer-motion";

function About() {
  return (
    <section className="section" id="about">
      <div className="section-label">About Me</div>

      <div className="glass-card about-card">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Building digital solutions
            <br />
            with <span className="gradient-text">passion.</span>
          </h2>

          <p className="about-text">
            I'm a passionate MERN Stack Developer focused on
            creating responsive, scalable and user-friendly web
            applications. I enjoy turning ideas into real-world
            digital products using modern technologies.
          </p>
        </motion.div>

        <div className="info-grid">
          <div className="info-box">
            <span>Name</span>
            <strong>Jarajapu Gowtham</strong>
          </div>

          <div className="info-box">
            <span>Role</span>
            <strong>MERN Stack Developer</strong>
          </div>

          <div className="info-box">
            <span>Location</span>
            <strong>Andhra Pradesh, India</strong>
          </div>

          <div className="info-box">
            <span>Availability</span>
            <strong>Job / Internship</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
