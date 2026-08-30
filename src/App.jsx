import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  CalendarDays,
  Award,
  GraduationCap,
  BriefcaseBusiness,
  Menu,
  X,
  Download,
  ChevronUp,
  Sparkles,
} from "lucide-react";

import profileImage from "./profile.jpg";

/* =========================
   TECHNOLOGY DATA
========================= */

const skills = [
  {
    short: "JS",
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    short: "PY",
    name: "Python",
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    short: "JV",
    name: "Java",
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    short: "C",
    name: "C",
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    short: "HT",
    name: "HTML5",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    short: "CS",
    name: "CSS3",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    short: "RE",
    name: "React.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    short: "TW",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    short: "NO",
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    short: "EX",
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    short: "MO",
    name: "MongoDB",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    short: "MY",
    name: "MySQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    short: "RS",
    name: "REST APIs",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    short: "JWT",
    name: "JWT Auth",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtokens/jsonwebtokens-original.svg",
  },
  {
    short: "GT",
    name: "Git",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    short: "GH",
    name: "GitHub",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    short: "VE",
    name: "Vercel",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    short: "RN",
    name: "Render",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg",
  },
  {
    short: "VS",
    name: "VS Code",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    short: "API",
    name: "API Integration",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
  },
  {
    short: "RB",
    name: "Role Access",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
];

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    number: "01",
    title: "APSCHE Practice Portal",
    type: "MERN STACK",
    description:
      "A full-stack student counselling practice portal with secure authentication, role-based access control, REST APIs, MongoDB integration and responsive React UI.",
    className: "apsche-art",
    visual: "apsche",
    live: "https://apsche-practicemodel.vercel.app",
    github: "https://github.com/jarajapugowtham/Apsche.practicemodel",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
  },
  {
    number: "02",
    title: "PharmaVexa",
    type: "FULL STACK",
    description:
      "A modern healthcare-focused web application designed with React and a responsive interface for presenting pharmaceutical and healthcare information.",
    className: "pharma-art",
    visual: "pharma",
    live: "https://pharma-vexa.vercel.app/",
    github: "https://github.com/jarajapugowtham/PharmaVexa",
    tags: ["React", "JavaScript", "Healthcare"],
  },
  {
    number: "03",
    title: "SkyCast Weather Dashboard",
    type: "REACT.JS",
    description:
      "A responsive real-time weather dashboard using REST API integration, location search, current conditions and a 5-day forecast.",
    className: "sky-art",
    visual: "sky",
    live: "https://sky-cast-gamma-steel.vercel.app",
    github: "https://github.com/jarajapugowtham/Sky-cast-",
    tags: ["React", "REST API", "Tailwind"],
  },
  {
    number: "04",
    title: "DigiWallet",
    type: "WEB APP",
    description:
      "A digital wallet project focused on a clean user interface, responsive design and practical frontend application development.",
    className: "wallet-art",
    visual: "wallet",
    live: "#",
    github: "https://github.com/jarajapugowtham/DigiWallet",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

/* =========================
   CERTIFICATIONS
========================= */

const certifications = [
  "AI & ML Research Program — ULearn",
  "Python Essentials — Cisco Networking Academy",
  "C Essentials 1 & 2 — Cisco Networking Academy",
  "MERN Stack Development — Internship Certificate",
  "Certificate of Appreciation — Aditya Tech Fusion Hackathon",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [skillFilter, setSkillFilter] = useState("all");

  /* =========================
     SECTION OBSERVER
  ========================= */

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================
     REVEAL ANIMATION
  ========================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================
     NAVIGATION
  ========================= */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  /* =========================
     EXTERNAL LINKS
  ========================= */

  const openExternal = (url) => {
    if (!url || url === "#") {
      alert("This project does not have a live demo yet.");
      return;
    }

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================
     RESUME
  ========================= */

  const handleResume = () => {
    window.open("/Resume.pdf", "_blank");
  };

  /* =========================
     FILTERED SKILLS
  ========================= */

  const filteredSkills =
    skillFilter === "all"
      ? skills
      : skills.filter(
          (skill) => skill.category === skillFilter
        );

  return (
    <div className="app-shell" id="top">
      <div className="grid-bg" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
        >
          <span className="brand-mark">JG</span>
          <span>JARAJAPU GOWTHAM</span>
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {[
            "home",
            "about",
            "projects",
            "skills",
            "experience",
            "contact",
          ].map((item) => (
            <button
              key={item}
              className={
                activeSection === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                scrollToSection(item)
              }
            >
              {item.charAt(0).toUpperCase() +
                item.slice(1)}
            </button>
          ))}
        </div>

        <button
          className="talk-btn"
          onClick={() =>
            scrollToSection("contact")
          }
        >
          LET'S TALK
          <ArrowUpRight size={14} />
        </button>

        <button
          className="mobile-menu"
          onClick={() =>
            setMenuOpen((value) => !value)
          }
        >
          {menuOpen ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>
      </nav>

      <main>

        {/* ================= HERO ================= */}

        <section
          className="section hero"
          id="home"
        >
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <Sparkles size={13} />
              SOFTWARE DEVELOPER
            </div>

            <h1>
              JARAJAPU
              <br />
              <span>GOWTHAM.</span>
            </h1>

            <h2>
              MERN STACK <i>|</i> REACT.JS{" "}
              <i>|</i> NODE.JS
            </h2>

            <p className="hero-text">
              BCA student and aspiring Software
              Developer building responsive
              full-stack web applications with
              React.js, Node.js, Express.js,
              MongoDB and modern web technologies.
            </p>

            <div className="social-row">
              <button
                className="icon-btn"
                onClick={() =>
                  openExternal(
                    "https://github.com/jarajapugowtham"
                  )
                }
              >
                <Github />
              </button>

              <button
                className="icon-btn"
                onClick={() =>
                  openExternal(
                    "https://www.linkedin.com/in/jarajapu-gowtham-b304112ab"
                  )
                }
              >
                <Linkedin />
              </button>

              <button
                className="icon-btn"
                onClick={() =>
                  (window.location.href =
                    "mailto:jamjapugowtham0651@gmail.com")
                }
              >
                <Mail />
              </button>

              <button
                className="resume-btn"
                onClick={handleResume}
              >
                <Download size={14} />
                RESUME
              </button>
            </div>

            <div className="stats">
              <div>
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Full-Stack Apps</span>
              </div>

              <div>
                <strong>20+</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>Developer Journey</span>
              </div>
            </div>
          </div>

          {/* HERO PHOTO */}

          <div className="hero-visual reveal">
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
              <b>"Software Developer"</b>,
              <br />
              &nbsp;&nbsp;stack:{" "}
              <b>"MERN"</b>,
              <br />
              &nbsp;&nbsp;passion:{" "}
              <b>"Building"</b>
              <br />
              {"}"};
            </div>

            <div className="code-icon">
              <Code2 size={22} />
            </div>

            <div className="photo-ring">
              <img
                src={profileImage}
                alt="Jarajapu Gowtham"
              />
            </div>

            <div className="floating-tag tag-one">
              <MapPin size={10} />
              VISAKHAPATNAM, INDIA
            </div>

            <div className="floating-tag tag-two">
              <Code2 size={10} />
              OPEN TO OPPORTUNITIES
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          className="section"
          id="about"
        >
          <div className="section-heading reveal">
            <span>01 / ABOUT ME</span>
            <h2>Building with purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="panel about-copy reveal">
              <p>
                I'm{" "}
                <strong>
                  Jarajapu Gowtham
                </strong>
                , a BCA student and aspiring
                Software Developer focused on
                creating responsive, practical
                and user-friendly web
                applications.
              </p>

              <p>
                I work mainly with modern
                JavaScript technologies and
                enjoy connecting frontend
                interfaces with backend APIs,
                databases and authentication
                systems.
              </p>

              <div className="signature">
                — JARAJAPU GOWTHAM
              </div>

              <div className="mini-facts">
                <div>
                  <MapPin />
                  <b>Location</b>
                  <span>
                    Visakhapatnam, Andhra Pradesh
                  </span>
                </div>

                <div>
                  <GraduationCap />
                  <b>Education</b>
                  <span>
                    BCA — Aditya Degree College
                  </span>
                </div>

                <div>
                  <Code2 />
                  <b>Focus</b>
                  <span>
                    Full-Stack Development
                  </span>
                </div>

                <div>
                  <BriefcaseBusiness />
                  <b>Target Role</b>
                  <span>
                    Software Developer
                  </span>
                </div>
              </div>
            </div>

            <div className="panel code-panel reveal">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>

              <pre>{`developer.profile = {
  name: "Jarajapu Gowtham",
  education: "BCA",
  location: "Visakhapatnam",
  role: "Software Developer",

  frontend: [
    "HTML5",
    "CSS3",
    "React.js",
    "Tailwind CSS"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST APIs"
  ],

  database: [
    "MongoDB",
    "MySQL"
  ],

  goal:
    "Build useful software."
};`}</pre>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          className="section"
          id="projects"
        >
          <div className="section-heading split-heading reveal">
            <div>
              <span>
                02 / SELECTED WORK
              </span>

              <h2>
                Projects that ship.
              </h2>
            </div>

            <button
              className="text-link"
              onClick={() =>
                openExternal(
                  "https://github.com/jarajapugowtham"
                )
              }
            >
              VIEW GITHUB
              <ArrowUpRight size={13} />
            </button>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card reveal"
                key={project.title}
              >
                <div
                  className={`project-art ${project.className}`}
                >
                  <span className="project-number">
                    {project.number}
                  </span>

                  {project.visual ===
                    "apsche" && (
                    <>
                      <div className="screen">
                        <b>APSCHE</b>
                        <small>
                          Practice Portal
                        </small>
                        <em>
                          STUDENT COUNSELLING
                          SYSTEM
                        </em>
                      </div>

                      <div className="desk-shape" />
                    </>
                  )}

                  {project.visual ===
                    "pharma" && (
                    <>
                      <div className="pharma-cross">
                        +
                      </div>

                      <div className="pharma-pill">
                        +
                      </div>

                      <div className="pharma-title">
                        PHARMAVEXA
                      </div>
                    </>
                  )}

                  {project.visual === "sky" && (
                    <div className="weather-card">
                      <small>
                        VISAKHAPATNAM
                      </small>

                      <strong>28°</strong>

                      <span>
                        Partly Cloudy
                      </span>

                      <div>
                        ☁︎ ☀︎ ☁︎
                      </div>
                    </div>
                  )}

                  {project.visual ===
                    "wallet" && (
                    <div className="wallet-card">
                      <b>DIGIWALLET</b>

                      <small>
                        AVAILABLE BALANCE
                      </small>

                      <strong>
                        ₹ 24,580
                      </strong>

                      <div>
                        •••• 4928
                      </div>
                    </div>
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

                  <div className="project-tags">
                    {project.tags.map(
                      (tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <div className="project-actions">
                    <button
                      onClick={() =>
                        openExternal(
                          project.live
                        )
                      }
                    >
                      <ExternalLink size={12} />
                      LIVE DEMO
                    </button>

                    <button
                      className="code-link"
                      onClick={() =>
                        openExternal(
                          project.github
                        )
                      }
                    >
                      <Github size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section
          className="section"
          id="skills"
        >
          <div className="section-heading reveal">
            <span>03 / TOOLKIT</span>

            <h2>
              Technologies I work with.
            </h2>
          </div>

          <div className="panel skills-panel reveal">

            {/* FILTER BUTTONS */}

            <div className="skill-tabs">
              {[
                ["all", "ALL"],
                ["frontend", "FRONTEND"],
                ["backend", "BACKEND"],
                ["database", "DATABASE"],
                ["tools", "TOOLS"],
                ["languages", "LANGUAGES"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={
                    skillFilter === value
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    setSkillFilter(value)
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            {/* TECHNOLOGY CARDS */}

            <div className="skills-grid">
              {filteredSkills.map(
                (skill) => (
                  <div
                    className="skill"
                    key={skill.name}
                  >
                    <div className="skill-top">
                      <span>
                        {skill.short}
                      </span>
                    </div>

                    <div className="skill-icon">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        loading="lazy"
                      />
                    </div>

                    <div className="skill-name">
                      {skill.name}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          className="section"
          id="experience"
        >
          <div className="section-heading reveal">
            <span>04 / JOURNEY</span>

            <h2>
              Experience & education.
            </h2>
          </div>

          <div className="dual-section">

            <div className="panel timeline-panel reveal">
              <div className="timeline">

                <div className="timeline-item">
                  <div className="dot" />

                  <div>
                    <div className="item-top">
                      <h3>
                        MERN Stack Intern
                      </h3>

                      <span>
                        <CalendarDays size={11} />
                        MAY — JUN 2026
                      </span>
                    </div>

                    <small>
                      SOFTWARE DEVELOPMENT
                    </small>

                    <p>
                      Completed hands-on
                      development across
                      MongoDB, Express.js,
                      React.js and Node.js.
                    </p>

                    <ul>
                      <li>
                        Developed full-stack
                        web applications.
                      </li>

                      <li>
                        Integrated REST APIs
                        between frontend and
                        backend.
                      </li>

                      <li>
                        Applied responsive UI
                        and database
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
                        Visakhapatnam Port
                        Trust
                      </h3>

                      <span>
                        <CalendarDays size={11} />
                        2023
                      </span>
                    </div>

                    <small>
                      INTERNSHIP / EXPOSURE
                    </small>

                    <p>
                      Gained practical
                      exposure to enterprise
                      workflows, structured
                      documentation and
                      professional
                      organizational
                      processes.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="panel timeline-panel reveal">
              <div className="timeline">

                <div className="timeline-item">
                  <div className="dot" />

                  <div>
                    <div className="item-top">
                      <h3>
                        Bachelor of Computer
                        Applications
                      </h3>

                      <span>
                        <CalendarDays size={11} />
                        2024 — PRESENT
                      </span>
                    </div>

                    <small>
                      ADITYA DEGREE COLLEGE
                    </small>

                    <p>
                      BCA student with a
                      strong interest in
                      software development,
                      web technologies and
                      full-stack application
                      development.
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
                        <CalendarDays size={11} />
                        2024
                      </span>
                    </div>

                    <small>
                      GOVERNMENT JUNIOR
                      COLLEGE
                    </small>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="dot" />

                  <div>
                    <div className="item-top">
                      <h3>SSC</h3>

                      <span>
                        <CalendarDays size={11} />
                        2020
                      </span>
                    </div>

                    <small>
                      RAVINDRA BHARATHI
                      SCHOOL
                    </small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          className="section"
          id="contact"
        >
          <div className="section-heading reveal">
            <span>05 / MORE</span>

            <h2>
              Credentials & contact.
            </h2>
          </div>

          <div className="bottom-grid">

            <div className="panel cert-panel reveal">
              <h3>
                Certifications
              </h3>

              {certifications.map(
                (cert) => (
                  <div
                    className="cert"
                    key={cert}
                  >
                    <Award size={14} />
                    <span>{cert}</span>
                  </div>
                )
              )}
            </div>

            <div className="quote-panel reveal">
              <div className="quote-mark">
                "
              </div>

              <p>
                Turning ideas into
                <br />
                <b>
                  useful software.
                </b>
              </p>
            </div>

            <div className="panel contact-card reveal">
              <p>
                Have an opportunity,
                project or collaboration
                in mind? Let's connect.
              </p>

              <a href="mailto:jamjapugowtham0651@gmail.com">
                <Mail size={15} />
                jamjapugowtham0651@gmail.com
              </a>

              <a href="tel:+916305243380">
                <Phone size={15} />
                +91 6305243380
              </a>

              <span>
                <MapPin size={15} />
                Visakhapatnam,
                Andhra Pradesh, India
              </span>

              <div className="contact-links">

                <button
                  onClick={() =>
                    openExternal(
                      "https://github.com/jarajapugowtham"
                    )
                  }
                >
                  <Github size={12} />
                  GitHub
                </button>

                <button
                  onClick={() =>
                    openExternal(
                      "https://www.linkedin.com/in/jarajapu-gowtham-b304112ab"
                    )
                  }
                >
                  <Linkedin size={12} />
                  LinkedIn
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}

        <div className="contact-strip reveal">
          <div>
            <span>
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Ready for the next
              challenge.
            </h2>
          </div>

          <button
            className="resume-btn"
            onClick={() =>
              (window.location.href =
                "mailto:jamjapugowtham0651@gmail.com?subject=Software%20Developer%20Opportunity")
            }
          >
            GET IN TOUCH
            <ArrowUpRight size={15} />
          </button>
        </div>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="brand">
          <span className="brand-mark">
            JG
          </span>

          <span>
            JARAJAPU GOWTHAM
          </span>
        </div>

        <div>
          SOFTWARE DEVELOPER • MERN STACK
          • REACT.JS
        </div>

        <button
          className="back-top"
          onClick={() =>
            scrollToSection("home")
          }
        >
          <ChevronUp />
        </button>
      </footer>
    </div>
  );
}

export default App;
