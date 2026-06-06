import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_PILLS = [
  { label: 'nXcor', id: 'nxcor' },
  { label: 'ClaruSign', id: 'clarusign' },
  { label: 'VOID RIFT', id: 'voidrift' },
  { label: 'Rival', id: 'rival' },
  { label: 'Process', id: 'process' },
];

const SECTION_IDS = NAV_PILLS.map((p) => p.id);

export function StickyProjectNav() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const hero = document.querySelector('.hero');

    function onScroll() {
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setVisible(heroBottom < 0);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-10% 0px -80% 0px',
      }
    );

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="sticky-project-nav"
          aria-label="Project navigation"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sticky-project-nav__inner">
            {NAV_PILLS.map((pill) => {
              const isActive = pill.id === activeId;
              return (
                <button
                  key={pill.id}
                  className={`sticky-project-nav__pill${isActive ? ' sticky-project-nav__pill--active' : ''}`}
                  onClick={() => scrollTo(pill.id)}
                  type="button"
                  style={isActive ? {
                    background: 'var(--accent, #6366f1)',
                    color: '#fff',
                    borderColor: 'var(--accent, #6366f1)',
                  } : undefined}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
