'use client';

import { m, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

const cases = [
  { tag: 'FinTech · Germany', title: 'InvoiceFlow', problem: 'Client processed 2,000+ invoices/week manually. 4 days/batch. 12% error rate.', solution: 'OCR-powered SaaS with ML classification, automated PO matching, SAP/DATEV API.', result: '12 min/batch. 2 staff roles. <0.3% errors.', metrics: ['98% Faster', '€2.4M Saved', '10 weeks', '0.3% Errors'] },
  { tag: 'E-Commerce · France', title: 'RetailSync', problem: 'Disconnected online/retail/B2B systems. 18% overselling. Data in 5 places.', solution: 'Headless commerce with real-time sync, AI recommendations, unified CRM.', result: 'Overselling gone. +47% conv. +34% LTV.', metrics: ['+47% Conv', '€8.1M Rev', '+34% LTV', '12 weeks'] },
  { tag: 'Healthcare · Spain', title: 'CareHub', problem: '15 clinics, 50K records. 28% no-shows. Billing took 2 weeks.', solution: 'GDPR CRM with AI scheduling, telemedicine, automated reminders.', result: '13% no-shows. 4.6/5 sat. €900K recovered.', metrics: ['-52% No-Shows', '€900K', '4.6/5', '8 weeks'] },
  { tag: 'Logistics · NL', title: 'RouteOptima', problem: '2K vehicles via phone/Excel. 34% fuel waste. 200h/mo downtime.', solution: 'IoT platform: GPS, AI routing, predictive maintenance, driver analytics.', result: '-22% fuel. -73% downtime. 96% on-time.', metrics: ['-22% Fuel', '€3.8M Saved', '96% On-Time', '14 weeks'] },
];

export default function CasesPage() {
  return (
    <>
      <section className="pt-35 pb-15 text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="label"><span>🏆</span> Case Studies</div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5">Real Projects. Measurable Results.</h1>
          <p className="text-lg text-neutral-400 max-w-[650px] mx-auto">Every case is a verified project with documented outcomes. No vanity metrics — only numbers that matter to your P&L.</p>
        </div>
      </section>

      <section className="pb-25">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <m.div className="bg-elevated border border-white/7 rounded-2xl p-10 relative overflow-hidden group hover:border-teal-500/25 hover:translate-y-[-4px] transition-all">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">{c.tag}</div>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <div className="text-sm text-neutral-400 leading-relaxed mb-4 space-y-2">
                    <div><span className="text-white font-medium">Problem:</span> {c.problem}</div>
                    <div><span className="text-white font-medium">Solution:</span> {c.solution}</div>
                    <div><span className="text-white font-medium">Result:</span> {c.result}</div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {c.metrics.map((m, j) => (
                      <div key={j} className="text-center">
                        <div className="text-lg font-bold text-teal-400">{m.split(' ')[0]}</div>
                        <div className="text-[0.65rem] text-neutral-500">{m.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                </m.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <Reveal><h2 className="text-3xl font-bold mb-8">Aggregate Impact Across Projects</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ icon: '💰', num: '€84M+', desc: 'Value Delivered' }, { icon: '⏱️', num: '12K+', desc: 'Hours Saved/Mo' }, { icon: '🚀', num: '340%', desc: 'Avg ROI Y1' }, { icon: '⭐', num: '4.9/5', desc: 'Satisfaction' }].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-elevated border border-white/7 rounded-2xl p-8 hover:border-teal-500/30 transition-colors">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="text-3xl font-bold text-teal-400 tracking-tight">{s.num}</div>
                  <div className="text-sm text-neutral-400 mt-1">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <Reveal>
            <div className="max-w-[900px] mx-auto bg-gradient-to-br from-teal-700 to-teal-500 rounded-3xl p-16 relative overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 relative z-10">Want a Case Study in Your Industry?</h2>
              <p className="text-lg opacity-85 mb-7 max-w-[600px] mx-auto relative z-10">Tell us about your challenges. We'll show ROI, timeline, and cost estimates within 48h.</p>
              <Link href="/contact" className="bg-white text-teal-700 px-10 py-4 rounded-xl font-bold text-lg hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all no-underline inline-flex items-center gap-2 relative z-10">
                Get Your Custom Assessment <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}