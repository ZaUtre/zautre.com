# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zautre.com is a corporate website for an e-commerce consultancy, built with **Jekyll 3.9** and hosted on **GitHub Pages**. Ruby version: 3.4.3.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local dev server (http://localhost:4000)
bundle exec jekyll serve

# Build the site (output to _site/)
bundle exec jekyll build
```

## Architecture

**Static site generator (Jekyll)** with no JavaScript framework — pages are Markdown files with YAML front matter and inline HTML, rendered through Liquid templates.

### Key directories

- `_layouts/` — Page templates: `default.html` (base shell with header/footer), `home.html`, `page.html`, `project.html`, `service.html`
- `_includes/` — Reusable partials (currently just `zautre-logo.svg`)
- `_projects/` — Collection of case study pages (front matter: `title`, `featured`, `image`, `solution`, etc.)
- `_services/` — Collection of service pages
- `_team/` — Team member data (not output as pages, `output: false`)
- `_data/jobs.yml` — Job listings data consumed by the careers page
- `assets/css/components/` — Modular CSS: `variables.css` defines design tokens, other files map to page/component areas
- `assets/js/main.js` — Single JS file for site interactivity

### Collections (defined in `_config.yml`)

| Collection | Output | Permalink |
|------------|--------|-----------|
| `services` | yes | `/services/:name/` |
| `projects` | yes | `/projects/:name/` |
| `team` | no | — |

### Navigation

Header nav is controlled by `header_pages` in `_config.yml`. The order of entries there determines the menu order.

### CSS structure

`assets/css/main.css` imports all component CSS files via `@import`. Design tokens (colors, fonts, spacing) live in `variables.css`. Each page/section has its own CSS component file.

## Deployment

Pushing to `main` triggers GitHub Pages build automatically. Custom domain: `zautre.com` (configured via `CNAME` file).
