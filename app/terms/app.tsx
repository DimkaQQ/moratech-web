import { Reveal } from '@/components/ui/Reveal';

export default function LegalPage() {
  return (
    <section className="pt-35 pb-25">
      <div className="max-w-[800px] mx-auto px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="label">Legal Information</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Company Registration & Details</h1>
            <p className="text-neutral-400">Official information for ADM. Operating under the laws of the Republic of Kazakhstan.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-neutral-900/80 border border-white/7 rounded-2xl p-8 leading-relaxed space-y-6">
            <h2 className="text-xl font-bold">Business Registration</h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><span className="text-white font-medium">Brand:</span> MoraTech</li>
              <li><span className="text-white font-medium">Legal Entity:</span> ADM (Individual Entrepreneur)</li>
              <li><span className="text-white font-medium">Owner:</span> Dinmukhammed Altynbek</li>
              <li><span className="text-white font-medium">BIN:</span> 040721551748</li>
              <li><span className="text-white font-medium">Country:</span> Republic of Kazakhstan</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/4">
              <div className="bg-neutral-900/50 p-4 rounded-lg">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Contact</div>
                <div className="text-sm">d.altynbek@moratech.eu</div>
              </div>
              <div className="bg-neutral-900/50 p-4 rounded-lg">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Governing Law</div>
                <div className="text-sm">Civil Code & Tax Code of Kazakhstan</div>
              </div>
            </div>
            <h3 className="text-lg font-bold pt-2">Tax & Invoicing</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1.5">
              <li>IT services exported to foreign clients: 0% VAT (per Tax Code of RK)</li>
              <li>EU B2B clients: Reverse Charge Mechanism applies</li>
              <li>Invoices in EUR, USD, or KZT. Payment via SWIFT, SEPA, Wise, PayPal.</li>
            </ul>
            <h3 className="text-lg font-bold pt-2">EU Compliance</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1.5">
              <li>GDPR-compliant data processing for all EU clients</li>
              <li>Client data stored in EU cloud regions (AWS Frankfurt, GCP Belgium)</li>
              <li>Standard Contractual Clauses (SCCs) for international data transfers</li>
              <li>eIDAS-compatible e-signatures supported</li>
            </ul>
            <p className="text-xs text-neutral-500 pt-4 border-t border-white/4">
              For official documents or verification: <a href="mailto:d.altynbek@moratech.eu" className="text-teal-400 hover:underline">d.altynbek@moratech.eu</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}