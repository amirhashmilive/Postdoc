/**
 * Theme Controller (assets/js/theme.js)
 * Manages Dark/Light mode theme state, localStorage persistence, 
 * UI toggle icon updates, and dispatches the themeChanged event.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    let toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) {
        toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle theme');
        document.body.appendChild(toggleBtn);
    }

    function updateIcon(theme) {
        if (theme === 'dark') {
            toggleBtn.innerHTML = '<i class="fas fa-sun" style="color: #ffd600;"></i>';
            toggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-moon" style="color: #0066cc;"></i>';
            toggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    }

    updateIcon(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.classList.add('theme-transitioning');
        setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 450);

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);

        // Notify charts and other reactive components
        window.dispatchEvent(new Event('themeChanged'));
    });
});
