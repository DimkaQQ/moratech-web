'use client';

// RULE: rerender-motion-value + rerender-motion-value-event
import { m, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function MetricCounter({
  target,
  suffix = '+',
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  // RULE: rerender-motion-value - bypasses React render cycle
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  // Запуск анимации при появлении в viewport
  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 1.8, ease: 'easeOut' });
    return controls.stop;
  }, [inView, count, target]);

  // RULE: rerender-motion-value-event - обновляем DOM напрямую, 0 ре-рендеров
  useEffect(() => {
    if (!ref.current) return;
    
    // Начальное состояние для гидратации
    ref.current.textContent = `0${suffix}`;
    
    const unsubscribe = rounded.on('change', (latest) => {
      ref.current!.textContent = `${latest}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <m.span 
      ref={ref} 
      className="text-4xl font-bold bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent" 
    />
  );
}