'use client';

// RULE: anim-opacity-filter + spring-physics-based + rerender-variants-object
import { m } from 'framer-motion';
import { ReactNode } from 'react';

// RULE: rerender-variants-object - объявлен вне компонента, стабильная ссылка
const revealVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
} as const;

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}