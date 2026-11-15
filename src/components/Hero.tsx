import { MessageCircle, Phone } from 'lucide-react';
import heroVillaImage from '../assets/images/hero_antalya_villa_1794734028927.jpg';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from '../data/cleaningData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onJumpToPlanner: () => void;
}

export function Hero({ onJumpToPlanner }: HeroProps) {
  const whatsappQuickUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    'Merhaba ŞN Temizlik, Antalya’da temizlik hizmeti hakkında bilgi ve randevu almak istiyorum.'
  )}`;

  const guarantees = [
    {
      value: '2+1 / Villa',
      label: 'Tüm Konut Tiplerine Özel Ekip',
      detail: 'Daire, apart ve müstakil villa planlaması',
    },
    {
      value: 'Aynı Gün',
      label: 'Hızlı Ekip Yönlendirme',
      detail: 'Muratpaşa, Konyaaltı, Lara ve Kepez',
    },
    {
      value: 'WhatsApp & Ara',
      label: 'Doğrudan Hızlı İletişim',
      detail: 'Konutunuza göre telefonda hemen net bilgi alın',
    },
    {
      value: '08:00–21:00',
      label: 'Haftanın 7 Günü Hizmet',
      detail: 'Apart çıkış-giriş saatlerine tam uyum',
    },
  ];

  return (
    <section id="top" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* 2-Column Split Hero with balanced stretch height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-sm font-medium text-sky-800 tracking-normal mb-4">
                Antalya Genelinde Profesyonel Temizlik · Muratpaşa, Konyaaltı, Lara, Kepez, Döşemealtı
              </p>

              <h1
                className="font-display font-bold text-slate-900 tracking-tight leading-[1.1] max-w-2xl"
                style={{
                  fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)',
                  textWrap: 'balance',
                }}
              >
                Antalya’nın 2+1 Daire, Apart ve Villalarında Kusursuz Temizlik
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                ŞN Temizlik ile eşyalı evlerden kısa dönem kiralık apartlara, inşaat sonrası
                teslimlerden müstakil villalara kadar her yaşam alanı aynı gün içinde, profesyonel
                malzeme ve sigortalı kadromuzla hijyenik olarak teslim edilir.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappQuickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp’tan Yaz</span>
                </a>

                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm sm:text-base font-semibold tabular-nums transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                >
                  <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                  <span>Hemen Ara: {PHONE_DISPLAY}</span>
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                <span>Konutunuzun detaylarını seçip hazır mesaj göndermek için:</span>
                <button
                  type="button"
                  onClick={onJumpToPlanner}
                  className="font-semibold text-sky-800 hover:text-sky-900 underline underline-offset-4 cursor-pointer transition-colors"
                >
                  Hızlı Ekip ve Teklif Oluşturucu
                </button>
              </div>
            </div>
          </div>

          {/* Right Media Anchor */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <ResilientImage
                src={heroVillaImage}
                alt="Antalya’da ŞN Temizlik tarafından temizlenmiş deniz manzaralı modern villa ve daire salonu"
                fallbackTitle="Antalya Daire, Apart ve Villa Temizliği"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent p-5 sm:p-6">
                <p className="text-xs sm:text-sm font-medium text-sky-200">
                  WhatsApp ve Telefon ile Aynı Gün Planlama
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium text-white">
                  1+1, 2+1 Daire · Apart Çıkış-Giriş · Müstakil Villa · İnşaat Sonrası
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Guarantee Strip below Hero Split */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {guarantees.map((item) => (
            <div key={item.value} className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold text-slate-900 tabular-nums tracking-tight">
                {item.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-slate-800">{item.label}</span>
              <span className="mt-1 text-sm text-slate-600">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
