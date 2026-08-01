/**
 * Citation Export Helper (assets/js/citation-export.js)
 * Formats BibTeX and APA strings and provides global copy utilities.
 */
(function CitationExportSystem() {
    'use strict';

    window.copyTextToClipboard = function(text, successMessage) {
        if (!navigator.clipboard) {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            if (typeof window.showToast === 'function') {
                window.showToast(successMessage || 'Copied to clipboard!');
            }
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            if (typeof window.showToast === 'function') {
                window.showToast(successMessage || 'Copied to clipboard!');
            }
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    };
})();
