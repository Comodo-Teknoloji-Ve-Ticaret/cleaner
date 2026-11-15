import heroVillaImage from '../assets/images/hero_antalya_villa_1794734028927.jpg';
import { DEFAULT_WA_TEXT, PHONE_DISPLAY, PHONE_TEL } from '../data/cleaningData';
import { ContactButtons } from './ContactButtons';
import { ResilientImage } from './ResilientImage';

const HIGHLIGHTS = [
  { value: '2+1 / Villa', label: 'Her konut tipine uygun ekip', detail: 'Daire, apart ve müstakil villa' },
  { value: 'Aynı Gün', label: 'Hızlı ekip yönlendirme', detail: 'Muratpaşa, Konyaaltı, Lara, Kepez' },
  { value: 'WhatsApp', label: 'Doğrudan iletişim', detail: 'Fotoğraf gönderin, net fiyat alın' },
  { value: '08:00–21:00', label: 'Haftanın 7 günü', detail: 'Apart çıkış-giriş saatlerine uygun' },
];

export function Hero() {
  return (
    <section id="top" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-sm font-medium text-sky-800 mb-4">
                Antalya Temizlik Şirketi · Muratpaşa, Konyaaltı, Lara, Kepez, Döşemealtı
              </p>

              <h1
                className="font-display font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)', textWrap: 'balance' }}
              >
                Antalya Ev, Apart ve Villa Temizliği
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                ŞN Temizlik, Antalya’da 1+1, 2+1 ve 3+1 daire, kısa dönem kiralık apart, müstakil
                villa ve inşaat sonrası temizlik hizmeti veren bir temizlik firmasıdır. Ekip ve
                malzeme bizden; randevu ve fiyat için WhatsApp’tan yazmanız ya da{' '}
                <a href={PHONE_TEL} className="font-semibold text-slate-900 tabular-nums underline underline-offset-4">
                  {PHONE_DISPLAY}
                </a>{' '}
                numarasını aramanız yeterli.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <ContactButtons waText={DEFAULT_WA_TEXT} phoneLabel={`Hemen Ara: ${PHONE_DISPLAY}`} size="lg" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <ResilientImage
                src={heroVillaImage}
                alt="Antalya’da ŞN Temizlik tarafından temizlenmiş deniz manzaralı villa salonu"
                fallbackTitle="Antalya Daire, Apart ve Villa Temizliği"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent p-5 sm:p-6">
                <p className="text-xs sm:text-sm font-medium text-sky-200">
                  WhatsApp ve telefonla aynı gün planlama
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium text-white">
                  1+1, 2+1 Daire · Apart Çıkış-Giriş · Müstakil Villa · İnşaat Sonrası
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item) => (
            <li key={item.value} className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold text-slate-900 tabular-nums tracking-tight">
                {item.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-slate-800">{item.label}</span>
              <span className="mt-1 text-sm text-slate-600">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
