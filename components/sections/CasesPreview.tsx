'use client';

import { m, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

// RULE: rerender-variants-object
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 25 },
  },
} as const;

const cases = [
  { tag: 'FinTech · Germany', title: 'InvoiceFlow', result: '€2.4M Saved/Year', metric: '-98% Time' },
  { tag: 'E-Commerce · France', title: 'RetailSync', result: '€8.1M Added Rev', metric: '+47% Conv.' },
  { tag: 'Healthcare · Spain', title: 'CareHub', result: '€900K Recovered', metric: '-52% No-Shows' },
  { tag: 'Logistics · NL', title: 'RouteOptima', result: '€3.8M Annual Save', metric: '96% On-Time' },
];

export function CasesPreview() {
  return (
    <section className="py-25 bg-surface border-y border-white/4">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/15 mb-4 uppercase tracking-wider">
              Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Real Results. Real Businesses.</h2>
            <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">Four examples of European companies that scaled with our solutions.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <m.div
                className="bg-elevated border border-white/7 rounded-2xl p-10 relative overflow-hidden group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: 'rgba(20,184,166,0.25)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">{c.tag}</div>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-sm text-neutral-400 mb-6">{c.result}</p>
                <div className="flex gap-6">
                  <div className="text-2xl font-bold text-teal-400">{c.metric}</div>
                </div>
              </m.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center mt-10">
            <Link href="/cases" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-teal-500 text-teal-400 font-semibold hover:bg-teal-500/10 transition-colors">
              View All Case Studies <span className="text-lg">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}