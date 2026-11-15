import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from '../data/cleaningData';

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          <div className="md:col-span-5">
            <span className="font-display text-xl font-bold tracking-tight text-slate-900">
              ŞN Temizlik
            </span>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm">
              Antalya’da 1+1, 2+1, 3+1 daire, kısa dönem apart ve müstakil villa temizliğinde
              güvenilir ekip ve zamanında teslimat. Bilgi ve randevu için WhatsApp veya telefonla
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-slate-900">Antalya Hizmet Bölgeleri</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Muratpaşa · Lara · Konyaaltı · Kepez · Döşemealtı · Aksu · Kundu · Belek · Kemer
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Çalışma Saatleri: Pazartesi – Pazar · 08:00 – 21:00
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900">Doğrudan İletişim</h3>
            <div className="mt-3 space-y-2.5">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-sky-800 tabular-nums transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                  'Merhaba ŞN Temizlik, Antalya temizlik hizmeti için bilgi almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-sky-800 hover:text-sky-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp ile Mesaj Gönder</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ŞN Temizlik Antalya. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="#hizmetler" className="hover:text-slate-900 transition-colors">
              Hizmetler
            </a>
            <a href="#teklif-al" className="hover:text-slate-900 transition-colors">
              Hızlı Teklif
            </a>
            <a href="#bolgeler" className="hover:text-slate-900 transition-colors">
              Bölgeler
            </a>
            <a href="#randevu" className="hover:text-slate-900 transition-colors">
              Randevu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
