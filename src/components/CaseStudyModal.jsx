import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

/* ─── Per-project case study content ─── */
const caseStudies = {
  nxcor: {
    problem:
      'Creator tools are fragmented — streaming platforms handle video, Discord handles communities, and SMS apps handle DMs. Building a following across all three means constant context-switching and zero ownership of your audience. There was no single platform a creator could treat as their studio.',
    built:
      'nXcor is a full-stack creator platform that handles live RTMP ingest, HLS adaptive playback, real-time community feeds, and direct messaging in one Node/Express monolith backed by SQLite WAL. A Capacitor shell wraps the web app into a native iOS experience with push notification hooks. The server is the studio — no third-party streaming relay, no external chat service.',
    decisions: [
      'SQLite WAL over PostgreSQL — single-file simplicity and WAL concurrency handles 100s of concurrent viewers without a separate DB server or managed connection pool.',
      'RTMP ingest → HLS transcode on the same Node process using ffmpeg child processes — removes a CDN dependency for early-stage load and keeps the streaming path fully under code control.',
      'Capacitor over React Native — shares 100% of the web codebase so every feature ships to iOS automatically, with native push notifications wired through a single plugin.',
    ],
    impact:
      'nXcor is live at n-xcor.com with working streams, community rooms, and DM threads. The iOS build runs on device via Capacitor. The architecture is designed to hand off to a CDN (Cloudflare Stream or Mux) once audience scale demands it, without changing the frontend or ingest layer.',
  },
  clarusign: {
    problem:
      'Reading a contract solo is overwhelming — you either pay a lawyer $400/hr for a quick review or you sign blind and hope for the best. Most people skip reading entirely. There was a clear gap between \u201clegal review is expensive\u201d and \u201cAI can read PDFs,\u201d but no tool that bridged them cleanly for individuals and small businesses.',
    built:
      'ClaruSign lets users upload a contract PDF, which is parsed client-side with PDF.js and sent section-by-section to the Claude API for structured risk analysis. The AI returns flagged clauses, plain-English explanations, suggested revisions, and a ready-to-send negotiation email draft — all in one flow. Supabase handles auth and document storage; Stripe gates access to the full review behind a subscription.',
    decisions: [
      'PDF.js extraction client-side rather than server-side keeps raw document bytes off the server, which matters for legal content and simplifies GDPR surface area.',
      'Structured output prompting forces Claude to return JSON with consistent fields (risk_level, clause_text, explanation, revision) so the UI renders predictably regardless of contract type.',
      'Supabase Row Level Security gates every document record to the owning user, so no backend middleware needs to enforce access control — the database does it.',
    ],
    impact:
      'ClaruSign is deployed at clarusign.vercel.app with full end-to-end review flow, Stripe subscription gating, and Supabase-backed storage. It handles NDAs, freelance contracts, and lease agreements in testing. The negotiation email output is the most-used feature in early feedback.',
  },
  voidrift: {
    problem:
      'Most browser games are built with Unity WebGL or Phaser, which abstract away the engine. I wanted to understand how a game actually works at the loop level — collision math, enemy state machines, upgrade economies, particle systems — without reaching for a library. The constraint was zero engines, just a Canvas 2D context.',
    built:
      'VOID RIFT is a twin-stick shooter built entirely in vanilla JavaScript against the Canvas 2D API. It has a fixed game loop at 60fps, spatial grid collision detection, a wave-based mission system with escalating boss encounters, an upgrade economy with persistent currency, and a particle system for all visual effects. A Capacitor build wraps it into a native iOS app distributed via TestFlight.',
    decisions: [
      'Fixed-timestep game loop with requestAnimationFrame and a delta accumulator ensures physics and collision are frame-rate independent — the game runs identically at 30fps and 120fps.',
      'Spatial grid partitioning over naive O(n²) collision — at peak enemy count (150+ projectiles + enemies), naive collision detection dropped to 30fps; the grid keeps it above 58fps.',
      'LocalStorage for upgrade persistence rather than a backend — removes auth, reduces latency, and lets the game run fully offline, which is essential for an iOS app with no network dependency.',
    ],
    impact:
      'VOID RIFT is live on Vercel and ships as an iOS app via Capacitor/TestFlight. It runs at 60fps on a mid-range mobile device with 100+ simultaneous entities. The project was a deliberate learning constraint — understanding the engine layer changed how I think about every framework I use on top of it.',
  },
  fieldline: {
    problem:
      'Small trade businesses — HVAC, plumbing, electrical, lawn care — run on scattered WhatsApp threads, Excel job lists, and manual follow-up calls. Every tool built for them (ServiceTitan, Jobber) is overbuilt and expensive. I ran Grasslane Lawn Co. in Toledo and felt this directly: we had leads falling through the cracks and no system connecting lead capture, job scheduling, and customer follow-up.',
    built:
      'Fieldline is a white-label CRM for trade operators. It covers the full job lifecycle from lead capture form through job pipeline to invoice, with automated SMS/email sequences at each stage handled by Upstash Redis queues. An AI quoting module takes job details and uses the Anthropic API to generate scope-aware estimates. The white-label layer lets operators configure branding, pricing tiers, and automation rules through an admin dashboard.',
    decisions: [
      'Upstash Redis for job queues over a traditional message broker — serverless-native, no infra to provision, and the free tier handles the throughput of a small trade business indefinitely.',
      'Iron Session for auth over NextAuth — lightweight, zero DB dependency for session storage, and the encrypted cookie approach matches the security posture of a small business tool that needs to be simple to self-host.',
      'AI quoting via Anthropic API with operator-supplied pricing context injected into the system prompt — lets each operator teach the model their rate card without any fine-tuning or custom model deployment.',
    ],
    impact:
      'Fieldline is deployed at fieldline-app.vercel.app with a full showcase demo including the job pipeline, lead capture flow, AI quoting, and SMS automation. The white-label operator controls are functional. It came directly from running a real trade business and reflects what that actually needs — not what SaaS founders assume it needs.',
  },
  rival: {
    problem:
      'Keeping tabs on competitors is high-value work that almost nobody does consistently, because it requires manual visiting, reading, comparing, and synthesizing across dozens of URLs on a recurring basis. Product teams want competitive intelligence but the workflow to produce it is too expensive in time and attention.',
    built:
      'Rival monitors a list of competitor URLs on a configurable schedule, diffs the content against the previous snapshot, and runs each change through the Anthropic API to produce a structured briefing with signal ratings (high/medium/low), a summary, and suggested implications. Changes are visualized as heatmaps over the page. Users get digest views aggregating signals across all competitors, and a Stripe subscription gates access to full history and multiple-competitor tracking.',
    decisions: [
      'Supabase for both auth and snapshot storage — the competitor content snapshots are stored as text in Postgres rather than object storage, which makes full-text diff queries fast without a separate search layer.',
      'Signal rating as a first-class data model field rather than inferred from copy — the AI outputs a structured rating object, not prose, so the heatmap and digest views can filter and sort without re-processing.',
      'Stripe metered billing tied to competitor seat count rather than usage volume — trade businesses understand \u201cseats\u201d intuitively; usage-based billing requires users to predict their own behavior, which kills conversion.',
    ],
    impact:
      'Rival is deployed at rival-alpha.vercel.app with working competitor tracking, AI briefings, heatmaps, digest views, and Stripe subscription gating. The TypeScript migration from the initial React prototype improved the reliability of the structured AI output parsing and eliminated a class of runtime errors in the heatmap renderer.',
  },
};

/* ─── Modal ─── */
export function CaseStudyModal({ project, onClose }) {
  const cs = caseStudies[project.id];

  /* Close on ESC */
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    /* Lock body scroll */
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!cs) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="cs-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.82)',
          zIndex: 1000,
        }}
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-title"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: 680,
            maxHeight: 'calc(100vh - 48px)',
            overflowY: 'auto',
            background: 'var(--bg-2)',
            border: '1px solid rgba(250,250,250,0.1)',
            borderRadius: 'var(--r-2)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 16,
              padding: '24px 28px 20px',
              borderBottom: '1px solid rgba(250,250,250,0.08)',
              position: 'sticky',
              top: 0,
              background: 'var(--bg-2)',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'grid', gap: 6 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.20em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {project.number} · {project.label}
              </span>
              <h2
                id="cs-title"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'var(--ink-60)',
                  margin: 0,
                  lineHeight: 1.5,
                  maxWidth: 480,
                }}
              >
                {project.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close case study"
              style={{
                flexShrink: 0,
                display: 'grid',
                placeItems: 'center',
                width: 32,
                height: 32,
                border: '1px solid rgba(250,250,250,0.15)',
                borderRadius: 'var(--r-2)',
                color: 'var(--ink-60)',
                transition: 'color 0.18s, border-color 0.18s',
                cursor: 'pointer',
                background: 'none',
                marginTop: 2,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--ink)';
                e.currentTarget.style.borderColor = 'rgba(250,250,250,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--ink-60)';
                e.currentTarget.style.borderColor = 'rgba(250,250,250,0.15)';
              }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '28px 28px 32px', display: 'grid', gap: 32 }}>
            {/* The Problem */}
            <CsSection label="The Problem">
              <p style={bodyTextStyle}>{cs.problem}</p>
            </CsSection>

            {/* What I Built */}
            <CsSection label="What I Built">
              <p style={bodyTextStyle}>{cs.built}</p>
            </CsSection>

            {/* Key Technical Decisions */}
            <CsSection label="Key Technical Decisions">
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
                {cs.decisions.map((d, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: 5,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        display: 'block',
                      }}
                      aria-hidden="true"
                    />
                    <p style={{ ...bodyTextStyle, margin: 0 }}>{d}</p>
                  </li>
                ))}
              </ul>
            </CsSection>

            {/* Impact / Status */}
            <CsSection label="Impact / Status">
              <p style={bodyTextStyle}>{cs.impact}</p>
            </CsSection>

            {/* Stack chips */}
            <CsSection label="Stack">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </CsSection>

            {/* Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 4 }}>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn${link.primary ? ' btn--primary' : ''}`}
                >
                  {link.label}
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Section helper ─── */
function CsSection({ label, children }) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h3
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)',
          margin: 0,
          fontWeight: 500,
        }}
      >
        {label}
      </h3>
      {children}
    </div>
  );
}

const bodyTextStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  lineHeight: 1.65,
  color: 'var(--ink-80)',
  margin: 0,
};
