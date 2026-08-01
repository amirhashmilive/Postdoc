/**
 * Fellowship Status Tracker (assets/js/fellowship-tracker.js)
 * Fetches fellowship application data and populates dynamic status tables.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const container = document.getElementById('fellowship-table-body');
    if (!container) return;

    fetch('../assets/data/fellowships.json')
        .then(res => res.json())
        .then(data => {
            renderFellowships(data);
        })
        .catch(err => {
            console.error('Error loading fellowship data:', err);
            container.innerHTML = '<tr><td colspan="5" class="text-muted">Failed to load fellowship data.</td></tr>';
        });

    function renderFellowships(fellowships) {
        const getBadgeClass = (status) => {
            switch(status) {
                case 'accepted': return 'badge-accepted';
                case 'under-review': return 'badge-review';
                case 'applied': return 'badge-applied';
                case 'rejected': return 'badge-rejected';
                default: return 'badge-category';
            }
        };

        const formatStatus = (status) => {
            return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        };

        container.innerHTML = fellowships.map(fel => `
            <tr>
                <td style="font-weight: 600;">
                    ${fel.university}
                    <div style="font-size: 0.78rem; font-weight: 400; color: var(--text-muted);">${fel.department}</div>
                </td>
                <td>${fel.program}</td>
                <td>${fel.focus}</td>
                <td><span class="badge ${getBadgeClass(fel.status)}">${formatStatus(fel.status)}</span></td>
                <td style="font-size: 0.85rem; color: var(--text-muted);">${fel.deadline}</td>
            </tr>
        `).join('');
    }
});
