'use client';

import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// ✅ RULE: rerender-variants-object - стабильные ссылки
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Case Studies' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const langMenuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.15 } 
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    scale: 0.95, 
    transition: { duration: 0.1 } 
  },
} as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  
  // ✅ RULE: scroll-use-scroll - аппаратное ускорение скролла
  const { scrollY } = useScroll();
  
  // ✅ RULE: rerender-use-transform - мапим сразу на строку (без .to())
  const backgroundColor = useTransform(
    scrollY,
    [0, 30],
    ['rgba(6,6,7,0.75)', 'rgba(6,6,7,0.95)']
  );

  // Закрываем меню при клике вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <m.header
      className="fixed top-0 left-0 right-0 h-17 z-100 transition-colors duration-300"
      // ✅ RULE: anim-opacity-filter вместо backdrop-blur (производительность)
      style={{
        backgroundColor, // ✅ MotionValue<string> — без .to()
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8">
        <Link 
          href="/" 
          className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight no-underline"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center text-white font-bold text-sm relative overflow-hidden">
            M
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />
          </div>
          <span>Mora<span className="text-teal-400">Tech</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-400 hover:text-white text-sm font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:translate-y-[-1px] hover:shadow-[0_8px_24px_-4px_rgba(20,184,166,0.4)] transition-all no-underline"
          >
            Get Free Estimate
          </Link>

          <div className="relative" ref={langRef}>
            {/* ✅ RULE: gesture-while-props - оптимизированные жесты */}
            <m.button
              className="bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-neutral-400 flex items-center gap-1.5 hover:border-teal-500 hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Toggle language"
            >
              🌐 <span className="text-[0.6em]">▼</span>
            </m.button>
            
            {/* ✅ RULE: exit-animate-presence + exit-mode-wait */}
            <AnimatePresence mode="wait">
              {langOpen && (
                <m.div
                  className="absolute top-full right-0 mt-2 bg-neutral-900 border border-white/10 rounded-lg p-1.5 min-w-40 shadow-xl z-50"
                  variants={langMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {[
                    { code: 'en', label: '🇬 English' },
                    { code: 'de', label: '🇩🇪 Deutsch' },
                    { code: 'fr', label: '🇫🇷 Français' },
                    { code: 'ru', label: '🇷🇺 Русский' },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-2.5 py-2 rounded-md text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                      onClick={() => setLangOpen(false)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button
          className="md:hidden text-white text-xl p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ✅ RULE: exit-animate-presence для мобильного меню */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <m.div
            className="fixed inset-0 top-17 bg-[#060607] flex flex-col p-8 gap-5 z-99 md:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl text-neutral-400 hover:text-white font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}