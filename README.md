# jimone1.github.io

Personal website of Yiyao (Jim) Wan (万义尧).

**Live site:** https://jimone1.github.io/

## Features

- **Bilingual** — full English and Chinese support with seamless language switching
- **Work Experience** — interactive timeline powered by YAML data files
- **Blog / 碎碎念** — casual writing about life, career, and tech
- **Photo Gallery** — full-width framed photos with captions
- **BGM Player** — Japanese City Pop background music that plays continuously across page navigation
- **Cream Glassmorphism** — warm color palette with frosted glass cards, animated gradient orbs, and scroll animations

## Tech Stack

- [Hugo](https://gohugo.io/) Extended — static site generator
- SCSS via Hugo Pipes — zero Node.js dependencies
- Custom `gradient-glass` theme
- PJAX navigation — SPA-like page transitions, uninterrupted audio
- GitHub Pages + GitHub Actions — automated deployment on push

## Local Development

```bash
# Install Hugo Extended
brew install hugo

# Run dev server
hugo server

# Production build
hugo --minify
```

## Adding Content

**New blog post:**
```bash
# Create matching files for both languages
content/en/blog/my-post.md
content/zh/blog/my-post.md
```

Front matter:
```yaml
---
title: "Post Title"
date: 2026-05-22
draft: false
tags: ["tag1", "tag2"]
summary: "Short description for the card."
---
```

**New photo:**
1. Drop the image in `static/images/gallery/`
2. Add an entry to `data/photos.yaml`:
```yaml
- file: "photo.jpg"
  caption_en: "English caption"
  caption_zh: "中文说明"
  date: "2026-05-22"
```

**Update work experience:**
Edit `data/experience_en.yaml` and `data/experience_zh.yaml`.

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

## License

MIT
