import { Reveal } from '@/components/ui/Reveal';

const solutions = [
  { icon: '⏱️', v: '-73%', l: 'Manual task time' },
  { icon: '💶', v: '+41%', l: 'Revenue in Year 1' },
  { icon: '👥', v: '-65%', l: 'Acquisition cost' },
  { icon: '🚀', v: '4-8', l: 'Weeks to MVP' },
];

export function SolutionGrid() {
  return (
    <section className="py-25">
      <div className="max-w-[1400px] mx-auto px-8">
        <Reveal>
          <div className="text-center mb-14">
            <div className="label">The Solution</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What MoraTech Delivers</h2>
            <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">We don't just write code. We engineer business growth.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#0D0D0F] border border-white/7 rounded-2xl p-8 text-center hover:border-teal-500/30 hover:translate-y-[-4px] hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.5)] transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <div className="text-4xl font-bold text-teal-400 tracking-tight mb-1">{s.v}</div>
                  <div className="text-sm text-neutral-400">{s.l}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}