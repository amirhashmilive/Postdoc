# Planning Prompt Template

When planning a new feature or change:

```
## Feature: [Name]

### Context
- What page(s) does this affect?
- What existing components are involved?
- Any dependencies?

### Requirements
- What must this feature do?
- What data does it need?
- What interactions are required?

### Design Constraints
- Must follow UI rules in `.agent/ui-rules.md`
- Must follow coding rules in `.agent/coding-rules.md`
- Must use design system tokens (no hardcoded colors/sizes)

### Files to Create/Modify
- List all files that need changes
- Specify new files needed

### Testing Plan
- How will this be verified?
- What breakpoints need testing?
- Does dark/light mode affect it?
```
