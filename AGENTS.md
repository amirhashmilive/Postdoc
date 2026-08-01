# AGENTS.md — Project Brain

You are working on the **Postdoc Academic Portfolio** project for **Sayed Amir Mustafa Hashmi**.

## Before Writing Code

1. Read `.agent/architecture.md` — Understand the project structure
2. Read `.agent/coding-rules.md` — Understand coding standards
3. Read `.agent/ui-rules.md` — Understand UI/UX requirements
4. Read `.agent/current-task.md` — Understand the active task
5. Read any file referenced in `.agent/current-task.md`
6. Do NOT read unrelated documents to save context

## Project Summary

A professional academic portfolio website showcasing research in Strategic Communication, CSR, Sustainability Communication, and Development Communication. Built with vanilla HTML5/CSS3/ES6+ JavaScript using a cinematic glassmorphism design system.

## Key Files

| Category | Location |
|----------|----------|
| HTML Pages | `src/pages/` (13 pages: index, about, research-areas, publications, phd-research, projects, fellowships, impact, data-resources, teaching, news, blog, contact) |
| Stylesheets | `src/css/` (style.css, dark-mode.css, responsive.css, slider-styles.css) |
| Core JS | `src/js/` (theme.js, main.js, slider.js, charts.js, slide-number.js, popup.js) |
| Portfolio JS | `src/js/` (publication-filter.js, citation-export.js, theme-toggle.js, fellowship-tracker.js, contact-form.js, nav.js) |
| Data Files | `src/assets/data/` (publications.json, projects.json, fellowships.json, news.json) |
| Assets | `src/assets/images/`, `src/assets/pdf/`, `src/assets/icons/` |
| Public | `public/` (sitemap.xml, robots.txt) |
| Documentation | `docs/` |

## UI/UX Reference

The UI/UX design system is defined in:
- `C:\Users\hashm\Desktop\desk'\UI\DESIGN_SYSTEM.md` — Color tokens, typography, glassmorphism
- `C:\Users\hashm\Desktop\desk'\UI\CSS_ARCHITECTURE.md` — CSS variables, module map, breakpoints
- `C:\Users\hashm\Desktop\desk'\UI\HTML_STRUCTURE.md` — Page blueprint, component markups
- `C:\Users\hashm\Desktop\desk'\UI\INTERACTIONS.md` — Hover effects, animations, scroll dynamics
- `C:\Users\hashm\Desktop\desk'\UI\JAVASCRIPT_LOGIC.md` — JS module specs, theme controller, observers
- `C:\Users\hashm\Desktop\desk'\UI\KEY_CODE_SNIPPETS.md` — Production-ready code blocks
- `C:\Users\hashm\Desktop\desk'\UI\README.md` — Framework overview

These files MUST be used as the foundation for all frontend code.

## Design System Quick Reference

| Token | Light | Dark |
|-------|-------|------|
| `--bg-primary` | `#f8f9ff` | `#0a0a0f` |
| `--text-main` | `#1a1a24` | `#f8f9ff` |
| `--accent-cg` | `#0066cc` | `#00d4ff` |
| `--accent-jh` | `#cc4400` | `#ff6b35` |
| Font | Inter 300–800 | Inter 300–800 |

## Deployment

- **Local**: `D:\DRIVE (Ai) Agents\00 Projects\Postdoc\`
- **GitHub**: `https://amirhashmilive.github.io/Postdoc/`
- **Workflow**: Update local files → `git add` → `git commit` → `git push` → GitHub Pages auto-deploys

## Agent Configuration

See `.agent/` directory for detailed configuration files:
- `personality.md` — Agent role and persona
- `workflow.md` — Development workflow
- `coding-rules.md` — Code standards
- `architecture.md` — Project architecture
- `ui-rules.md` — UI/UX rules
- `deployment.md` — Deployment details
- `current-task.md` — Active task tracker
- `roadmap.md` — Project roadmap
- `decisions.md` — Decision log
- `glossary.md` — Project terminology
- `project-memory.md` — Living project memory
