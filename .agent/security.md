# Security Considerations

## Static Site Security

This is a static HTML/CSS/JS site with no server-side code. Security focuses on:

### Content Security
- No inline JavaScript (`onclick` handlers) — use event listeners
- No `eval()` or `Function()` constructors
- Sanitize any user-generated content before DOM insertion
- Use `textContent` over `innerHTML` when possible

### Form Security
- Client-side validation is UX only, not security
- Honeypot field for basic bot protection
- No sensitive data stored in localStorage (theme preference only)
- Contact form uses third-party service (no self-hosted backend)

### Asset Security
- No API keys in client-side code
- No credentials in repository
- PDFs should not contain personal sensitive information beyond academic data

### Dependencies
- CDN resources (Google Fonts, Font Awesome, Chart.js) loaded via HTTPS
- Pin CDN versions to prevent supply chain attacks
- No npm packages — zero-dependency architecture
