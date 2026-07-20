import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Gamepad2,
  Layers3,
  MapPin,
  PhoneCall,
  Rocket,
  Smartphone,
  Workflow,
  Send,
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactForm } from './components/ContactForm';
import { DeviceSimulator } from './components/DeviceSimulator';
import { HowIBuild } from './components/HowIBuild';
import { LiveProductsPanel } from './components/LiveProductsPanel';
import { NowBuilding } from './components/NowBuilding';
import { Reveal } from './components/Reveal';
import { StickyProjectNav } from './components/StickyProjectNav';
import { Testimonials } from './components/Testimonials';
import { AnimatedCounter } from './components/AnimatedCounter';

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
    iframeUrl: 'https://clarusign.com',
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
    iframeUrl: 'https://fieldline-app.vercel.app/showcase',
    iframeLabel: 'fieldline-app.vercel.app',
    links: [
      { label: 'Open app', href: 'https://fieldline-app.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/fieldline-app' },
    ],
  },
  {
    id: 'rival',
    number: '05',
    label: 'Competitive intel SaaS',
    title: 'Rival',
    tagline: 'Tracks competitor websites, turns changes into AI briefings, ships with signal ratings, heatmaps, digest views, and a Stripe subscription layer.',
    chips: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
    iframeUrl: 'https://rival-alpha.vercel.app',
    iframeLabel: 'rival-alpha.vercel.app',
    links: [
      { label: 'Open app', href: 'https://rival-alpha.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/rival' },
    ],
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

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });
  const [caseStudy, setCaseStudy] = useState(null);
  const [activeChip, setActiveChip] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const allChips = [...new Set([
    ...flagshipProjects.flatMap((p) => p.chips),
    ...supportingProjects.flatMap((p) => p.chips),
  ])];

  const filteredFlagship = activeChip
    ? flagshipProjects.filter((p) => p.chips.includes(activeChip))
    : flagshipProjects;

  const filteredSupporting = activeChip
    ? supportingProjects.filter((p) => p.chips.includes(activeChip))
    : supportingProjects;

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
        </div>
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

        {/* Stats strip */}
        <section className="stats-strip" aria-label="By the numbers">
          <div className="shell">
            <div className="stats-strip__grid">
              {[
                { target: 10, suffix: '+', label: 'Products shipped' },
                { target: 4,  suffix: '',  label: 'Live products'    },
                { target: 3,  suffix: '+', label: 'Years building'   },
                { target: 12, suffix: '+', label: 'Technologies'     },
              ].map(({ target, suffix, label }) => (
                <div key={label} className="stats-strip__item">
                  <div className="stats-strip__number">
                    <AnimatedCounter target={target} suffix={suffix} duration={1400} />
                  </div>
                  <div className="stats-strip__label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="shell">
            {/* Tech chip filter */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: 'var(--s-8)',
              paddingBottom: 'var(--s-5)',
              borderBottom: '1px solid var(--rule)',
            }}>
              <button
                onClick={() => setActiveChip(null)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  border: '1px solid',
                  borderRadius: 'var(--r-2)',
                  cursor: 'pointer',
                  transition: 'background 0.18s, color 0.18s, border-color 0.18s',
                  background: activeChip === null ? 'var(--accent)' : 'transparent',
                  color: activeChip === null ? 'var(--bg)' : 'var(--cream-60)',
                  borderColor: activeChip === null ? 'var(--accent)' : 'var(--rule)',
                }}
                onMouseEnter={(e) => {
                  if (activeChip !== null) {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeChip !== null) {
                    e.currentTarget.style.borderColor = 'var(--rule)';
                    e.currentTarget.style.color = 'var(--cream-60)';
                  }
                }}
              >
                All
              </button>
              {allChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setActiveChip(activeChip === chip ? null : chip)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '5px 9px',
                    border: '1px solid',
                    borderRadius: 'var(--r-2)',
                    cursor: 'pointer',
                    transition: 'background 0.18s, color 0.18s, border-color 0.18s',
                    background: activeChip === chip ? 'var(--accent)' : 'transparent',
                    color: activeChip === chip ? 'var(--bg)' : 'var(--cream-60)',
                    borderColor: activeChip === chip ? 'var(--accent)' : 'var(--rule)',
                  }}
                  onMouseEnter={(e) => {
                    if (activeChip !== chip) {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeChip !== chip) {
                      e.currentTarget.style.borderColor = 'var(--rule)';
                      e.currentTarget.style.color = 'var(--cream-60)';
                    }
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
<div className="flagship-list">
              {filteredFlagship.map((project, index) => (
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
                        <button
                          onClick={() => setCaseStudy(project)}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 11,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--ink-45)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '12px 0',
                            transition: 'color 0.18s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-45)'; }}
                        >
                          Case study →
                        </button>
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
                {filteredSupporting.map((project) => {
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


        {/* How I Build */}
        <section className="section" id="process" aria-labelledby="process-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 06 / Process ]</span>
              </div>
              <Reveal>
                <h2 id="process-title" className="section__title">
                  How the work <em>actually</em> gets built.
                </h2>
              </Reveal>
            </div>
            <Reveal>
              <HowIBuild />
            </Reveal>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section" id="stack" aria-labelledby="stack-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 07 / Stack ]</span>
              </div>
              <Reveal>
                <h2 id="stack-title" className="section__title">
                  Tools I <em>actually</em> ship with.
                </h2>
                <p className="section__lede">
                  The full picture — frontend to infra, AI to mobile.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
                className="stack-grid"
              >
                {[
                  {
                    category: 'Frontend',
                    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion/Framer', 'Vite'],
                  },
                  {
                    category: 'Backend',
                    techs: ['Node.js', 'Express', 'FastAPI', 'Supabase Edge', 'Socket.IO', 'REST APIs'],
                  },
                  {
                    category: 'AI & Models',
                    techs: ['Claude API', 'OpenAI', 'Ollama', 'Phi-3', 'Llama 3', 'Anthropic SDK'],
                  },
                  {
                    category: 'Mobile',
                    techs: ['Capacitor', 'iOS Native', 'Flutter (learning)', 'React Native'],
                  },
                  {
                    category: 'Infra & DevOps',
                    techs: ['Vercel', 'Cloudflare', 'GitHub Actions', 'Docker', 'nginx'],
                  },
                  {
                    category: 'Data & Storage',
                    techs: ['Supabase', 'PostgreSQL', 'Upstash Redis', 'SQLite WAL', 'LocalStorage'],
                  },
                ].map(({ category, techs }) => (
                  <div
                    key={category}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '20px',
                    }}
                  >
                    <div
                      className="eyebrow"
                      style={{ marginBottom: '14px', display: 'block' }}
                    >
                      {category}
                    </div>
                    <div className="flagship__chips" style={{ gap: '6px' }}>
                      {techs.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
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

        {/* Testimonials */}
        <section className="section" id="testimonials" aria-labelledby="testimonials-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 08 / Testimonials ]</span>
              </div>
              <Reveal>
                <h2 id="testimonials-title" className="section__title">
                  What people say about <em>working together</em>.
                </h2>
              </Reveal>
            </div>
            <Reveal>
              <Testimonials />
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 09 / Contact ]</span>
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
      </main>

      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 100,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1px solid var(--rule-strong)',
          background: 'var(--bg)',
          color: 'var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.25s ease, border-color 0.25s ease, color 0.25s ease',
          flexShrink: 0,
        }}
      >
        {isDark ? (
          /* Sun — click to switch to light mode */
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <line x1="12" y1="2" x2="12" y2="6"/>
            <line x1="12" y1="18" x2="12" y2="22"/>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
            <line x1="2" y1="12" x2="6" y2="12"/>
            <line x1="18" y1="12" x2="22" y2="12"/>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
          </svg>
        ) : (
          /* Moon — click to switch to dark mode */
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {caseStudy && (
        <CaseStudyModal project={caseStudy} onClose={() => setCaseStudy(null)} />
      )}

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
