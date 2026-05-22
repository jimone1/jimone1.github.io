# Personal Website — jimone1.github.io

## Overview
Personal website for Yiyao (Jim) Wan (万义尧), Software Engineer at Meta. Built with Hugo, hosted on GitHub Pages.

## Tech Stack
- **Hugo Extended** (v0.147.0) — static site generator, installed at `~/.local/bin/hugo`
- **SCSS** via Hugo Pipes (`css.Sass`) — no Node.js, no Tailwind
- **Custom theme** `gradient-glass` — cream/warm tone glassmorphism design
- **GitHub Pages** deployment via GitHub Actions

## Project Structure
- `hugo.yaml` — central config: i18n, menus, params
- `content/{en,zh}/` — bilingual content (directory-based i18n, URL prefix `/en/`, `/zh/`)
- `data/` — `experience_{en,zh}.yaml` (work history), `photos.yaml` (gallery entries)
- `i18n/{en,zh}.yaml` — UI string translations
- `assets/scss/` — all styles (entry: `main.scss`)
- `themes/gradient-glass/layouts/` — templates and partials
- `themes/gradient-glass/static/js/` — `bgm-player.js` (audio), `pjax.js` (SPA navigation)
- `static/audio/` — BGM track (city pop)
- `static/images/gallery/` — photo gallery images

## Key Design Decisions
- **Cream color palette** — warm browns/tans, frosted white glass cards
- **PJAX navigation** — internal links swap `<main>` content via fetch, keeping BGM audio uninterrupted
- **BGM auto-plays** on first user interaction, respects pause state
- **Photos** — one large framed photo per row, vertical scroll, captions from `data/photos.yaml`
- **Blog (碎碎念)** — no fixed theme, casual life/career/tech musings as markdown files

## Build & Dev
```bash
export PATH="$HOME/.local/bin:$PATH"
hugo server          # dev server at localhost:1313
hugo --minify        # production build to /public/
```

## Adding Content
- **Blog post**: create `content/{en,zh}/blog/my-post.md` with front matter (title, date, tags, summary)
- **Photo**: drop image in `static/images/gallery/`, add entry to `data/photos.yaml`
- **Experience**: edit `data/experience_{en,zh}.yaml`

## Deployment
Push to `main` branch on `jimone1.github.io` repo. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.

## GitHub
- **Repo**: https://github.com/jimone1/jimone1.github.io
- **Live site**: https://jimone1.github.io/
- **GitHub username**: jimone1
- **Language toggle** uses `data-no-pjax` to force full reload (nav labels/lang attribute must change)
