'use client';

import { m } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

const services = [
  { icon: '☁️', title: 'SaaS Platforms', price: 'from €50K', desc: 'Scalable cloud solutions with subscriptions, multi-tenancy, real-time analytics, automated billing.', tags: ['React', 'Node.js', 'AWS', 'GraphQL'] },
  { icon: '👥', title: 'CRM Systems', price: 'from €35K', desc: 'Funnel management, pipeline automation, client 360° view, custom reporting, AI lead scoring.', tags: ['Vue.js', 'Python', 'MongoDB', 'API'] },
  { icon: '📱', title: 'Mobile Apps', price: 'from €25K', desc: 'Native & cross-platform for iOS/Android. Offline-first, push, biometric auth, ASO.', tags: ['Flutter', 'Swift', 'Kotlin', 'Firebase'] },
  { icon: '🛒', title: 'E-Commerce', price: 'from €20K', desc: 'High-performance stores, multi-currency, tax automation, AI recommendations, omnichannel.', tags: ['Next.js', 'Stripe', 'Redis', 'Algolia'] },
  { icon: '🧠', title: 'AI / ML', price: 'from €45K', desc: 'Chatbots, predictive analytics, computer vision, OCR, LLM integrations, RAG pipelines.', tags: ['PyTorch', 'LLM', 'FastAPI', 'LangChain'] },
  { icon: '⚙️', title: 'DevOps & Cloud', price: 'from €15K', desc: 'CI/CD, Docker/K8s, IaC, monitoring dashboards, cloud cost optimization.', tags: ['Docker', 'K8s', 'Terraform', 'Grafana'] },
  { icon: '🛡️', title: 'Cybersecurity', price: 'from €12K', desc: 'Pentesting, SIEM/SOAR, vulnerability mgmt, GDPR/ISO 27001 compliance.', tags: ['SIEM', 'Zero Trust', 'OWASP', 'SOC'] },
  { icon: '🏢', title: 'ERP Systems', price: 'from €60K', desc: 'Finance, logistics, HR, warehouse, production scheduling, consolidated BI.', tags: ['SAP', 'Odoo', 'Power BI', 'Custom'] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-35 pb-15 text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="label"><span>🧩</span> Our Services</div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5">Full-Cycle Software Development</h1>
          <p className="text-lg text-neutral-400 max-w-[650px] mx-auto">10 service lines covering every stage of your digital journey. Fixed starting prices. Exact scope after technical audit.</p>
        </div>
      </section>

      <section className="pb-25">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4 rounded-2xl overflow-hidden">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <m.div
                  className="bg-elevated p-9 hover:bg-[#161619] transition-colors relative cursor-pointer group"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <div className="text-2xl mb-4">{s.icon}</div>
                  <div className="inline-block bg-emerald-400/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-md mb-4">{s.price}</div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className="text-[0.65rem] font-mono bg-white/4 text-neutral-500 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </m.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <p className="text-neutral-500 text-sm mb-4">All prices are starting points for baseline versions. Final cost depends on scope & complexity.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:translate-y-[-2px] hover:shadow-[0_12px_32px_-4px_rgba(20,184,166,0.4)] transition-all">
                Request Custom Quote <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}