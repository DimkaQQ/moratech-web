'use client';

import { m } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { useI18n } from '@/hooks/useI18n';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="pt-35 pb-15 text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <Reveal>
            <div className="label"><span>📬</span> {t.contact.title}</div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5">{t.contact.heading}</h1>
            <p className="text-lg text-neutral-400 max-w-[650px] mx-auto">{t.contact.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-25">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-4">
              <Reveal>
                <div className="bg-neutral-900/80 border border-white/7 rounded-2xl p-8">
                  <h3 className="text-lg font-bold mb-5">{t.contact.get_in_touch}</h3>
                  {[
                    { icon: '✉️', label: 'Email', value: 'hello@moratech.eu' },
                    { icon: '📱', label: 'Phone', value: '+7 XXX XXX XX XX' },
                    { icon: '💬', label: 'Telegram', value: '@moratech_eu' },
                    { icon: '🌍', label: 'Service Area', value: 'Remote-first · EU & Global' },
                    { icon: '⏱️', label: 'Hours', value: 'Mon–Fri 09:00–19:00 CET' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-base">{item.icon}</div>
                      <div>
                        <div className="text-xs text-neutral-500 mb-0.5">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-neutral-900/80 border border-white/7 rounded-2xl p-6 flex items-center gap-3">
                  <span className="text-emerald-400 text-xl">🛡️</span>
                  <div>
                    <div className="font-bold text-sm">{t.contact.guarantee_title}</div>
                    <div className="text-xs text-neutral-400">{t.contact.guarantee_desc}</div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-neutral-900/80 border border-white/7 rounded-2xl p-6">
                  <h4 className="font-bold text-sm mb-2">🇪🇺 {t.contact.coverage_title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{t.contact.coverage_desc}</p>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-3">
              <Reveal>
                <form className="bg-neutral-900/80 border border-white/7 rounded-2xl p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert('✅ Request submitted!'); }}>
                  <h3 className="text-lg font-bold mb-2">{t.contact.form_title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-neutral-400 mb-1 block">{t.contact.name}</label>
                      <input type="text" required className="w-full bg-neutral-900 border border-white/7 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 transition-colors" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="text-sm text-neutral-400 mb-1 block">{t.contact.company}</label>
                      <input type="text" className="w-full bg-neutral-900 border border-white/7 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 transition-colors" placeholder="Company GmbH" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-neutral-400 mb-1 block">{t.contact.email}</label>
                      <input type="email" required className="w-full bg-neutral-900 border border-white/7 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 transition-colors" placeholder="john@company.eu" />
                    </div>
                    <div>
                      <label className="text-sm text-neutral-400 mb-1 block">{t.contact.phone}</label>
                      <input type="tel" className="w-full bg-neutral-900 border border-white/7 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 transition-colors" placeholder="+49 123 456 789" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-1 block">{t.contact.service}</label>
                    <select className="w-full bg-neutral-900 border border-white/7 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 transition-colors appearance-none">
                      <option>{t.contact.select_service}</option>
                      <option>SaaS Development</option>
                      <option>CRM / ERP System</option>
                      <option>Mobile Application</option>
                      <option>AI / ML Integration</option>
                      <option>DevOps & Cloud</option>
                      <option>Cybersecurity Audit</option>
                      <option>UI/UX Design</option>
                      <option>Support & Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-1 block">{t.contact.description}</label>
                    <textarea rows={4} className="w-full bg-neutral-900 border border-white/7 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 transition-colors resize-y" placeholder={t.contact.description_placeholder} />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-teal-700 to-teal-500 text-white py-3.5 rounded-xl font-semibold hover:translate-y-[-2px] hover:shadow-[0_12px_32px_-4px_rgba(20,184,166,0.4)] transition-all flex items-center justify-center gap-2">
                    {t.contact.submit} <span>→</span>
                  </button>
                  <p className="text-[0.7rem] text-neutral-500 text-center">{t.contact.privacy_note}</p>
                </form>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            {[{ num: '24h', desc: 'Avg Response' }, { num: '€0', desc: 'Assessment Cost' }, { num: '10%', desc: 'Late Discount' }].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-neutral-900/80 border border-white/7 rounded-xl p-6 text-center hover:border-teal-500/30 transition-colors">
                  <div className="text-2xl font-bold text-teal-400 tracking-tight">{s.num}</div>
                  <div className="text-sm text-neutral-400 mt-1">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}