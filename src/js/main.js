/**
 * Core Scroll Engine & Observers — FIXED v2
 * - Uses .slide-anim class (not ALL children) for fade-in
 * - Prevents blank page bug from opacity:0 on everything
 * - Proper IntersectionObserver root configuration
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const container = document.querySelector('.slide-container');
    const slides    = document.querySelectorAll('.slide');

    if (!container || slides.length === 0) return;

    /* ── 1. Generate Progress Dots ─── */
    let dotsContainer = document.querySelector('.progress-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'progress-dots';
        document.body.appendChild(dotsContainer);
    }
    dotsContainer.innerHTML = '';

    slides.forEach((slide, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('data-index', i);
        const heading = slide.querySelector('h1, h2, h3');
        dot.setAttribute('title', heading ? heading.textContent.trim().slice(0, 40) : `Slide ${i + 1}`);
        dot.addEventListener('click', () => slide.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

    /* ── 2. Dot Active Observer ─── */
    const dotObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const idx = Array.from(slides).indexOf(entry.target);
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        });
    }, { root: container, threshold: 0.5 });

    slides.forEach(s => dotObs.observe(s));

    /* ── 3. Cinematic Fade-In (only .slide-anim elements) ─── */
    const fadeObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Animate all .slide-anim children
                entry.target.querySelectorAll('.slide-anim').forEach(el => {
                    el.style.opacity = '';
                    el.style.transform = '';
                });
            }
        });
    }, { root: container, threshold: 0.2 });

    slides.forEach(s => fadeObs.observe(s));

    // Mark first slide as visible immediately
    if (slides[0]) {
        slides[0].classList.add('is-visible');
    }

    /* ── 4. Keyboard Navigation ─── */
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
        const h = window.innerHeight;
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            container.scrollBy({ top: h, behavior: 'smooth' });
        }
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            container.scrollBy({ top: -h, behavior: 'smooth' });
        }
    });
});
