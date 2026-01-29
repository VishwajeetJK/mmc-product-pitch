# Mercurius Media Capital | MMC — Landing

Dark mode / internal tool single-page landing for **Mercurius Media Capital**, built with a bento-grid layout, glassmorphism, and MMC brand colors.

## Stack

- **React 19** + **TypeScript** (Vite)
- **Tailwind CSS v4** (theme: deep aubergine, mustard gold, serif/sans typography)
- **Framer Motion** (scroll and entrance animations)
- **Lucide React** (icons)

## Brand

- **Background:** Deep aubergine `#130620` / `#1A0B2E` (not black)
- **Primary text:** White `#FFFFFF`
- **Accent:** Mustard gold `#C8A355`
- **Headings:** Playfair Display (serif)
- **Body/UI:** Inter (sans-serif)
- **Buttons:** White pill, black text, arrow icon

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## GitHub Pages

Live site: **https://vishwajeetjk.github.io/MMC-VJK-Product-Pitch/**

Use the URL above **with the trailing slash**. If you get a 404:
1. In repo **Settings → Pages**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
2. Wait for the **Actions** workflow to finish after a push.

## Build

```bash
npm run build
npm run preview
```

## Sections

1. **Navbar** — Transparent/blur, “MMC | OS” (serif), links: Methodology, Simulator, Login (white pill).
2. **Hero** — “From Intuition to” / “Simulation.” (gold), subhead, “Get in Touch” CTA.
3. **Simulator** — Glassmorphism card, gold slider, toggles (gold when on), live score (e.g. 88/100).
4. **Bento grid** — 3-column methodology cards, subtle gradient, gold border glow on hover, Lucide icons.
