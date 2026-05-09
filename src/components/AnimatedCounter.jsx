import { useEffect, useRef, useState } from 'react';

const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

export function AnimatedCounter({ target, duration = 1200, suffix = '', className = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          if (target === 0) {
            setCount(0);
            return;
          }

          const startTime = performance.now();

          const tick = now => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            }
          };

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className={className}>
      {count}{suffix}
    </span>
  );
}

export default AnimatedCounter;
