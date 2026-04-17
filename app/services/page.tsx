'use client';

import { m } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { BentoCard } from '@/components/ui/BentoCard';
import { useI18n } from '@/hooks/useI18n';

// ✅ RULE: rerender-variants-object
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2, type: 'spring' as const, stiffness: 250, damping: 20 },
  },
} as const;

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } },
} as const;

const services = [
  { icon: '☁️', title: 'SaaS Platforms', price: 'from €50K', desc: 'Scalable cloud solutions with subscriptions, multi-tenancy, real-time analytics.', tags: ['React', 'Node.js', 'AWS', 'GraphQL'] },
  { icon: '👥', title: 'CRM Systems', price: 'from €35K', desc: 'Funnel management, pipeline automation, client 360° view, AI lead scoring.', tags: ['Vue.js', 'Python', 'MongoDB', 'API'] },
  { icon: '📱', title: 'Mobile Apps', price: 'from €25K', desc: 'Native & cross-platform for iOS/Android. Offline-first, push, biometric auth.', tags: ['Flutter', 'Swift', 'Kotlin', 'Firebase'] },
  { icon: '🛒', title: 'E-Commerce', price: 'from €20K', desc: 'High-performance stores, multi-currency, tax automation, AI recommendations.', tags: ['Next.js', 'Stripe', 'Redis', 'Algolia'] },
  { icon: '🧠', title: 'AI / ML', price: 'from €45K', desc: 'Chatbots, predictive analytics, computer vision, OCR, LLM integrations.', tags: ['PyTorch', 'LLM', 'FastAPI', 'LangChain'] },
  { icon: '⚙️', title: 'DevOps & Cloud', price: 'from €15K', desc: 'CI/CD, Docker/K8s, IaC, monitoring dashboards, cloud cost optimization.', tags: ['Docker', 'K8s', 'Terraform', 'Grafana'] },
  { icon: '🛡️', title: 'Cybersecurity', price: 'from €12K', desc: 'Pentesting, SIEM/SOAR, vulnerability mgmt, GDPR/ISO 27001 compliance.', tags: ['SIEM', 'Zero Trust', 'OWASP', 'SOC'] },
  { icon: '🏢', title: 'ERP Systems', price: 'from €60K', desc: 'Finance, logistics, HR, warehouse, production scheduling, consolidated BI.', tags: ['SAP', 'Odoo', 'Power BI', 'Custom'] },
];

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="pt-35 pb-15 text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <Reveal>
            <div className="label"><span>🧩</span> {t.services.title}</div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5">{t.services.heading}</h1>
            <p className="text-lg text-neutral-400 max-w-[650px] mx-auto">{t.services.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-25">
        <div className="max-w-[1400px] mx-auto px-8">
          <m.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4 rounded-2xl overflow-hidden">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <BentoCard 
                  layoutId={`service-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-neutral-900/80 hover:border-teal-500/40 transition-colors"
                  title={s.title}
                  subtitle={s.desc}
                  tag={s.price}
                  icon={s.icon}
                />
              </Reveal>
            ))}
          </m.div>

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <p className="text-neutral-500 text-sm mb-4">{t.services.disclaimer}</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:translate-y-[-2px] hover:shadow-[0_12px_32px_-4px_rgba(20,184,166,0.4)] transition-all">
                {t.services.cta} <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}