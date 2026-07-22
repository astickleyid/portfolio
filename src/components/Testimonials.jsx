import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      "Austin built our AI answering system in weeks, not months. It handles 300+ calls a day and the quality is indistinguishable from a human agent. Best technical investment we\u2019ve made.",
    name: 'Marcus T.',
    role: 'Operations Director',
    company: 'Home Services Co.',
    initials: 'MT',
  },
  {
    quote:
      "The contract review tool he shipped for us went from idea to live product in under 3 weeks. Robust, clean, and actually works. He understands how to build AI products that don\u2019t break.",
    name: 'Sarah K.',
    role: 'Founder',
    company: 'LegalTech Startup',
    initials: 'SK',
  },
  {
    quote:
      "Most developers say they \u2018work with AI.\u2019 Austin actually ships AI products. The dashboard he built cut our analyst team\u2019s weekly reporting time by 70%.",
    name: 'Jordan R.',
    role: 'Head of Strategy',
    company: 'Growth Agency',
    initials: 'JR',
  },
];

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        background: 'var(--surface, #111111)',
        border: '1px solid var(--border, #222222)',
        borderRadius: '16px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative quotation mark */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '16px',
          right: '24px',
          fontSize: '5rem',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.045)',
          fontFamily: 'Georgia, serif',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p
        style={{
          fontSize: '0.97rem',
          lineHeight: 1.75,
          color: 'rgba(240,240,240,0.82)',
          margin: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Avatar */}
        <div
          aria-hidden="true"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4f6fff 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
          }}
        >
          {testimonial.initials}
        </div>

        {/* Name + role */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'rgba(240,240,240,0.92)',
            }}
          >
            {testimonial.name}
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'rgba(240,240,240,0.45)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}
    >
      {testimonials.map((t, i) => (
        <TestimonialCard key={t.initials} testimonial={t} index={i} />
      ))}
    </div>
  );
}
