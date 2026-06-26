import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  MapPin,
  PhoneCall,
  Rocket,
  Smartphone,
  Workflow,
  Send,
} from 'lucide-react';

function IconGithub({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ContactForm } from './components/ContactForm';
import { DeviceSimulator } from './components/DeviceSimulator';
import { LiveProductsPanel } from './components/LiveProductsPanel';
import { NowBuilding } from './components/NowBuilding';
import { AnimatedCounter } from './components/AnimatedCounter';
import { Reveal } from './components/Reveal';
import { StickyProjectNav } from './components/StickyProjectNav';
import { ShowcaseTabs } from './components/ShowcaseTabs';
import { RecentlyShipped } from './components/RecentlyShipped';
import { HowIBuild } from './components/HowIBuild';
import { Testimonials } from './components/Testimonials';
import { RivalMockup } from './components/RivalMockup';
import { VoidRiftMockup } from './components/VoidRiftMockup';
import { NxcorMockup } from './components/NxcorMockup';
import { ClaruSignMockup } from './components/ClaruSignMockup';

/* ─── Data ───────────────────────────────────────────────── */

const flagshipProjects = [
  {
    id: 'nxcor',
    number: '01',
    label: 'Creator platform',
    title: 'nXcor',
    tagline: 'Streaming, communities, DMs, RTMP ingest, HLS playback, iOS shell. The server is the studio.',
    chips: ['React', 'Node / Express', 'Socket.IO', 'SQLite WAL', 'RTMP / HLS', 'Capacitor'],
    iframeUrl: 'https://n-xcor.com',
    iframeLabel: 'n-xcor.com',
    links: [
      { label: 'Live site', href: 'https://n-xcor.com', primary: true },
      { label: 'Code', href: 'https://github.com/Stickley-AI/nXcor' },
    ],
  },
  {
    id: 'clarusign',
    number: '02',
    label: 'AI legal SaaS',
    title: 'ClaruSign',
    tagline: 'Upload a contract, get a structured AI review — risks, plain-English explanations, suggested revisions, negotiation email.',
    chips: ['React', 'Claude API', 'PDF.js', 'Supabase', 'Stripe'],
    iframeUrl: 'https://clarusign.vercel.app',
    iframeLabel: 'clarusign.com',
    links: [
      { label: 'Open app', href: 'https://clarusign.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/clarusign' },
    ],
  },
  {
    id: 'voidrift',
    number: '03',
    label: 'Browser game',
    title: 'VOID RIFT',
    tagline: 'Full twin-stick shooter built without an engine. Missions, upgrade economy, boss waves, iOS shell — all vanilla JS.',
    chips: ['Vanilla JS', 'Canvas API', 'Capacitor / iOS', 'Vercel', 'LocalStorage'],
    iframeUrl: '/games/voidrift',
    iframeLabel: 'VOID RIFT',
    links: [
      { label: 'Play live', href: 'https://shooter-app-git-main-lemxnaidhead-6918s-projects.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/shooter-app' },
    ],
  },
  {
    id: 'fieldline',
    number: '04',
    label: 'White-label CRM',
    title: 'Fieldline',
    tagline: 'CRM built for small trade businesses. Job pipeline, lead capture, SMS/email automation, AI quoting, and white-label operator controls.',
    chips: ['Next.js', 'Upstash Redis', 'Anthropic API', 'Iron Session', 'Vercel'],
    iframeUrl: 'https://fieldline-app.vercel.app',
    iframeLabel: 'fieldline-app.vercel.app',
    links: [
      { label: 'Open app', href: 'https://fieldline-app.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/fieldline-app' },
    ],
  },
  {
    id: 'rival',
    label: '04 · Competitive intelligence SaaS',
    title: 'Rival',
    tagline: 'Track competitors, surface briefings, close with context',
    summary:
      'Rival scrapes competitor websites on a schedule, diffs the changes, and synthesizes them into AI-written briefings delivered by email. It ships with a full subscription flow, a briefing dashboard with date filters and search highlighting, and per-competitor status tracking — all built as a solo product from schema to stripe webhook.',
    role:
      'I owned everything: product direction, data model, scraper architecture, AI synthesis pipeline, email delivery, Stripe integration, and the full frontend.',
    proof:
      'This is the sharpest example of solo SaaS in the portfolio — a real recurring-revenue product with auth, billing, a background worker, and a polished UI shipped without a team.',
    links: [
      { label: 'Open app', href: 'https://rival-alpha.vercel.app' },
      { label: 'Code', href: 'https://github.com/astickleyid/rival' },
    ],
    bullets: [
      {
        title: 'What shipped',
        text: 'Scheduled scraping, AI diff synthesis, weekly email digests, briefing annotations, signal rating system (routine/notable/critical), per-competitor internal notes, Cmd+K global search palette, trending keywords, bookmark and filter system, export to markdown and CSV, competitor status badges, activity sparkline charts, keyboard navigation, persistent filter state, and a Stripe subscription paywall.',
      },
      {
        title: 'Design move',
        text: 'Treat briefings as the primary object — not competitors. The dashboard is organized around what changed and when, so the signal stays surfaced even as volume grows. Filters persist across sessions so context is never lost.',
      },
      {
        title: 'System depth',
        text: 'A Cloudflare Worker handles scheduling and scraping. A synthesis layer diffs content and calls the AI. Stripe webhooks gate access. Resend delivers email. The frontend reads from Supabase with RLS. All filter and reading state persists client-side without a round-trip.',
      },
    ],
    buildStats: [
      { label: 'Timeline', value: '10 wks' },
      { label: 'Team', value: 'Solo' },
      { label: 'Integrations', value: 'Stripe + AI' },
    ],
    chips: ['React', 'Supabase', 'Stripe', 'Cloudflare Workers', 'Resend', 'OpenAI'],
    images: {
      primary: null,
      secondary: null,
      phone: null,
    },
    iframeUrl: 'https://rival-alpha.vercel.app',
    iframeLabel: 'rival-alpha.vercel.app',
    mockup: true,
    theme: 'ink',
  },
];

const supportingProjects = [
  {
    title: 'findafiend',
    label: 'Community rideshare',
    icon: MapPin,
    text: 'Cash-based community rideshare for Detroit and Toledo.',
    chips: ['Next.js', 'Upstash Redis', 'Vercel', 'Mapbox'],
    liveUrl: 'https://findafiend.com',
    codeUrl: '',
  },
  {
    title: 'AURA',
    label: 'Geo-AR platform',
    icon: Layers3,
    text: 'Iron Man–style AR over live camera — object detection, traffic, voice commands.',
    chips: ['TensorFlow.js', 'TomTom', 'WebGL', 'Vercel KV'],
    liveUrl: 'https://aura-ar-world.vercel.app',
    codeUrl: 'https://github.com/astickleyid/aura-ar-world',
  },
  {
    title: 'KeyBridge',
    label: 'API key vault',
    icon: BrainCircuit,
    text: 'Universal API-key management with AES-256-GCM encrypted vault.',
    chips: ['Next.js', 'Supabase', 'Upstash Redis', 'Stripe'],
    liveUrl: '',
    codeUrl: 'https://github.com/astickleyid/keybridge',
  },
  {
    title: 'Rival',
    label: 'Competitive intel',
    icon: Workflow,
    text: 'Tracks competitors, turns changes into briefings, wraps it in subscription.',
    chips: ['React', 'Supabase', 'Stripe', 'Briefings'],
    liveUrl: 'https://rival-alpha.vercel.app',
    codeUrl: 'https://github.com/astickleyid/rival',
  },
  {
    title: 'NWO Answering',
    label: 'Lead automation',
    icon: PhoneCall,
    text: 'Captures inbound leads, scores urgency, instant-SMS, CRM routing.',
    chips: ['Node', 'Twilio', 'Lead scoring', 'Dashboard'],
    liveUrl: '',
    codeUrl: '',
  },
  {
    title: 'FinCoach AI',
    label: 'Consumer mobile',
    icon: Smartphone,
    text: 'Cross-platform finance coaching with personalized AI guidance.',
    chips: ['Flutter', 'Firebase', 'RevenueCat', 'OpenAI'],
    liveUrl: '',
    codeUrl: '',
  },
];

/* ─── App ────────────────────────────────────────────────── */


const techStack = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Supabase', 'PostgreSQL',
  'Cloudflare Workers', 'Stripe', 'Claude API', 'OpenAI', 'Vite',
  'Socket.IO', 'Resend', 'Flutter', 'Capacitor', 'Vercel', 'Canvas API',
  'SQLite', 'Redis', 'Tailwind CSS', 'Motion', 'WebGL', 'RTMP / HLS',
];

const showcaseProjects = flagshipProjects.map((p) => ({
  id: p.id,
  name: p.title,
  category: p.label.replace(/^\d+\s*·\s*/, ''),
  trigger: p.tagline ?? p.bullets[0]?.title ?? p.title,
  tagline: p.tagline ?? '',
  headline: p.title,
  summary: p.summary,
  stack: p.chips,
  role: p.role.split(/,\s+|\.\s+/).map((s) => s.trim()).filter(Boolean),
  whyItMatters: p.proof,
  buildStats: p.buildStats ?? [],
  links: p.links,
  images: {
    primary: p.images?.primary ?? null,
    primaryAlt: `${p.title} screenshot`,
    secondary: p.images?.secondary ?? null,
    secondaryAlt: `${p.title} secondary screenshot`,
    phone: p.images?.phone ?? null,
    phoneAlt: `${p.title} mobile screenshot`,
  },
  artifacts: p.bullets.map((b) => ({ label: b.title, text: b.text })),
  tone: p.theme,
  mockupComponent: p.id === 'rival' ? <RivalMockup /> : p.id === 'voidrift' ? <VoidRiftMockup /> : p.id === 'nxcor' ? <NxcorMockup /> : p.id === 'clarusign' ? <ClaruSignMockup /> : null,
}));

function App() {
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [workViewMode, setWorkViewMode] = useState('list');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });

  return (
    <div className="app">
      <div className="atmosphere" aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <StickyProjectNav projects={flagshipProjects} />

      {/* Header */}
      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="#top" aria-label="Austin Stickley — home">
            <span className="brand__mark" aria-hidden="true">AS</span>
            <span className="brand__name">Austin Stickley</span>
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="site-header__hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile nav overlay */}
        {mobileMenuOpen && (
          <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#approach" onClick={() => setMobileMenuOpen(false)}>Approach</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="section section--first hero" aria-labelledby="hero-title">
          <div className="shell">
            <div className="hero__grid">
              <Reveal className="hero__copy">
                <span className="eyebrow">AI Product Engineer · Toledo / Detroit</span>
                <h1 id="hero-title" className="hero__title">
                  Austin Stickley
                </h1>
                <p className="hero__subtitle">
                  AI-native builder. Founder. <em>Do it proper.</em>
                </p>

                <NowBuilding />

                <div className="hero__cta">
                  <a className="btn btn--primary" href="#work">
                    Selected work
                    <ArrowUpRight />
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/astickleyid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <ArrowUpRight />
                  </a>
                </div>

                <div className="hero__meta">
                  <div className="hero__meta-item">
                    <span className="label">Based</span>
                    <span className="value">Toledo, OH</span>
                  </div>
                  <div className="hero__meta-item">
                    <span className="label">Stack</span>
                    <span className="value">Next.js · React · Node</span>
                  </div>
                  <div className="hero__meta-item">
                    <span className="label">Status</span>
                    <span className="value">Open to work</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <LiveProductsPanel />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="shell">
<div className="flagship-list">
              {flagshipProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.04}>
                  <article className="flagship" id={project.id} aria-labelledby={`${project.id}-title`}>
                    <div className="flagship__copy">
                      <div className="flagship__head">
                        <span className="eyebrow">{project.number} · {project.label}</span>
                        <h3 id={`${project.id}-title`} className="flagship__title">{project.title}</h3>
                      </div>

                      <p className="flagship__tagline">{project.tagline}</p>

                      <div className="flagship__chips">
                        {project.chips.map((chip) => (
                          <span key={chip} className="chip">{chip}</span>
                        ))}
                      </div>

                      <div className="flagship__links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            className={`btn${link.primary ? ' btn--primary' : ''}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                            <ArrowUpRight />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flagship__stage">
                      <DeviceSimulator
                        url={project.iframeUrl}
                        label={project.iframeLabel}
                        height={520}
                        scale={0.7}
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other work — uniform grid */}
        <section className="section" id="more-work" aria-labelledby="more-work-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 04 / Other work ]</span>
              </div>
              <Reveal>
                <h2 id="more-work-title" className="section__title">
                  Repeatability across very different product shapes.
                </h2>
                <p className="section__lede">
                  Smaller systems and side products that prove the approach holds beyond the flagship work.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="work-grid">
                {supportingProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <article key={project.title} className="work-card">
                      <div className="work-card__head">
                        <span className="work-card__icon" aria-hidden="true"><Icon size={16} /></span>
                        <span className="work-card__label">{project.label}</span>
                      </div>
                      <h3 className="work-card__title">{project.title}</h3>
                      <p className="work-card__text">{project.text}</p>
                      <div className="flagship__chips">
                        {project.chips.map((chip) => (
                          <span key={chip} className="chip">{chip}</span>
                        ))}
                      </div>
                      {(project.liveUrl || project.codeUrl) && (
                        <div className="work-card__links">
                          {project.liveUrl && (
                            <a className="work-card__link" href={project.liveUrl} target="_blank" rel="noreferrer">
                              Live <ArrowUpRight />
                            </a>
                          )}
                          {project.codeUrl && (
                            <a className="work-card__link" href={project.codeUrl} target="_blank" rel="noreferrer">
                              Code <ArrowUpRight />
                            </a>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Approach */}
        <section className="section" id="approach" aria-labelledby="approach-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 05 / Approach ]</span>
              </div>
              <Reveal>
                <h2 id="approach-title" className="section__title">
                  How the work actually <em>gets made</em>.
                </h2>
              </Reveal>
            </div>

            <div className="approach approach--single">
              <Reveal>
                <p className="approach__quote">
                  Most products fail at the seams between design, code, AI behavior, and billing.
                  My job is to <em>remove those seams</em> by owning all of them.
                </p>
              </Reveal>
            </div>
          </div>
        </section>


        {/* About */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="shell">
            <div className="about">
              <Reveal className="about__photo-wrap">
                <img
                  src="/austin-stickley.jpg"
                  alt="Austin Stickley"
                  className="about__photo"
                  width="900"
                  height="1125"
                  loading="lazy"
                />
                <p className="about__photo-cap">Toledo, Ohio · 2026</p>
              </Reveal>

              <Reveal delay={0.06} className="about__body">
                <h2 id="about-title" className="section__title">
                  Background
                </h2>

                <p className="about__lead">
                  I&rsquo;m <strong>Austin Michael Stickley.</strong> Not just
                  &ldquo;into AI&rdquo; — I&rsquo;m the kind of person who looks at
                  software everyone else accepts as normal and immediately asks:
                  <em>Why can&rsquo;t this be automated? Why does this need five
                  tools? Why is the agent not actually doing the work?</em>
                </p>

                <div className="about__lanes">
                  {[
                    { lane: 'Engineering',      desc: 'Full-stack, mobile, backend, CLI, automation, AI agents' },
                    { lane: 'Product',          desc: 'Workflows, systems, user value, monetization' },
                    { lane: 'Design',           desc: 'Premium UI instincts, brand direction, visual consistency' },
                    { lane: 'Founder energy',   desc: 'Moves fast, challenges weak ideas, wants real execution' },
                    { lane: 'Creative',         desc: 'Branding, audio, streaming, visual identity, thumbnails' },
                    { lane: 'AI-native',        desc: 'Agents, automation, local models, orchestration layers' },
                  ].map((l) => (
                    <div key={l.lane} className="about__lane">
                      <div className="about__lane-title">{l.lane}</div>
                      <div className="about__lane-desc">{l.desc}</div>
                    </div>
                  ))}
                </div>

                <p>
                  I have strong taste. Generic UI — I see it. Bad branding — I catch
                  it. Placeholder code dressed up as production — I hate it. The
                  standard is Vercel-level polish, Apple-like restraint, dark premium
                  interfaces with real UX flows. Not &ldquo;a project&rdquo; — a
                  product that feels like it belongs next to the best tools in the
                  market.
                </p>

                <div className="about__callout">
                  <span className="about__callout-text">&ldquo;Do it proper.&rdquo;</span>
                  <span className="about__callout-attr">The only standard that matters</span>
                </div>

                <p>
                  I&rsquo;m thinking about AI operating layers, not prompt boxes.
                  Multi-agent systems, local runtimes, repo agents, builder agents,
                  CLI automation, voice-first input. A lot of people are still
                  building better wrappers. That&rsquo;s not the work.
                </p>

                <p>
                  Before the software, I ran Grasslane Lawn Co. in Toledo — which
                  gave me direct exposure to how small trade businesses actually break
                  down operationally. Fieldline and NWO Answering came directly from
                  that experience. I also run local LLM deployments (Ollama, Phi-3,
                  Llama 3) to prototype multi-agent workflows before they go anywhere
                  near production.
                </p>

                <p>
                  I produce hip-hop and R&amp;B — Atlanta/Detroit trap, late-night
                  energy, recorded on a Mac Studio through a Focusrite Scarlett Solo
                  and a Rode PodMic. I built VOID RIFT to understand how games are
                  actually constructed with no engine. I built whereisjimcarrey.com
                  because sometimes you need a palate cleanser.
                </p>

                <div className="about__facts">
                  {[
                    { label: 'Based',         value: 'Toledo, Ohio — Northwest Ohio / Detroit area' },
                    { label: 'Focus',         value: 'AI product engineering, full-stack, solo founder' },
                    { label: 'Stack',         value: 'React, Next.js, Node.js, Claude API, Ollama, Stripe, Supabase, Vercel' },
                    { label: 'Local AI',      value: 'Ollama · Phi-3 · Llama 3 · local multi-agent workflows' },
                    { label: 'Background',    value: 'Self-taught — vibe coder, product vision first' },
                    { label: 'Companies',     value: 'Stickley AI · Grasslane Lawn Co.' },
                    { label: 'Studio',        value: 'Mac Studio · Focusrite Scarlett Solo · Rode PodMic' },
                    { label: 'Music',         value: 'Hip-hop & R&B production — Atlanta/Detroit trap, Logic Pro' },
                    { label: 'Interests',     value: 'Game dev, interior design, trading, collectibles, AI philosophy' },
                    { label: 'Status',        value: 'Open to work — AI integration, product engineering, full-stack' },
                  ].map((f) => (
                    <div key={f.label} className="about__fact">
                      <span className="about__fact-label">{f.label}</span>
                      <span className="about__fact-value">{f.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 06 / Contact ]</span>
              </div>
            </div>

            <div className="contact">
              <Reveal>
                <h2 id="contact-title" className="contact__title">
                  Let's build <em>something</em>.
                </h2>

                <div className="contact__lines">
                  <a className="contact__line" href="mailto:ams@stickleyai.com">
                    <span>Email</span>
                    <span>ams@stickleyai.com</span>
                  </a>
                  <a className="contact__line" href="https://github.com/astickleyid" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <span>github.com/astickleyid</span>
                  </a>
                  <div className="contact__line">
                    <span>Based</span>
                    <span>Toledo / Detroit</span>
                  </div>
                  <div className="contact__line">
                    <span>Status</span>
                    <span>Open to work</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Tech stack marquee */}
        <section className="section section--stack" aria-label="Tech stack">
          <Reveal>
            <div className="shell stack-heading">
              <span className="eyebrow">Tech I reach for</span>
            </div>
          </Reveal>
          <div className="stack-track-wrap" aria-hidden="true">
            <div className="stack-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="stack-item">{tech}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-foot">
        <div className="shell site-foot__inner">
          <span>© {new Date().getFullYear()} Austin Stickley</span>
          <span>Toledo · Detroit · Open to work</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
