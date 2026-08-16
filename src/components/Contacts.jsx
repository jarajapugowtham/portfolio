import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="section" id="contact">
      <motion.div
        className="glass-card contact-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-label">
          Let's Work Together
        </div>

        <h2 className="section-title">
          Have an idea?
          <br />
          <span className="gradient-text">
            Let's build it.
          </span>
        </h2>

        <p>
          I'm currently open to developer internships and
          full-time opportunities. Feel free to get in touch.
        </p>

        <a
          className="contact-email"
          href="mailto:jarajapugowtham0851@gmail.com"
        >
          jarajapugowtham0851@gmail.com
        </a>

        <div className="hero-buttons">
          <a
            className="btn btn-primary"
            href="mailto:jarajapugowtham0851@gmail.com"
          >
            Send Me an Email →
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
