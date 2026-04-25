import { motion, useReducedMotion } from 'motion/react';

export function Reveal({ children, className = '', delay = 0, as: Component = 'div' }) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion.create(Component);

  if (reduceMotion) {
    return <MotionComponent className={className}>{children}</MotionComponent>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
