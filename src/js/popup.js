/**
 * Statistical Data Popovers (assets/js/popup.js)
 * Manages statistical insight overlay modals on hover of [data-popup] triggers.
 */
(function PopupSystem() {
    'use strict';

    const popupData = {
        'ces-cg': {
            title: 'Communication Effectiveness Score (Chhattisgarh)',
            formula: 'CES = (Frequency * 0.4) + (Clarity * 0.35) + (Trust * 0.25)',
            rawData: 'Mean: 2.67 / 4.0 | Sample N = 200 | SD = 0.48',
            whyMatters: 'Demonstrates higher beneficiary engagement due to 80% local dialect utilization in CSR outreach in Chhattisgarh.'
        },
        'ces-jh': {
            title: 'Communication Effectiveness Score (Jharkhand)',
            formula: 'CES = (Frequency * 0.4) + (Clarity * 0.35) + (Trust * 0.25)',
            rawData: 'Mean: 2.14 / 4.0 | Sample N = 200 | SD = 0.52',
            whyMatters: 'Reflects a significant communication gap caused by only 54% local language outreach in Jharkhand tribal belts.'
        },
        'chasm-gap': {
            title: 'Language Communication Chasm',
            formula: 'Δ Language = % CG Local Dialect - % JH Local Dialect',
            rawData: '80% (CG) vs 54% (JH) = 26% Point Disparity | p < 0.001',
            whyMatters: 'Verbal communication in local tribal dialects directly correlates with community trust and program awareness.'
        },
        'sample-size': {
            title: 'Fieldwork Sample Methodology',
            formula: 'N_total = N_beneficiaries (400) + N_stakeholders (40)',
            rawData: '10 Districts (5 CG, 5 JH) | 5 Financial Years (2018-2023)',
            whyMatters: 'Provides a robust multi-state comparative dataset across mining, industrial, and rural development zones.'
        }
    };

    let overlay = null;
    let titleEl = null;
    let formulaEl = null;
    let rawEl = null;
    let whyEl = null;

    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        overlay.innerHTML = `
            <div class="popup-content">
                <div class="popup-title"></div>
                <div class="popup-formula"></div>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;" class="popup-raw"></div>
                <div style="font-size: 0.85rem; color: var(--text-main);" class="popup-why"></div>
            </div>
        `;
        document.body.appendChild(overlay);

        titleEl = overlay.querySelector('.popup-title');
        formulaEl = overlay.querySelector('.popup-formula');
        rawEl = overlay.querySelector('.popup-raw');
        whyEl = overlay.querySelector('.popup-why');
    }

    document.addEventListener('DOMContentLoaded', () => {
        createOverlay();

        document.body.addEventListener('mouseover', (e) => {
            const trigger = e.target.closest('[data-popup]');
            if (trigger) {
                const popupId = trigger.getAttribute('data-popup');
                const data = popupData[popupId];
                if (data) {
                    titleEl.textContent = data.title;
                    formulaEl.textContent = data.formula;
                    rawEl.textContent = data.rawData;
                    whyEl.textContent = data.whyMatters;
                    
                    overlay.style.pointerEvents = 'none';
                    overlay.classList.add('active');
                }
            }
        });

        document.body.addEventListener('mouseout', (e) => {
            const trigger = e.target.closest('[data-popup]');
            if (trigger && (!e.relatedTarget || !trigger.contains(e.relatedTarget))) {
                overlay.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                overlay.classList.remove('active');
            }
        });
    });
})();
