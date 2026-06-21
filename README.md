# Hassan. | Personal Portfolio Website v3.0

Professional developer portfolio migrated from a static HTML/CSS/JS build to a modern Next.js 16 app with TypeScript, Tailwind CSS v4, and Framer Motion.

## 🛠️ Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 + Custom Theme CSS
* **Animations:** Framer Motion (Scroll reveal and micro-interactions)
* **Icons:** Lucide React + React Icons
* **Contact Form:** EmailJS
* **Analytics:** Vercel Analytics
* **Deployment:** Vercel

---

## ✨ Features

* **Light/Dark Theme Toggle:** Persistent theme state saved to `localStorage` with system preference detection.
* **Typing Animation:** Sleek typewriter effect showcasing developer specializations.
* **Interactive Projects Showcase:** Swaps project screenshots dynamically inside a desktop browser mockup on hover, with responsive inline previews on mobile.
* **Working Contact Form:** Dynamic validation and asynchronous submission via EmailJS browser API.
* **Smooth Scrolling:** Scroll spy indicator tracking sections and active state.
* **SEO Optimized:** Full Open Graph metadata, sitemaps, and robots configuration.

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js 18+** installed.

### 📥 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### 🔑 Environment Variables Setup

Create a `.env.local` file in the root directory and add your EmailJS configuration parameters:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 💻 Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🏗️ Build and Production

To verify the production build locally:

```bash
npm run build
npm run start
```

---

## 📦 Deployment

Deploy easily to Vercel:

1. Import your project repository on Vercel.
2. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the project settings.
3. Deploy!
