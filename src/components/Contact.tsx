import { DEFAULT_WA_TEXT, OPENING_HOURS, PHONE_DISPLAY } from '../data/cleaningData';
import { ContactButtons } from './ContactButtons';

export function Contact() {
  return (
    <section id="iletisim" className="py-16 lg:py-20 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Antalya’da Temizlik İçin Hemen Ulaşın
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Konut tipinizi (1+1, 2+1, apart, villa), ilçenizi ve istediğiniz günü WhatsApp’tan yazın;
          fiyat ve ekip planını hemen iletelim. Telefon: <span className="tabular-nums font-semibold text-white">{PHONE_DISPLAY}</span>
        </p>
        <div className="mt-8 flex justify-center">
          <ContactButtons waText={DEFAULT_WA_TEXT} size="lg" />
        </div>
        <p className="mt-6 text-sm text-slate-400">Çalışma saatleri: {OPENING_HOURS}</p>
      </div>
    </section>
  );
}
