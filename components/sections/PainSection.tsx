import { Reveal } from '@/components/ui/Reveal';

const pains = [
  { icon: '📉', title: 'Manual Processes', desc: 'Spreadsheets and paper trails waste 23 hours/week per employee — 60% of their time gone.', stat: '-€180K/year per 10 employees' },
  { icon: '🔒', title: 'Legacy Systems', desc: 'Old software breaks under load and costs 3× more in maintenance than modern cloud solutions.', stat: '3× higher maintenance costs' },
  { icon: '🐢', title: 'Slow Time-to-Market', desc: 'Competitors launch in weeks while you plan. 78% of market share goes to the fastest.', stat: 'Losing 4 of 5 opportunities' },
];

export function PainSection() {
  return (
    <section className="bg-[#0D0D0F] border-y border-white/4">
      <div className="max-w-[1400px] mx-auto px-8 py-25">
        <Reveal>
          <div className="text-center mb-14">
            <div className="label">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Your Business Is Bleeding Money</h2>
            <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">Every day without modern IT costs you revenue, talent, and competitive edge.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4 rounded-2xl overflow-hidden">
          {pains.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#0D0D0F] p-9 hover:bg-[#131316] transition-colors relative overflow-hidden group">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-3.5 inline-block bg-red-400/10 text-red-400 text-xs font-bold px-2.5 py-1 rounded-md">{p.stat}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}