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
                  AI-native products, <em>shipped</em> end-to-end.
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
                  I&rsquo;m <strong>Austin Michael Stickley</strong> — a self-described
                  vibe coder and product builder from Toledo, Ohio. My background is
                  vision and execution, not computer science. I treat AI development
                  less like rigid engineering and more like alchemy: you understand the
                  inputs, you understand the outputs, and you learn to bend the system
                  to do things it wasn&rsquo;t explicitly designed for.
                </p>

                <p>
                  Before the software, I ran Grasslane Lawn Co., a lawn care business
                  I started in Toledo. That gave me a hands-on view of how small trade
                  businesses actually operate — the scheduling gaps, the lead flow
                  problems, the manual overhead that software should eliminate.
                  Fieldline and NWO Answering both came directly from that experience.
                </p>

                <p>
                  I build across the full stack because I have to. Design, frontend,
                  backend, AI behavior, billing, infra — if I hand any of it off, the
                  product stops being mine. I also run local LLM deployments (Ollama,
                  Phi-3, Llama 3) to prototype multi-agent workflows before they go
                  anywhere near production. The goal is always the same: a live,
                  working system that solves a real problem.
                </p>

                <p>
                  On the creative side I produce hip-hop and R&amp;B — Atlanta/Detroit
                  trap, late-night energy, Drake/Offset territory. I record in a home
                  studio running a Mac Studio through a Focusrite Scarlett Solo into a
                  Rode PodMic. VOID RIFT started as a personal build-to-understand
                  project: a complete twin-stick shooter with no engine, just Canvas
                  API and about 480KB of vanilla JS. I also built
                  whereisjimcarrey.com — a satirical brutalist newspaper that went
                  exactly as unhinged as it sounds.
                </p>

                <p>
                  Currently focused on nXcor, Fieldline, and findafiend — three
                  products with distinct markets and the same operating philosophy:
                  own the whole system, ship it, keep it running.
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
