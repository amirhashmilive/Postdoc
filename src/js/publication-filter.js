/**
 * Publication Filtering & Search (assets/js/publication-filter.js)
 * Dynamic rendering, category tab filtering, search by keyword, abstract preview toggle.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const container = document.getElementById('publications-container');
    const searchInput = document.getElementById('pub-search-input');
    const tabButtons = document.querySelectorAll('.filter-tab');

    if (!container) return;

    let publicationsData = [];
    let currentCategory = 'all';
    let currentSearchTerm = '';

    // Fetch publication data
    fetch('../assets/data/publications.json')
        .then(res => res.json())
        .then(data => {
            publicationsData = data;
            renderPublications();
        })
        .catch(err => {
            console.error('Error loading publications data:', err);
            container.innerHTML = '<p class="text-muted">Failed to load publications.</p>';
        });

    function renderPublications() {
        const filtered = publicationsData.filter(pub => {
            const matchesCategory = currentCategory === 'all' || pub.type === currentCategory;
            const matchesSearch = currentSearchTerm === '' ||
                pub.title.toLowerCase().includes(currentSearchTerm) ||
                pub.authors.some(a => a.toLowerCase().includes(currentSearchTerm)) ||
                pub.venue.toLowerCase().includes(currentSearchTerm) ||
                (pub.keywords && pub.keywords.some(k => k.toLowerCase().includes(currentSearchTerm)));

            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = '<div class="glass-card text-center mt-2"><p class="text-muted">No publications match your filter criteria.</p></div>';
            return;
        }

        container.innerHTML = filtered.map(pub => `
            <article class="pub-card hover-magnify" id="${pub.id}">
                <div class="flex-center" style="justify-content: space-between; margin-bottom: 0.5rem;">
                    <span class="badge badge-category">${pub.type.toUpperCase().replace('-', ' ')}</span>
                    <span class="text-muted" style="font-size: 0.85rem; font-weight: 600;">${pub.year}</span>
                </div>
                <h3 class="pub-title">${pub.title}</h3>
                <div class="pub-meta">
                    <span class="text-accent" style="font-weight: 500;">${pub.authors.join(', ')}</span><br>
                    <span><em>${pub.venue}</em></span>
                </div>
                ${pub.keywords ? `
                    <div style="margin-bottom: 0.75rem; display: flex; gap: 6px; flex-wrap: wrap;">
                        ${pub.keywords.map(k => `<span class="badge" style="background: rgba(255,255,255,0.05); font-size: 0.7rem; color: var(--text-muted);">${k}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="pub-abstract" id="abstract-${pub.id}">
                    <p>${pub.abstract}</p>
                </div>
                <div class="pub-actions">
                    <button class="btn btn-secondary btn-sm toggle-abstract-btn" data-target="abstract-${pub.id}">
                        <i class="fas fa-align-left"></i> Abstract
                    </button>
                    <button class="btn btn-secondary btn-sm copy-citation-btn" data-type="bibtex" data-id="${pub.id}">
                        <i class="fas fa-quote-right"></i> BibTeX
                    </button>
                    <button class="btn btn-secondary btn-sm copy-citation-btn" data-type="apa" data-id="${pub.id}">
                        <i class="fas fa-quote-left"></i> APA
                    </button>
                    ${pub.pdf ? `<a href="${pub.pdf}" target="_blank" class="btn btn-primary btn-sm"><i class="fas fa-file-pdf"></i> PDF</a>` : ''}
                </div>
            </article>
        `).join('');

        bindCardEvents();
    }

    function bindCardEvents() {
        // Toggle abstract
        document.querySelectorAll('.toggle-abstract-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const abstractEl = document.getElementById(targetId);
                if (abstractEl) {
                    abstractEl.classList.toggle('show');
                    btn.classList.toggle('active');
                }
            });
        });

        // Copy citation
        document.querySelectorAll('.copy-citation-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pubId = btn.getAttribute('data-id');
                const citeType = btn.getAttribute('data-type');
                const pub = publicationsData.find(p => p.id === pubId);
                if (pub && pub[citeType]) {
                    navigator.clipboard.writeText(pub[citeType]).then(() => {
                        showToast(`Copied ${citeType.toUpperCase()} citation to clipboard!`, 'success');
                    }).catch(() => {
                        showToast('Failed to copy citation.', 'error');
                    });
                }
            });
        });
    }

    // Category Tabs Handler
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.getAttribute('data-category');
            renderPublications();
        });
    });

    // Search Input Handler (Debounced)
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearchTerm = e.target.value.toLowerCase().trim();
                renderPublications();
            }, 250);
        });
    }
});

function showToast(message, type = 'success') {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.className = `toast toast-${type} show`;
    toast.textContent = message;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
