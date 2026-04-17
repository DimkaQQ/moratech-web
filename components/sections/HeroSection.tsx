'use client';

import { m } from 'framer-motion';
import Link from 'next/link';

// RULE: rerender-variants-object
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } },
} as const;

export function HeroSection() {
  return (
    <section className="pt-20 pb-25 text-center relative">
      <div className="max-w-[1400px] mx-auto px-8">
        <m.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/15 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Accepting new projects — Q2 2026
        </m.div>

        <m.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.08] mb-5 max-w-4xl mx-auto"
        >
          Stop Losing Money.<br />
          <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">
            Scale with IT.
          </span>
        </m.h1>

        <m.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-400 max-w-[720px] mx-auto mb-9 leading-relaxed"
        >
          European businesses lose €2.3M/year on manual processes and legacy systems. MoraTech replaces chaos with scalable software — in weeks, not years.
        </m.p>

        <m.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <Link href="/contact" className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:translate-y-[-2px] hover:shadow-[0_12px_32px_-4px_rgba(20,184,166,0.4)] transition-all no-underline flex items-center gap-2">
            Get Free ROI Estimate <span className="text-lg">→</span>
          </Link>
          <Link href="/cases" className="bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/6 hover:border-teal-500/50 hover:translate-y-[-2px] transition-all no-underline flex items-center gap-2">
            See Case Studies <span className="text-sm">▶</span>
          </Link>
        </m.div>

        {/* Terminal mock */}
        <m.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="max-w-[800px] mx-auto mt-15 relative"
        >
          <div className="bg-[#0D0D0F] border border-white/7 rounded-2xl overflow-hidden shadow-[0_16px_48px_-8px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/2 border-b border-white/4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-3 text-xs text-neutral-500 font-mono">moratech.config.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-8 min-h-[160px]">
              <div className="text-neutral-500">// moratech — enterprise solutions</div>
              <div className="mt-2"><span className="text-teal-400">const</span> <span className="text-blue-400">project</span> = <span className="text-teal-400">await</span> moraTech.<span className="text-blue-400">create</span>({'{'}</div>
              <div>  <span className="text-teal-400">client</span>: <span className="text-yellow-400">"your-business.eu"</span>,</div>
              <div>  <span className="text-teal-400">type</span>: <span className="text-yellow-400">"enterprise-grade"</span>,</div>
              <div>  <span className="text-teal-400">sla</span>: <span className="text-yellow-400">99.9</span>,</div>
              <div>  <span className="text-teal-400">deadline</span>: <span className="text-yellow-400">"guaranteed"</span>,</div>
              <div>  <span className="text-teal-400">roi</span>: <span className="text-yellow-400">"measurable"</span></div>
              <div>{'}'});<span className="inline-block w-0.5 h-4 bg-teal-400 animate-pulse ml-0.5 align-middle" /></div>
            </div>
          </div>
          <m.div
            className="absolute -top-5 -right-8 bg-[#131316] border border-white/7 rounded-xl p-3.5 flex items-center gap-3 shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">📈</div>
            <div><div className="font-bold">+340%</div><div className="text-xs text-neutral-500">Avg. ROI Year 1</div></div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}