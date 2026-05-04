import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_PILLS = [
  { label: 'nXcor', id: 'nxcor' },
  { label: 'ClaruSign', id: 'clarusign' },
  { label: 'VOID RIFT', id: 'voidrift' },
  { label: 'Rival', id: 'rival' },
];

export function StickyProjectNav() {
  const [visible, setVisible] = useState(false);

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
            {NAV_PILLS.map((pill) => (
              <button
                key={pill.id}
                className="sticky-project-nav__pill"
                onClick={() => scrollTo(pill.id)}
                type="button"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
