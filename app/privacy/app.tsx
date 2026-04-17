import { Reveal } from '@/components/ui/Reveal';

export default function PrivacyPage() {
  return (
    <section className="pt-35 pb-25">
      <div className="max-w-[800px] mx-auto px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="label">Privacy Policy</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Your Data Is Safe With Us</h1>
            <p className="text-neutral-400">Compliant with RK Law №94-V and GDPR (EU) 2016/679. Last updated: April 2026.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-neutral-900/80 border border-white/7 rounded-2xl p-8 leading-relaxed space-y-6">
            <h2 className="text-xl font-bold">1. Data Controller</h2>
            <p><strong>MoraTech</strong><br />IP Dinmukhammed Altynbek<br />BIN: 040721551748<br />Email: privacy@moratech.eu | d.altynbek@moratech.eu<br />Address: Republic of Kazakhstan</p>
            
            <h3 className="text-lg font-bold pt-2">2. Data We Collect</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1.5">
              <li><strong>Contact Information:</strong> Name, business email, phone, company details</li>
              <li><strong>Project Information:</strong> Technical requirements, scope, budget data</li>
              <li><strong>Communication Data:</strong> Emails, meeting records, correspondence</li>
              <li><strong>Technical Data:</strong> IP address, device info, website analytics cookies</li>
            </ul>

            <h3 className="text-lg font-bold pt-2">3. Legal Basis for Processing</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1.5">
              <li><strong>Consent:</strong> Contact forms, newsletter subscriptions (Art. 6(1)(a) GDPR / Art. 9 RK Law)</li>
              <li><strong>Contract Performance:</strong> Service delivery, invoicing, project management</li>
              <li><strong>Legitimate Interests:</strong> Website security, analytics, business development</li>
            </ul>

            <h3 className="text-lg font-bold pt-2">4. How We Use Your Data</h3>
            <p>We process data exclusively to:</p>
            <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-1.5">
              <li>Provide software development & consulting services</li>
              <li>Send project documentation, invoices, and technical updates</li>
              <li>Comply with RK tax, accounting, and data protection legislation</li>
              <li>Improve website functionality and user experience</li>
            </ul>

            <h3 className="text-lg font-bold pt-2">5. Data Storage & International Transfers</h3>
            <p>All client project data is stored in EU-based data centers (AWS Frankfurt, GCP Belgium). Data is processed under Standard Contractual Clauses (SCCs) approved by the EU Commission. We never transfer personal data to jurisdictions without adequate data protection standards.</p>

            <h3 className="text-lg font-bold pt-2">6. Your Rights</h3>
            <p>Under GDPR and RK legislation, you may request access, correction, deletion, restriction of processing, or data portability. Contact: <a href="mailto:privacy@moratech.eu" className="text-teal-400 hover:underline">privacy@moratech.eu</a>. We respond within 15 business days.</p>

            <p className="text-xs text-neutral-500 pt-4 border-t border-white/4">
              Questions about your data? Contact our Data Protection Lead at <a href="mailto:privacy@moratech.eu" className="text-teal-400 hover:underline">privacy@moratech.eu</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}