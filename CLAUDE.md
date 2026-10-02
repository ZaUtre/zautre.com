# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zautre.com is the corporate website for ZaUtre, a Salesforce Commerce Cloud (SFCC) engineering consultancy, built with **Jekyll 3.9** and hosted on **GitHub Pages**. Ruby version: 3.4.3. The site also promotes **Tokenwright** (tokenwright.com), ZaUtre's AI-accelerated SFCC delivery product.

The site is itself a performance showcase: keep it fast. Budget for the homepage's initial load is **< 200 KB transferred, 0 frameworks, CLS 0**. The homepage's live performance panel measures this in the visitor's browser, so regressions are visible.

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

**Static site generator (Jekyll)** with no JavaScript framework — pages are Markdown/HTML files with YAML front matter, rendered through Liquid templates.

### Key directories

- `_layouts/` — `default.html` (base shell: announcement bar, header, footer), `home.html`, `page.html` (bare wrapper — pages render their own sections), `service.html`, `project.html`, `post.html`
- `_includes/` — Partials:
  - Chrome: `header.html`, `footer.html`, `announcement.html` (Tokenwright bar), `analytics.html` (Apollo tracker, deferred until after `load`)
  - Components: `page-hero.html`, `cta-band.html`, `project-card.html`, `perf-hud.html` (live Core Web Vitals panel), `tokenwright-promo.html` (home panel), `tokenwright-strip.html` (compact promo)
  - Primitives: `picture.html` (auto WebP `<picture>`), `icon.html` (inline SVG icons), `zautre-logo.svg`, `tokenwright-mark.svg`
- `_sass/` — Design system partials, compiled by `assets/css/main.scss` into one compressed `/assets/css/main.css`
- `_projects/` — Case studies (front matter: `title`, `card_title`, `card_result`, `client`, `industry`, `image`, `challenge`, `solution`, `results`, `testimonial*`, `categories`, `featured`)
- `_services/` — Service pages (front matter: `order`, `icon` (name from `icon.html`), `summary`, `benefits`, `technologies`, `featured_projects` (project slugs), `cta_*`)
- `_team/` — Team member data (not output as pages, `output: false`; sorted by `order`)
- `_posts/` — News posts (`YYYY-MM-DD-slug.md`). Listed by `blog.md` at `/blog/`; filter buttons are generated from the categories posts actually use. Optional `cover:` shows an image in the post header; `image:` is only the social share image.
- `_data/tokenwright.yml` — **Single source of truth for all Tokenwright copy and links** (URLs with UTM tags, facts, steps, sample quote, agents, FAQs). Keep in sync with tokenwright.com.
- `_data/jobs.yml` — Job listings consumed by the careers page
- `assets/js/main.js` — Single deferred script: nav, reveal-on-scroll, count-up, live perf metrics, filters, contact-form helpers (lazy reCAPTCHA, subject prefill from `?subject=` / `?job=`)
- `assets/fonts/` — Self-hosted Geist + Geist Mono (variable, latin subset)
- `assets/images/og/` — Social share images (`zautre.jpg` is the site-wide default via `defaults` in `_config.yml`)

### Collections (defined in `_config.yml`)

| Collection | Output | Permalink |
|------------|--------|-----------|
| `services` | yes | `/services/:name/` |
| `projects` | yes | `/projects/:name/` |
| `team` | no | — |

### Navigation

Header nav is controlled by `header_pages` in `_config.yml`; order there is menu order. A page can set `nav_title` (label override) and `nav_badge` (e.g. `New`).

### CSS structure

`assets/css/main.scss` imports the partials in `_sass/`:

- `_tokens.scss` — design tokens (colors, type, spacing), `@font-face` incl. metric-matched fallback fonts (prevents layout shift on font swap)
- `_base.scss` — reset, typography, buttons, pills, eyebrows, section heads, reveal animation
- `_chrome.scss` — announcement bar, header/nav, footer
- `_hero.scss` — homepage hero + live perf HUD
- `_home.scss` — homepage sections (clients, stats, bento, playbook, work cards, voices, CTA band)
- `_tokenwright.scss` — Tokenwright promo/strip and the `/tokenwright/` page (paper + chrome-yellow palette)
- `_pages.scss` — inner pages (page hero, prose, detail layouts, cards, forms, blog, posts, case studies)

GitHub Pages compiles with **Ruby Sass 3.7**. Gotchas:
- Keep `_sass/` files **ASCII-only** (no em dashes etc. even in comments) — Ruby Sass may read them as US-ASCII.
- Don't use CSS `min()`/`max()`, and wrap arithmetic inside `clamp()` in `calc()`: `clamp(2rem, calc(1rem + 2vw), 3rem)`.
- Avoid `@layer`, `@container`, `color-mix()` and space-separated `rgb()` syntax.

Accent colors each have one job: `--accent` (blue) for links/interaction, `--good` (green) for passing performance states, `--tw*` (yellow/paper) only for Tokenwright. Text colors are tuned for WCAG AA contrast.

### Images

Always render content images through `{% include picture.html src=... width=... height=... %}`. If a sibling `.webp` exists (same path, `.webp` extension) it is served automatically, with the original as fallback. Always pass `width`/`height`. Convert new images with ImageMagick, e.g.:

```bash
convert in.png -strip -resize '1200x>' -quality 78 -define webp:method=6 in.webp
```

Strip metadata from photos (`-strip`) — camera photos often carry GPS coordinates.

## Deployment

Pushing to `main` triggers GitHub Pages build automatically. Custom domain: `zautre.com` (configured via `CNAME` file). `hero.mp4` and `assets/images/hero-poster.png` are kept in the repo but excluded from the build (no longer used).
