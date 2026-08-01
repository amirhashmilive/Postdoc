/**
 * Theme-Aware Chart.js Integration Pattern (assets/js/charts.js)
 * Manages chart lifecycle, theme color resolution, and re-rendering on theme switch.
 */
const chartInstances = {};

function getChartColors() {
    'use strict';
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        textColor: isDark ? '#f8f9ff' : '#1a1a24',
        gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        cgPrimary: isDark ? '#00d4ff' : '#0066cc',
        jhPrimary: isDark ? '#ff6b35' : '#cc4400',
        cgSecondary: isDark ? 'rgba(0, 212, 255, 0.4)' : 'rgba(0, 102, 204, 0.4)',
        jhSecondary: isDark ? 'rgba(255, 107, 53, 0.4)' : 'rgba(204, 68, 0, 0.4)',
        success: isDark ? '#00e676' : '#28a745',
        warning: isDark ? '#ffd600' : '#ffc107'
    };
}

window.addEventListener('themeChanged', () => {
    if (typeof window.initCharts === 'function') {
        window.initCharts();
    }
});
