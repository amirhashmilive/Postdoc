# Deployment

## Platform
- **Host**: GitHub Pages
- **Repository**: `amirhashmilive/Postdoc`
- **URL**: `https://amirhashmilive.github.io/Postdoc/`
- **Branch**: `main`

## Path Requirements

All asset references in HTML must use **relative paths** that work from `src/pages/`:

```html
<!-- From src/pages/index.html -->
<link rel="stylesheet" href="../css/style.css">
<script src="../js/theme.js"></script>
<img src="../assets/images/photo.jpg">
<a href="about.html">About</a>
```

**Never** use absolute paths starting with `/` — they break on GitHub Pages subpath deployment.

## Deployment Workflow

```bash
# 1. Stage changes
git add .

# 2. Commit with meaningful message
git commit -m "[type]: description"

# 3. Push to main
git push origin main

# 4. GitHub Pages auto-deploys
# Verify at: https://amirhashmilive.github.io/Postdoc/
```

## Pre-Deployment Checklist

- [ ] All relative paths verified
- [ ] No localhost or absolute path references
- [ ] All images have alt text
- [ ] Dark/light mode tested
- [ ] Mobile responsive verified
- [ ] All navigation links work
- [ ] SEO meta tags present on all pages
- [ ] sitemap.xml updated with latest pages
