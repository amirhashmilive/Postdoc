/**
 * Lightbox Image Slider (assets/js/slider.js)
 * Provides lightbox image modal gallery supporting touch/click and keyboard arrow/escape controls.
 */
function initLightbox(triggerSelector, lightboxClass = 'default') {
    'use strict';
    
    const triggers = document.querySelectorAll(triggerSelector);
    if (triggers.length === 0) return;

    const images = [];
    const captions = [];

    triggers.forEach((el, index) => {
        images.push(el.getAttribute('data-image'));
        captions.push(el.getAttribute('data-caption') || '');
        el.setAttribute('data-index', index);
    });

    let overlay = document.querySelector(`.lightbox-overlay.${lightboxClass}-overlay`);
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = `lightbox-overlay ${lightboxClass}-overlay`;
        overlay.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close">&times;</button>
                <img class="lightbox-img" src="" alt="Image detail">
                <button class="lightbox-prev" aria-label="Previous image">&#10094;</button>
                <button class="lightbox-next" aria-label="Next image">&#10095;</button>
                <div class="lightbox-counter">1 / ${images.length}</div>
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    let currentIndex = 0;
    const imgEl = overlay.querySelector('.lightbox-img');
    const counterEl = overlay.querySelector('.lightbox-counter');
    const captionEl = overlay.querySelector('.lightbox-caption');

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;
        imgEl.src = images[currentIndex];
        counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
        if (captionEl) {
            captionEl.textContent = captions[currentIndex];
            captionEl.style.display = captions[currentIndex] ? 'block' : 'none';
        }
    }

    triggers.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = parseInt(el.getAttribute('data-index'), 10);
            showImage(idx);
            overlay.classList.add('active');
        });
    });

    overlay.querySelector('.lightbox-close').addEventListener('click', () => overlay.classList.remove('active'));
    overlay.querySelector('.lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
    overlay.querySelector('.lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') overlay.classList.remove('active');
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
}
