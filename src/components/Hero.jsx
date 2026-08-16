import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="status">
          <span className="status-dot"></span>
          AVAILABLE FOR INTERNSHIPS & JOBS
        </div>

        <h1>
          Hi, I'm
          <br />
          <span className="gradient-text">GOWTHAM</span>
        </h1>

        <h2>MERN STACK DEVELOPER</h2>

        <p className="hero-description">
          I build modern, scalable and powerful web applications
          that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work →
          </a>

          <a href="/resume.pdf" className="btn btn-secondary">
            Download Resume ↓
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="orbit"></div>
        <div className="orbit orbit-two"></div>

        <motion.div
          className="avatar-container"
          animate={{
            y: [0, -15, 0],
            rotateY: [-8, 8, -8]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="avatar-placeholder">
            &lt;/&gt;
          </div>
        </motion.div>

        <motion.div
          className="tech-orb orb-react"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ⚛
        </motion.div>

        <motion.div
          className="tech-orb orb-node"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Node
        </motion.div>

        <motion.div
          className="tech-orb orb-js"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          JS
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
