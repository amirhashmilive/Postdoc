# Project Architecture

## Directory Structure

```
Postdoc/
├── AGENTS.md                    ← Main brain / Table of contents
├── README.md                    ← Public repo README
├── .gitignore
│
├── .agent/                      ← AI agent configuration
│   ├── personality.md
│   ├── workflow.md
│   ├── coding-rules.md
│   ├── architecture.md          ← This file
│   ├── ui-rules.md
│   ├── deployment.md
│   ├── security.md
│   ├── testing.md
│   ├── naming.md
│   ├── git-rules.md
│   ├── current-task.md
│   ├── roadmap.md
│   ├── decisions.md
│   ├── glossary.md
│   ├── project-memory.md
│   └── prompts/
│       ├── planning.md
│       ├── execution.md
│       └── review.md
│
├── src/
│   ├── css/
│   │   ├── style.css            ← Master stylesheet (design system)
│   │   ├── dark-mode.css        ← Dark mode supplementary overrides
│   │   ├── responsive.css       ← All responsive breakpoints
│   │   └── slider-styles.css    ← Lightbox modal styles
│   │
│   ├── js/
│   │   ├── theme.js             ← Dark/light toggle controller
│   │   ├── main.js              ← Scroll observers, dots, keyboard nav
│   │   ├── slider.js            ← Lightbox image gallery
│   │   ├── charts.js            ← Theme-aware Chart.js wrapper
│   │   ├── slide-number.js      ← Dynamic slide badges
│   │   ├── popup.js             ← Statistical data popovers
│   │   ├── publication-filter.js← Publication search & filter
│   │   ├── citation-export.js   ← BibTeX/APA citation export
│   │   ├── theme-toggle.js      ← Extended theme toggle UI
│   │   ├── fellowship-tracker.js← Fellowship status rendering
│   │   ├── contact-form.js      ← Form validation & submission
│   │   └── nav.js               ← Navigation & hamburger menu
│   │
│   ├── assets/
│   │   ├── images/              ← Profile photos, research visuals
│   │   ├── pdf/                 ← CV, thesis excerpts
│   │   ├── data/
│   │   │   ├── publications.json
│   │   │   ├── projects.json
│   │   │   ├── fellowships.json
│   │   │   └── news.json
│   │   └── icons/               ← Favicon, social icons
│   │
│   └── pages/
│       ├── index.html           ← Home page
│       ├── about.html
│       ├── research-areas.html
│       ├── publications.html
│       ├── phd-research.html
│       ├── projects.html
│       ├── fellowships.html
│       ├── impact.html
│       ├── data-resources.html
│       ├── teaching.html
│       ├── news.html
│       ├── blog.html
│       └── contact.html
│
├── public/
│   ├── sitemap.xml
│   └── robots.txt
│
├── docs/
│   ├── architecture/
│   ├── api/
│   └── user-guide/
│
├── tests/
│
└── scripts/
    └── deploy.sh
```

## Data Flow

```
JSON Data Files → JavaScript Modules → Dynamic HTML Rendering
                                     ↓
Design System CSS ────────────────→ Visual Presentation
                                     ↓
Theme Controller ──────────────────→ Dark/Light Mode Toggle
                                     ↓
Chart.js ──────────────────────────→ Data Visualizations
```

## Page Relationships

All 13 pages share:
- Same navigation bar (`.chap-nav` adapted as site nav)
- Same CSS files (style.css, dark-mode.css, responsive.css)
- Same core JS (theme.js, main.js, slider.js, slide-number.js)
- Same theme state (via localStorage)

Page-specific JS:
- `publications.html` → `publication-filter.js`, `citation-export.js`
- `fellowships.html` → `fellowship-tracker.js`
- `contact.html` → `contact-form.js`
- `impact.html` → `charts.js` (with page-specific chart configs)
