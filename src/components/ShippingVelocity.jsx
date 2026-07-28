import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { shippedItems } from './RecentlyShipped';

/* ─── Derived stats ──────────────────────────────────────────── */

const TOTAL      = shippedItems.length;
const PROJECTS   = new Set(shippedItems.map((i) => i.project)).size;
const LAST_30D   = 15; // top-of-array slice represents recent shipping cadence

/* ─── Animated counter ───────────────────────────────────────── */

function Counter({ to, duration = 1000 }) {
  const [value, setValue] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const steps    = 40;
    const interval = duration / steps;
    let   current  = 0;

    timerRef.current = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * to));
      if (current >= steps) clearInterval(timerRef.current);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [to, duration]);

  return value;
}

/* ─── ShippingVelocity ───────────────────────────────────────── */

const stats = [
  { value: TOTAL,    label: 'features shipped', suffix: '+' },
  { value: PROJECTS, label: 'live apps',         suffix: ''  },
  { value: LAST_30D, label: 'shipped this month',suffix: ''  },
];

export function ShippingVelocity() {
  return (
    <motion.div
      className="shipping-velocity"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Shipping stats"
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="shipping-velocity__stat">
          <span className="shipping-velocity__num" aria-hidden="true">
            <Counter to={stat.value} duration={900 + i * 120} />
            {stat.suffix}
          </span>
          <span className="shipping-velocity__label">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
