import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import profile from "./assets/profile.jpg";

const LINKS = {
  github: "https://github.com/jarajapugowtham",
  linkedin:
    "https://www.linkedin.com/in/jarajapu-gowtham-b304112ab",

  apsche:
    "https://apsche-practicemodel.vercel.app/",
  apscheGithub:
    "https://github.com/jarajapugowtham/Apsche.practicemodel",
  apscheApi:
    "https://apsche-practicemodel.onrender.com",

  pharma:
    "https://pharma-vexa.vercel.app/",
  pharmaGithub:
    "https://github.com/jarajapugowtham/PharmaVexa",

  skycast:
    "https://sky-cast-gamma-steel.vercel.app/",
  skycastGithub:
    "https://github.com/jarajapugowtham/Sky-cast-",

  walletGithub:
    "https://github.com/jarajapugowtham/DigiWallet",

  email:
    "mailto:jamjapugowtham0651@gmail.com",

  phone:
    "tel:+916305243380",
};

const skills = [
  ["JavaScript", "JS"],
  ["React.js", "⚛"],
  ["Node.js", "N"],
  ["Express.js", "EX"],
  ["MongoDB", "◆"],
  ["MySQL", "SQL"],
  ["HTML5", "5"],
  ["CSS3", "3"],
  ["Tailwind CSS", "TW"],
  ["Git & GitHub", "GH"],
  ["Python", "PY"],
  ["Java", "☕"],
  ["C", "C"],
];

const projects = [
  {
    number: "01",
    title: "APSCHE Practice Portal",
    type: "MERN Stack",
    description:
      "Full-stack practice portal for students with authentication, role-based access, REST APIs and responsive UI.",
    imageClass: "apsche-art",
    live: LINKS.apsche,
    code: LINKS.apscheGithub,
  },

  {
    number: "02",
    title: "PharmaVexa",
    type: "React.js",
    description:
      "Intelligent pharmacy management platform with dashboard, inventory, sales, analytics and a modern responsive interface.",
    imageClass: "pharma-art",
    live: LINKS.pharma,
    code: LINKS.pharmaGithub,
  },

  {
    number: "03",
    title: "SkyCast",
    type: "React.js",
    description:
      "Weather dashboard with location search, current conditions and a 5-day forecast using a weather API.",
    imageClass: "sky-art",
    live: LINKS.skycast,
    code: LINKS.skycastGithub,
  },

  {
    number: "04",
    title: "DigiWallet",
    type: "Web App",
    description:
      "Digital wallet project focused on a modern interface and practical digital transaction experience.",
    imageClass: "wallet-art",
    live: null,
    code: LINKS.walletGithub,
  },
];

function ScrollReveal({ children, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector(
      `[data-reveal="${className}"]`
    );

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [className]);

  return (
    <div
      data-reveal={className}
      className={`reveal ${visible ? "show" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      ...document.querySelectorAll("section[id]"),
    ];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        if (
          window.scrollY >=
          section.offsetTop - 180
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  return (
    <div className="app-shell">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-bg" />

      {/* NAVBAR */}

      <header className="navbar">

        <button
          className="brand"
          onClick={() => go("home")}
          aria-label="Go home"
        >
          <span className="brand-mark">
            JG
          </span>

          <span>
            JARAJAPU GOWTHAM
          </span>
        </button>

        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          {[
            "home",
            "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ].map((id) => (
            <button
              key={id}
              className={
                active === id
                  ? "active"
                  : ""
              }
              onClick={() => go(id)}
            >
              {id
                .charAt(0)
                .toUpperCase() +
                id.slice(1)}
            </button>
          ))}

        </nav>

        <button
          className="talk-btn"
          onClick={() => go("contact")}
        >
          Let's Talk
          <Send size={15} />
        </button>

        <button
          className="mobile-menu"
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label="Menu"
        >
          {menuOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>

      </header>

      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-copy">

            <div className="eyebrow">
              <Sparkles size={15} />
              HELLO, I'M
            </div>

            <h1>
              JARAJAPU
              <br />
              <span>GOWTHAM</span>
            </h1>

            <h2>
              Software Developer
              <i> | </i>
              MERN Stack Developer
            </h2>

            <p className="hero-text">
              Building modern, responsive and
              scalable web applications with
              clean code and practical solutions.
            </p>

            <div className="social-row">

              <a
                className="icon-btn"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                className="icon-btn"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                className="icon-btn"
                href={LINKS.email}
                aria-label="Email"
              >
                <Mail />
              </a>

              <a
                className="resume-btn"
                href="/resume.pdf"
              >
                Download Resume
                <ArrowDown size={17} />
              </a>

            </div>

            <div className="stats">

              <div>
                <strong>4+</strong>
                <span>
                  Projects
                  <br />
                  Completed
                </span>
              </div>

              <div>
                <strong>1</strong>
                <span>
                  Internship
                  <br />
                  Experience
                </span>
              </div>

              <div>
                <strong>5+</strong>
                <span>
                  Certifications
                </span>
              </div>

              <div>
                <strong>∞</strong>
                <span>
                  Dedication &
                  <br />
                  Hard Work
                </span>
              </div>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />

            <div className="code-float">

              <span>const</span>{" "}
              developer = {"{"}
              <br />

              &nbsp;&nbsp;name:{" "}
              <b>"Gowtham"</b>,
              <br />

              &nbsp;&nbsp;role:{" "}
              <b>
                "Software Developer"
              </b>
              ,
              <br />

              &nbsp;&nbsp;stack: [
              <b>"MERN"</b>,
              <b>"React.js"</b>]
              <br />

              {"}"}

            </div>

            <div className="code-icon">
              <Code2 size={28} />
            </div>

            <div className="photo-ring">

              <img
                src={profile}
                alt="Jarajapu Gowtham"
              />

            </div>

            <div className="floating-tag tag-one">
              ⚡ Problem Solver
            </div>

            <div className="floating-tag tag-two">
              ● Clean Coder
            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="section"
        >

          <ScrollReveal className="section-heading">

            <span>ABOUT ME</span>

            <h2>
              Who am I?
            </h2>

          </ScrollReveal>

          <ScrollReveal className="about-grid">

            <div className="panel about-copy">

              <p>
                I’m a Computer Applications
                student and an aspiring Software
                Developer who loves building
                impactful solutions. I enjoy
                solving real-world problems,
                exploring new technologies,
                and turning ideas into working
                products.
              </p>

              <div className="signature">
                — Gowtham
              </div>

              <div className="mini-facts">

                <div>
                  <MapPin />
                  <b>From</b>
                  <span>
                    Visakhapatnam
                  </span>
                </div>

                <div>
                  <GraduationCap />
                  <b>BCA Student</b>
                  <span>
                    3rd Year
                  </span>
                </div>

                <div>
                  <BriefcaseBusiness />
                  <b>Open to Work</b>
                  <span>
                    Opportunities
                  </span>
                </div>

                <div>
                  <Sparkles />
                  <b>Always Learning</b>
                  <span>
                    New Things
                  </span>
                </div>

              </div>

            </div>

            <div className="panel code-panel">

              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>

              <pre>
{`// About Me

const gowtham = {
  name: "Jarajapu Gowtham",
  role: "Software Developer",
  stack: [
    "MERN",
    "React.js",
    "Node.js",
    "MongoDB"
  ],
  passion:
    "Building impactful digital solutions"
};`}
              </pre>

            </div>

          </ScrollReveal>

        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="section"
        >

          <ScrollReveal className="section-heading split-heading">

            <div>

              <span>
                WHAT I BUILD
              </span>

              <h2>
                Featured Projects
              </h2>

            </div>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View All
              <ArrowUpRight size={17} />
            </a>

          </ScrollReveal>

          <div className="project-grid">

            {projects.map((project) => (

              <ScrollReveal
                className={`project-card-wrap ${project.number}`}
                key={project.title}
              >

                <article className="project-card">

                  <div
                    className={`project-art ${project.imageClass}`}
                  >

                    <span className="project-number">
                      {project.number}
                    </span>

                    {project.imageClass ===
                      "apsche-art" && (
                      <>
                        <div className="screen">
                          <b>APSCHE</b>
                          <small>
                            Practice Portal
                          </small>
                          <em>
                            Dashboard •
                            Options • Profile
                          </em>
                        </div>

                        <div className="desk-shape" />
                      </>
                    )}

                    {project.imageClass ===
                      "pharma-art" && (
                      <>
                        <div className="pharma-cross">
                          ✚
                        </div>

                        <div className="pharma-pill">
                          ▰
                        </div>

                        <div className="pharma-title">
                          PharmaVexa
                        </div>

                        <div className="dashboard-bars" />
                      </>
                    )}

                    {project.imageClass ===
                      "sky-art" && (
                      <>
                        <div className="weather-card">

                          <small>
                            Visakhapatnam, IN
                          </small>

                          <strong>
                            28°C
                          </strong>

                          <span>
                            Clear Sky ☀
                          </span>

                          <div>
                            ☀ &nbsp; ☀ &nbsp;
                            ☀ &nbsp; ☀ &nbsp; ☀
                          </div>

                        </div>
                      </>
                    )}

                    {project.imageClass ===
                      "wallet-art" && (
                      <>
                        <div className="wallet-card">

                          <b>
                            DigiWallet
                          </b>

                          <small>
                            Total Balance
                          </small>

                          <strong>
                            ₹ 24,750.00
                          </strong>

                          <div>
                            Send &nbsp;
                            Receive &nbsp;
                            History
                          </div>

                        </div>
                      </>
                    )}

                  </div>

                  <div className="project-body">

                    <div className="project-title-row">

                      <h3>
                        {project.title}
                      </h3>

                      <span>
                        {project.type}
                      </span>

                    </div>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-actions">

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                          <ExternalLink
                            size={15}
                          />
                        </a>
                      )}

                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="code-link"
                        aria-label={`GitHub ${project.title}`}
                      >
                        <Github size={18} />
                      </a>

                    </div>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="section"
        >

          <ScrollReveal className="section-heading">

            <span>
              MY TOOLKIT
            </span>

            <h2>
              Skills & Technologies
            </h2>

          </ScrollReveal>

          <ScrollReveal className="skills-panel">

            <div className="skill-tabs">

              <b>Languages</b>
              <span>Frontend</span>
              <span>Backend</span>
              <span>Database</span>
              <span>Tools</span>

            </div>

            <div className="skills-grid">

              {skills.map(([name, icon]) => (

                <div
                  className="skill"
                  key={name}
                >

                  <strong>
                    {icon}
                  </strong>

                  <span>
                    {name}
                  </span>

                </div>

              ))}

            </div>

          </ScrollReveal>

        </section>

        {/* EXPERIENCE + EDUCATION */}

        <section
          id="experience"
          className="section dual-section"
        >

          <ScrollReveal className="panel timeline-panel">

            <div className="section-heading compact">

              <span>
                EXPERIENCE
              </span>

              <h2>
                My Journey
              </h2>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="dot" />

                <div>

                  <div className="item-top">

                    <h3>
                      MERN Stack Intern
                    </h3>

                    <span>
                      <CalendarDays />
                      May 2026 – Jun 2026
                    </span>

                  </div>

                  <small>
                    Internship
                  </small>

                  <ul>

                    <li>
                      Worked on MongoDB,
                      Express.js, React.js
                      and Node.js.
                    </li>

                    <li>
                      Developed and deployed
                      full-stack web projects.
                    </li>

                    <li>
                      Integrated REST APIs
                      between frontend and
                      backend.
                    </li>

                    <li>
                      Applied responsive UI
                      development and database
                      integration.
                    </li>

                  </ul>

                </div>

              </div>

              <div className="timeline-item">

                <div className="dot" />

                <div>

                  <div className="item-top">

                    <h3>
                      Intern – Visakhapatnam
                      Port Trust
                    </h3>

                    <span>
                      <CalendarDays />
                      Jan 2023 – Aug 2023
                    </span>

                  </div>

                  <small>
                    Internship
                  </small>

                  <ul>

                    <li>
                      Gained practical
                      exposure to enterprise
                      workflows and digital
                      documentation systems.
                    </li>

                    <li>
                      Worked in a professional
                      organizational environment.
                    </li>

                    <li>
                      Developed familiarity
                      with structured
                      documentation processes.
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </ScrollReveal>

          <ScrollReveal className="panel timeline-panel">

            <div className="section-heading compact">

              <span>
                EDUCATION
              </span>

              <h2>
                Academic Journey
              </h2>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="dot" />

                <div>

                  <div className="item-top">

                    <h3>
                      Bachelor of Computer
                      Applications (BCA)
                    </h3>

                    <span>
                      <CalendarDays />
                      2024 – Present
                    </span>

                  </div>

                  <p>
                    Aditya Degree College,
                    Andhra University
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="dot" />

                <div>

                  <div className="item-top">

                    <h3>
                      Intermediate
                    </h3>

                    <span>
                      <CalendarDays />
                      2024
                    </span>

                  </div>

                  <p>
                    Government Junior
                    College, Etcheria
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="dot" />

                <div>

                  <div className="item-top">

                    <h3>
                      SSC
                    </h3>

                    <span>
                      <CalendarDays />
                      2020
                    </span>

                  </div>

                  <p>
                    Ravindra Bharathi
                    School
                  </p>

                </div>

              </div>

            </div>

          </ScrollReveal>

        </section>

        {/* CERTIFICATIONS + CONTACT */}

        <section
          id="education"
          className="section bottom-grid"
        >

          <ScrollReveal className="panel cert-panel">

            <div className="section-heading compact">

              <span>
                ACHIEVEMENTS
              </span>

              <h2>
                Certifications
              </h2>

            </div>

            {[
              "AI & ML Research Program — ULearn",
              "Python Essentials — Cisco Networking Academy",
              "C Essentials 1 & 2 — Cisco Networking Academy",
              "MERN Stack Development — Internship Certificate",
              "Certificate of Appreciation — Adhoc Aditya Tech Fusion Hackathon",
            ].map((certificate) => (

              <div
                className="cert"
                key={certificate}
              >

                <CheckCircle2 />

                {certificate}

              </div>

            ))}

          </ScrollReveal>

          <ScrollReveal className="quote-panel">

            <div className="quote-mark">
              “
            </div>

            <p>
              Code is not just
              <br />
              what I write,
              <br />
              it’s how I{" "}
              <b>
                solve
                <br />
                problems.
              </b>
            </p>

          </ScrollReveal>

          <ScrollReveal className="panel contact-card">

            <div className="section-heading compact">

              <span>
                LET’S CONNECT
              </span>

              <h2>
                Get In Touch
              </h2>

            </div>

            <p>
              I'm always open to
              discussing new opportunities
              or exciting projects.
            </p>

            <a href={LINKS.phone}>
              <MessageCircle />
              +91 6305243380
            </a>

            <a href={LINKS.email}>
              <Mail />
              jamjapugowtham0651@gmail.com
            </a>

            <span>
              <MapPin />
              Visakhapatnam,
              Andhra Pradesh, India
            </span>

            <div className="contact-links">

              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                GitHub
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>

              <a href={LINKS.email}>
                <Mail />
                Email Me
              </a>

            </div>

          </ScrollReveal>

        </section>

        {/* CONTACT CTA */}

        <section
          id="contact"
          className="contact-strip"
        >

          <div>

            <span>
              READY TO BUILD?
            </span>

            <h2>
              Let's create something great.
            </h2>

          </div>

          <a
            href={LINKS.email}
            className="resume-btn"
          >
            Start a Conversation
            <ArrowUpRight />
          </a>

        </section>

      </main>

      {/* FOOTER */}

      <footer>

        <button
          className="brand"
          onClick={() => go("home")}
        >

          <span className="brand-mark">
            JG
          </span>

          <span>
            © 2026 Jarajapu Gowtham
          </span>

        </button>

        <div>
          Software Developer • MERN Stack
        </div>

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          <ArrowDown
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </button>

      </footer>

    </div>
  );
}

export default App;
