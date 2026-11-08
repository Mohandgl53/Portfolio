# Mohan Kumar T — Engineering Portfolio (React + Vite)

> **AI Engineer & Full-Stack Systems Architect**  
> Final-year B.Tech in Artificial Intelligence & Data Science at P.S.R.R. College of Engineering (85% aggregate / 8.5 CGPA).

---

## 📁 Clean Repository Structure

```text
Portfolio/
├── dist/                      # Production single-file bundle (fully standalone, zero-server)
│   └── index.html             # Pre-compiled 3.1 MB HTML with inlined assets, JS & CSS
├── src/                       # React source tree
│   ├── assets/                # Base64 photo & verified resume PDF
│   ├── components/            # Modular React section components
│   │   ├── Navbar.jsx         # Compact navigation with scroll spy & theme toggle
│   │   ├── Hero.jsx           # Inverted-triangle neon frame & 3D reactor sphere
│   │   ├── About.jsx          # Human-written engineering profile & academic stats
│   │   ├── Projects.jsx       # Automatic carousel with 7 verified software builds
│   │   ├── Skills.jsx         # 19 interactive skill tiles + live telemetry inspector
│   │   ├── Experience.jsx     # Chronological timeline with scroll-tracking dart
│   │   ├── Certificates.jsx   # Accredited NPTEL & hackathon certificates
│   │   ├── Terminal.jsx       # Interactive developer bash CLI shell
│   │   ├── Contact.jsx        # Encrypted dispatch console & direct relays
│   │   ├── Footer.jsx         # Compact engineering footer
│   │   └── Starfield.jsx      # Interactive 3D Three.js particle starfield
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark / Light theme provider with persistence
│   ├── data/                  # Verified projects, skills, certificates data
│   ├── styles/
│   │   └── portfolio.css      # Core responsive styles & theme CSS variables
│   ├── utils/
│   │   └── downloadResume.js  # Direct binary PDF resume downloader
│   ├── App.jsx                # Root layout & smooth section transitions
│   └── main.jsx               # React 19 application mounting entry
├── archive/                   # Archived test scripts, audits, and reference assets
├── index.html                 # Vite HTML entry point for development
├── Mohan_Kumar_T_Resume.pdf   # Official verified resume PDF
├── package.json               # NPM scripts and dependencies (React 19, GSAP, Three.js)
└── vite.config.js             # Vite + singlefile bundler configuration
```

---

## 🚀 Quick Start Guide

### 1. Development Server
Run Vite's instant hot-module-replacement server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
Generate a standalone, zero-dependency production bundle:
```bash
npm run build
```
The output file is created at `dist/index.html`. It can be opened directly via double-click in any browser or hosted on Vercel, Netlify, or GitHub Pages.

### 3. Production Preview
Preview the production build locally:
```bash
npm run preview
```

---

## ✨ Key Features & Stack

- **Framework:** React 19 & Vite 8
- **Animations & Physics:** GSAP 3.15 + Three.js 3D Particle Starfield
- **Styling:** CSS variables with real-time Dark / Light theme switching
- **Singlefile Packaging:** `vite-plugin-singlefile` bundles scripts, styles, and SVG/image assets into a portable single HTML file.
- **Offline Resume Downloader:** Inlined verified PDF blob generator with automatic download fallback.

