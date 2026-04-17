import { Reveal } from '@/components/ui/Reveal';

export function TrustBar() {
  return (
    <section className="py-14 text-center">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal>
          <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-7">
            Trusted by 200+ companies across Europe
          </div>
          <div className="flex justify-center items-center gap-10 flex-wrap opacity-20 hover:opacity-35 transition-opacity">
            {['GDPR Ready', 'EU Cloud', 'Remote-First', 'Direct Access', 'Agile Delivery'].map((t) => (
              <div key={t} className="text-xl font-bold text-neutral-400 tracking-tight">{t}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}