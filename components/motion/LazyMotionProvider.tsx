'use client';

// RULE: bundle-lazy-motion + bundle-strict-mode + bundle-dynamic-features
import { LazyMotion } from 'framer-motion';
import { ReactNode, Suspense, lazy } from 'react';

// RULE: bundle-dynamic-features - отложенная загрузка после hydration
const loadFeatures = () =>
  import('@/lib/motion-features').then((mod) => mod.default);

export function LazyMotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}