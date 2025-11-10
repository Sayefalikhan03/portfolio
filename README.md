# Sayef Ali Khan — Portfolio

Personal portfolio website showcasing projects, skills, and experience in AI, ML, and systems engineering.

**Live:** [your-domain-or-github-pages-url](https://your-domain-or-github-pages-url)

## Overview

This is a clean, semantic HTML & CSS portfolio site built to highlight:
- **Projects & WIP**: Real systems and practical learning
- **Skills**: AI/ML + Systems & Networking fundamentals
- **Experience**: Hands-on roles while self-learning
- **Education**: M.Sc. from FAU, B.Sc. from Khulna University
- **Certifications**: Selected professional and online certifications

## Structure

```
portfolio/
├── index.html              # Main portfolio page
├── generic.html            # Generic template (placeholder)
├── elements.html           # Component showcase (optional)
├── README.md              # This file
├── LICENSE.txt
├── assets/
│   ├── css/               # Compiled styles
│   │   ├── style.css
│   │   ├── noscript.css
│   │   └── fontawesome-all.min.css
│   ├── js/                # Scripts & libraries
│   ├── sass/              # Source styles (SCSS)
│   │   ├── main.scss
│   │   ├── base/          # Reset, typography, page styles
│   │   ├── components/    # Buttons, cards, forms, etc.
│   │   ├── layout/        # Header, footer, nav, etc.
│   │   └── libs/          # Mixins, variables, functions
│   └── webfonts/          # Font files
└── images/                # Hero, project thumbnails, etc.
```

## Adding New Projects

When you complete a new project and want to add it to the portfolio:

### 1. Prepare Assets
- Add a project thumbnail (1200×675px recommended) to `images/`
- Name it descriptively (e.g., `my-new-project.jpg`)

### 2. Add Project Card
Edit `index.html` and find the **Projects section** (around line 60):

```html
<!-- Projects -->
<section id="projects" class="section">
  <div class="container">
    <header class="section__header">
      <h2>Projects & Work in Progress</h2>
      <p>Real systems, practical learning. Case studies will be added as they mature.</p>
    </header>

    <div class="grid cards">
      <!-- Existing projects here -->

      <!-- YOUR NEW PROJECT -->
      <article class="card">
        <figure class="card__media image-frame">
          <img src="images/my-new-project.jpg" alt="Brief description" width="1200" height="675" loading="lazy" decoding="async" />
        </figure>
        <div class="card__body">
          <h3>Project Title</h3>
          <p>2–3 sentence description of what you built, why, and what you learned.</p>
          <ul class="tags">
            <li>Tech1</li><li>Tech2</li><li>Tech3</li>
          </ul>
        </div>
      </article>
    </div>

    <p class="muted small">More projects will be added here as they're ready.</p>
  </div>
</section>
```

### 3. Template Example

Copy this and adapt:

```html
<article class="card">
  <figure class="card__media image-frame">
    <img src="images/your-project.jpg" alt="Descriptive alt text" width="1200" height="675" loading="lazy" decoding="async" />
  </figure>
  <div class="card__body">
    <h3>Your Project Title</h3>
    <p>What it does, why you built it, and key outcomes or learnings.</p>
    <ul class="tags">
      <li>Technology</li><li>Stack</li><li>Relevant Skills</li>
    </ul>
  </div>
</article>
```

### Tips
- **Keep descriptions short**: 2–3 sentences. Link to a case study/repo if it exists.
- **Add relevant tags**: Tech stack, key concepts (e.g., Python, Docker, LLMs, etc.).
- **Images**: Use consistent 1200×675px dimensions for visual harmony.
- **Order**: Add newest projects first (top of the grid).

## Styling

Styles are organized in SCSS:
- **`assets/sass/main.scss`**: Main entry point
- **`base/`**: Reset, typography, page layout
- **`components/`**: Reusable component styles (cards, buttons, tags, etc.)
- **`layout/`**: Header, footer, navigation, sections
- **`libs/`**: Variables, mixins, functions, breakpoints

To rebuild CSS from SCSS, use your preferred SCSS compiler (e.g., `sass`, VS Code extension, or build tool).

## Sections Reference

| Section | File Line | Notes |
|---------|-----------|-------|
| Hero | ~40 | Main intro + social links |
| Projects | ~60 | Add new cards here |
| Skills | ~115 | AI/ML, Systems, Tools, Deliverables |
| Languages | ~165 | Language proficiencies |
| Experience | ~180 | Timeline of roles |
| Education | ~220 | Degrees |
| Certifications | ~235 | Selected certs |
| Contact | ~250 | Form + email/phone |

## Customization Checklist

- [ ] Update `<title>` and `<meta>` tags in `<head>`
- [ ] Update OG image (`og:image`) and URL (`og:url`)
- [ ] Replace `images/hero.jpg` with your photo
- [ ] Verify contact form action (currently uses Formspree)
- [ ] Update social links (LinkedIn, GitHub, email)
- [ ] Update copyright year in footer

## Deployment

This is a static site—host it anywhere:
- **GitHub Pages**: Push to repo, enable Pages in settings
- **Netlify**: Connect repo, auto-deploys on push
- **Any static host**: Upload HTML, CSS, JS, and images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design with mobile-first approach
- Uses semantic HTML and CSS Grid/Flexbox

## License

See `LICENSE.txt`. Built on a template foundation; customized for personal use.

---

**Questions?** Check `index.html` comments for structure, or reach out via the contact form.
