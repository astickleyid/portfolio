import {
  ArrowUpRight,
  BrainCircuit,
  Gamepad2,
  Layers3,
  PhoneCall,
  Rocket,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ContactForm } from './components/ContactForm';
import { Reveal } from './components/Reveal';

const featuredIndex = [
  {
    title: 'nXcor',
    label: 'Creator platform',
    text: 'Feed, community, messaging, streaming, and mobile as one product system.',
  },
  {
    title: 'ClaruSign',
    label: 'AI legal SaaS',
    text: 'Paid contract review designed around clarity, trust, and useful output.',
  },
  {
    title: 'Rival + Ops builds',
    label: 'Supporting systems',
    text: 'Competitive intelligence, lead automation, mobile, and operator tooling.',
  },
];

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
    theme: 'ink',
  },
  {
    id: 'clarusign',
    label: '02 · AI legal SaaS',
    title: 'ClaruSign',
    summary:
      'ClaruSign was designed to feel more like a serious service product than a flashy AI demo. The emphasis is on legibility, trust, and action.',
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
        text: 'Document parsing, payment gating, serverless analysis, and readable output design all had to work as one experience.',
      },
    ],
    chips: ['Claude API', 'Stripe', 'Document parsing', 'Serverless', 'Report delivery'],
    images: {
      primary: '/images/clarusign.png',
    },
    theme: 'paper',
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
    title: 'VOID RIFT',
    label: 'Browser game',
    icon: Gamepad2,
    text: 'Twin-stick space shooter with ship selection, pilot levelling, upgrades, achievements, and a global leaderboard.',
    chips: ['Canvas API', 'Firebase', 'Game Center', 'iOS'],
    liveUrl: 'https://void-rift.vercel.app',
    codeUrl: '',
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
              <div className="hero-index">
                <div className="hero-index__list">
                  {featuredIndex.map((item) => (
                    <article key={item.title} className="hero-index__item">
                      <span>{item.label}</span>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="hero-stage hero-stage--ink">
                  <div className="hero-stage__main">
                    <img src="/images/nxcor-feed.png" alt="nXcor feed interface" />
                  </div>
                  <div className="hero-stage__phone">
                    <img src="/images/nxcor-phone-feed.png" alt="nXcor mobile interface" />
                  </div>
                  <div className="hero-stage__note">
                    <span className="detail-label">Flagship build</span>
                    <p>nXcor is where product direction, interface design, realtime behavior, and media infrastructure all meet.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="work">
          <div className="shell section-heading">
            <Reveal>
              <span className="eyebrow">Selected work</span>
              <h2>Two projects that show the strongest mix of product judgment and technical execution.</h2>
            </Reveal>
          </div>

          <div className="shell flagship-list">
            {flagshipProjects.map((project, index) => (
              <Reveal
                key={project.id}
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
                  <div className="flagship__visual">
                    <div className="flagship__visual-main">
                      <img src={project.images.primary} alt={`${project.title} primary view`} />
                    </div>

                    {project.images.secondary && (
                      <div className="flagship__visual-secondary">
                        <img src={project.images.secondary} alt={`${project.title} secondary view`} />
                      </div>
                    )}

                    {project.images.phone && (
                      <div className="flagship__visual-phone">
                        <img src={project.images.phone} alt={`${project.title} mobile view`} />
                      </div>
                    )}
                  </div>

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
