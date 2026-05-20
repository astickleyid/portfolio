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
    iframeUrl: 'https://shooter-app-git-main-lemxnaidhead-6918s-projects.vercel.app',
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
