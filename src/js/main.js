/**
 * Core Scroll Engine & Observers (assets/js/main.js)
 * Generates vertical progress dots, handles keyboard slide scrolling,
 * observer-based slide fade-ins, card magnification safeguards.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const container = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slide');

    if (!container || slides.length === 0) return;

    // 1. Dynamic Dot Navigation Generation
    let dotsContainer = document.querySelector('.progress-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'progress-dots';
        document.body.appendChild(dotsContainer);
    }
    dotsContainer.innerHTML = '';

    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('data-index', index);
        dot.setAttribute('title', slide.querySelector('h1, h2, h3')?.textContent.trim() || `Slide ${index + 1}`);
        dot.addEventListener('click', () => {
            slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    // 2. Active Slide Observer for Dots
    const dotObserverOptions = {
        root: container,
        threshold: 0.5
    };

    const dotObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(slides).indexOf(entry.target);
                dots.forEach((d, i) => {
                    d.classList.toggle('active', i === index);
                });
            }
        });
    }, dotObserverOptions);

    slides.forEach(slide => dotObserver.observe(slide));

    // 3. Cinematic Fade-In Observer
    const fadeObserverOptions = {
        root: container,
        threshold: 0.25
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, fadeObserverOptions);

    slides.forEach(slide => fadeObserver.observe(slide));

    // 4. Keyboard Navigation (ArrowUp / ArrowDown)
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

        const viewportHeight = window.innerHeight;

        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            container.scrollBy({ top: viewportHeight, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            container.scrollBy({ top: -viewportHeight, behavior: 'smooth' });
        }
    });

    // 5. Universal Hover-Magnify Safeguard
    setTimeout(() => {
        const cards = document.querySelectorAll('.hover-magnify');
        cards.forEach(card => {
            if (card.offsetWidth > 400 && !card.hasAttribute('data-force-magnify')) {
                card.classList.add('hover-magnify-lg');
            }
        });
    }, 100);
});
