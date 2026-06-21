# PRD: Portfolio Website v3.0
**Owner:** Muhammad Hassan Ali  
**URL:** mhassan-ali.vercel.app  
**GitHub:** github.com/mhassan-ali/portfolio  
**Old Stack:** HTML + CSS + JavaScript  
**New Stack:** Next.js 16 + TypeScript + Tailwind CSS  
**Date:** 2024  
**Status:** 🚧 Migration In Progress  
**Version:** 3.0 (Complete Rebuild)  

---

## ⚡ Agent Rules (Read First)
- Do NOT ask clarifying questions
- Do NOT explain - just execute
- Batch related tasks into ONE prompt
- Match old design as closely as possible
- Use 'use client' for components with hooks
- Check existing files before creating duplicates

---

## 📌 Overview
Complete migration of existing HTML/CSS/JS portfolio 
to a modern Next.js 16 application with TypeScript, 
Tailwind CSS, Framer Motion animations, working 
contact form, and all professional features.

This is NOT an enhancement - this is a full rebuild 
from scratch in a modern framework.

---

## 🎯 Goals
- Migrate from static HTML to modern Next.js
- Maintain all existing features (dark mode, hover screenshots)
- Add professional animations
- Add working contact form
- Improve SEO significantly
- Make recruiter-friendly
- Show modern tech stack to employers

---

## 👥 Target Audience
- Recruiters & Hiring Managers
- Potential Freelance Clients
- Fellow Developers
- University Reviewers

---

## 📦 Old Project Reference
Location: D:\portfolio (HTML version)

Features to preserve:
- [x] Dark/Light mode toggle
- [x] Project hover screenshots
- [x] All sections (Hero, About, Skills, 
      Projects, Contact)
- [x] Responsive design
- [x] Color scheme & branding

---

## 🛠️ New Tech Stack

| Layer | Technology | Status |
|-------|-----------|--------|
| Framework | Next.js 16 (App Router) | ✅ Installed |
| Language | TypeScript | ✅ Installed |
| Styling | Tailwind CSS v4 | ✅ Installed |
| Animations | Framer Motion | ✅ Installed |
| Icons | Lucide React + React Icons | ✅ Installed |
| Contact Form | EmailJS | ✅ Installed |
| Analytics | Vercel Analytics | ✅ Installed |
| Deployment | Vercel | ✅ Ready |

---

## 📋 Feature List (MoSCoW)

### 🔴 Must Have (v3.0 Launch)

#### Core Components
- [ ] Navbar with smooth scroll links
- [ ] Hero section with typing animation
- [ ] About section
- [ ] Skills section with tech icons
- [ ] Projects section with hover screenshots
- [ ] Contact section with working form
- [ ] Footer with social links
- [ ] Back to Top button
- [ ] Theme Provider (dark/light mode)

#### Features
- [ ] Framer Motion animations on all sections
- [ ] Typing animation cycling job titles
- [ ] Working EmailJS contact form
- [ ] Resume download button
- [ ] Tech stack badges on projects
- [ ] Live Demo + GitHub buttons on projects
- [ ] Dark/Light mode with localStorage
- [ ] Mobile responsive design
- [ ] Smooth scroll navigation

#### SEO & Performance
- [ ] Complete metadata in layout.tsx
- [ ] Open Graph tags
- [ ] Twitter card tags
- [ ] robots.txt
- [ ] sitemap.ts
- [ ] Custom 404 (not-found.tsx)
- [ ] Loading state (loading.tsx)
- [ ] Error boundary (error.tsx)

### 🟡 Should Have (v3.1)
- [ ] Vercel Analytics integration
- [ ] GitHub stats embed
- [ ] Experience timeline
- [ ] Testimonials section
- [ ] Page transitions
- [ ] Custom cursor effect

### 🟢 Nice to Have (v4.0)
- [ ] Blog section (MDX)
- [ ] AI chatbot (resume-trained)
- [ ] Command palette (Cmd+K)
- [ ] 3D elements (Spline)
- [ ] Visitor counter
- [ ] Spotify now playing widget

---

## 📁 Final Project Structure
- portfolio-new/
- ├── app/
    - ├── layout.tsx ← SEO + ThemeProvider
    - ├── page.tsx ← Main page
    - ├── globals.css ← Global styles
    - ├── not-found.tsx ← Custom 404
    - ├── loading.tsx ← Loading state
    - ├── error.tsx ← Error boundary
    - └── sitemap.ts ← Dynamic sitemap

- ├── components/
    - ├── Navbar.tsx
    - ├── Hero.tsx
    - ├── About.tsx
    - ├── Skills.tsx
    - ├── Projects.tsx
    - ├── Contact.tsx
    - ├── Footer.tsx
    - ├── BackToTop.tsx
    - └── ThemeProvider.tsx

├── public/
    - ├── (all images from old project)
    - ├── resume.pdf
    - └── robots.txt

- ├── .env.example
- ├── .env.local ← (NOT in git)
- ├── .gitignore
- ├── package.json
- ├── tailwind.config.ts
- ├── tsconfig.json
- ├── next.config.js
- ├── PRD.md ← This file
- └── README.md



---

## 🔄 User Flow
-  User lands on site
    -  Smooth page load
    -  Hero with typing animation

- Scrolls down
    -  Each section fades in
    -  Navbar stays sticky

- Views Projects
    -  Hovers on card → Sees screenshot
    -  Sees tech tags
    -  Clicks Live Demo or GitHub

- Reaches Contact
    -  Fills form
    -  Receives confirmation
    -  Downloads resume

- Clicks Back to Top
    -  Smooth scroll to top


---

## 📊 Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| Lighthouse Accessibility | > 90 |
| Lighthouse Best Practices | > 95 |
| Page Load Speed | < 2 seconds |
| Contact Form Success Rate | 100% |
| Mobile Responsive | 100% |
| Google Indexed | Within 1 week |

---

## 🚀 Migration Phases

### Phase 1: Analysis 
- Read old project structure
- Note design patterns
- Plan component breakdown

### Phase 2: Setup
- [x] Next.js project created
- [x] Required packages installed

### Phase 3: Migration 
- Copy assets to public folder
- Create all components
- Apply animations
- Integrate EmailJS

### Phase 4: Configuration 
- SEO metadata
- Special Next.js files
- Environment setup

### Phase 5: Testing 
- Build verification
- Local testing
- Mobile testing
- Dark mode testing

### Phase 6: Deployment 
- Push to GitHub
- Vercel environment variables
- Production deployment


---

## ⚠️ Critical Rules

### Must Follow
- [x] Backup old project first
- [x] Test build before deploy
- [x] Never commit .env.local
- [x] Always use 'use client' for hooks
- [x] Match old design colors
- [x] Keep hover screenshot feature
- [x] Keep dark mode functionality

### Avoid
- [ ] Don't install unnecessary packages
- [ ] Don't break existing features
- [ ] Don't skip mobile testing
- [ ] Don't push API keys
- [ ] Don't rewrite same file twice

---

## 🔑 Environment Variables

Required in `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx