import { motion } from 'motion/react';

export function NowBuilding() {
  return (
    <motion.div
      className="now-building"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="now-building__dot" aria-hidden="true" />
      <span className="now-building__label">Now building</span>
      <span className="now-building__sep" aria-hidden="true">▶</span>
      <span className="now-building__project">
        <a
          className="now-building__project-name"
          href="https://rival-alpha.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >Rival</a>
        <span className="now-building__project-desc" aria-hidden="true"> · </span>
        <a
          className="now-building__project-name"
          href="https://voidrift.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >VOID RIFT</a>
        <span className="now-building__project-desc" aria-hidden="true"> · </span>
        <span className="now-building__project-name">Portfolio</span>
      </span>
    </motion.div>
  );
}
