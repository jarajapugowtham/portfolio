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
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></
