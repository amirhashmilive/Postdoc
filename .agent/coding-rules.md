# Coding Rules

## Technology Constraints

- **HTML5**: Semantic elements only. No div soup.
- **CSS3**: Vanilla CSS with Custom Properties. No Tailwind, no SCSS, no PostCSS.
- **JavaScript**: Vanilla ES6+. No React, Vue, jQuery, or frameworks.
- **Build Tools**: None. Zero-dependency architecture. Open `index.html` directly.

## HTML Standards

- Every page starts with `<!DOCTYPE html>` and `<html lang="en" data-theme="dark">`
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- One `<h1>` per page
- All images must have `alt` attributes
- All interactive elements must have unique `id` attributes
- Use `data-*` attributes for JavaScript hooks (not classes)

## CSS Standards

- Use CSS Custom Properties (`var(--token)`) from the design system
- Mobile-first: write base styles, then add `@media (min-width: ...)` overrides
- Class naming: BEM-lite (`.block`, `.block__element`, `.block--modifier`)
- No `!important` unless overriding third-party styles
- Group related properties: positioning → display → box model → typography → visual → animation

## JavaScript Standards

- `'use strict'` in all scripts
- camelCase for variables and functions
- UPPER_SNAKE_CASE for constants
- Use `const` by default, `let` when reassignment needed, never `var`
- Event delegation where possible
- Debounce user input handlers (300ms)
- Use `IntersectionObserver` instead of scroll event listeners
- Wrap each module in an IIFE or DOMContentLoaded listener

## File Organization

- CSS files in `src/css/`
- JS files in `src/js/`
- HTML pages in `src/pages/`
- Images in `src/assets/images/`
- Data in `src/assets/data/`
- All paths relative (for GitHub Pages compatibility)

## Comments

- Comment the "why", not the "what"
- Section headers in CSS: `/* ── Section Name ─── */`
- JSDoc-style comments for functions
