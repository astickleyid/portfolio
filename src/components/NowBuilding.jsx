import { motion } from 'motion/react';
import { shippedItems } from './RecentlyShipped';

function relativeShipped(isoDate) {
  if (!isoDate) return null;
  const diffMs   = Date.now() - new Date(isoDate).getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'shipped today';
  if (diffDays === 1) return 'shipped 1d ago';
  return `shipped ${diffDays}d ago`;
}

export function NowBuilding() {
  const lastShippedLabel = relativeShipped(shippedItems[0]?.shippedAt);

  return (
    <motion.div
      className="now-building"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="now-building__dot" aria-hidden="true" />
      <span className="now-building__lbl">Now building</span>
      <span className="now-building__sep" aria-hidden="true">/</span>
      <span className="now-building__name">Rival</span>
      <span className="now-building__desc">· immediate change-alert email — on-the-spot notification when daily cron detects competitor diffs</span>
      {lastShippedLabel && (
        <span style={{ color: 'rgba(255,255,255,0.28)', marginLeft: '0.5em' }}>· {lastShippedLabel}</span>
      )}
    </motion.div>
  );
}
