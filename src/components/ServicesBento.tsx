import { MessageCircle, Phone } from 'lucide-react';
import apartmentImg from '../assets/images/service_apartment_living_1794734029165.jpg';
import postConstructionImg from '../assets/images/service_post_construction_1794734030847.jpg';
import villaImg from '../assets/images/service_villa_terrace_1794734030029.jpg';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_BASE,
  type PropertyTypeId,
  type ScopeTypeId,
} from '../data/cleaningData';
import { ResilientImage } from './ResilientImage';

interface ServicesBentoProps {
  onSelectPreset: (property: PropertyTypeId, scope: ScopeTypeId) => void;
}

export function ServicesBento({ onSelectPreset }: ServicesBentoProps) {
  const buildWaUrl = (serviceLabel: string) =>
    `${WHATSAPP_BASE}?text=${encodeURIComponent(
      `Merhaba ŞN Temizlik, Antalya’da ${serviceLabel} hizmeti için bilgi ve randevu almak istiyorum.`
    )}`;

  return (
    <section id="hizmetler" className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <p className="text-sm font-medium text-sky-800">Hizmet Alanlarımız</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Antalya’daki Her Konut Tipi İçin Planlı Temizlik
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Standart dairelerden turizm amaçlı apartlara ve geniş metrekareli villalara kadar her
            mekana uygun personel sayısı ve ekipmanla hizmet veriyoruz. Detay ve randevu için
            WhatsApp’tan yazabilir veya doğrudan arayabilirsiniz.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 01. Featured Marquee Service: 2+1 & 1+1 Daire (col-span-7) */}
          <article className="lg:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <ResilientImage
                src={apartmentImg}
                alt="Antalya’da temizlenmiş modern 2+1 daire salonu ve açık mutfak"
                fallbackTitle="1+1 ve 2+1 Daire Temizliği"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-2">
                  <span>1+1 · 2+1 · 3+1 Daireler</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">2–3 Personel</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">4–5 Saat</span>
                </div>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  01. 2+1 ve Eşyalı Daire Temizliği
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Antalya’nın yoğun konut bölgeleri Muratpaşa, Konyaaltı, Lara ve Kepez’de eşyalı
                  1+1, 2+1 ve 3+1 daireler için periyodik veya tek seferlik dip-köşe temizlik.
                  Mutfak dolapları, ankastre yüzeyler, banyo kireç arındırması, balkon ve cam
                  silimi dahildir.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onSelectPreset('2plus1', 'standart')}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                >
                  Kapsam & Ekip Seç
                </button>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildWaUrl('2+1 / Eşyalı Daire Temizliği')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp’tan Sor</span>
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap shrink-0"
                  >
                    <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                    <span>Ara</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 02. Apart & Daily Rental Turnaround (col-span-5) */}
          <article className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-2">
                <span>Apart & Kısa Dönem Kiralama</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">11:00–15:00 Devir</span>
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                02. Apart Çıkış-Giriş Temizliği
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Konyaaltı Liman, Hurma ve Lara’daki apart üniteleri ve günlük kiralık daireler için
                misafir değişim saatlerine birebir uyan hızlı hijyen servisi.
              </p>

              <dl className="mt-6 space-y-4 border-t border-slate-100 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-600">Yatak & Nevresim Değişimi</dt>
                  <dd className="font-medium text-slate-900 text-right">Dahil</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-600">Banyo & Mutfak Dezenfeksiyonu</dt>
                  <dd className="font-medium text-slate-900 text-right">Yüksek Buhar</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-600">Çoklu Ünite İşletme Anlaşması</dt>
                  <dd className="font-medium text-slate-900 text-right">Aylık Sabit Plan</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-600">Kontrol & Fotoğraflı Teslim</dt>
                  <dd className="font-medium text-slate-900 text-right">WhatsApp Raporu</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onSelectPreset('apart', 'apart-devir')}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
              >
                Kapsam & Ekip Seç
              </button>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildWaUrl('Apart Çıkış-Giriş Devir Temizliği')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp’tan Sor</span>
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                  <span>Ara</span>
                </a>
              </div>
            </div>
          </article>

          {/* 03. Villa & Dubleks Temizliği (col-span-5) */}
          <article className="lg:col-span-5 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <ResilientImage
                src={villaImg}
                alt="Antalya’da havuz terası ve cam cephesi temizlenmiş müstakil villa"
                fallbackTitle="Müstakil Villa ve Yazlık Temizliği"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-2">
                  <span>Döşemealtı · Belek · Kemer · Lara</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">4–5 Personel</span>
                </div>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  03. Müstakil Villa ve Dubleks Temizliği
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Çok katlı villalar, havuz başı teraslar, geniş cam sürgü cepheler ve doğal mermer
                  zeminler için kalabalık, koordineli ekip ile aynı gün eksiksiz teslim.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onSelectPreset('villa', 'detayli')}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                >
                  Kapsam & Ekip Seç
                </button>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildWaUrl('Müstakil Villa / Dubleks Temizliği')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp’tan Sor</span>
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap shrink-0"
                  >
                    <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                    <span>Ara</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 04. İnşaat Sonrası & Boş Ev Temizliği (col-span-7) */}
          <article className="lg:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <ResilientImage
                src={postConstructionImg}
                alt="İnşaat ve tadilat sonrası temizliği tamamlanmış sıfır boş daire içi"
                fallbackTitle="İnşaat Sonrası Anahtar Teslim Temizlik"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-2">
                  <span>Sıfır Konut & Tadilat Sonrası</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">Çiziksiz Yüzey İşlemi</span>
                  <span aria-hidden="true">·</span>
                  <span>Kepez · Altıntaş · Konyaaltı</span>
                </div>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  04. İnşaat Sonrası ve Boş Ev Anahtar Teslim
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Yeni aldığınız veya tadilattan çıkan dairenizdeki derz, harç, boya damlaları,
                  pencere bantları ve ince alçı tozunu endüstriyel vakum ve özel çözücülerle
                  camlara ve parkelere zarar vermeden temizliyoruz.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onSelectPreset('2plus1', 'insaat-sonrasi')}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                >
                  Kapsam & Ekip Seç
                </button>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildWaUrl('İnşaat / Tadilat Sonrası Anahtar Teslim Temizlik')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp’tan Sor</span>
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap shrink-0"
                  >
                    <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
