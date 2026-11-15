import { MapPin, MessageCircle } from 'lucide-react';
import { DISTRICTS, waLink } from '../data/cleaningData';

export function Districts() {
  return (
    <section id="bolgeler" className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-sky-800">Hizmet Bölgelerimiz</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Antalya’nın Tüm Merkez İlçelerinde Temizlik Hizmeti
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Muratpaşa, Konyaaltı, Kepez, Döşemealtı, Aksu, Belek ve Kemer’de mobil ekiplerimizle
            hizmet veriyoruz. İlçenizi seçip doğrudan WhatsApp’tan yazabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISTRICTS.map((district) => (
            <article
              key={district.id}
              id={`${district.id}-temizlik`}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-700 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {district.name} Temizlik Şirketi
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{district.summary}</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Hizmet verilen mahalleler</dt>
                    <dd className="mt-0.5 text-slate-900">{district.neighborhoods}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Öne çıkan hizmet</dt>
                    <dd className="mt-0.5 text-slate-900">{district.specialty}</dd>
                  </div>
                </dl>
              </div>
              <a
                href={waLink(
                  `Merhaba ŞN Temizlik, ${district.name} bölgesinde temizlik hizmeti için fiyat ve randevu bilgisi almak istiyorum.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 self-start px-4 py-2 min-h-[40px] rounded-lg bg-[#1DA851] hover:bg-[#178F44] text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{district.name} için WhatsApp</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
