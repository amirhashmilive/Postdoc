# UI/UX Rules

## Source of Truth

All UI/UX decisions are governed by the design system files at:
```
C:\Users\hashm\Desktop\desk'\UI\
```

**Never** deviate from these files without explicit approval.

## Design System Summary

### Color Tokens
- Primary accent: `--accent-cg` (Blue/Cyan)
- Secondary accent: `--accent-jh` (Orange)
- Background: `--bg-primary` (near-white light / near-black dark)
- Text: `--text-main`, `--text-muted`
- Glass: `--bg-glass`, `--bg-glass-border`
- All colors switch automatically via `[data-theme="dark"]`

### Typography
- Font: **Inter** (Google Fonts), weights 300–800
- Title: 3.5rem / 700–800
- Subtitle: 1.5rem / 400
- Body: 1rem / 400
- Badges: 0.7–0.85rem / 500–600

### Layout
- Full-viewport scroll-snap: `100vh` sections with `scroll-snap-type: y mandatory`
- Max content width: `1200px`
- Grids: `.grid-2`, `.grid-3`, `.grid-4`, `.grid-7`

### Visual Style
- **Glassmorphism**: `backdrop-filter: blur(10px)`, translucent backgrounds, subtle borders
- **Breathing glows**: Continuous pulse animations on accent borders
- **Neon text**: Text shadows matching accent colors
- **Card magnification**: 1.5x hover scale (1.02x for wide cards and mobile)

### Component Library
- `.glass-card` — Base glass container
- `.chapter-card` — Navigation card with icon
- `.resource-card` — Ambient glow card
- `.gallery-card` — Image card with hover caption
- `.data-table` — Glass-styled data table
- `.chap-nav` — Floating pill navigation
- `.sn-badge` — Slide number badge with dropdown

### Interaction Rules
- All transitions use `ease` or `cubic-bezier(0.22, 1, 0.36, 1)`
- Theme transitions: 450ms
- Card hover: 250ms
- Nav tooltip: 300ms with 100ms delay
- Escape key closes all overlays

### Responsive Breakpoints
- Desktop: default (≥1025px)
- Tablet: `≤1024px`
- Mobile: `≤768px`

### Accessibility
- Minimum contrast ratios maintained via mobile light-mode safeguards
- Keyboard navigation (Arrow keys, Escape)
- Focus indicators on interactive elements
- Alt text on all images
