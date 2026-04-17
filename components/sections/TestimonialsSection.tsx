'use client';

import { m } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const testimonials = [
  { text: "MoraTech delivered our SaaS platform in 10 weeks. Code quality, communication, and results exceeded every expectation.", name: "Markus K.", role: "CEO, PayStream GmbH" },
  { text: "They didn't just build software — they understood our business. The unified platform increased conversion by 47%.", name: "Claire L.", role: "COO, RetailSync" },
  { text: "The CRM reduced our no-show rate by half and recovered €900K in lost appointments. Permanent partner.", name: "Dr. Roberto S.", role: "Director, CareHub" },
];

export function TestimonialsSection() {
  return (
    <section className="py-25">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="label">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <m.div
                className="bg-elevated border border-white/7 rounded-2xl p-8 hover:border-teal-500/25 transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
                <p className="text-neutral-400 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-white/4 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center text-sm font-bold">
                    {t.name.split(' ')[0][0]}{t.name.split(' ')[1]?.[0] || ''}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </m.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}