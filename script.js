document.addEventListener('DOMContentLoaded', () => {
    // PRELOADER
    window.addEventListener('load', () => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => { document.getElementById('preloader').style.display = 'none'; }, 500);
    });

    // THEME TOGGLE
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // MARVEL EFFECTS - MOUSE FOLLOW
    const web = document.getElementById('spiderman-web');
    const hud = document.getElementById('ironman-hud');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        if(web) web.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        
        const x2 = (e.clientX - window.innerWidth / 2) / 50;
        const y2 = (e.clientY - window.innerHeight / 2) / 50;
        if(hud) hud.style.transform = `translate(${x2}px, ${y2}px)`;
    });
});
