# Development Workflow

## Standard Workflow

```
Plan → Build → Test → Review → Deploy
```

### 1. Plan
- Read `current-task.md` for active objectives
- Read relevant `.agent/` config files
- Understand scope before writing code

### 2. Build
- Create/modify files one component at a time
- Follow `coding-rules.md` strictly
- Follow `ui-rules.md` for all frontend work
- Test each component in browser before moving on

### 3. Test
- Open in browser and verify visually
- Test dark/light mode toggle
- Test responsive breakpoints (desktop, tablet, mobile)
- Test all interactive elements (hover, click, keyboard)
- Validate HTML structure

### 4. Review
- Verify against `coding-rules.md` checklist
- Verify against `ui-rules.md` checklist
- Check cross-page navigation consistency
- Check SEO metadata

### 5. Deploy
- Follow `deployment.md` workflow
- Commit with meaningful messages per `git-rules.md`
- Push to GitHub
- Verify live site

## File Creation Order

When creating new pages, follow this order:
1. CSS (if new styles needed)
2. HTML structure
3. JavaScript functionality
4. Data files (if needed)
5. SEO metadata
