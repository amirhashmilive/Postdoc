# Execution Prompt Template

When executing an approved plan:

```
## Executing: [Feature Name]

### Pre-Flight
1. Read `.agent/current-task.md`
2. Read `.agent/coding-rules.md`
3. Read `.agent/ui-rules.md`
4. Verify no conflicting changes in progress

### Implementation Order
1. CSS changes first (if any)
2. HTML structure
3. JavaScript functionality
4. Data files (if any)
5. Update SEO metadata

### Post-Implementation
1. Test in browser (dark + light mode)
2. Test responsive (desktop, tablet, mobile)
3. Update `.agent/current-task.md`
4. Commit with meaningful message per `.agent/git-rules.md`
```
