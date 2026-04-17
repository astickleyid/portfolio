# Portfolio & Consulting Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a dark, neutral, high-converting personal portfolio/consulting site for an AI developer with multiple shipped products.

**Architecture:** Single-page static site (HTML + CSS + vanilla JS) deployed to Vercel. One serverless function handles the contact form and delivers email via Resend. No build step — Vercel serves `index.html` directly. ClaruSign will be deployed as a sub-project and linked from the portfolio.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, animations), Vanilla JS, Vercel (static hosting + serverless), Resend (contact form email), Stripe + Anthropic (ClaruSign sub-project)

---

## Design System (reference throughout all tasks)

```
Colors:
  --bg:        #0a0a0a   (page background)
  --surface:   #111111   (card/section background)
  --surface-2: #1a1a1a   (elevated surface)
  --border:    #222222   (subtle borders)
  --text:      #f0f0f0   (primary text)
  --muted:     #888888   (secondary text)
  --white:     #ffffff   (headings, high contrast)

Typography:
  Headings: 'Inter', system-ui, sans-serif — weight 700, tight letter-spacing
  Body: 'Inter', system-ui — weight 400
  Mono: 'JetBrains Mono', monospace (for code snippets/labels)

Spacing scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

No accent color. Contrast only. One exception: a pure white CTA button on dark bg.
```

---

## File Structure

```
~/development/projects/portfolio/
├── index.html              # Full single-page site (all sections)
├── styles/
│   ├── reset.css           # Minimal reset
│   ├── design-system.css   # Custom properties, typography scale
│   ├── layout.css          # Nav, sections, grid, footer
│   ├── hero.css            # Hero section
│   ├── projects.css        # Projects grid + cards
│   ├── services.css        # Services section
│   ├── contact.css         # Contact form + states
│   └── animations.css      # Scroll reveals, hover transitions
├── scripts/
│   ├── scroll-reveal.js    # IntersectionObserver reveals
│   └── contact.js          # Form submission + validation
├── api/
│   └── contact.js          # Vercel serverless — receives form, sends email via Resend
├── vercel.json             # Vercel routing config
├── package.json            # { "name": "portfolio" } — no build deps needed
└── .gitignore
```

ClaruSign lives at `~/Desktop/clarusign/` (separate Vercel project, separate deploy).

---

## Task 1: Project Scaffold

**Files:**
- Create: `~/development/projects/portfolio/index.html`
- Create: `~/development/projects/portfolio/vercel.json`
- Create: `~/development/projects/portfolio/package.json`
- Create: `~/development/projects/portfolio/.gitignore`
- Create: all `styles/` and `scripts/` stubs (empty files so links don't 404)

- [ ] **Step 1: Initialize git**

```bash
cd ~/development/projects/portfolio
git init
git checkout -b main
```

- [ ] **Step 2: Create package.json**

```json
{
  "name": "portfolio",
  "version": "1.0.0",
  "private": true
}
```
File: `package.json`

- [ ] **Step 3: Create vercel.json**

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ],
  "functions": {
    "api/contact.js": { "maxDuration": 15 }
  }
}
```
File: `vercel.json`

- [ ] **Step 4: Create .gitignore**

```
node_modules/
.vercel/
.env
.env.local
.DS_Store
.superpowers/
```
File: `.gitignore`

- [ ] **Step 5: Create directory stubs**

```bash
mkdir -p styles scripts api
touch styles/reset.css styles/design-system.css styles/layout.css \
      styles/hero.css styles/projects.css styles/services.css \
      styles/contact.css styles/animations.css \
      scripts/scroll-reveal.js scripts/contact.js \
      api/contact.js
```

- [ ] **Step 6: Create the HTML shell**

File: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Austin Stickley — AI Developer & Systems Architect</title>
  <meta name="description" content="I build AI-powered software and automation systems for businesses that need results, not demos. Full-stack development, Claude API integrations, and custom automation.">
  <meta name="keywords" content="AI developer, Claude API, automation, full-stack, consulting, software engineer">
  <meta property="og:title" content="Austin Stickley — AI Developer">
  <meta property="og:description" content="I build the AI systems your team can't figure out.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/reset.css">
  <link rel="stylesheet" href="styles/design-system.css">
  <link rel="stylesheet" href="styles/layout.css">
  <link rel="stylesheet" href="styles/hero.css">
  <link rel="stylesheet" href="styles/projects.css">
  <link rel="stylesheet" href="styles/services.css">
  <link rel="stylesheet" href="styles/contact.css">
  <link rel="stylesheet" href="styles/animations.css">
</head>
<body>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <span class="nav-logo">Austin Stickley</span>
      <div class="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#contact" class="nav-cta">Get in touch</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-inner">
      <div class="hero-eyebrow">
        <span class="mono">Available for projects</span>
        <span class="hero-dot"></span>
      </div>
      <h1 class="hero-headline">I build the AI systems<br>your team can't figure out.</h1>
      <p class="hero-sub">Full-stack developer specializing in Claude API integrations, business automation, and shipped products — not prototypes.</p>
      <div class="hero-stats">
        <div class="stat"><span class="stat-num">10+</span><span class="stat-label">AI products shipped</span></div>
        <div class="stat"><span class="stat-num">5+</span><span class="stat-label">industries automated</span></div>
        <div class="stat"><span class="stat-num">$0</span><span class="stat-label">to production, fast</span></div>
      </div>
      <a href="#contact" class="hero-btn">Let's build something</a>
    </div>
  </section>

  <!-- SELECTED WORK -->
  <section class="projects" id="work">
    <div class="section-inner">
      <div class="section-header reveal">
        <span class="mono section-label">Selected Work</span>
        <h2>Products that ship</h2>
      </div>
      <div class="projects-grid">

        <!-- FEATURED: ClaruSign -->
        <article class="project-card project-featured reveal">
          <div class="project-preview clarusign-preview">
            <div class="preview-nav">
              <span class="preview-logo">Claru<span>Sign</span></span>
              <span class="preview-badge">AI Contract Review</span>
            </div>
            <div class="preview-body">
              <div class="preview-score">
                <div class="score-ring">
                  <svg viewBox="0 0 80 80"><circle class="ring-bg" cx="40" cy="40" r="32"/><circle class="ring-fill" cx="40" cy="40" r="32" stroke-dasharray="201" stroke-dashoffset="60"/></svg>
                  <span>7.2</span>
                </div>
                <div class="score-meta"><strong>High Risk</strong><small>3 red flags detected</small></div>
              </div>
              <div class="preview-flags">
                <div class="flag flag-high"><span>●</span> Unlimited liability clause</div>
                <div class="flag flag-med"><span>●</span> Non-compete — 3 year term</div>
                <div class="flag flag-low"><span>●</span> IP assignment — broad scope</div>
              </div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-tags"><span>Claude API</span><span>Stripe</span><span>PDF Analysis</span></div>
            <h3>ClaruSign</h3>
            <p>Upload any contract and get a plain-English breakdown of risks, red flags, and negotiation tips in 60 seconds. $9/review, Stripe-gated, live AI analysis.</p>
            <a href="https://clarusign.vercel.app" class="project-link" target="_blank" rel="noopener">View live →</a>
          </div>
        </article>

        <!-- nXcor -->
        <article class="project-card reveal">
          <div class="project-preview nxcor-preview">
            <div class="preview-social">
              <div class="social-post">
                <div class="post-avatar"></div>
                <div class="post-body">
                  <div class="post-name">@user <span>· live now</span></div>
                  <div class="post-text">streaming to 140 viewers</div>
                  <div class="post-live-dot">● LIVE</div>
                </div>
              </div>
              <div class="social-post">
                <div class="post-avatar av2"></div>
                <div class="post-body">
                  <div class="post-name">@austin</div>
                  <div class="post-text">shipped the new drop algorithm today</div>
                </div>
              </div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-tags"><span>React</span><span>Node</span><span>RTMP</span><span>iOS</span></div>
            <h3>nXcor</h3>
            <p>Full social platform with live streaming, posts, profiles, and native iOS app. Built from scratch — backend, frontend, mobile, and media server.</p>
            <a href="https://n-xcor.com" class="project-link" target="_blank" rel="noopener">View live →</a>
          </div>
        </article>

        <!-- NWO AI Answering -->
        <article class="project-card reveal">
          <div class="project-preview nwo-preview">
            <div class="preview-call">
              <div class="call-wave">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <div class="call-status">AI answering · 0:42</div>
              <div class="call-transcript">
                <div class="tr-line ai">"Thank you for calling NWO — how can I help?"</div>
                <div class="tr-line user">"I need an estimate for my AC unit"</div>
                <div class="tr-line ai">"I can get that started — what's your address?"</div>
              </div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-tags"><span>Claude API</span><span>Voice AI</span><span>Automation</span></div>
            <h3>NWO AI Answering</h3>
            <p>AI phone agent for HVAC service businesses. Answers calls 24/7, qualifies leads, schedules estimates, and escalates to human when needed.</p>
          </div>
        </article>

        <!-- Rival -->
        <article class="project-card reveal">
          <div class="project-preview rival-preview">
            <div class="preview-dash">
              <div class="dash-row"><span class="dash-label">Subscribers</span><span class="dash-val">2,847</span></div>
              <div class="dash-row"><span class="dash-label">MRR</span><span class="dash-val">$14,200</span></div>
              <div class="dash-row"><span class="dash-label">Churn</span><span class="dash-val">1.4%</span></div>
              <div class="dash-bar"><div class="bar-fill" style="width:72%"></div></div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-tags"><span>SaaS</span><span>Stripe</span><span>React</span></div>
            <h3>Rival</h3>
            <p>SaaS platform built and deployed as a complete MVP. Subscription management, analytics dashboard, and full billing integration.</p>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="services" id="services">
    <div class="section-inner">
      <div class="section-header reveal">
        <span class="mono section-label">What I Do</span>
        <h2>Services</h2>
      </div>
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-icon">⬡</div>
          <h3>AI Integration</h3>
          <p>Claude API, custom prompts, structured outputs, tool use, document analysis, voice AI. I build AI features that actually work in production.</p>
          <ul>
            <li>Contract & document analysis</li>
            <li>AI phone agents & chatbots</li>
            <li>Workflow automation</li>
            <li>Custom AI tooling</li>
          </ul>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">⬡</div>
          <h3>Full-Stack Development</h3>
          <p>From schema to shipping — React, Node, mobile (iOS), databases, APIs, and deploy pipelines. I build complete products, not just components.</p>
          <ul>
            <li>Web & mobile apps</li>
            <li>SaaS platforms</li>
            <li>REST APIs & backends</li>
            <li>Live streaming infrastructure</li>
          </ul>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">⬡</div>
          <h3>Business Automation</h3>
          <p>Lead qualification, reporting pipelines, customer communication — I identify the manual work that's slowing your business and automate it.</p>
          <ul>
            <li>Lead qualification systems</li>
            <li>Agency reporting automation</li>
            <li>CRM & calendar integrations</li>
            <li>Custom dashboards</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <div class="section-inner">
      <div class="section-header reveal">
        <span class="mono section-label">Get in touch</span>
        <h2>Let's build something.</h2>
        <p class="contact-sub">Tell me what you're working on. I'll tell you if I can help — usually within 24 hours.</p>
      </div>
      <form class="contact-form reveal" id="contactForm">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required>
          </div>
        </div>
        <div class="form-group">
          <label for="project">Project type</label>
          <select id="project" name="project" required>
            <option value="" disabled selected>What are you building?</option>
            <option value="ai-integration">AI integration / Claude API</option>
            <option value="full-stack">Full-stack web or mobile app</option>
            <option value="automation">Business automation</option>
            <option value="saas">SaaS product</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Tell me about it</label>
          <textarea id="message" name="message" rows="5" placeholder="What are you trying to build? What's broken? What's the deadline?" required></textarea>
        </div>
        <button type="submit" class="submit-btn" id="submitBtn">
          <span class="btn-text">Send message</span>
          <span class="btn-loading" hidden>Sending...</span>
        </button>
        <div class="form-success" id="formSuccess" hidden>
          <p>Got it — I'll be in touch within 24 hours.</p>
        </div>
        <div class="form-error" id="formError" hidden>
          <p>Something went wrong. Email me directly at <a href="mailto:astickleyid@gmail.com">astickleyid@gmail.com</a></p>
        </div>
      </form>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-name">Austin Stickley</span>
      <span class="footer-copy">© 2026</span>
    </div>
  </footer>

  <script src="scripts/scroll-reveal.js"></script>
  <script src="scripts/contact.js"></script>
</body>
</html>
```

- [ ] **Step 7: Initial commit**

```bash
cd ~/development/projects/portfolio
git add .
git commit -m "feat: project scaffold — html shell, file structure, vercel config"
```

---

## Task 2: Design System & Reset CSS

**Files:**
- Write: `styles/reset.css`
- Write: `styles/design-system.css`

- [ ] **Step 1: Write reset.css**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
img, video { max-width: 100%; display: block; }
button, input, select, textarea { font: inherit; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
```
File: `styles/reset.css`

- [ ] **Step 2: Write design-system.css**

```css
:root {
  --bg:        #0a0a0a;
  --surface:   #111111;
  --surface-2: #1a1a1a;
  --border:    #222222;
  --text:      #f0f0f0;
  --muted:     #888888;
  --white:     #ffffff;

  --font:  'Inter', system-ui, sans-serif;
  --mono:  'JetBrains Mono', 'Fira Code', monospace;

  --sp-1:  4px;
  --sp-2:  8px;
  --sp-3:  12px;
  --sp-4:  16px;
  --sp-6:  24px;
  --sp-8:  32px;
  --sp-12: 48px;
  --sp-16: 64px;
  --sp-24: 96px;
  --sp-32: 128px;

  --radius-sm: 4px;
  --radius:    8px;
  --radius-lg: 16px;

  --max-width: 1200px;
  --section-pad: var(--sp-24) var(--sp-6);
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  color: var(--white);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700; }
h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.5rem); font-weight: 600; }

p { color: var(--text); }

.mono {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
```
File: `styles/design-system.css`

- [ ] **Step 3: Commit**

```bash
git add styles/reset.css styles/design-system.css
git commit -m "feat: design system and reset — tokens, typography scale"
```

---

## Task 3: Layout & Navigation

**Files:**
- Write: `styles/layout.css`

- [ ] **Step 1: Write layout.css**

```css
/* ── Layout ─────────────────────────────────── */
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--section-pad);
}

.section-header {
  margin-bottom: var(--sp-16);
}

.section-header .section-label {
  display: block;
  margin-bottom: var(--sp-3);
}

.section-header h2 {
  margin-bottom: var(--sp-4);
}

/* ── Nav ─────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s;
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--sp-4) var(--sp-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-weight: 600;
  font-size: 1rem;
  color: var(--white);
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--sp-8);
}

.nav-links a {
  font-size: 0.9rem;
  color: var(--muted);
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--white); }

.nav-cta {
  background: var(--white);
  color: var(--bg) !important;
  padding: var(--sp-2) var(--sp-4);
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.875rem !important;
  transition: opacity 0.2s !important;
}

.nav-cta:hover { opacity: 0.85; }

/* ── Footer ──────────────────────────────────── */
.footer {
  border-top: 1px solid var(--border);
  padding: var(--sp-8) var(--sp-6);
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-name { font-size: 0.9rem; color: var(--muted); }
.footer-copy { font-size: 0.8rem; color: var(--border); }

/* ── Responsive ──────────────────────────────── */
@media (max-width: 768px) {
  .nav-links a:not(.nav-cta) { display: none; }
  :root { --section-pad: var(--sp-16) var(--sp-4); }
}
```
File: `styles/layout.css`

- [ ] **Step 2: Commit**

```bash
git add styles/layout.css
git commit -m "feat: layout system and nav styles"
```

---

## Task 4: Hero Section

**Files:**
- Write: `styles/hero.css`

- [ ] **Step 1: Write hero.css**

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

/* Radial shader for depth */
.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -10%;
  width: 70%;
  height: 80%;
  background: radial-gradient(ellipse, rgba(255,255,255,0.035) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: calc(var(--sp-32) + 60px) var(--sp-6) var(--sp-24);
  position: relative;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-8);
}

.hero-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-headline {
  max-width: 700px;
  margin-bottom: var(--sp-6);
}

.hero-sub {
  max-width: 520px;
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: var(--sp-12);
  line-height: 1.7;
}

.hero-stats {
  display: flex;
  gap: var(--sp-16);
  margin-bottom: var(--sp-12);
}

.stat { display: flex; flex-direction: column; gap: 2px; }
.stat-num { font-size: 1.75rem; font-weight: 700; color: var(--white); letter-spacing: -0.03em; }
.stat-label { font-size: 0.8rem; color: var(--muted); }

.hero-btn {
  display: inline-block;
  background: var(--white);
  color: var(--bg);
  padding: 14px 32px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  letter-spacing: -0.01em;
  transition: opacity 0.2s, transform 0.2s;
}

.hero-btn:hover { opacity: 0.88; transform: translateY(-1px); }

@media (max-width: 768px) {
  .hero-stats { gap: var(--sp-8); }
  .stat-num { font-size: 1.4rem; }
  .hero-eyebrow .mono { font-size: 0.65rem; }
}
```
File: `styles/hero.css`

- [ ] **Step 2: Commit**

```bash
git add styles/hero.css
git commit -m "feat: hero section styles — headline, stats, CTA"
```

---

## Task 5: Projects Grid

**Files:**
- Write: `styles/projects.css`

- [ ] **Step 1: Write projects.css**

```css
/* ── Section wrapper ─────────────────────────── */
.projects {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

/* ── Grid ─────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.project-card {
  background: var(--surface);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 340px;
  transition: background 0.2s;
}

.project-card:hover { background: var(--surface-2); }

/* Featured card spans full width */
.project-featured {
  grid-column: 1 / -1;
  grid-template-columns: 1.1fr 1fr;
}

/* Other cards span half width each */
.project-card:not(.project-featured) {
  grid-column: span 6;
}

/* ── Preview area ─────────────────────────────── */
.project-preview {
  background: var(--surface-2);
  border-right: 1px solid var(--border);
  padding: var(--sp-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ── ClaruSign preview ────────────────────────── */
.preview-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--sp-6);
  padding-bottom: var(--sp-6);
  border-bottom: 1px solid var(--border);
}

.preview-logo { font-weight: 700; font-size: 1rem; color: var(--white); }
.preview-logo span { color: var(--muted); }
.preview-badge {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: var(--muted);
  background: var(--surface);
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--border);
}

.preview-score {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  margin-bottom: var(--sp-6);
}

.score-ring {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.score-ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.ring-bg { fill: none; stroke: var(--border); stroke-width: 4; }
.ring-fill { fill: none; stroke: var(--white); stroke-width: 4; stroke-linecap: round; transition: stroke-dashoffset 0.8s ease; }

.score-ring span {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: var(--white);
}

.score-meta strong { display: block; font-size: 0.875rem; color: var(--white); }
.score-meta small { font-size: 0.75rem; color: var(--muted); }

.preview-flags { display: flex; flex-direction: column; gap: var(--sp-2); }

.flag {
  font-size: 0.78rem;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

.flag-high { background: rgba(239,68,68,0.12); color: #fca5a5; }
.flag-high span { color: #ef4444; }
.flag-med { background: rgba(251,146,60,0.1); color: #fdba74; }
.flag-med span { color: #f97316; }
.flag-low { background: rgba(234,179,8,0.08); color: #fde68a; }
.flag-low span { color: #eab308; }

/* ── nXcor social preview ─────────────────────── */
.nxcor-preview { gap: var(--sp-4); }

.preview-social { display: flex; flex-direction: column; gap: var(--sp-4); }

.social-post {
  display: flex;
  gap: var(--sp-3);
  align-items: flex-start;
  padding: var(--sp-3);
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.post-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #333;
  flex-shrink: 0;
}

.av2 { background: #444; }

.post-name { font-size: 0.78rem; font-weight: 600; color: var(--white); margin-bottom: 2px; }
.post-name span { color: var(--muted); font-weight: 400; }
.post-text { font-size: 0.78rem; color: var(--muted); }
.post-live-dot { font-size: 0.65rem; color: #ef4444; font-family: var(--mono); margin-top: 4px; letter-spacing: 0.05em; }

/* ── NWO AI preview ───────────────────────────── */
.nwo-preview { justify-content: center; }

.preview-call {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-6);
}

.call-wave {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
}

.call-wave span {
  display: block;
  width: 4px;
  background: var(--white);
  border-radius: 2px;
  animation: wave 1s ease-in-out infinite;
}

.call-wave span:nth-child(1) { height: 16px; animation-delay: 0s; }
.call-wave span:nth-child(2) { height: 28px; animation-delay: 0.1s; }
.call-wave span:nth-child(3) { height: 36px; animation-delay: 0.2s; }
.call-wave span:nth-child(4) { height: 22px; animation-delay: 0.3s; }
.call-wave span:nth-child(5) { height: 14px; animation-delay: 0.4s; }

@keyframes wave {
  0%, 100% { transform: scaleY(1); opacity: 0.4; }
  50% { transform: scaleY(1.4); opacity: 1; }
}

.call-status {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.05em;
}

.call-transcript {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.tr-line {
  font-size: 0.72rem;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  max-width: 90%;
}

.tr-line.ai { background: var(--surface); color: var(--text); align-self: flex-start; }
.tr-line.user { background: rgba(255,255,255,0.06); color: var(--muted); align-self: flex-end; }

/* ── Rival dashboard preview ──────────────────── */
.rival-preview { justify-content: center; }

.preview-dash {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}

.dash-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px var(--sp-4);
  background: var(--surface);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

.dash-label { font-size: 0.78rem; color: var(--muted); }
.dash-val { font-size: 0.875rem; font-weight: 600; color: var(--white); }

.dash-bar {
  height: 4px;
  background: var(--surface);
  border-radius: 2px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: var(--white);
  border-radius: 2px;
}

/* ── Project info panel ───────────────────────── */
.project-info {
  padding: var(--sp-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--sp-4);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
}

.project-tags span {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: var(--muted);
  background: var(--surface-2);
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--border);
}

.project-info h3 { font-size: 1.4rem; }

.project-info p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.65;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--white);
  margin-top: var(--sp-2);
  transition: gap 0.2s;
}

.project-link:hover { gap: var(--sp-3); }

/* ── Responsive ───────────────────────────────── */
@media (max-width: 900px) {
  .project-card,
  .project-featured { grid-template-columns: 1fr; grid-column: 1 / -1; }
  .project-preview { border-right: none; border-bottom: 1px solid var(--border); min-height: 200px; }
  .project-card:not(.project-featured) { grid-column: 1 / -1; }
}
```
File: `styles/projects.css`

- [ ] **Step 2: Commit**

```bash
git add styles/projects.css
git commit -m "feat: projects grid styles — featured card, mini-UI previews"
```

---

## Task 6: Services & Contact Styles

**Files:**
- Write: `styles/services.css`
- Write: `styles/contact.css`

- [ ] **Step 1: Write services.css**

```css
.services {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.service-card {
  background: var(--surface);
  padding: var(--sp-8);
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
  transition: background 0.2s;
}

.service-card:hover { background: var(--surface-2); }

.service-icon {
  font-size: 1.25rem;
  color: var(--muted);
  line-height: 1;
}

.service-card h3 { font-size: 1.15rem; }

.service-card p {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.65;
}

.service-card ul {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  margin-top: auto;
}

.service-card li {
  font-size: 0.8rem;
  color: var(--muted);
  padding-left: var(--sp-4);
  position: relative;
}

.service-card li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--border);
}
```
File: `styles/services.css`

- [ ] **Step 2: Write contact.css**

```css
.contact {
  background: var(--bg);
}

.contact-sub {
  font-size: 1rem;
  color: var(--muted);
  max-width: 480px;
  margin-top: var(--sp-3);
}

.contact-form {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: var(--sp-6);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-6);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.form-group label {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 500;
  letter-spacing: 0.01em;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  color: var(--white);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: rgba(255,255,255,0.3);
}

.form-group select option { background: var(--surface); }

.submit-btn {
  align-self: flex-start;
  background: var(--white);
  color: var(--bg);
  border: none;
  padding: 14px 32px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  letter-spacing: -0.01em;
}

.submit-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.form-success, .form-error {
  padding: var(--sp-4);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
}

.form-success {
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.2);
  color: #86efac;
}

.form-error {
  background: rgba(239,68,68,0.08);
  border: 1px solid rgba(239,68,68,0.2);
  color: #fca5a5;
}

.form-error a { text-decoration: underline; color: inherit; }

@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
}
```
File: `styles/contact.css`

- [ ] **Step 3: Commit**

```bash
git add styles/services.css styles/contact.css
git commit -m "feat: services and contact form styles"
```

---

## Task 7: Scroll Reveal Animations

**Files:**
- Write: `styles/animations.css`
- Write: `scripts/scroll-reveal.js`

- [ ] **Step 1: Write animations.css**

```css
/* Initial hidden state for reveal elements */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children inside a revealed parent */
.projects-grid .reveal:nth-child(2) { transition-delay: 0.1s; }
.projects-grid .reveal:nth-child(3) { transition-delay: 0.15s; }
.projects-grid .reveal:nth-child(4) { transition-delay: 0.2s; }
.services-grid .reveal:nth-child(2) { transition-delay: 0.1s; }
.services-grid .reveal:nth-child(3) { transition-delay: 0.2s; }

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```
File: `styles/animations.css`

- [ ] **Step 2: Write scroll-reveal.js**

```js
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
```
File: `scripts/scroll-reveal.js`

- [ ] **Step 3: Commit**

```bash
git add styles/animations.css scripts/scroll-reveal.js
git commit -m "feat: scroll reveal animations with IntersectionObserver"
```

---

## Task 8: Contact Form Logic (Frontend)

**Files:**
- Write: `scripts/contact.js`

- [ ] **Step 1: Write contact.js**

```js
(function () {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    successEl.hidden = true;
    errorEl.hidden = true;
    submitBtn.disabled = true;
    btnText.hidden = true;
    btnLoading.hidden = false;

    const body = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      project: form.project.value,
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Server error');

      form.reset();
      successEl.hidden = false;
    } catch {
      errorEl.hidden = false;
    } finally {
      submitBtn.disabled = false;
      btnText.hidden = false;
      btnLoading.hidden = true;
    }
  });
})();
```
File: `scripts/contact.js`

- [ ] **Step 2: Commit**

```bash
git add scripts/contact.js
git commit -m "feat: contact form submission logic"
```

---

## Task 9: Contact API (Vercel Serverless)

**Files:**
- Write: `api/contact.js`

This endpoint receives the form POST and sends an email to `astickleyid@gmail.com` using Resend. The `RESEND_API_KEY` environment variable must be set in Vercel.

- [ ] **Step 1: Write api/contact.js**

```js
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, project, message } = req.body || {};

  if (!name || !email || !project || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const projectLabels = {
    'ai-integration': 'AI Integration / Claude API',
    'full-stack': 'Full-Stack Web or Mobile App',
    'automation': 'Business Automation',
    'saas': 'SaaS Product',
    'other': 'Other',
  };

  const body = {
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'astickleyid@gmail.com',
    reply_to: email,
    subject: `New inquiry from ${name} — ${projectLabels[project] || project}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectLabels[project] || project}`,
      '',
      message,
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${escHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escHtml(email)}">${escHtml(email)}</a></p>
      <p><strong>Project type:</strong> ${escHtml(projectLabels[project] || project)}</p>
      <hr>
      <p style="white-space:pre-wrap">${escHtml(message)}</p>
    `,
  };

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err.message);
    return res.status(500).json({ error: 'Internal error' });
  }
};

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
```
File: `api/contact.js`

- [ ] **Step 2: Commit**

```bash
git add api/contact.js
git commit -m "feat: contact form serverless handler — Resend email delivery"
```

---

## Task 10: Deploy ClaruSign to Vercel

ClaruSign is at `~/Desktop/clarusign/`. It needs its own Vercel project with environment variables set.

- [ ] **Step 1: Initialize Vercel project for ClaruSign**

```bash
cd ~/Desktop/clarusign
vercel --yes
```

Follow prompts: create new project named `clarusign`, deploy to Vercel.

- [ ] **Step 2: Set environment variables**

```bash
vercel env add STRIPE_SECRET_KEY
# Paste the Stripe secret key when prompted — select all environments

vercel env add STRIPE_WEBHOOK_SECRET
# Paste the webhook signing secret

vercel env add ANTHROPIC_API_KEY
# Paste the Anthropic API key
```

- [ ] **Step 3: Redeploy with env vars**

```bash
vercel --prod
```

- [ ] **Step 4: Note the production URL**

The URL will be `https://clarusign.vercel.app` or similar. Update the ClaruSign `project-link` href in `~/development/projects/portfolio/index.html` to match the actual URL.

```bash
# In portfolio directory — replace the placeholder URL:
# Find: href="https://clarusign.vercel.app"
# Replace with the actual deployed URL
```

- [ ] **Step 5: Verify ClaruSign works**

Open the deployed URL, upload the file at `~/DEMO-NDA-settlement-sexual-harassment.txt` (or any PDF), complete a Stripe test payment, and verify the AI analysis returns results.

Stripe test card: `4242 4242 4242 4242`, any future exp, any CVC.

---

## Task 11: Deploy Portfolio to Vercel

- [ ] **Step 1: Create Vercel project for portfolio**

```bash
cd ~/development/projects/portfolio
vercel --yes
```

Create new project named `portfolio` (or `austin-stickley`).

- [ ] **Step 2: Add Resend API key**

Sign up at resend.com (free tier — 3,000 emails/month). Get API key from dashboard.

```bash
vercel env add RESEND_API_KEY
# Paste Resend API key — select all environments
```

- [ ] **Step 3: Deploy to production**

```bash
vercel --prod
```

- [ ] **Step 4: Configure custom domain (optional)**

If you want a custom domain (e.g., `austinstickley.com`):

```bash
vercel domains add austinstickley.com
```

Then follow DNS configuration instructions in the Vercel dashboard.

- [ ] **Step 5: End-to-end verification checklist**

Open the live URL and check each of the following:

```
[ ] Nav scrolls smoothly to Work, Services, Contact sections
[ ] Hero stats are visible, pulse dot is animating
[ ] "Let's build something" CTA scrolls to contact form
[ ] Project cards are visible — featured ClaruSign card spans full width
[ ] ClaruSign "View live →" link opens to deployed ClaruSign app
[ ] nXcor "View live →" link opens n-xcor.com
[ ] Scroll reveals trigger on project cards and service cards
[ ] Contact form: fill all fields, submit — success message appears
[ ] Check email inbox for contact form delivery
[ ] Mobile (375px): nav collapse, single-column layout, no overflow
```

- [ ] **Step 6: Final commit**

```bash
cd ~/development/projects/portfolio
git add .
git commit -m "feat: deployed — portfolio and ClaruSign both live"
```

---

## Self-Review

**Spec coverage:**
- Dark neutral monochrome design ✓ (design-system.css, all component CSS)
- High-contrast hero with proof numbers and single CTA ✓ (hero section in HTML + hero.css)
- Projects with mini-UI previews (ClaruSign flagship) ✓ (projects grid in HTML + projects.css)
- Services section (3 categories) ✓
- Contact form that captures project type + message ✓ (form in HTML + contact.js + api/contact.js)
- ClaruSign deployed as live showcase ✓ (Task 10)
- Portfolio deployed to Vercel ✓ (Task 11)
- Email delivery on contact form submit ✓ (Resend via api/contact.js)

**Placeholder scan:** No TBDs or stubs. All code blocks are complete.

**Type consistency:** No shared types across tasks — pure HTML/CSS/JS, no imports between files except the `<script src>` tags in index.html which match the created file paths exactly.
