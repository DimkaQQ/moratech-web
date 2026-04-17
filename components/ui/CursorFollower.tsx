'use client';

import { m, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // ✅ Определяем тач-устройства для отключения курсора
    const checkTouchDevice = () => {
      const isTouch = 'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0 ||
                     window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
      if (!isTouch) setIsVisible(true);
    };

    checkTouchDevice();
  }, []);

  // ✅ Не рендерим на тач-устройствах (экономия ресурсов)
  if (!isVisible) return null;

  // ✅ RULE: rerender-motion-value - bypass React render cycle
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // ✅ RULE: spring-physics-based + spring-damping-ratio
  const springConfig = { stiffness: 400, damping: 25, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    // ✅ passive: true - не блокирует main thread
    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <m.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-teal-400/50 pointer-events-none z-[100] hidden md:block"
      style={{ 
        x: springX, 
        y: springY,
        // ✅ RULE: anim-opacity-filter вместо backdrop-blur
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
      }}
    />
  );
}