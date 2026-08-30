import React, { useState } from "react";
import profileImage from "./profile.jpg";

const projects = [
  {
    number: "01",
    title: "APSCHE Practice Portal",
    type: "MERN STACK",
    description:
      "A full-stack student counselling practice portal with secure authentication, role-based access control, REST APIs, MongoDB integration and responsive React UI.",
    live: "https://apsche-practicemodel.vercel.app",
    github: "https://github.com/jarajapugowtham/Apsche.practicemodel",
  },
  {
    number: "02",
    title: "PharmaVexa",
    type: "FULL STACK",
    description:
      "A modern healthcare-focused web application designed with React and a responsive interface for presenting pharmaceutical and healthcare information.",
    live: "https://pharma-vexa.vercel.app/",
    github: "https://github.com/jarajapugowtham/PharmaVexa",
  },
  {
    number: "03",
    title: "SkyCast",
    type: "REACT.JS",
    description:
      "A real-time weather dashboard with location search, current weather conditions and a 5-day forecast using REST API integration.",
    live: "https://sky-cast-gamma-steel.vercel.app",
    github: "https://github.com/jarajapugowtham/Sky-cast-",
  },
  {
    number: "04",
    title: "DigiWallet",
    type: "WEB APPLICATION",
    description:
      "A digital wallet project focused on creating a clean and responsive user experience for digital finance workflows.",
    live: "#",
    github: "https://github.com/jarajapugowtham/DigiWallet",
  },
];

const skills = [
  { name: "JavaScript", short: "JS", category: "LANGUAGES" },
  { name: "Python", short: "PY", category: "LANGUAGES" },
  { name: "Java", short: "JV", category: "LANGUAGES" },
  { name: "C", short: "C", category: "LANGUAGES" },

  { name: "HTML5", short: "HT", category: "FRONTEND" },
  { name: "CSS3", short: "CS", category: "FRONTEND" },
  { name: "React.js", short: "RE", category: "FRONTEND" },
  { name: "Tailwind CSS", short: "TW", category: "FRONTEND" },

  { name: "Node.js", short: "NO", category: "BACKEND" },
  { name: "Express.js", short: "EX", category: "BACKEND" },
  { name: "REST APIs", short: "RS", category: "BACKEND" },
  { name: "JWT Authentication", short: "JWT", category: "BACKEND" },

  { name: "MongoDB", short: "MO", category: "DATABASE" },
  { name: "MySQL", short: "MY", category: "DATABASE" },

  { name: "Git", short: "GT", category: "TOOLS" },
  { name: "GitHub", short: "GH", category: "TOOLS" },
  { name: "Vercel", short: "VC", category: "TOOLS" },
  { name: "Render", short: "RN", category: "TOOLS" },
  { name: "VS Code", short: "VS", category: "TOOLS" },
];

function App() {
  const [skillFilter, setSkillFilter] = useState("ALL");

  const filteredSkills =
    skillFilter === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === skillFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-logo">with.</div>

        <nav className="nav-links">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("skills")}>SKILLS</button>
          <button onClick={() => scrollToSection("projects")}>PROJECTS</button>
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
        </nav>

        <a
          className="nav-github"
          href="https://github.com/jarajapugowtham"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB ↗
        </a>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero section">

          <div className="hero-content">
            <p className="eyebrow">SOFTWARE DEVELOPER / 2026</p>

            <h1>
              Building digital
              <br />
              <span>experiences.</span>
            </h1>

            <p className="hero-description">
              I'm <strong>Gowtham</strong>, a BCA student and aspiring
              Software Developer focused on building responsive,
              user-centric web applications with modern technologies.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                VIEW PROJECTS ↘
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                LET'S CONNECT ↗
              </button>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-photo-frame">
              <img
                src={profileImage}
                alt="Gowtham - Software Developer"
                className="profile-image"
              />
            </div>

            <div className="photo-label">
              <span>JARAJAPU</span>
              <strong>GOWTHAM</strong>
            </div>

            <div className="photo-status">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>
          </div>

        </section>

        {/* ================= STATS ================= */}
        <section className="stats-section">
          <div className="stat">
            <strong>04+</strong>
            <span>PROJECTS</span>
          </div>

          <div className="stat">
            <strong>02</strong>
            <span>FULL-STACK APPS</span>
          </div>

          <div className="stat">
            <strong>20+</strong>
            <span>TECHNOLOGIES</span>
          </div>

          <div className="stat">
            <strong>2026</strong>
            <span>DEVELOPER JOURNEY</span>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="skills-section section">

          <div className="section-heading">
            <p className="section-number">01 / SKILLS</p>

            <h2>
              Tools I
              <br />
              <span>build with.</span>
            </h2>
          </div>

          <div className="skills-container">

            <div className="skill-tabs">
              {["ALL", "FRONTEND", "BACKEND", "DATABASE", "TOOLS"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={
                      skillFilter === filter ? "active" : ""
                    }
                    onClick={() => setSkillFilter(filter)}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            <div className="skills-grid">
              {filteredSkills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-short">{skill.short}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="projects-section section">

          <div className="section-heading project-heading">
            <p className="section-number">02 / PROJECTS</p>

            <h2>
              Projects that
              <br />
              <span>ship.</span>
            </h2>

            <a
              href="https://github.com/jarajapugowtham"
              target="_blank"
              rel="noreferrer"
              className="view-github"
            >
              VIEW GITHUB ↗
            </a>
          </div>

          <div className="projects-list">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-visual">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-display">

                    <span className="display-code">
                      &lt;/&gt;
                    </span>

                    <h3>{project.title}</h3>

                    <p>
                      {project.number === "01"
                        ? "STUDENT COUNSELLING SYSTEM"
                        : project.number === "02"
                        ? "HEALTHCARE INFORMATION SYSTEM"
                        : project.number === "03"
                        ? "REAL-TIME WEATHER DASHBOARD"
                        : "DIGITAL WALLET APPLICATION"}
                    </p>

                  </div>

                </div>

                <div className="project-info">

                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span>{project.type}</span>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-actions">

                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-button"
                      >
                        LIVE DEMO ↗
                      </a>
                    ) : (
                      <span className="project-button disabled">
                        LIVE DEMO
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-button"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      GH
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="about-section section">

          <div className="section-heading">
            <p className="section-number">03 / ABOUT</p>

            <h2>
              The developer
              <br />
              <span>behind the code.</span>
            </h2>
          </div>

          <div className="about-layout">

            <div className="about-image-card">
              <img
                src={profileImage}
                alt="Gowtham"
                className="about-profile-image"
              />
            </div>

            <div className="about-content">

              <div className="code-card">
                <span>const developer = {"{"}</span>
                <span>&nbsp;&nbsp;name: "Gowtham",</span>
                <span>&nbsp;&nbsp;role: "Software Developer",</span>
                <span>&nbsp;&nbsp;stack: "MERN",</span>
                <span>&nbsp;&nbsp;passion: "Building"</span>
                <span>{"}"}</span>
              </div>

              <p>
                I'm a BCA student at Aditya Degree College with a strong
                interest in software development and full-stack web
                development.
              </p>

              <p>
                I enjoy turning ideas into functional, responsive and
                modern web applications using React.js, Node.js,
                Express.js and MongoDB.
              </p>

              <div className="about-details">
                <div>
                  <span>LOCATION</span>
                  <strong>VISAKHAPATNAM, INDIA</strong>
                </div>

                <div>
                  <span>EDUCATION</span>
                  <strong>BCA · 2024 — PRESENT</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>MERN / REACT / FULL-STACK</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>OPEN TO OPPORTUNITIES</strong>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="experience-section section">

          <div className="section-heading">
            <p className="section-number">04 / EXPERIENCE</p>

            <h2>
              Learning by
              <br />
              <span>building.</span>
            </h2>
          </div>

          <div className="experience-list">

            <div className="experience-item">
              <div className="experience-date">
                MAY 2026 — JUNE 2026
              </div>

              <div>
                <h3>MERN Stack Intern</h3>

                <p>
                  Completed hands-on development across MongoDB,
                  Express.js, React.js and Node.js. Built and deployed
                  full-stack projects and integrated REST APIs.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-date">
                JAN 2023 — AUG 2023
              </div>

              <div>
                <h3>Intern — Visakhapatnam Port Trust</h3>

                <p>
                  Gained practical exposure to enterprise workflows
                  and digital documentation systems in a professional
                  organizational environment.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section section">

          <div className="contact-top">
            <p className="section-number">05 / CONTACT</p>

            <h2>
              Let's build
              <br />
              <span>something.</span>
            </h2>

            <p>
              Have an opportunity, project or idea?
              Let's connect and create something useful.
            </p>
          </div>

          <div className="contact-links">

            <a
              href="mailto:jarajapugowtham0851@gmail.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>
                jarajapugowtham0851@gmail.com ↗
              </strong>
            </a>

            <a
              href="tel:+916305243360"
              className="contact-link"
            >
              <span>PHONE</span>
              <strong>+91 6305243360 ↗</strong>
            </a>

            <a
              href="https://github.com/jarajapugowtham"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GITHUB</span>
              <strong>github.com/jarajapugowtham ↗</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/jarajapu-gowtham-b304112ab"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
              <strong>Connect with me ↗</strong>
            </a>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-logo">with.</div>

        <p>
          © 2026 Jarajapu Gowtham. Built with React.
        </p>

        <button
          className="back-top"
          onClick={() => scrollToSection("home")}
        >
          BACK TO TOP ↑
        </button>

      </footer>

    </div>
  );
}

export default App;
