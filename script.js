document.addEventListener("DOMContentLoaded", () => {

  /* ==================================================
     ELEMENTS
  ================================================== */

  const loader = document.getElementById("loader");
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");

  const year = document.getElementById("year");


  /* ==================================================
     YEAR
  ================================================== */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ==================================================
     PAGE LOADER
  ================================================== */

  window.addEventListener("load", () => {

    setTimeout(() => {

      if (loader) {
        loader.classList.add("hidden");
      }

    }, 500);

  });


  /* ==================================================
     NAVBAR SCROLL
  ================================================== */

  const handleNavbar = () => {

    if (!navbar) return;

    if (window.scrollY > 35) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  };

  handleNavbar();

  window.addEventListener(
    "scroll",
    handleNavbar,
    { passive: true }
  );


  /* ==================================================
     MOBILE MENU
  ================================================== */

  if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

      const open = navMenu.classList.toggle("open");

      menuBtn.classList.toggle("open", open);

      menuBtn.setAttribute(
        "aria-expanded",
        String(open)
      );

      document.body.classList.toggle(
        "no-scroll",
        open
      );

    });


    /* Close after selecting navigation */

    navMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuBtn.classList.remove("open");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.classList.remove(
          "no-scroll"
        );

      });

    });


    /* Close when clicking outside */

    document.addEventListener("click", event => {

      if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(event.target) &&
        !menuBtn.contains(event.target)
      ) {

        navMenu.classList.remove("open");

        menuBtn.classList.remove("open");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.classList.remove(
          "no-scroll"
        );

      }

    });

  }


  /* ==================================================
     ACTIVE NAVIGATION
  ================================================== */

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navLinks = document.querySelectorAll(
    ".nav-links a"
  );

  const updateActiveNav = () => {

    let current = "";

    sections.forEach(section => {

      const top =
        section.getBoundingClientRect().top;

      if (top <= 150) {
        current = section.id;
      }

    });

    navLinks.forEach(link => {

      const href =
        link.getAttribute("href");

      link.classList.toggle(
        "active",
        href === `#${current}`
      );

    });

  };

  window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
  );

  updateActiveNav();


  /* ==================================================
     SCROLL REVEAL
  ================================================== */

  const revealTargets = document.querySelectorAll(
    ".section-heading, " +
    ".about-layout, " +
    ".skill-card, " +
    ".experience-card, " +
    ".featured-project, " +
    ".project-row, " +
    ".education-card, " +
    ".certificate-card, " +
    ".contact-content"
  );

  revealTargets.forEach(element => {
    element.classList.add("reveal");
  });


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
      }
    );


  revealTargets.forEach(element => {

    revealObserver.observe(element);

  });


  /* ==================================================
     STAGGERED CARD ANIMATION
  ================================================== */

  const cardGroups = [
    ".skills-grid .skill-card",
    ".certificate-grid .certificate-card"
  ];

  cardGroups.forEach(selector => {

    document
      .querySelectorAll(selector)
      .forEach((card, index) => {

        card.style.transitionDelay =
          `${index * 80}ms`;

      });

  });


  /* ==================================================
     CUSTOM CURSOR
  ================================================== */

  const canUseCustomCursor =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;


  if (
    canUseCustomCursor &&
    cursorDot &&
    cursorRing
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener(
      "mousemove",
      event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursorDot.style.left =
          `${mouseX}px`;

        cursorDot.style.top =
          `${mouseY}px`;

        cursorDot.style.opacity = "1";

        cursorRing.style.opacity = "1";

      },
      { passive: true }
    );


    const animateCursor = () => {

      ringX +=
        (mouseX - ringX) * 0.14;

      ringY +=
        (mouseY - ringY) * 0.14;

      cursorRing.style.left =
        `${ringX}px`;

      cursorRing.style.top =
        `${ringY}px`;

      requestAnimationFrame(
        animateCursor
      );

    };

    animateCursor();


    const interactiveElements =
      document.querySelectorAll(
        "a, button, .skill-card, " +
        ".certificate-card, .project-visual, " +
        ".project-mini-visual"
      );


    interactiveElements.forEach(element => {

      element.addEventListener(
        "mouseenter",
        () => {
          cursorRing.classList.add("active");
        }
      );

      element.addEventListener(
        "mouseleave",
        () => {
          cursorRing.classList.remove("active");
        }
      );

    });


    document.addEventListener(
      "mouseleave",
      () => {

        cursorDot.style.opacity = "0";

        cursorRing.style.opacity = "0";

      }
    );

  }


  /* ==================================================
     HERO PARALLAX
  ================================================== */

  const heroVisual =
    document.querySelector(".hero-visual");

  if (
    heroVisual &&
    canUseCustomCursor
  ) {

    window.addEventListener(
      "mousemove",
      event => {

        const x =
          (event.clientX /
            window.innerWidth -
            0.5) * 8;

        const y =
          (event.clientY /
            window.innerHeight -
            0.5) * 8;

        heroVisual.style.transform =
          `translate(${x}px, ${y}px)`;

      },
      { passive: true }
    );

  }


  /* ==================================================
     SMOOTH ANCHOR SCROLL
  ================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(
              targetId
            );

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* ==================================================
     PROJECT HOVER TILT
  ================================================== */

  const tiltCards =
    document.querySelectorAll(
      ".project-visual, .project-mini-visual"
    );


  if (canUseCustomCursor) {

    tiltCards.forEach(card => {

      card.addEventListener(
        "mousemove",
        event => {

          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left;

          const y =
            event.clientY -
            rect.top;

          const rotateY =
            ((x / rect.width) - 0.5) * 5;

          const rotateX =
            ((y / rect.height) - 0.5) * -5;

          card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-3px)`;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform = "";

        }
      );

    });

  }


  /* ==================================================
     ESC KEY
  ================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        navMenu &&
        navMenu.classList.contains("open")
      ) {

        navMenu.classList.remove(
          "open"
        );

        menuBtn?.classList.remove(
          "open"
        );

        menuBtn?.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.classList.remove(
          "no-scroll"
        );

      }

    }
  );

});
