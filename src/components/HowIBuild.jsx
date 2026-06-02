import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    id: 'shape',
    number: '01',
    label: 'Shape the problem',
    summary:
      'Define what done looks like before writing a line. User paths, edge cases, operator flows, and billing touchpoints all get mapped before the first component is scaffolded.',
    detail:
      'Most products fail in the brief, not the build. I treat the first phase as a forcing function: write the spec, sketch the key screens, name the hard tradeoffs. AI helps me iterate the spec quickly, but the judgment calls — what to cut, what the core loop is, what breaks first under load — stay on me.',
    terminal: [
      { type: 'comment', text: '# Start with the hard questions' },
      { type: 'prompt', text: 'What is the core user action?' },
      { type: 'output', text: '→ Upload PDF → pay → read report' },
      { type: 'prompt', text: 'What breaks first at scale?' },
      { type: 'output', text: '→ Claude latency, PDF parse limits' },
      { type: 'prompt', text: 'What does success look like at launch?' },
      { type: 'output', text: '→ 1 paid analysis, report reads cleanly' },
      { type: 'blank', text: '' },
      { type: 'comment', text: '# Ship the spec before the code' },
    ],
  },
  {
    id: 'scaffold',
    number: '02',
    label: 'Scaffold fast, stay in control',
    summary:
      'Use AI to generate boilerplate at speed — auth flows, data models, API shapes — while staying the author of every architectural decision.',
    detail:
      'AI handles the scaffolding velocity problem. I describe the shape of the system and let it generate the repetitive layers. But I read everything, restructure what needs restructuring, and own the data model. The risk in AI-assisted development is not bad code — it is losing the thread of what the system is actually doing.',
    terminal: [
      { type: 'comment', text: '# Describe the shape, own the output' },
      { type: 'prompt', text: 'claude "scaffold Supabase schema for: users, competitors, briefings, subscriptions — with RLS policies"' },
      { type: 'output', text: '✓ schema.sql generated' },
      { type: 'output', text: '✓ RLS policies drafted' },
      { type: 'output', text: '✓ TypeScript types inferred' },
      { type: 'blank', text: '' },
      { type: 'comment', text: '# Review every line before applying' },
      { type: 'prompt', text: 'review schema for edge cases...' },
      { type: 'output', text: '→ added cascade delete, fixed index gaps' },
    ],
  },
  {
    id: 'loop',
    number: '03',
    label: 'Build in tight loops',
    summary:
      'Ship a working slice every session. No long branches, no half-built features sitting open. Each commit is a step forward someone could actually use.',
    detail:
      'The AI-native loop is different from traditional sprints. I can go from idea to working UI in hours — but that speed creates a new discipline requirement. Every session ends with something testable. I resist the urge to "just add one more thing" before closing the loop. Working software beats well-architected prototypes.',
    terminal: [
      { type: 'comment', text: '# Small slices, fast feedback' },
      { type: 'prompt', text: 'git log --oneline -8' },
      { type: 'output', text: 'a3f2b1c feat: stripe webhook + access gate' },
      { type: 'output', text: 'e9d4a87 feat: PDF upload + parse endpoint' },
      { type: 'output', text: 'c7b3d92 feat: Claude analysis prompt v1' },
      { type: 'output', text: '4f1a6e3 feat: report renderer + risk scores' },
      { type: 'output', text: '8d2c5b1 fix: handle Claude timeout gracefully' },
      { type: 'output', text: '2a9f4c7 feat: email delivery via Resend' },
      { type: 'blank', text: '' },
      { type: 'comment', text: '# Each commit = shippable' },
    ],
  },
  {
    id: 'operator',
    number: '04',
    label: 'Build the operator layer',
    summary:
      'The product behind the product: the admin paths, error states, billing hooks, and review queues that keep the system working after launch.',
    detail:
      'Most demos skip the operator layer. I build it. Webhook handlers that don\'t silently fail. Error messages that help users recover. Admin views that let me debug production without SSH. Rate limits that degrade gracefully. These are boring to build and they are what keeps a product alive at month three.',
    terminal: [
      { type: 'comment', text: '# The stuff that keeps it alive' },
      { type: 'prompt', text: 'ls api/' },
      { type: 'output', text: 'analyze.js       webhook.js' },
      { type: 'output', text: 'contact.js       health.js' },
      { type: 'blank', text: '' },
      { type: 'prompt', text: 'cat api/webhook.js | grep "error"' },
      { type: 'output', text: '→ 3 explicit error paths handled' },
      { type: 'output', text: '→ retry logic on Stripe events' },
      { type: 'output', text: '→ idempotency keys on all writes' },
    ],
  },
  {
    id: 'ship',
    number: '05',
    label: 'Deploy and stay on it',
    summary:
      'Continuous deployment, runtime monitoring, and a bias toward fixing production issues the same day they appear. Shipping is not the end state.',
    detail:
      'Most portfolio projects are demos. Mine are deployed products. I use Vercel for frontend, Cloudflare for edge workers, and Supabase for persistence — a stack I can operate alone without a DevOps hire. When something breaks in production I fix it in production, not in a staging environment two weeks later.',
    terminal: [
      { type: 'comment', text: '# Production is the product' },
      { type: 'prompt', text: 'vercel deploy --prod' },
      { type: 'output', text: '✓ Build complete (12.4s)' },
      { type: 'output', text: '✓ Edge functions deployed (3)' },
      { type: 'output', text: '✓ Deployment live → clarusign.vercel.app' },
      { type: 'blank', text: '' },
      { type: 'prompt', text: 'vercel logs --follow' },
      { type: 'output', text: '200 POST /api/analyze  1842ms' },
      { type: 'output', text: '200 POST /api/webhook   44ms' },
    ],
  },
];

function TerminalLine({ line }) {
  if (line.type === 'blank') return <div style={{ height: '10px' }} />;

  const colors = {
    comment: 'rgba(255,255,255,0.28)',
    prompt: '#a3b4ff',
    output: 'rgba(240,240,240,0.65)',
  };

  const prefixes = {
    comment: '',
    prompt: '$ ',
    output: '',
  };

  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.76rem',
        lineHeight: 1.7,
        color: colors[line.type] ?? 'rgba(240,240,240,0.65)',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      }}
    >
      {line.type === 'prompt' && (
        <span style={{ color: '#22c55e', marginRight: '2px' }}>$</span>
      )}{' '}
      {line.text}
    </div>
  );
}

export function HowIBuild() {
  const [activeStep, setActiveStep] = useState(steps[0].id);
  const active = steps.find((s) => s.id === activeStep) ?? steps[0];

  return (
    <div className="how-i-build">
      {/* Step selector */}
      <div className="how-i-build__steps">
        {steps.map((step) => {
          const isActive = step.id === activeStep;
          return (
            <button
              key={step.id}
              className={`how-i-build__step${isActive ? ' is-active' : ''}`}
              onClick={() => setActiveStep(step.id)}
              aria-pressed={isActive}
            >
              <span className="how-i-build__step-num">{step.number}</span>
              <div className="how-i-build__step-text">
                <strong>{step.label}</strong>
                <span>{step.summary}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="how-i-build__panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="how-i-build__panel-inner"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Copy */}
            <div className="how-i-build__copy">
              <div className="how-i-build__copy-header">
                <span className="how-i-build__copy-num">{active.number}</span>
                <h3>{active.label}</h3>
              </div>
              <p>{active.detail}</p>
            </div>

            {/* Terminal */}
            <div className="how-i-build__terminal">
              <div className="how-i-build__terminal-chrome">
                <span className="how-i-build__terminal-dot how-i-build__terminal-dot--red" />
                <span className="how-i-build__terminal-dot how-i-build__terminal-dot--yellow" />
                <span className="how-i-build__terminal-dot how-i-build__terminal-dot--green" />
                <span className="how-i-build__terminal-title">terminal</span>
              </div>
              <div className="how-i-build__terminal-body">
                {active.terminal.map((line, i) => (
                  <TerminalLine key={i} line={line} />
                ))}
                <div
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '14px',
                    background: '#4f6fff',
                    borderRadius: '2px',
                    marginTop: '4px',
                    animation: 'cursor-blink 1.1s step-end infinite',
                    verticalAlign: 'text-bottom',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
