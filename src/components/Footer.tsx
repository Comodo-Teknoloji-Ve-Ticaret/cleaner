import { MessageCircle, Phone } from 'lucide-react';
import {
  DEFAULT_WA_TEXT,
  DISTRICTS,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
} from '../data/cleaningData';

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          <div className="md:col-span-5">
            <span className="font-display text-xl font-bold tracking-tight text-slate-900">
              ŞN Temizlik Antalya
            </span>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm">
              Antalya’da 1+1, 2+1, 3+1 daire, apart, müstakil villa ve inşaat sonrası temizlik.
              Bilgi ve randevu için WhatsApp veya telefonla ulaşabilirsiniz.
            </p>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold text-slate-900">Antalya Hizmet Bölgeleri</h2>
            <ul className="mt-3 text-sm text-slate-600 leading-relaxed flex flex-wrap gap-x-3 gap-y-1">
              {DISTRICTS.map((d) => (
                <li key={d.id}>
                  <a href={`#${d.id}-temizlik`} className="hover:text-slate-900">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-slate-500">Çalışma saatleri: {OPENING_HOURS}</p>
          </div>

          <address className="md:col-span-3 not-italic">
            <h2 className="text-sm font-semibold text-slate-900">İletişim</h2>
            <div className="mt-3 space-y-2.5">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-sky-800 tabular-nums transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={waLink(DEFAULT_WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-sky-800 hover:text-sky-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp ile Mesaj Gönder</span>
              </a>
              <p className="text-sm">Antalya, Türkiye</p>
            </div>
          </address>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} ŞN Temizlik Antalya. Tüm hakları saklıdır.
          </p>
          <nav aria-label="Alt menü" className="flex items-center gap-6">
            <a href="#hizmetler" className="hover:text-slate-900 transition-colors">Hizmetler</a>
            <a href="#bolgeler" className="hover:text-slate-900 transition-colors">Bölgeler</a>
            <a href="#sss" className="hover:text-slate-900 transition-colors">SSS</a>
            <a href="#iletisim" className="hover:text-slate-900 transition-colors">İletişim</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
