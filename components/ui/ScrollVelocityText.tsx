'use client';

import { m, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function ScrollVelocityText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Отключаем тяжёлую анимацию на мобильных
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 
                  window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Статичный заголовок на мобильных (производительность)
    return (
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
        {text}
      </h1>
    );
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  // RULE: scroll-use-spring-smooth - плавность без джиттера
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // RULE: anim-independent-transforms - разные timing для каждого эффекта
  const skew = useTransform(smoothProgress, [0, 1], [0, 6]); // Уменьшили с 15 до 6
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.3]);

  return (
    <div ref={ref} className="relative py-20 overflow-hidden">
      <m.h1
        style={{ 
          skewX: skew,
          scale,
          opacity
        }}
        className="text-7xl md:text-9xl font-black tracking-tighter leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none"
      >
        {text}
      </m.h1>
    </div>
  );
}