import { Reveal } from '@/components/ui/Reveal';

export default function TermsPage() {
  return (
    <section className="pt-35 pb-25">
      <div className="max-w-[800px] mx-auto px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="label">Terms of Service</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Terms & Conditions</h1>
            <p className="text-neutral-400">Effective date: April 2026. Governing law: Republic of Kazakhstan.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-neutral-900/80 border border-white/7 rounded-2xl p-8 leading-relaxed space-y-6">
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p>By accessing or using MoraTech services, you agree to be bound by these Terms. If you disagree with any part, do not use our services.</p>
            
            <h3 className="text-lg font-bold pt-2">2. Services Description</h3>
            <p>MoraTech provides custom software development, consulting, and related IT services. Specific scope, deliverables, and timelines are defined in individual Statements of Work (SOW).</p>

            <h3 className="text-lg font-bold pt-2">3. Payment Terms</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1.5">
              <li>Invoices are issued upon milestone completion or monthly.</li>
              <li>Payment is due within 14 days unless otherwise agreed.</li>
              <li>Late payments incur 1.5% interest per month.</li>
              <li>All prices exclude VAT unless specified.</li>
            </ul>

            <h3 className="text-lg font-bold pt-2">4. Intellectual Property</h3>
            <p>Upon full payment, client owns all deliverables created specifically for them. MoraTech retains rights to pre-existing code, libraries, and general knowledge.</p>

            <h3 className="text-lg font-bold pt-2">5. Confidentiality</h3>
            <p>Both parties agree to keep confidential information secret. This obligation survives termination of the agreement for 3 years.</p>

            <h3 className="text-lg font-bold pt-2">6. Limitation of Liability</h3>
            <p>MoraTech liability is limited to the total amount paid by the client in the 6 months preceding the claim. We are not liable for indirect damages.</p>

            <h3 className="text-lg font-bold pt-2">7. Termination</h3>
            <p>Either party may terminate with 30 days written notice. Client pays for work completed up to termination date.</p>

            <p className="text-xs text-neutral-500 pt-4 border-t border-white/4">
              For questions: <a href="mailto:legal@moratech.eu" className="text-teal-400 hover:underline">legal@moratech.eu</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}