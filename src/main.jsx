import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const links = {
  github: 'https://github.com/jarajapugowtham',
  linkedin: 'https://www.linkedin.com/in/jarajapu-gowtham-b304112ab',
  instagram: 'https://www.instagram.com/___a_loser__/',
  skycast: 'https://sky-cast-gamma-steel.vercel.app/',
  skycastRepo: 'https://github.com/jarajapugowtham/Sky-cast-',
  apsche: 'https://apsche-practicemodel.vercel.app/',
  apschePages: 'https://jarajapugowtham.github.io/Apsche.practicemodel/',
  apscheApi: 'https://apsche-practicemodel.onrender.com',
  apscheRepo: 'https://github.com/jarajapugowtham/Apsche.practicemodel',
  digiwallet: 'https://github.com/jarajapugowtham/DigiWallet'
};

const skills = [
  ['Frontend', 'HTML5 · CSS3 · JavaScript ES6+ · React.js · Tailwind CSS · Bootstrap'],
  ['Backend', 'Node.js · Express.js · REST API · JWT Authentication'],
  ['Database', 'MongoDB · MySQL'],
  ['Languages', 'Python · Java · C'],
  ['Tools', 'Git · GitHub · Vercel · Render · VS Code']
];

const projects = [
  {
    number: '01', title: 'APSCHE Practice Portal', type: 'MERN STACK',
    text: 'A full-stack student counselling practice portal with responsive UI, secure authentication, role-based access and an option-freeze workflow.',
    stack: 'React.js · Node.js · Express.js · MongoDB · JWT · Tailwind CSS',
    live: links.apsche, repo: links.apscheRepo, api: links.apscheApi
  },
  {
    number: '02', title: 'SkyCast', type: 'REACT · WEATHER',
    text: 'A real-time weather dashboard with location search, current conditions and a 5-day forecast, designed for desktop and mobile.',
    stack: 'React.js · Tailwind CSS · REST API',
    live: links.skycast, repo: links.skycastRepo
  },
  {
    number: '03', title: 'DigiWallet', type: 'FULL-STACK PROJECT',
    text: 'A full-stack project kept as a code showcase. The repository contains separate frontend and backend folders.',
    stack: 'Frontend · Backend',
    repo: links.digiwallet
  }
];

function WebLines(){
  return <div className="web-lines" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
}

function App(){
  const [menu, setMenu] = useState(false);
  const [cursor, setCursor] = useState({x:0,y:0});
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 120);
    const onMove = e => setCursor({x:e.clientX, y:e.clientY});
    window.addEventListener('pointermove', onMove);
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => { window.removeEventListener('pointermove', onMove); obs.disconnect(); };
  }, []);

  const scrollTo = id => { setMenu(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); };

  return <div ref={rootRef} className={`app ${loaded?'loaded':''}`}>
    <div className="cursor-glow" style={{left:cursor.x, top:cursor.y}}/>
    <WebLines/>
    <header className="nav">
      <button className="brand" onClick={()=>scrollTo('home')}><span className="brand-mark">✦</span> GOWTHAM<span className="dot">.</span></button>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Open menu"><span/><span/></button>
      <nav className={menu?'open':''}>
        {['home','about','work','skills','contact'].map(x=><button key={x} onClick={()=>scrollTo(x)}>{x}</button>)}
        <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">Resume ↗</a>
      </nav>
    </header>
    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR INTERNSHIPS & JOBS</div>
          <p className="small-kicker">HELLO, I'M</p>
          <h1>JARAJAPU<br/><em>GOWTHAM</em></h1>
          <div className="hero-role"><span>MERN STACK DEVELOPER</span><b>·</b><span>FRONTEND / FULL-STACK</span></div>
          <p className="hero-text">I build responsive, user-centric web applications with clean interfaces, practical APIs and a strong focus on turning ideas into polished digital experiences.</p>
          <div className="hero-actions"><button className="primary" onClick={()=>scrollTo('work')}>EXPLORE MY WORK <span>↗</span></button><button className="ghost" onClick={()=>scrollTo('contact')}>LET'S CONNECT</button></div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="portrait-frame">
            <div className="portrait-placeholder"><span className="photo-icon">JG</span><small>YOUR PROFILE PHOTO</small><strong>Drop your uploaded photo here</strong></div>
          </div>
          <div className="web-burst"><span/><span/><span/><span/><span/><span/></div>
          <div className="hero-card"><small>01 / 03</small><b>BUILDING<br/>WITH PURPOSE.</b></div>
        </div>
        <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="about" className="section about reveal">
        <div className="section-head"><span>01</span><h2>THE <em>DEVELOPER</em></h2><div/></div>
        <div className="about-grid">
          <div><p className="big-copy">A MERN Stack Developer focused on <strong>responsive, user-centric web applications.</strong></p></div>
          <div><p>Hands-on with React.js, Node.js, Express.js, MongoDB, REST APIs and JWT authentication. Experienced in deploying full-stack applications and creating clean, modern interfaces.</p><p className="muted">Based in Visakhapatnam, Andhra Pradesh, India.</p></div>
        </div>
        <div className="stats"><div><b>02+</b><span>FEATURED PROJECTS</span></div><div><b>MERN</b><span>STACK FOCUS</span></div><div><b>2026</b><span>INTERNSHIP</span></div><div><b>∞</b><span>CURIOSITY</span></div></div>
      </section>

      <section id="work" className="section work reveal">
        <div className="section-head"><span>02</span><h2>SELECTED <em>WORK</em></h2><div/></div>
        <div className="project-list">
          {projects.map(p=><article className="project" key={p.number}>
            <div className="project-num">{p.number}</div><div className="project-main"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p><div className="stack">{p.stack}</div><div className="project-links">{p.live && <a className="live" href={p.live} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}<a href={p.repo} target="_blank" rel="noreferrer">SOURCE ↗</a>{p.api && <a href={p.api} target="_blank" rel="noreferrer">API ↗</a>}</div></div><div className="project-mark">✦</div>
          </article>)}
        </div>
      </section>

      <section id="skills" className="section skills reveal">
        <div className="section-head"><span>03</span><h2>MY <em>ARSENAL</em></h2><div/></div>
        <div className="skill-grid">{skills.map(([title,body],i)=><div className="skill" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
      </section>

      <section className="section timeline reveal">
        <div className="section-head"><span>04</span><h2>THE <em>JOURNEY</em></h2><div/></div>
        <div className="timeline-list">
          <div className="time-item"><span>05.2026 — 06.2026</span><div><h3>MERN STACK INTERN</h3><p>Hands-on training in MongoDB, Express.js, React.js and Node.js. Built and deployed two full-stack projects with REST API integration.</p></div></div>
          <div className="time-item"><span>01.2023 — 08.2023</span><div><h3>INTERN — VISAKHAPATNAM PORT TRUST</h3><p>Exposure to enterprise workflows and digital documentation systems.</p></div></div>
          <div className="time-item"><span>2024 — PRESENT</span><div><h3>BCA · ADITYA DEGREE COLLEGE</h3><p>Andhra University</p></div></div>
        </div>
      </section>

      <section className="section certs reveal">
        <div className="section-head"><span>05</span><h2>PROOF OF <em>WORK</em></h2><div/></div>
        <div className="cert-grid">{['AI & ML Research Program — ULearn','Python Essentials — Cisco Networking Academy','C Essentials 1 & 2 — Cisco Networking Academy','MERN Stack Development — Internship Certificate, 2026','Certificate of Appreciation — Adhoc Aditya Tech Fusion Hackathon'].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div>
      </section>

      <section id="contact" className="contact reveal">
        <WebLines/><div className="contact-inner"><p className="small-kicker">HAVE A PROJECT IN MIND?</p><h2>LET'S MAKE<br/><em>SOMETHING GREAT.</em></h2><a className="mail" href="mailto:jarajapugowtham0851@gmail.com">jarajapugowtham0851@gmail.com ↗</a><div className="socials"><a href={links.github} target="_blank" rel="noreferrer">GITHUB</a><a href={links.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a><a href={links.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a></div></div>
      </section>
    </main>
    <footer><span>© 2026 JARAJAPU GOWTHAM</span><span>BUILT WITH REACT · MERN MINDSET</span><button onClick={()=>scrollTo('home')}>BACK TO TOP ↑</button></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
