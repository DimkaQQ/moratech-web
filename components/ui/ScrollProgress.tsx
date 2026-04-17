'use client';

// RULE: scroll-use-scroll + anim-transform-properties
import { m } from 'framer-motion';
import { useScrollTracker } from '@/hooks/useScrollTracker';

export function ScrollProgress() {
  const scaleX = useScrollTracker();

  return (
    <m.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400 origin-left z-[200]"
      style={{ scaleX }}
    />
  );
}