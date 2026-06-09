# Junel Enero Portfolio

A modern, production-ready portfolio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and shadcn/ui.

**Live Demo:** [https://junelenero.dev](https://junelenero.dev) *(update after deployment)*

## Features

- Modern design inspired by Vercel, Stripe, Linear, and GitHub
- Dark mode with system preference support (Phase 1)
- Fully responsive layouts with mobile navigation
- Scroll-triggered animations with reduced-motion support
- SEO metadata and JSON-LD structured data
- Accessibility: skip links, ARIA labels, keyboard navigation
- Loading states for images, resume, and contact form
- Content-driven architecture with TypeScript interfaces

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 + TypeScript | UI framework with type safety |
| Vite | Build tool and dev server |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Scroll animations |
| shadcn/ui | Accessible UI primitives |
| Lucide React | Icon library |

## Project Structure

```
junel-enero-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf              # TODO: Add your resume
│   ├── images/projects/        # Project preview images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Bundled static assets
│   ├── components/
│   │   ├── common/             # Reusable UI (Container, Card, etc.)
│   │   ├── layout/             # Navbar, Footer, ThemeToggle
│   │   ├── sections/           # Page sections (Hero, About, etc.)
│   │   └── ui/                 # shadcn/ui primitives
│   ├── config/site.ts          # Brand & navigation config
│   ├── data/                   # Content data files
│   ├── hooks/                  # useTheme, useScrollSpy, useMediaQuery
│   ├── layouts/MainLayout.tsx
│   ├── lib/utils.ts
│   ├── pages/Home.tsx
│   ├── styles/globals.css
│   ├── types/index.ts
│   └── utils/                  # Helpers & constants
├── index.html                  # SEO meta tags
├── components.json             # shadcn/ui config
├── vite.config.ts
└── package.json
```

## Installation Guide

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- npm, yarn, or pnpm

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/junelenero99/junel-enero-portfolio.git
   cd junel-enero-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` to add your contact form endpoint if using Formspree or a custom API.

4. **Add your resume**

   Place your resume PDF at `public/resume.pdf`.

5. **Update placeholder content**

   Search for `TODO` comments across `src/data/` and `src/config/site.ts` to replace placeholder information.

## Development Guide

### Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

### Customization

| What to change | Where |
|----------------|-------|
| Personal info & social links | `src/config/site.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Education | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| Colors & theme | `src/styles/globals.css` |
| SEO metadata | `index.html` |

### Adding a new project

1. Add an image to `public/images/projects/`
2. Add an entry to `src/data/projects.ts`
3. The Projects section renders automatically

## Deployment Guide (Vercel)

### Option A: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel auto-detects Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Add environment variables (optional):
   - `VITE_CONTACT_FORM_ENDPOINT` — your form API URL
7. Click **Deploy**

### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

### Post-deployment checklist

- [ ] Update `index.html` canonical URL and OG image URL
- [ ] Update `public/sitemap.xml` with your domain
- [ ] Update `public/robots.txt` sitemap URL
- [ ] Add `public/og-image.png` (1200×630px) for social previews
- [ ] Add `public/resume.pdf`
- [ ] Replace LinkedIn placeholder URL in `src/config/site.ts`
- [ ] Test dark mode, mobile nav, and contact form

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |

## License

MIT — feel free to use this as a template for your own portfolio.

## Author

**Junel Enero** — [junelenero99@gmail.com](mailto:junelenero99@gmail.com)

- GitHub: [@junelenero99](https://github.com/junelenero99)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername) *(TODO: update)*
