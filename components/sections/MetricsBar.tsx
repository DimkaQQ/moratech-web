'use client';

import { Reveal } from '@/components/ui/Reveal';
import { MetricCounter } from '@/components/ui/MetricCounter';

export function MetricsBar() {
  return (
    <div className="bg-[#0D0D0F] border-y border-white/4 py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/4 rounded-xl overflow-hidden">
          {[
            { value: 200, label: 'Projects Delivered' },
            { value: 50, label: 'Countries Served' },
            { value: 15, label: 'Years in Technology' },
            { value: 30, label: 'Industries Served' },
            { value: 98, label: '% Client Retention' },
          ].map((metric, i) => (
            <div key={i} className="bg-[#0D0D0F] p-8 text-center hover:bg-[#131316] transition-colors">
              <MetricCounter target={metric.value} />
              <div className="text-sm text-neutral-500 mt-1 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}