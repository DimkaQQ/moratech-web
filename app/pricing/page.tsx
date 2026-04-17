'use client';

import { m } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

const plans = [
  { name: 'MVP Sprint', price: '€15K', term: '/ 4 weeks', desc: 'Validate your idea fast', features: ['Dedicated development resource', 'Working prototype in 4 weeks', 'UI/UX design included', 'Cloud deployment', '2 weeks post-launch support'], cta: 'Start MVP' },
  { name: 'Growth Platform', price: '€50K', term: '/ 8-12 weeks', desc: 'Full-scale product launch', features: ['Scalable architecture design', 'Production-ready app', 'AI/ML integration', 'GDPR-compliant by design', '3 months warranty', 'Performance & security audit'], cta: 'Start Building', featured: true },
  { name: 'Enterprise Scale', price: '€120K+', term: 'custom', desc: 'Complex systems & transformation', features: ['Enterprise architecture', 'Legacy system integration', 'Full digital transformation', '24/7 SLA (99.9% uptime)', 'ISO 27001 compliance', '12 mo warranty + advisory'], cta: 'Contact Sales' },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-35 pb-15 text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="label"><span>🏷️</span> Pricing & ROI</div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5">Transparent Pricing. Guaranteed Results.</h1>
          <p className="text-lg text-neutral-400 max-w-[650px] mx-auto">No hidden costs. No surprise invoices. Choose the model that fits your stage — and scale when ready.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <m.div
                  className={`relative bg-elevated border rounded-2xl p-9 flex flex-col ${p.featured ? 'border-teal-500 shadow-[0_0_0_1px_rgba(20,184,166,0.3),0_16px_48px_-8px_rgba(0,0,0,0.5)]' : 'border-white/7 hover:translate-y-[-4px] transition-transform'}`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-700 to-teal-500 text-white text-[0.7rem] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                  <div className="text-4xl font-black tracking-tight my-4">{p.price}<span className="text-base font-normal text-neutral-500"> {p.term}</span></div>
                  <p className="text-sm text-neutral-500 mb-6">{p.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-neutral-400">
                        <span className="text-teal-400 mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center py-3 rounded-xl font-semibold transition-all ${p.featured ? 'bg-gradient-to-r from-teal-700 to-teal-500 text-white hover:translate-y-[-2px] hover:shadow-lg' : 'border border-white/10 text-white hover:bg-white/5 hover:border-teal-500/50'}`}>
                    {p.cta}
                  </Link>
                </m.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-8 text-neutral-400 text-sm max-w-[600px] mx-auto">
              <p className="mb-2"><strong className="text-white">Why these prices?</strong> You're paying for results and direct access — not agency overhead. No middlemen. No markup. Just focused work with modern tooling.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <Reveal><h2 className="text-3xl font-bold mb-8">MoraTech vs Typical Vendors</h2></Reveal>
          <div className="max-w-[900px] mx-auto">
            <div className="w-full bg-elevated border border-white/7 rounded-2xl overflow-hidden text-sm">
              {[
                ['Transparency', 'Black box', 'Live dashboard, weekly demos'],
                ['Pricing', 'Scope creep', 'Fixed-price contract'],
                ['Code Quality', 'No tests', '100% review, 80%+ coverage'],
                ['Deadlines', 'Often missed', 'SLA with penalty clauses'],
                ['Post-launch', 'Abandoned', '3-12 months warranty, 24/7'],
                ['EU Compliance', 'Ignored', 'GDPR, ISO 27001 built-in'],
              ].map((row, i) => (
                <div key={i} className={`flex justify-between px-6 py-4 ${i !== 5 ? 'border-b border-white/4' : ''} hover:bg-white/5 transition-colors`}>
                  <div className="font-medium w-1/3 text-left">{row[0]}</div>
                  <div className="text-red-400 w-1/3 text-center">✕ {row[1]}</div>
                  <div className="text-teal-400 w-1/3 text-center font-medium">✓ {row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-8">
          <Reveal>
            <m.div className="bg-elevated border border-white/7 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent" />
              <div className="relative z-10 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Deliver On Time or 20% Refund</h3>
              <p className="text-neutral-400 relative z-10 max-w-[500px] mx-auto">
                We stake our reputation on deadlines. If we miss the agreed timeline, you receive a 20% refund. Fixed pricing, no hidden costs. Full code ownership from day one.
              </p>
            </m.div>
          </Reveal>
        </div>
      </section>
    </>
  );
}