import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ContactForm } from './components/ContactForm';
import { DeviceSimulator } from './components/DeviceSimulator';
import { HowIBuild } from './components/HowIBuild';
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
    tagline:
      'A live streaming and community platform where the server is the studio — feed, communities, DMs, RTMP ingest, HLS playback, and an iOS shell.',
    chips: ['React', 'Node / Express', 'Socket.IO', 'SQLite WAL', 'RTMP / HLS', 'Capacitor'],
    iframeUrl: 'https://n-xcor.com',
    iframeLabel: 'n-xcor.com',
    image: '/nxcor-live.png',
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
    tagline:
      'Upload a contract, get a structured AI review — risk-scored clauses, plain-English explanations, suggested revisions, and a draft negotiation email.',
    chips: ['React', 'Claude API', 'PDF.js', 'Supabase', 'Stripe'],
    iframeUrl: 'https://clarusign.com',
    iframeLabel: 'clarusign.com',
    links: [
      { label: 'Open app', href: 'https://clarusign.com', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/clarusign' },
    ],
  },
  {
    id: 'voidrift',
    number: '03',
    label: 'Browser game',
    title: 'VOID RIFT',
    tagline:
      'A full twin-stick shooter built with no engine — missions, an upgrade economy, boss waves, and an iOS shell, all in vanilla JS and Canvas.',
    chips: ['Vanilla JS', 'Canvas API', 'Capacitor / iOS', 'Vercel', 'LocalStorage'],
    iframeUrl: '/games/voidrift',
    iframeLabel: 'VOID RIFT',
    links: [
      { label: 'Play live', href: '/games/voidrift', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/shooter-app' },
    ],
  },
  {
    id: 'fieldline',
    number: '04',
    label: 'White-label CRM',
    title: 'Fieldline',
    tagline:
      'A CRM for small trade businesses — lead pipeline, AI quoting in the owner’s voice, scheduling, invoicing, reviews, and automations that run themselves.',
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
    tagline:
      'Monitors competitor sites, pricing, and changelogs, then turns every change into an AI-written briefing — with signal ratings and a Stripe subscription layer.',
    chips: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
    iframeUrl: 'https://rival-alpha.vercel.app',
    iframeLabel: 'rival-alpha.vercel.app',
    links: [
      { label: 'Open app', href: 'https://rival-alpha.vercel.app', primary: true },
      { label: 'Code', href: 'https://github.com/astickleyid/rival' },
    ],
  },
];

const stack = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion', 'Vite'] },
  { category: 'Backend', techs: ['Node.js', 'Express', 'FastAPI', 'Socket.IO', 'REST'] },
  { category: 'AI & models', techs: ['Claude API', 'OpenAI', 'Ollama', 'Phi-3', 'Llama 3'] },
  { category: 'Data', techs: ['Supabase', 'PostgreSQL', 'Upstash Redis', 'SQLite WAL'] },
  { category: 'Mobile', techs: ['Capacitor', 'iOS Native', 'React Native'] },
  { category: 'Infra', techs: ['Vercel', 'Cloudflare', 'GitHub Actions', 'Docker'] },
];

const aboutLanes = [
  { lane: 'Engineering', desc: 'Full-stack, mobile, backend, CLI, automation, AI agents' },
  { lane: 'Product', desc: 'Workflows, systems, user value, monetization' },
  { lane: 'Design', desc: 'Premium UI instincts, brand direction, visual consistency' },
  { lane: 'Ownership', desc: 'Ideas taken end-to-end — spec, build, deploy, support' },
  { lane: 'AI-native', desc: 'Agents, automation, local models, orchestration layers' },
  { lane: 'Creative', desc: 'Branding, audio, streaming, visual identity' },
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
            <a href="#process">Process</a>
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
                <h1 id="hero-title" className="hero__title">Austin Stickley</h1>
                <p className="hero__subtitle">
                  AI-native builder. Solo founder. <em>Full stack, fully shipped.</em>
                </p>

                <NowBuilding />

                <div className="hero__cta">
                  <a className="btn btn--primary" href="#work">
                    Selected work
                    <ArrowUpRight />
                  </a>
                  <a
                    className="btn"
                    href="/Austin-Stickley-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
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
                  <a className="btn" href="#contact">
                    Get in touch
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
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 01 / Selected work ]</span>
              </div>
              <Reveal>
                <h2 id="work-title" className="section__title">
                  Five products, <em>live</em> and in production.
                </h2>
                <p className="section__lede">
                  Each one designed, built, and shipped end-to-end — solo.
                </p>
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
                        image={project.image}
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
                <div className="section__head-meta">
                  <span className="section__index">[ 02 / About ]</span>
                </div>
                <h2 id="about-title" className="section__title">Background</h2>

                <p className="about__lead">
                  I&rsquo;m <strong>Austin Michael Stickley</strong>, a solo full-stack
                  builder in Toledo, Ohio. I design and ship complete products —
                  architecture, frontend, backend, and AI integration — using Claude as
                  my primary execution layer. I&rsquo;m drawn to the gaps most software
                  leaves open: workflows split across five disconnected tools, or
                  &ldquo;AI features&rdquo; that are just a chatbot bolted onto an old interface.
                </p>

                <div className="about__lanes">
                  {aboutLanes.map((l) => (
                    <div key={l.lane} className="about__lane">
                      <div className="about__lane-title">{l.lane}</div>
                      <div className="about__lane-desc">{l.desc}</div>
                    </div>
                  ))}
                </div>

                <p>
                  I hold my own work to a clear bar: dark, premium, restrained — closer
                  to what teams like Vercel or Linear ship than a typical side project.
                  That applies whether it&rsquo;s a landing page or a full production app.
                </p>

                <div className="about__callout">
                  <span className="about__callout-text">&ldquo;Full stack. Fully shipped.&rdquo;</span>
                  <span className="about__callout-attr">The standard behind every product here</span>
                </div>

                <p>
                  Before software, I ran Grasslane Lawn Co. in Toledo — direct,
                  ground-level exposure to how small trade businesses operate. Fieldline
                  and NWO Answering both grew out of that. I also run local LLM
                  deployments (Ollama, Phi-3, Llama 3) to prototype multi-agent workflows
                  before anything goes near production.
                </p>

                <div className="about__facts">
                  {[
                    { label: 'Based', value: 'Toledo, Ohio — Northwest Ohio / Detroit area' },
                    { label: 'Focus', value: 'AI product engineering, full-stack, solo founder' },
                    { label: 'Companies', value: 'Stickley AI · Grasslane Lawn Co.' },
                    { label: 'Status', value: 'Open to work — AI integration, product engineering, full-stack' },
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

        {/* Process — how I build + stack, merged */}
        <section className="section" id="process" aria-labelledby="process-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 03 / Process ]</span>
              </div>
              <Reveal>
                <h2 id="process-title" className="section__title">
                  How the work <em>actually</em> gets built.
                </h2>
                <p className="section__lede">
                  Most products fail at the seams between design, code, AI behavior, and
                  billing. I remove those seams by owning all of them.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <HowIBuild />
            </Reveal>

            <Reveal>
              <div className="stack-grid">
                {stack.map(({ category, techs }) => (
                  <div key={category} className="stack-card">
                    <div className="stack-card__cat">{category}</div>
                    <div className="flagship__chips">
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

        {/* Contact */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="section__head">
              <div className="section__head-meta">
                <span className="section__index">[ 04 / Contact ]</span>
              </div>
            </div>

            <div className="contact">
              <Reveal>
                <h2 id="contact-title" className="contact__title">
                  Let&rsquo;s build <em>something</em>.
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
                  <a className="contact__line" href="/Austin-Stickley-Resume.pdf" target="_blank" rel="noreferrer">
                    <span>Resume</span>
                    <span>Download PDF</span>
                  </a>
                  <div className="contact__line">
                    <span>Based</span>
                    <span>Toledo / Detroit · open to relocation</span>
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
