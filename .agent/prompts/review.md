# Review Prompt Template

When reviewing completed work:

```
## Reviewing: [Feature Name]

### Code Quality
- [ ] Follows `.agent/coding-rules.md`
- [ ] No hardcoded colors/sizes (uses CSS tokens)
- [ ] Semantic HTML with proper heading hierarchy
- [ ] JavaScript uses 'use strict' and const/let
- [ ] No console.log statements left in code

### Design Compliance
- [ ] Matches UI design system specifications
- [ ] Dark mode renders correctly
- [ ] Light mode renders correctly
- [ ] Glassmorphism effects visible
- [ ] Hover interactions work

### Responsive
- [ ] Desktop layout correct
- [ ] Tablet layout correct
- [ ] Mobile layout correct

### Accessibility
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Sufficient color contrast

### SEO
- [ ] Page title present and descriptive
- [ ] Meta description present
- [ ] One h1 per page
- [ ] Canonical URL set
```
