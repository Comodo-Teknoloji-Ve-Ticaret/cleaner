import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/cleaningData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#hizmetler', label: 'Hizmetler' },
    { href: '#teklif-al', label: 'Hızlı Teklif' },
    { href: '#bolgeler', label: 'Bölgeler' },
    { href: '#sss', label: 'SSS' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded"
        >
          ŞN Temizlik
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="Ana menü"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-sky-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold tabular-nums transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3">
          <nav aria-label="Mobil menü" className="flex flex-col divide-y divide-slate-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-medium text-slate-700 hover:text-sky-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
