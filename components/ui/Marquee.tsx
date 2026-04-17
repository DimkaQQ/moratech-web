'use client';

import { m } from 'framer-motion';

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap gap-8">
      {/* RULE: anim-keyframes-array + anim-independent-transforms */}
      {[0, 1].map((set) => (
        <m.div
          key={set}
          className="flex gap-8 text-4xl font-bold text-neutral-700 uppercase tracking-tight"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {items.map((item, i) => (
            <span key={`${set}-${i}`}>{item}</span>
          ))}
        </m.div>
      ))}
    </div>
  );
}