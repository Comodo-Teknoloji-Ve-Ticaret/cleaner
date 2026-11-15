import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import {
  DISTRICTS,
  PHONE_DISPLAY,
  PHONE_TEL,
  TESTIMONIALS,
  WHATSAPP_BASE,
  type DistrictId,
} from '../data/cleaningData';

interface DistrictsAndProofProps {
  onSelectDistrictForQuote: (districtId: DistrictId) => void;
}

export function DistrictsAndProof({ onSelectDistrictForQuote }: DistrictsAndProofProps) {
  const [activeDistrictId, setActiveDistrictId] = useState<DistrictId>('muratpasa-lara');
  const activeDistrict = DISTRICTS.find((d) => d.id === activeDistrictId) ?? DISTRICTS[0];

  const districtWaUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Merhaba ŞN Temizlik, ${activeDistrict.name} bölgesinde temizlik hizmeti hakkında bilgi almak istiyorum.`
  )}`;

  return (
    <section id="bolgeler" className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Antalya District Coverage Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-sky-800">Antalya Hizmet Ağımız</p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Antalya’nın Her İlçesinde Mobil Ekiplerle Yanınızdayız
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Bölgenizin yapı tipine göre eğitilmiş personel ve donanımla hizmet veriyoruz. İlçenizi
              seçerek kapsanan mahalleleri görüntüleyebilir, WhatsApp veya telefonla hemen ekip
              talep edebilirsiniz.
            </p>

            <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Antalya ilçeleri">
              {DISTRICTS.map((district) => {
                const active = district.id === activeDistrictId;
                return (
                  <button
                    key={district.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveDistrictId(district.id)}
                    className={`px-3.5 py-2 min-h-[40px] rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {district.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-sky-700 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {activeDistrict.name} Temizlik Hizmeti
                </h3>
              </div>
              <span className="text-sm font-medium text-sky-800 tabular-nums">
                {activeDistrict.dispatchTime}
              </span>
            </div>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {activeDistrict.summary}
            </p>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-slate-100 text-sm">
              <div>
                <dt className="text-xs font-medium text-slate-500">Hizmet Verilen Mahalleler</dt>
                <dd className="mt-1 font-medium text-slate-900">{activeDistrict.neighborhoods}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Bölge Uzmanlığı</dt>
                <dd className="mt-1 font-medium text-slate-900">{activeDistrict.specialty}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">En Çok Tercih Edilen</dt>
                <dd className="mt-1 font-medium text-slate-900">{activeDistrict.popularPackage}</dd>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={districtWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp’tan Yaz</span>
                </a>
                <button
                  type="button"
                  onClick={() => onSelectDistrictForQuote(activeDistrict.id)}
                  className="text-sm font-semibold text-slate-700 hover:text-sky-800 underline underline-offset-4 cursor-pointer"
                >
                  Konut Tipi Seç
                </button>
              </div>
            </dl>
          </div>
        </div>

        {/* Adjacent Client Proof / Testimonials */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-medium text-sky-800">Müşteri Deneyimleri</p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Antalya’da Teslim Ettiğimiz Gerçek İşler
              </h3>
            </div>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-sky-800 tabular-nums transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-700" aria-hidden="true" />
              <span>Hemen Arayın: {PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs text-slate-500">
                    {item.district} · {item.propertyType}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    “{item.beforeAfter}”
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
