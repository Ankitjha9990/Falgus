# Falgu's — Bihar's 360° Mushroom Ecosystem

Official web application for **Falgu's**, Bihar's first integrated, year-round mushroom cultivation and distribution ecosystem based in Gaya, Bihar.

---

## 🌟 Overview

Falgu's is dedicated to bridging the agricultural gap for smallholder mushroom farmers across Bihar by providing:
- **Dedicated Substrate & Compost Infrastructure**: High-quality, pasteurized compost ensuring consistent year-round yields.
- **Farmer Partnership & Buyback**: Guaranteed market access, transparent pricing, and technical agronomy guidance.
- **Commercial Distribution**: Direct B2B supply of fresh button mushrooms to institutional buyers, hospitality chains, and retail networks.

---

## 🚀 Key Features

- **🌐 Complete Bilingual Experience**: Full English and Hindi support powered by a centralized translation dictionary (`src/i18n/translations.js`), accessible switch toggle, and persistent language preferences via `localStorage`.
- **⚡ Blazing Fast Performance**: Built on React 19 and Vite 8, achieving sub-second build times and optimal Core Web Vitals (LCP preloading, WebP with PNG fallbacks, responsive picture tags).
- **🎨 Custom Modern Design**: High-contrast, WCAG AA accessible color palette (`#003C64` navy and `#4C7D3D` brand green), fluid Framer Motion animations, and typography via Google Fonts (Alexandria, Kalam, Noto Sans Devanagari).
- **📬 Contact & Grower Onboarding**: Interactive multi-role inquiry form with Formspree integration (`mwlllvlp`), client-side validation, live feedback states, and language metadata forwarding.
- **📜 Legal Pages & Client Routing**: Lightweight client-side router supporting Section hash navigation and lazy-loaded `/privacy-policy` and `/terms-of-service` pages.
- **🛡️ Strict Security Configuration**: Comprehensive Content Security Policy (CSP) and HTTP security headers configured for development (Vite server) and production deployment (Netlify `_headers`).

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 19** | Modern UI library with Fast Refresh |
| **Vite 8** | Next-generation frontend build tooling |
| **Framer Motion 14** | Smooth scroll-triggered reveal animations & modal overlays |
| **Lucide React** | Lightweight, accessible SVG icon set |
| **@formspree/react** | Headless contact form submission handling |
| **Oxlint** | High-performance linter for React & JavaScript |
| **Vanilla CSS** | Token-driven design system (`tokens.css` + `global.css`) without CSS-in-JS overhead |

---

## 📁 Project Structure

```text
falgu/
├── public/                     # Static public assets (served directly at root)
│   ├── _headers                # Production security & CSP headers (Netlify/Cloudflare)
│   ├── favicon.svg             # Website favicon
│   ├── robots.txt              # Search engine crawler directives
│   ├── sitemap.xml             # XML sitemap
│   └── assets/
│       ├── Business-model/     # 3-step workflow diagram assets & responsive connectors
│       ├── Expected-Design/    # Source-of-truth local design reference renders
│       ├── decorative/         # Decorative leaves & botanical illustration accents
│       ├── footer-elements/    # Footer background graphical elements
│       ├── logo/               # Falgu's brand logo & wordmark assets
│       ├── logos/              # Partner trust strip logos (Startup India, IIM, ICICI, etc.)
│       └── photography/        # High-resolution hero, farm, and product photography
├── scripts/
│   └── optimize_assets.py      # Python utility for asset optimization & WebP conversion
├── src/
│   ├── components/             # Reusable global UI components
│   │   ├── Footer/             # Multi-column footer with contact details & legal links
│   │   ├── LanguageToggle/     # Accessible English/Hindi language switch
│   │   ├── LegalPage/          # Privacy Policy and Terms of Service (lazy-loaded)
│   │   └── Navbar/             # Responsive navigation bar with mobile drawer
│   ├── context/
│   │   └── LanguageContext.jsx # React context for bilingual state management
│   ├── i18n/
│   │   └── translations.js     # Centralized English & Hindi translation dictionary
│   ├── sections/               # Home page landing sections
│   │   ├── HeroSection/        # Value proposition, CTAs, video modal, partner strip
│   │   ├── ProblemSection/     # Seasonal limitations vs Falgu solution comparison
│   │   ├── ModelSection/       # 360° Closed-loop ecosystem visual model
│   │   ├── FarmersSection/     # Farmer enablement benefits, compost, buyback
│   │   ├── BuyersSection/      # Commercial buyer quality, consistency, delivery
│   │   └── ContactSection/     # Multi-role contact form (Formspree endpoint mwlllvlp)
│   ├── styles/
│   │   ├── tokens.css          # Design tokens (colors, typography, spacing, shadows)
│   │   └── global.css          # Global resets, typography rules, utility classes
│   ├── App.jsx                 # Root application component & client-side route handling
│   ├── index.css               # Minimal HTML/root canvas styles
│   └── main.jsx                # React application entry point & providers
├── .env.example                # Example environment variable template
├── .gitignore                  # Git tracking exclusion rules
├── .oxlintrc.json              # Oxlint linting rules
├── Falgus_Hindi_Translation.xlsx # Master translation source workbook
├── index.html                  # HTML entry point with meta tags, OpenGraph, JSON-LD
├── package.json                # Project dependencies and npm scripts
├── package-lock.json           # Locked dependency tree
└── vite.config.js              # Vite configuration, security headers, manual rollup chunks
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or later (Node.js 20+ LTS recommended)
- **npm**: v9.0.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/falgu.git

# Navigate to the project directory
cd falgu

# Install dependencies
npm install
```

### Development

Start the local Vite development server with HMR:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

### Production Build

Compile and bundle the production-ready application to `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🔒 Security & Deployment Notes

- **Content Security Policy (CSP)**: The project enforces a strict CSP in both `vite.config.js` and `public/_headers`. All allowed external domains (`https://formspree.io`, `https://fonts.googleapis.com`, `https://fonts.gstatic.com`, `https://www.youtube.com`) are explicitly declared.
- **Form Submissions**: Contact inquiries are submitted to the public Formspree endpoint `https://formspree.io/f/mwlllvlp`. This endpoint is designed for public client submissions and does not require private API keys.

---

## 📄 License

Private — All rights reserved © 2026 Falgu's.
