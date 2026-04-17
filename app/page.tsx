'use client';

import { m } from 'framer-motion';
import { BentoCard } from '@/components/ui/BentoCard';
import { ScrollVelocityText } from '@/components/ui/ScrollVelocityText';
import { Marquee } from '@/components/ui/Marquee';

// RULE: rerender-variants-object + anim-hardware-acceleration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      type: 'spring' as const,
      stiffness: 250,
      damping: 20,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
  },
} as const;

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      {/* Секция 1: Кинетический заголовок */}
      <section className="min-h-[55vh] flex flex-col justify-center relative overflow-hidden px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        <ScrollVelocityText text="MORA.TECH" />
        <m.p 
          variants={itemVariants} 
          initial="hidden"
          animate="visible"
          className="text-neutral-400 text-xl md:text-2xl max-w-xl mt-6"
        >
          Enterprise-grade solutions. <br />
          <span className="text-white font-medium">Built for speed.</span>
        </m.p>
      </section>

      {/* Секция 2: Bento Grid */}
      <m.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px] px-4 md:px-8 max-w-[1600px] mx-auto w-full"
      >
        {/* Большая карточка - Кейс */}
        <BentoCard 
          layoutId="case-fintech"
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-950/60 to-purple-950/40"
          title="InvoiceFlow"
          subtitle="FinTech · AI Automation"
          tag="Case Study"
          icon="📉"
          description="Processing time: 4 days → 12 minutes. Team scaled from 8 to 2 roles."
          metrics={[{ label: 'Speed', value: '98%' }, { label: 'Errors', value: '<0.3%' }, { label: 'Saved', value: '€2.4M' }]}
        />

        {/* Карточка - Услуги */}
        <BentoCard 
          layoutId="service-saas"
          className="hover:border-teal-500/40 transition-colors"
          title="SaaS"
          subtitle="Scalable Platforms"
          tag="Service"
          icon="☁️"
          description="Multi-tenant, real-time analytics, automated billing."
        />
        
        {/* Карточка - Статистика */}
        <BentoCard 
          layoutId="stat-roi"
          className="hover:border-teal-500/40 transition-colors"
          title="340%"
          subtitle="Average ROI Year 1"
          tag="Result"
          icon="📈"
        />

        {/* Карточка - Мобайл */}
        <BentoCard 
          layoutId="service-mobile"
          className="hover:border-teal-500/40 transition-colors"
          title="Mobile"
          subtitle="iOS & Android"
          tag="Service"
          icon="📱"
          description="Native performance, offline-first architecture."
        />

        {/* Карточка - Кейс 2 */}
        <BentoCard 
          layoutId="case-retail"
          className="md:col-span-2 bg-gradient-to-br from-orange-950/60 to-red-950/40"
          title="RetailSync"
          subtitle="E-Commerce · Omnichannel"
          tag="Case Study"
          icon="🛍️"
          description="Overselling eliminated. Unified CRM & inventory sync."
          metrics={[{ label: 'Conv.', value: '+47%' }, { label: 'Rev.', value: '€8.1M' }]}
        />

        {/* Карточка - Контакты */}
        <BentoCard 
          layoutId="contact"
          className="bg-teal-950/30 border-teal-500/30 hover:border-teal-400/60 transition-colors flex items-center justify-center"
          title="Let's Talk"
          subtitle="hello@moratech.eu"
          tag="Contact"
          icon="📬"
        />
      </m.section>

      {/* Секция 3: Бегущая строка (Keyframes) */}
      <section className="py-10 border-y border-white/5 overflow-hidden">
        <Marquee 
          items={['React', 'Next.js 15', 'Framer Motion', 'Node.js', 'PostgreSQL', 'AWS', 'AI/ML', 'GDPR', 'Zero Trust']}
        />
      </section>
    </div>
  );
}