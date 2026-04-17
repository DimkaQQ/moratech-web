'use client';

import { m, AnimatePresence } from 'framer-motion';
import { useState, MouseEvent } from 'react';

// ✅ RULE: rerender-variants-object - стабильные ссылки, `as const`
const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 },
  tap: { scale: 0.98, y: 0 },
} as const;

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 12, scale: 1.15 },
} as const;

const textVariants = {
  rest: { color: '#9CA3AF' },
  hover: { color: '#FFFFFF' },
} as const;

interface Metric { 
  label: string; 
  value: string; 
}

interface BentoCardProps {
  className?: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: string;
  description?: string;
  metrics?: Metric[];
  layoutId?: string;
}

export function BentoCard({ 
  className = '', 
  title, 
  subtitle, 
  tag, 
  icon, 
  description,
  metrics,
  layoutId 
}: BentoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* ✅ RULE: gesture-while-props + gesture-variants-flow + layout-id-shared */}
      <m.div
        layoutId={layoutId}
        className={`relative rounded-3xl p-8 overflow-hidden cursor-pointer group border border-white/5 bg-neutral-900/80 ${className}`}
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[0.65rem] font-semibold tracking-wider text-neutral-300 border border-white/10 mb-4 uppercase">
              {tag}
            </span>
            <div className="flex items-start justify-between mb-3">
              <m.div variants={iconVariants} className="text-3xl">{icon}</m.div>
            </div>
            <m.h3 variants={textVariants} className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-neutral-200">
              {title}
            </m.h3>
            <p className="text-neutral-500 text-sm">{subtitle}</p>
          </div>
          
          {metrics && (
            <div className="flex gap-6 mt-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-xl font-bold text-teal-400">{m.value}</div>
                  <div className="text-[0.6rem] uppercase tracking-wider text-neutral-600">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* ✅ RULE: anim-opacity-filter вместо backdrop-blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </m.div>

      {/* ✅ RULE: exit-animate-presence + layout-id-shared */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <m.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <m.div
              layoutId={layoutId}
              className="relative w-full max-w-3xl rounded-3xl bg-neutral-900 border border-white/10 p-10 shadow-2xl"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                ✕
              </button>
              
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-5 mb-6">
                  <span className="text-5xl">{icon}</span>
                  <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white">{title}</h2>
                    <p className="text-lg text-neutral-400">{subtitle}</p>
                  </div>
                </div>
                
                {description && (
                  <p className="text-lg leading-relaxed text-neutral-300 border-l-2 border-teal-500 pl-5 bg-neutral-800/30 p-4 rounded-r-lg">
                    {description}
                  </p>
                )}
                
                {metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    {metrics.map((m) => (
                      <div key={m.label} className="bg-neutral-800/50 p-5 rounded-2xl border border-white/5">
                        <div className="text-3xl font-bold text-teal-400 mb-2">{m.value}</div>
                        <div className="text-xs text-neutral-500 uppercase tracking-widest">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6 flex gap-4">
                  <button className="flex-1 py-3.5 bg-white text-neutral-950 font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform">
                    View Full Case
                  </button>
                  <button className="px-6 py-3.5 bg-neutral-800 text-white font-semibold rounded-xl hover:bg-neutral-700 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}