'use client';

// RULE: anim-hardware-acceleration + anim-opacity-filter
import { m } from 'framer-motion';
import { useMemo } from 'react';

const PARTICLE_COUNT = 30;

export function ParticleField() {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 6}s`,
    })),
  []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <m.div
          key={p.id}
          className="absolute w-0.5 h-0.5 rounded-full bg-teal-400"
          style={{ left: p.left, bottom: '-10px' }}
          animate={{
            y: ['-100vh', '-10vh'],
            opacity: [0, 0.5, 0.5, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: parseFloat(p.duration),
            delay: parseFloat(p.delay),
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
}