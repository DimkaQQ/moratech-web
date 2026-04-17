'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal>
          <m.div className="relative max-w-[900px] mx-auto bg-gradient-to-br from-teal-700 to-teal-500 rounded-3xl p-16 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 to-transparent" />
            <m.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 relative z-10">Ready to Stop Losing Money and Start Growing?</h2>
            <p className="text-lg opacity-85 mb-7 max-w-[600px] mx-auto relative z-10">
              Get a free, no-obligation project assessment within 24 hours. See your potential ROI before we write a single line of code.
            </p>
            <Link href="/contact" className="bg-white text-teal-700 px-10 py-4 rounded-xl font-bold text-lg hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all no-underline inline-flex items-center gap-2 relative z-10">
              Get Free Assessment <span>→</span>
            </Link>
          </m.div>
        </Reveal>
      </div>
    </section>
  );
}