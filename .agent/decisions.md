# Key Decisions

## Decision Log

### D001: Design System Foundation
**Date**: 2026-08-01
**Decision**: Use the cinematic glassmorphism presentation framework as the visual foundation
**Rationale**: The UI files provide a complete, production-tested design system with dark/light theming, scroll-snap layout, and premium visual quality
**Alternatives Considered**: Building CSS from scratch, using a CSS framework (rejected for zero-dependency requirement)

### D002: Scroll-Snap Slide Paradigm
**Date**: 2026-08-01
**Decision**: Adapt the full-viewport scroll-snap layout for portfolio pages
**Rationale**: Creates an immersive, presentation-like experience that differentiates this from generic academic sites. Each page section becomes a full-screen "slide" within the page.
**Trade-offs**: Longer pages may have many slides; mitigated by slide number badges with dropdown jump navigation

### D003: Navigation Adaptation
**Date**: 2026-08-01
**Decision**: Repurpose `.chap-nav` floating pill as main site navigation
**Rationale**: The chapter navigation component is already styled, positioned, and responsive. Renaming labels from "Ch 01" to page names is trivial.
**Adaptation**: Added hamburger menu for mobile, active page highlighting via JS

### D004: Zero-Dependency Architecture
**Date**: 2026-08-01
**Decision**: No build tools, npm, or frameworks
**Rationale**: Maximizes portability, simplifies deployment to GitHub Pages, and aligns with the original UI system's philosophy
**External CDNs**: Google Fonts (Inter), Font Awesome 6.0, Chart.js 4.4

### D005: Data-Driven Content via JSON
**Date**: 2026-08-01
**Decision**: Use JSON files for publications, projects, fellowships, and news
**Rationale**: Enables dynamic filtering, searching, and future API integration without a backend. Content updates only require editing JSON, not HTML.

### D006: Contact Form Strategy
**Date**: 2026-08-01
**Decision**: Client-side validation with mailto fallback
**Rationale**: No backend server. Mailto provides minimum viable contact capability. Can upgrade to Formspree/Netlify Forms later.
