import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyProjectNav({ projects = [] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      setVisible(hero.getBoundingClientRect().bottom < 0);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="sticky-nav"
          aria-label="Project navigation"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="sticky-nav__btn"
              onClick={() => scrollTo(project.id)}
            >
              <span className="sticky-nav__btn-num">{project.number}</span>
              <span>{project.title}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
