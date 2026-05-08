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
import { ContactForm } from './components/ContactForm';
import { DeviceSimulator } from './components/DeviceSimulator';
import { LiveProductsPanel } from './components/LiveProductsPanel';
import { NowBuilding } from './components/NowBuilding';
import { Reveal } from './components/Reveal';
import { StickyProjectNav } from './components/StickyProjectNav';

/* ─── Data ───────────────────────────────────────────────── */

const flagshipProjects = [
  {
    id: 'nxcor',
    number: '01',
    label: 'Creator platform',
    title: 'nXcor',
    lede:
      'A creator workspace where the server is the studio. Public output flows from a private workspace into feed, profiles, and discovery — one product model across every surface.',
    role: 'Product direction, interface system, frontend, backend, realtime, media pipeline, deployment.',
    why: 'The strongest example in this portfolio of holding a large product thesis coherent across many surfaces and technical constraints.',
    chips: ['React', 'Node / Express', 'Socket.IO', 'SQLite WAL', 'RTMP / HLS', 'Capacitor'],
    bullets: [
      {
        title: 'Shipped',
        text: 'Feed, profiles, communities, DMs, notifications, RTMP ingest, HLS playback, iOS shell.',
      },
      {
        title: 'Design move',
        text: 'Each surface has one job: create privately, publish outward, discover through feed and explore.',
      },
      {
        title: 'System depth',
        text: 'Presence, messaging, playback, storage, packaging, and hierarchy all reinforce the same product model.',
      },
      {
        title: 'Status',
        text: 'Live at n-xcor.com. Continuously deployed via DigitalOcean VPS.',
      },
    ],
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
    lede:
      'Contract analysis as a paid product. Upload a PDF, get a structured review report — risk-scored clauses, plain-English explanations, suggested revisions, and a draft negotiation email. Every finding maps back to a location in the document.',
    role: 'Product framing, visual direction, prompt and report structure, payment flow, delivery logic.',
    why: 'Proves I can turn raw model output into a paid product with clear user value and a polished path from upload to result.',
    chips: ['React', 'Claude API', 'PDF.js', 'Supabase', 'Stripe'],
    bullets: [
      {
        title: 'Shipped',
        text: 'Upload, payment gating, AI analysis, structured report, suggested language, negotiation email.',
      },
      {
        title: 'Design move',
        text: 'Anchor every screen to the same question: what is risky, why does it matter, what should the user do next?',
      },
      {
        title: 'System depth',
        text: 'PDF parsing, Claude API analysis, payment gating, and structured report delivery as one experience.',
      },
      {
        title: 'Status',
        text: 'Live at clarusign.com. Stripe live-mode rollout in progress.',
      },
    ],
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
    lede:
      'A complete twin-stick shooter built without an engine. Ship selection, upgrade economy, missions, kill-combo multipliers, mid-game power drops, boss waves — every system implemented from scratch in vanilla JS.',
    role: 'Game design, physics, upgrade economy, mission architecture, enemy AI, ship balancing, VFX, iOS shell.',
    why: 'The most technically self-contained project here. Save state, leaderboard, social, missions, and adaptive difficulty all built by hand.',
    chips: ['Vanilla JS', 'Canvas API', 'Capacitor / iOS', 'Vercel', 'LocalStorage'],
    bullets: [
      {
        title: 'Shipped',
        text: 'Ship select, upgrade shop, missions, kill combos, power-ups, boss waves, leaderboard, iOS wrapper.',
      },
      {
        title: 'Design move',
        text: 'Tight upgrade economy with diminishing returns — upgrades reward play without trivializing it.',
      },
      {
        title: 'System depth',
        text: 'Adaptive difficulty, save state, formation patterns, per-class abilities, audio manager — no framework.',
      },
      {
        title: 'Status',
        text: 'Live at voidrift.vercel.app. Playable in any browser.',
      },
    ],
    iframeUrl: 'https://voidrift.vercel.app',
    iframeLabel: 'voidrift.vercel.app',
    links: [
      { label: 'Play live', href: 'https://voidrift.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/shooter-app' },
    ],
  },
];

const supportingProjects = [
  {
    title: 'findafiend',
    label: 'Community rideshare',
    icon: MapPin,
    text: 'Cash-based community rideshare for Detroit and Toledo. Next.js + Upstash Redis on Vercel. Built around verified drivers, simple matching, and minimal app overhead.',
    chips: ['Next.js', 'Upstash Redis', 'Vercel', 'Mapbox'],
    liveUrl: 'https://findafiend.com',
    codeUrl: '',
  },
  {
    title: 'AURA',
    label: 'Geo-AR platform',
    icon: Layers3,
    text: 'Iron Man–style AR layer over the live world. Camera passthrough, COCO-SSD object detection, traffic data, voice commands, IFF tagging, and a 911 incident feed.',
    chips: ['TensorFlow.js', 'TomTom', 'WebGL', 'Vercel KV'],
    liveUrl: 'https://aura-ar-world.vercel.app',
    codeUrl: 'https://github.com/astickleyid/aura-ar-world',
  },
  {
    title: 'KeyBridge',
    label: 'API key vault',
    icon: BrainCircuit,
    text: 'Universal API-key management with an AES-256-GCM vault. Encrypted storage, scoped access, usage analytics, and a clean operator UI for solo and team workflows.',
    chips: ['Next.js', 'Supabase', 'Upstash Redis', 'Stripe'],
    liveUrl: '',
    codeUrl: 'https://github.com/astickleyid/keybridge',
  },
  {
    title: 'Rival',
    label: 'Competitive intel',
    icon: Workflow,
    text: 'Tracks competitors, turns changes into briefings, and wraps the work in subscription and export logic. Built for solo operators and small teams.',
    chips: ['React', 'Supabase', 'Stripe', 'Briefings'],
    liveUrl: 'https://rival-alpha.vercel.app',
    codeUrl: 'https://github.com/astickleyid/rival',
  },
  {
    title: 'NWO Answering',
    label: 'Lead automation',
    icon: PhoneCall,
    text: 'Captures inbound leads, scores urgency, sends instant SMS, and routes follow-up through a lightweight CRM flow. Designed for small service businesses.',
    chips: ['Node', 'Twilio', 'Lead scoring', 'Dashboard'],
    liveUrl: '',
    codeUrl: '',
  },
  {
    title: 'FinCoach AI',
    label: 'Consumer mobile',
    icon: Smartphone,
    text: 'Cross-platform finance coaching app with Firebase-backed state, subscription billing, and personalized AI guidance based on user activity.',
    chips: ['Flutter', 'Firebase', 'RevenueCat', 'OpenAI'],
    liveUrl: '',
    codeUrl: '',
  },
];

const principles = [
  {
    title: 'Hierarchy before decoration',
    text: 'The first read should be cheap. Lead with the thesis, then proof, then let deeper system work reveal itself.',
  },
  {
    title: 'Show the operating layer',
    text: 'The most valuable work is often behind the hero screen — billing, review queues, exports, operator flows.',
  },
  {
    title: 'AI is product behavior',
    text: 'The model is not the product. The product is how output gets framed, constrained, paid for, and turned into action.',
  },
  {
    title: 'Ship the whole loop',
    text: 'Design, frontend, backend, infra, and billing are one continuous system. Treat them that way from day one.',
  },
];

/* ─── App ────────────────────────────────────────────────── */

function App() {
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
            <a href="#approach">Approach</a>
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
                  AI-native products, <em>shipped</em> end-to-end.
                </h1>
                <p className="hero__lede">
                  I'm Austin Stickley. Solo builder running design, frontend, backend, AI behavior,
                  billing, and infra as one continuous system. No handoffs. Every project below is live.
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

        {/* Index — magazine TOC of all projects */}
        <section className="section" aria-labelledby="index-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 02 / Index ]</span>
              </div>
              <Reveal>
                <h2 id="index-title" className="section__title">
                  Every project, in one list.
                </h2>
                <p className="section__lede">
                  Three flagship products, six supporting systems. Click through to the section.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="toc" role="list">
                {[...flagshipProjects.map((p) => ({
                  num: p.number,
                  title: p.title,
                  desc: p.label,
                  href: `#${p.id}`,
                })), ...supportingProjects.map((p, i) => ({
                  num: String(i + 4).padStart(2, '0'),
                  title: p.title,
                  desc: p.label,
                  href: '#more-work',
                }))].map((row) => (
                  <a key={row.num + row.title} href={row.href} className="toc__row" role="listitem">
                    <span className="toc__num">{row.num}</span>
                    <span className="toc__title">{row.title}</span>
                    <span className="toc__desc">{row.desc}</span>
                    <span className="toc__arrow"><ArrowUpRight size={14} /></span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Selected work */}
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 03 / Selected work ]</span>
              </div>
              <Reveal>
                <h2 id="work-title" className="section__title">
                  Three projects with the strongest mix of <em>product judgment</em> and technical execution.
                </h2>
              </Reveal>
            </div>

            <div className="flagship-list">
              {flagshipProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.04}>
                  <article className="flagship" id={project.id} aria-labelledby={`${project.id}-title`}>
                    <div className="flagship__copy">
                      <div className="flagship__head">
                        <span className="eyebrow">{project.number} · {project.label}</span>
                        <h3 id={`${project.id}-title`} className="flagship__title">{project.title}</h3>
                      </div>

                      <p className="flagship__lede">{project.lede}</p>

                      <div className="flagship__chips">
                        {project.chips.map((chip) => (
                          <span key={chip} className="chip">{chip}</span>
                        ))}
                      </div>

                      <div className="flagship__details">
                        <div className="flagship__detail">
                          <span className="label">Role</span>
                          <p className="flagship__detail-text">{project.role}</p>
                        </div>
                        <div className="flagship__detail">
                          <span className="label">Why it matters</span>
                          <p className="flagship__detail-text">{project.why}</p>
                        </div>
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
                        height={460}
                        scale={0.7}
                      />

                      <div className="flagship__bullets">
                        {project.bullets.map((bullet) => (
                          <div key={bullet.title} className="flagship__bullet">
                            <h4>{bullet.title}</h4>
                            <p>{bullet.text}</p>
                          </div>
                        ))}
                      </div>
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

            <div className="approach">
              <Reveal>
                <p className="approach__quote">
                  Most products fail at the seams between design, code, AI behavior, and billing.
                  My job is to <em>remove those seams</em> by owning all of them.
                </p>
              </Reveal>

              <Reveal delay={0.08} className="approach__list">
                {principles.map((principle, i) => (
                  <div key={principle.title} className="approach__item">
                    <span className="approach__num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4>{principle.title}</h4>
                      <p>{principle.text}</p>
                    </div>
                  </div>
                ))}
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
                  Best fit: products that need a sharp interface and someone willing to <em>own</em> the hard parts behind it.
                </h2>
                <p className="contact__lede">
                  If the brief includes AI behavior, product design, full-stack implementation, billing,
                  or the operator paths that usually get ignored until the end — I'm useful.
                </p>

                <div className="contact__lines">
                  <a className="contact__line" href="mailto:astickleyid@gmail.com">
                    <span>Email</span>
                    <span>astickleyid@gmail.com</span>
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
