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
        <span className="now-building__project-name">Rival</span>
        <span className="now-building__project-desc"> · competitive intelligence SaaS</span>
      </span>
    </motion.div>
  );
}
