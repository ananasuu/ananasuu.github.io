# ananasuu.github.io

Personal portfolio website showcasing creative cosplay work and professional software development skills.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Development

✨ Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run all Playwright tests |
| `npm run test:a11y` | Run accessibility tests |
| `npm run test:performance` | Run performance tests |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix linting issues |

### 🛠️ Tech Stack

Framework: Astro 5 - Static site generator
Language: TypeScript
Styling: Custom CSS with design system
Testing: Playwright (E2E, A11y, Performance)
Code Quality: Biome + Prettier
CI/CD: GitHub Actions
Design Credits: HTML5 UP

### 📁 Project Structure

├── public/ # Static assets
│ ├── assets/
│ │ ├── img/ # Images
│ │ └── styles/ # Global CSS
│ ├── CNAME # GitHub Pages config
│ └── site.webmanifest # PWA manifest
├── src/
│ ├── components/ # Astro components
│ │ ├── layout/ # Layout components (Section, Spotlight)
│ │ ├── CosCard.astro
│ │ ├── Projects.astro
│ │ └── ...
│ ├── data/ # Content (JSON)
│ │ ├── creative/ # Cosplay content
│ │ ├── work/ # Professional content
│ │ └── imprint.json
│ ├── layouts/ # Page layouts
│ │ └── BaseLayout.astro
│ ├── pages/ # Routes (file-based)
│ │ ├── index.astro # EN: Cosplay homepage
│ │ ├── work.astro # EN: Professional page
│ │ └── de/ # German pages
│ │ ├── index.astro
│ │ └── work.astro
│ └── utils/ # Utilities
│ └── i18n/ # Internationalization
│ ├── i18n.ts # Core i18n functions
│ └── ui.ts # UI string translations
├── tests/ # Playwright tests
│ ├── all-pages.test.ts
│ ├── fixtures/
│ └── shared-tests.ts
├── astro.config.mjs # Astro configuration
├── biome.json # Biome linter config
├── playwright.config.mjs
└── tsconfig.json

### 🌐 Internationalization

The site supports English (default) and German:

English: / and /work
German: /de/ and /de/work
Content is managed via JSON files with locale-specific overrides:

UI strings are centralized in ui.ts.

### 🧪 Testing

Tests are organized by concern:

Accessibility: WCAG 2.2 Level AA compliance via axe-core
Performance: Lighthouse metrics
Visual: Chromatic snapshots
All tests run automatically on PRs via GitHub Actions.

### 📝 Content Management

Content lives in data as JSON files with the following structure:

Cosplay Content (creative)
cosplays.json - Portfolio items
ressourcen/ - Resource categories (tutorials, tools, etc.)
Professional Content (work)
projects.json - Work projects
resume.json - Education & experience
skills.json - Technical skills
certificates.json - Professional certificates
interests.json - Personal interests
Each file supports localization via nested de object.

### 🎨 Design System

CSS is organized into modules in styles:

base.css - Reset & typography
layout.css - Grid & layout utilities
component.css - Component styles
animations.css - Motion & transitions
🤝 Contributing
This is a personal portfolio, but suggestions are welcome via issues.

## Commit Convention

We use Conventional Commits:

Enforced via commitlint and Husky hooks.

## 📄 License

Content © 2026 Nina Friedrich. All rights reserved.

Code structure and implementation available for educational reference.

Design template by HTML5 UP under CCA 3.0 license.

## 🔗 Links

Live Site: https://ananasuu.github.io/
Instagram: @ninumakes
GitHub: @ananasuu
