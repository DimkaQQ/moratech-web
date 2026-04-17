import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'SaaS & CRM', href: '/services' },
    { label: 'Mobile & Web', href: '/services' },
    { label: 'AI & Data', href: '/services' },
    { label: 'DevOps', href: '/services' },
  ],
  company: [
    { label: 'Case Studies', href: '/cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Legal Details (ADM)', href: '/legal' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0D0D0F] border-t border-white/4 pt-14 pb-6">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight no-underline mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center text-white font-bold text-sm">M</div>
              <span>Mora<span className="text-teal-400">Tech</span></span>
            </Link>
            <p className="text-neutral-400 text-sm mt-2 max-w-xs">
              Enterprise-grade software development. MoraTech is a brand of ADM (IP Dinmukhammed Altynbek, Reg. 040721551748).
            </p>
            <div className="flex gap-2 mt-4">
              {['fab:fa-linkedin-in', 'fab:fa-github', 'fab:fa-telegram-plane'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/4 flex items-center justify-center text-neutral-400 hover:border-teal-500 hover:text-teal-400 transition-colors"
                >
                  <span className={`i-${icon.replace(':', '-')}`}></span>
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Services', links: footerLinks.services },
            { title: 'Company', links: footerLinks.company },
            { title: 'Legal', links: footerLinks.legal },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/4 pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 MoraTech — ADM (IP Dinmukhammed Altynbek, 040721551748). All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            IT exports from KZ: 0% VAT. Reverse Charge for EU clients.
          </p>
        </div>
      </div>
    </footer>
  );
}