# Git Rules

## Commit Message Format

```
[type]: short description (≤72 chars)

Optional body with more detail.
```

### Types

| Type | Usage |
|------|-------|
| `feat` | New feature or page |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | CSS/formatting (no logic change) |
| `refactor` | Code restructuring (no behavior change) |
| `test` | Adding or updating tests |
| `chore` | Build, deploy, config changes |

### Examples

```
[feat]: add publication filter with category tabs and search
[fix]: dark mode text contrast on mobile
[docs]: update README with deployment instructions
[style]: align glass card grid spacing
[chore]: add sitemap.xml and robots.txt
```

## Commit Rules

1. **One logical change per commit** — don't mix features
2. **Test before committing** — no broken commits
3. **Never commit sensitive data** — no API keys, passwords
4. **Write meaningful messages** — future you will thank you

## Branch Strategy

- `main` — Production branch, deployed to GitHub Pages
- `feature/*` — New features (merge to main when ready)
- `fix/*` — Bug fixes (merge to main when ready)

For this initial build, all commits go directly to `main`.
