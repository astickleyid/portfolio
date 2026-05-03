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
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ContactForm } from './components/ContactForm';
import { DeviceSimulator } from './components/DeviceSimulator';
import { HeroBrowserMockup } from './components/HeroBrowserMockup';
import { NowBuilding } from './components/NowBuilding';
import { Reveal } from './components/Reveal';
import { StickyProjectNav } from './components/StickyProjectNav';


const flagshipProjects = [
  {
    id: 'nxcor',
    label: '01 · Creator platform',
    title: 'nXcor',
    summary:
      'nXcor is a creator workspace built around a simple product idea: the server is the studio, and public output flows from there into feed and discovery.',
    role:
      'I owned the product direction, interface system, frontend and backend implementation, realtime behavior, media pipeline, and deployment.',
    proof:
      'This is the best example in the portfolio of keeping a large product thesis coherent across multiple surfaces and technical constraints.',
    links: [
      { label: 'Live product', href: 'https://n-xcor.com' },
      { label: 'Code', href: 'https://github.com/Stickley-AI/nXcor' },
    ],
    bullets: [
      {
        title: 'What shipped',
        text: 'Feed, profiles, communities, DMs, notifications, RTMP ingest, HLS playback, and a Capacitor iOS shell.',
      },
      {
        title: 'Design move',
        text: 'Give each surface a clear job: create in the workspace, publish outward, discover through feed and explore.',
      },
      {
        title: 'System depth',
        text: 'Presence, messaging, playback, storage, mobile packaging, and interface hierarchy all had to reinforce the same product model.',
      },
    ],
    chips: ['React', 'Node / Express', 'Socket.IO', 'SQLite WAL', 'RTMP / HLS', 'Capacitor'],
    images: {
      primary: '/images/nxcor-feed.png',
      secondary: '/images/nxcor-explore.png',
      phone: '/images/nxcor-phone-profile.png',
    },
    iframeUrl: 'https://n-xcor.com',
    iframeLabel: 'n-xcor.com',
    theme: 'ink',
  },
  {
    id: 'clarusign',
    label: '02 · AI legal SaaS',
    title: 'ClaruSign',
    tagline: 'AI contract analysis — red flags, risk scores, plain-English explanations',
    summary:
      'ClaruSign scans uploaded PDFs using the Claude API to detect problematic clauses, assign per-clause risk scores, and surface plain-English summaries for each issue. The output is structured as a review report rather than raw model text — every finding maps to a location in the document with an explanation and suggested revision. Payment gating, serverless analysis, and readable delivery all had to work as one coherent experience.',
    role:
      'I handled the product framing, visual direction, prompt and report structure, payment flow, and delivery logic.',
    proof:
      'It proves I can turn model output into a paid product with clear user value and a polished path from upload to result.',
    links: [
      { label: 'Open app', href: 'https://clarusign.vercel.app' },
      { label: 'Code', href: 'https://github.com/astickleyid/clarusign' },
    ],
    bullets: [
      {
        title: 'What shipped',
        text: 'Upload, payment, analysis, report output, suggested language, and a ready-to-send negotiation email.',
      },
      {
        title: 'Design move',
        text: 'Keep every screen anchored to the same question: what is risky, why does it matter, and what should the user do next?',
      },
      {
        title: 'System depth',
        text: 'PDF parsing, Claude API analysis, payment gating, and structured report delivery all work as one experience.',
      },
    ],
    chips: ['React', 'Claude API', 'PDF.js', 'Supabase'],
    images: {
      primary: '/images/clarusign.png',
    },
    iframeUrl: 'https://clarusign.vercel.app',
    iframeLabel: 'clarusign.vercel.app',
    mockup: true,
    theme: 'paper',
  },
  {
    id: 'voidrift',
    label: '03 · Browser game',
    title: 'VOID RIFT',
    tagline: 'Twin-stick space shooter — ships, upgrades, missions, global leaderboard',
    summary:
      'VOID RIFT is a browser-based twin-stick shooter built as a complete game product. Ship selection, a full upgrade economy, a mission system, kill combo multipliers, mid-game power drops, and a boss system are all implemented from scratch in vanilla JS — no game engine.',
    role:
      'I handled game design, physics, the full upgrade economy, mission architecture, enemy AI, ship balancing, visual effects, and the iOS shell via Capacitor.',
    proof:
      'This is the most technically self-contained project in the portfolio — every system (save, leaderboard, social, missions, adaptive difficulty) built by hand in a single codebase.',
    links: [
      { label: 'Play live', href: 'https://voidrift.vercel.app' },
      { label: 'Code', href: 'https://github.com/astickleyid/shooter-app' },
    ],
    bullets: [
      {
        title: 'What shipped',
        text: 'Ship selection with stat bars, a persistent upgrade shop, mission system, kill combo multiplier, power-up drops, boss waves, local leaderboard, and a Capacitor iOS wrapper.',
      },
      {
        title: 'Design move',
        text: 'Keep the upgrade economy tight — upgrades give a real edge without making the base game trivially easy. Diminishing returns keep high-level players challenged.',
      },
      {
        title: 'System depth',
        text: 'Adaptive difficulty, save state, enemy formation patterns, special abilities per ship class, and an audio manager all wired together without a framework.',
      },
    ],
    chips: ['Vanilla JS', 'Canvas API', 'Capacitor / iOS', 'Vercel', 'LocalStorage'],
    images: {
      primary: '/images/voidrift-gameplay.png',
      secondary: '/images/voidrift-hangar.png',
      phone: null,
    },
    iframeUrl: 'https://voidrift.vercel.app',
    iframeLabel: 'voidrift.vercel.app',
    theme: 'dark',
  },
];

const supportingProjects = [
  {
    title: 'Rival',
    label: 'Competitive intelligence',
    icon: Workflow,
    text: 'Tracks competitors, turns changes into briefings, and wraps the work in subscription and export logic.',
    chips: ['React', 'Supabase', 'Stripe', 'Briefings'],
    liveUrl: 'https://rival-alpha.vercel.app',
    codeUrl: 'https://github.com/astickleyid/rival',
  },
  {
    title: 'NWO Answering',
    label: 'Lead automation',
    icon: PhoneCall,
    text: 'Captures leads, scores urgency, sends instant SMS, and routes follow-up through a lightweight CRM flow.',
    chips: ['Node', 'Twilio', 'Lead scoring', 'Dashboard'],
    liveUrl: '',
    codeUrl: '',
  },
  {
    title: 'FinCoach AI',
    label: 'Consumer mobile',
    icon: Smartphone,
    text: 'Cross-platform finance coaching app with Firebase-backed state, subscriptions, and personalized AI tips.',
    chips: ['Flutter', 'Firebase', 'RevenueCat', 'OpenAI'],
    liveUrl: '',
    codeUrl: '',
  },
  {
    title: 'Agency Reporting Twin',
    label: 'Operator tooling',
    icon: Rocket,
    text: 'Turns GA4 exports and client packets into draft reports, review queues, and export bundles.',
    chips: ['Python', 'GA4 import', 'Review flow', 'Local UI'],
    liveUrl: '',
    codeUrl: '',
  },
  {
    title: 'Aura AR World',
    label: 'GPS AR web app',
    icon: MapPin,
    text: 'Drop geo-anchored pins on a live map with category filters, AR HUD overlay, and neighbor discovery powered by Overpass API.',
    chips: ['Canvas API', 'Geolocation', 'Overpass API', 'WebGL'],
    liveUrl: '',
    codeUrl: 'https://github.com/astickleyid/aura-ar-world',
  },
];

const principles = [
  {
    title: 'Hierarchy before decoration',
    icon: Layers3,
    text: 'The first read should be cheap. Lead with the thesis, then show proof, then let the deeper system work reveal itself.',
  },
  {
    title: 'Show the operating layer',
    icon: Workflow,
    text: 'The most valuable work is often behind the hero screen: billing, review logic, queues, exports, and operator flows.',
  },
  {
    title: 'AI is product behavior',
    icon: BrainCircuit,
    text: 'The model is not the product. The product is how output gets framed, constrained, reviewed, paid for, and turned into action.',
  },
];

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });

  return (
    <div className="app">
      <motion.div className="scroll-indicator" style={{ scaleX: progress }} />
      <StickyProjectNav />

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="site-header__brand" href="#top">
            <span className="site-header__mark">AS</span>
            <span>Austin Stickley</span>
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell hero__layout">
            <Reveal className="hero__copy">
              <span className="eyebrow">AI product engineer</span>
              <h1>
                Products with <span>taste</span>, system depth, and enough rigor to survive launch.
              </h1>
              <p className="hero__summary">
                I build AI-native products where the interface, backend behavior, business logic, and
                operator flows all come from the same idea instead of being bolted together at the end.
              </p>

              <Reveal delay={0.12}>
                <NowBuilding />
              </Reveal>

              <div className="hero__actions">
                <a className="button button--primary" href="#work">
                  Selected work
                </a>
                <a
                  className="button button--secondary"
                  href="https://github.com/astickleyid"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="hero__principles">
                <div className="hero__principle">
                  <Layers3 size={18} />
                  <span>Clear hierarchy, minimal filler.</span>
                </div>
                <div className="hero__principle">
                  <Workflow size={18} />
                  <span>Real systems, not surface-only polish.</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="hero__panel" delay={0.08}>
              <HeroBrowserMockup />
            </Reveal>
          </div>
        </section>

        <section className="section" id="work">
          <div className="shell section-heading">
            <Reveal>
              <span className="eyebrow">Selected work</span>
              <h2>Three projects that show the strongest mix of product judgment and technical execution.</h2>
            </Reveal>
          </div>

          <div className="shell flagship-list">
            {flagshipProjects.map((project, index) => (
              <div key={project.id} id={project.id}>
              <Reveal
                className={`flagship flagship--${project.theme} ${index % 2 === 1 ? 'flagship--reverse' : ''}`}
                delay={index * 0.08}
              >
                <div className="flagship__copy">
                  <span className="eyebrow">{project.label}</span>
                  <h3>{project.title}</h3>
                  <p className="flagship__summary">{project.summary}</p>

                  <div className="flagship__chips">
                    {project.chips.map((chip) => (
                      <span key={chip} className="pill">
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="flagship__support">
                    <div>
                      <span className="detail-label">Role</span>
                      <p>{project.role}</p>
                    </div>
                    <div>
                      <span className="detail-label">Why it matters</span>
                      <p>{project.proof}</p>
                    </div>
                  </div>

                  <div className="flagship__links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flagship__stage">
                  <DeviceSimulator
                    url={project.iframeUrl}
                    label={project.iframeLabel}
                    height={520}
                    scale={0.75}
                  />

                  <div className="flagship__bullets">
                    {project.bullets.map((bullet) => (
                      <article key={bullet.title} className="info-block">
                        <span className="detail-label">{bullet.title}</span>
                        <p>{bullet.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--supporting">
          <div className="shell supporting-layout">
            <Reveal className="supporting-layout__intro">
              <span className="eyebrow">Supporting systems</span>
              <h2>The rest of the work matters because it shows repeatability across very different product shapes.</h2>
            </Reveal>

            <div className="supporting-grid">
              {supportingProjects.map((project, index) => {
                const Icon = project.icon;

                return (
                  <Reveal key={project.title} className="supporting-card" delay={index * 0.05}>
                    <div className="supporting-card__icon">
                      <Icon size={20} />
                    </div>
                    <span className="supporting-card__label">{project.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="supporting-card__chips">
                      {project.chips.map((chip) => (
                        <span key={chip} className="pill">
                          {chip}
                        </span>
                      ))}
                    </div>
                    {(project.liveUrl || project.codeUrl) && (
                      <div className="supporting-card__links" style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', color: 'inherit', opacity: 0.7 }}>
                            Live <ArrowUpRight size={13} />
                          </a>
                        )}
                        {project.codeUrl && (
                          <a href={project.codeUrl} target="_blank" rel="noreferrer" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', color: 'inherit', opacity: 0.7 }}>
                            Code <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--approach" id="approach">
          <div className="shell">
            <Reveal className="section-heading">
              <span className="eyebrow">Approach</span>
              <h2>Design principles that actually change the work.</h2>
            </Reveal>

            <div className="approach-grid">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <Reveal key={principle.title} className="approach-card" delay={index * 0.06}>
                    <div className="approach-card__icon">
                      <Icon size={20} />
                    </div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="shell contact-layout">
            <Reveal className="contact-layout__copy">
              <span className="eyebrow">Contact</span>
              <h2>Best fit: products that need both a sharp interface and someone willing to own the hard parts behind it.</h2>
              <p>
                If the brief includes AI behavior, product design, implementation, billing, or the
                internal paths that usually get ignored until the end, I am likely useful.
              </p>

              <div className="contact-layout__links">
                <a href="mailto:astickleyid@gmail.com">astickleyid@gmail.com</a>
                <a href="https://github.com/astickleyid" target="_blank" rel="noreferrer">
                  github.com/astickleyid
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
