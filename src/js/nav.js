/**
 * Navigation System (assets/js/nav.js)
 * Mobile hamburger toggle, active link highlighting, smooth scroll initialization.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Highlight Active Page Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.chap-nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const pageName = href.split('/').pop();
        if (pageName === currentPath || (currentPath === '' && pageName === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Mobile Hamburger Toggle
    let hamburger = document.querySelector('.nav-hamburger');
    const chapNav = document.querySelector('.chap-nav');

    if (!hamburger && chapNav) {
        hamburger = document.createElement('button');
        hamburger.className = 'nav-hamburger';
        hamburger.setAttribute('aria-label', 'Toggle Navigation Menu');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.appendChild(hamburger);
    }

    if (hamburger && chapNav) {
        hamburger.addEventListener('click', () => {
            chapNav.classList.toggle('mobile-open');
            const isOpen = chapNav.classList.contains('mobile-open');
            hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close menu on link click (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                chapNav.classList.remove('mobile-open');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
});
