# Testing Strategy

## Visual Testing

### Per-Page Checklist
- [ ] Page loads without console errors
- [ ] Dark mode renders correctly (neon accents, glass cards, text contrast)
- [ ] Light mode renders correctly (blue accents, white glass, text contrast)
- [ ] Theme toggle transitions smoothly (450ms)
- [ ] Navigation highlights correct active page
- [ ] All slides snap correctly (scroll-snap-type: y mandatory)
- [ ] Glass card hover magnification works (1.5x / 1.02x for wide)
- [ ] Breathing glow animations pulse continuously
- [ ] Typography hierarchy is correct (title > subtitle > body)

### Responsive Testing
- [ ] Desktop (≥1025px): Full grid layouts, tooltip nav, slide badges
- [ ] Tablet (≤1024px): 2-column grids, reduced font sizes
- [ ] Mobile (≤768px): Single column, hamburger nav, magnification capped

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari (if available)

## Functional Testing

### Navigation
- [ ] All 13 page links work from every page
- [ ] Active page is highlighted in nav
- [ ] Mobile hamburger opens/closes
- [ ] Keyboard nav (Arrow Up/Down) scrolls slides

### Publications Page
- [ ] Category filter tabs filter correctly
- [ ] Search box filters by title/keyword/author
- [ ] Year filter works
- [ ] BibTeX export copies to clipboard
- [ ] APA export copies to clipboard
- [ ] Abstract expand/collapse toggles

### Contact Page
- [ ] Required field validation fires
- [ ] Email format validation works
- [ ] Form submission feedback shown
- [ ] Honeypot field is hidden

### Fellowships Page
- [ ] Fellowship table renders from JSON
- [ ] Status badges show correct colors

### Impact Page
- [ ] Chart.js charts render correctly
- [ ] Charts re-render on theme change

## Automated Validation

```bash
npx -y html-validate "src/pages/*.html"
npx -y linkinator "src/pages/index.html" --recurse
```
