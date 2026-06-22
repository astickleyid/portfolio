import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RivalMockup } from './RivalMockup';
import { VoidRiftMockup } from './VoidRiftMockup';

function IframeSlide({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const scale = 0.72;
  return (
    <>
      <iframe
        src={src}
        title={alt}
        sandbox="allow-scripts allow-same-origin allow-forms"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          border: 'none',
          display: 'block',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.76rem',
          color: 'rgba(240,240,240,0.35)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          pointerEvents: 'none',
        }}>
          Loading…
        </div>
      )}
    </>
  );
}

const slides = [
  {
    id: 'nxcor',
    url: 'n-xcor.com',
    iframeSrc: 'https://n-xcor.com',
    label: 'Creator platform',
    badge: 'Live',
    badgeKind: 'live',
    img: '/images/nxcor-feed.png',
    alt: 'nXcor feed interface',
    accent: '#4f6fff',
    mockupComponent: null,
  },
  {
    id: 'clarusign',
    url: 'clarusign.vercel.app',
    iframeSrc: 'https://clarusign.vercel.app',
    label: 'AI legal SaaS',
    badge: 'Paid product',
    badgeKind: 'paid',
    img: '/images/clarusign.png',
    alt: 'ClaruSign contract analysis',
    accent: '#ff6d42',
    mockupComponent: null,
  },
  {
    id: 'rival',
    url: 'rival-alpha.vercel.app',
    iframeSrc: null,
    label: 'Competitive intel SaaS',
    badge: 'Live',
    badgeKind: 'live',
    img: null,
    alt: 'Rival competitive intelligence dashboard',
    accent: '#6366f1',
    mockupComponent: <RivalMockup />,
  },
  {
    id: 'voidrift',
    url: 'voidrift.vercel.app',
    iframeSrc: null,
    label: 'Browser game',
    badge: 'iOS + Web',
    badgeKind: 'live',
    img: null,
    alt: 'VOID RIFT twin-stick shooter',
    accent: '#4ade80',
    mockupComponent: <VoidRiftMockup />,
  },
];

const INTERVAL = 4000;

export function HeroBrowserMockup() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const slide = slides[current];

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, INTERVAL);
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [paused]);

  function goTo(index) {
    setCurrent(index);
    startTimer();
  }

  return (
    <div
      className="hero-browser"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Browser chrome */}
      <div className="hero-browser__chrome">
        <div className="hero-browser__dots">
          <span className="hero-browser__dot hero-browser__dot--red" />
          <span className="hero-browser__dot hero-browser__dot--yellow" />
          <span className="hero-browser__dot hero-browser__dot--green" />
        </div>

        <div className="hero-browser__bar">
          <span className="hero-browser__lock">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
              <rect x="1.5" y="5" width="7" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
              <path d="M2.5 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.url}
              className="hero-browser__url"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {slide.url}
            </motion.span>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.span
            key={slide.badge}
            className={`hero-browser__badge hero-browser__badge--${slide.badgeKind}`}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.24 }}
          >
            {slide.badge}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Screenshot viewport */}
      <div className="hero-browser__viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="hero-browser__screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {slide.mockupComponent ? (
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                {slide.mockupComponent}
              </div>
            ) : slide.iframeSrc ? (
              <IframeSlide src={slide.iframeSrc} alt={slide.alt} />
            ) : slide.img ? (
              <img src={slide.img} alt={slide.alt} draggable={false} />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators + label */}
      <div className="hero-browser__footer">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.label}
            className="hero-browser__slide-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {slide.label}
          </motion.span>
        </AnimatePresence>

        <div className="hero-browser__dots-nav" role="tablist" aria-label="Project slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Show ${s.label}`}
              className={`hero-browser__dot-btn ${i === current ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            >
              {i === current && (
                <motion.span
                  className="hero-browser__dot-fill"
                  layoutId="dot-fill"
                  style={{ background: slide.accent }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`${current}-progress`}
          className="hero-browser__progress"
          style={{ background: slide.accent }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
        />
      )}
    </div>
  );
}

