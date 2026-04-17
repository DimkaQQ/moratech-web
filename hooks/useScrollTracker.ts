'use client';

// RULE: scroll-use-scroll + scroll-use-spring-smooth
import { useScroll, useSpring } from 'framer-motion';
import { useMemo } from 'react';

export function useScrollTracker() {
  const { scrollYProgress } = useScroll();
  
  // RULE: scroll-use-spring-smooth - физика для плавности, без ре-рендеров
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return smoothProgress;
}