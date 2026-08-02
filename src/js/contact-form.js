/**
 * Contact Form Validation & Submission (assets/js/contact-form.js)
 * Form validation, honeypot spam protection, feedback toast.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check honeypot
        const honeypot = document.getElementById('website_url');
        if (honeypot && honeypot.value !== '') {
            // Bot detected
            return;
        }

        let isValid = true;

        // Reset errors
        form.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

        // Validate Name
        const nameInput = document.getElementById('contact-name');
        if (!nameInput || nameInput.value.trim() === '') {
            setError(nameInput, 'Name is required');
            isValid = false;
        }

        // Validate Email
        const emailInput = document.getElementById('contact-email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
            setError(emailInput, 'Valid email is required');
            isValid = false;
        }

        // Validate Message
        const messageInput = document.getElementById('contact-message');
        if (!messageInput || messageInput.value.trim().length < 10) {
            setError(messageInput, 'Message must be at least 10 characters long');
            isValid = false;
        }

        if (isValid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const origText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            // Simulate form submission / mailto fallback
            setTimeout(() => {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const subject = document.getElementById('contact-subject')?.value.trim() || 'Portfolio Inquiry';
                const message = messageInput.value.trim();

                const mailtoUrl = `mailto:hashmiamir@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                
                window.location.href = mailtoUrl;

                submitBtn.disabled = false;
                submitBtn.innerHTML = origText;
                form.reset();

                if (typeof window.showToast === 'function') {
                    window.showToast('Thank you! Opening your email client to send the message.', 'success');
                } else {
                    alert('Thank you for reaching out!');
                }
            }, 800);
        }
    });

    function setError(input, message) {
        if (!input) return;
        const group = input.closest('.form-group');
        if (group) {
            group.classList.add('has-error');
            const errorEl = group.querySelector('.form-error');
            if (errorEl) errorEl.textContent = message;
        }
    }
});
