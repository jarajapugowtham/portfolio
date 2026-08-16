const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});


/* Scroll reveal */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.12
  }
);


document.querySelectorAll(
  ".section, .project, .skill-card, .certificate, .experience-item"
).forEach(element => {

  element.style.opacity = "0";

  element.style.transform = "translateY(25px)";

  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);

});


/* Footer year */

document.getElementById("year").textContent =
  new Date().getFullYear();
