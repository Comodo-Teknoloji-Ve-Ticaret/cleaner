import apartmentImg from '../assets/images/service_apartment_living_1794734029165.jpg';
import postConstructionImg from '../assets/images/service_post_construction_1794734030847.jpg';
import villaImg from '../assets/images/service_villa_terrace_1794734030029.jpg';
import { ContactButtons } from './ContactButtons';
import { ResilientImage } from './ResilientImage';

interface Service {
  id: string;
  title: string;
  meta: string[];
  description: string;
  includes?: string[];
  image?: { src: string; alt: string };
  span: string;
}

const SERVICES: Service[] = [
  {
    id: 'daire-temizligi',
    title: 'Antalya 1+1, 2+1 ve 3+1 Daire Temizliği',
    meta: ['Eşyalı / boş ev', '2–3 personel', '4–5 saat'],
    description:
      'Muratpaşa, Konyaaltı, Lara ve Kepez’deki eşyalı 1+1, 2+1 ve 3+1 daireler için tek seferlik veya düzenli ev temizliği. Mutfak dolapları, ankastre yüzeyler, banyo kireç temizliği, balkon ve cam silme dahildir.',
    image: { src: apartmentImg, alt: 'Antalya’da temizlenmiş 2+1 daire salonu ve açık mutfak' },
    span: 'lg:col-span-7',
  },
  {
    id: 'apart-temizligi',
    title: 'Antalya Apart ve Günlük Kiralık Daire Temizliği',
    meta: ['Apart & kısa dönem kiralama', '11:00–15:00 devir'],
    description:
      'Konyaaltı Liman, Hurma ve Lara’daki apart daireler ve günlük kiralık evler için misafir değişim saatlerine uygun hızlı devir temizliği.',
    includes: [
      'Yatak ve nevresim değişimi',
      'Banyo ve mutfak buharlı dezenfeksiyon',
      'Çok üniteli işletmelere aylık sabit plan',
      'WhatsApp’tan fotoğraflı teslim raporu',
    ],
    span: 'lg:col-span-5',
  },
  {
    id: 'villa-temizligi',
    title: 'Antalya Villa ve Dubleks Temizliği',
    meta: ['Döşemealtı · Belek · Kemer · Lara', '4–5 personel'],
    description:
      'Çok katlı villalar, havuz başı teraslar, geniş cam cepheler ve mermer zeminler için kalabalık ekiple aynı gün eksiksiz villa temizliği.',
    image: { src: villaImg, alt: 'Antalya’da terası ve cam cephesi temizlenmiş müstakil villa' },
    span: 'lg:col-span-5',
  },
  {
    id: 'insaat-sonrasi-temizlik',
    title: 'Antalya İnşaat ve Tadilat Sonrası Temizlik',
    meta: ['Sıfır konut & tadilat sonrası', 'Kepez · Altıntaş · Konyaaltı'],
    description:
      'Yeni teslim alınan veya tadilattan çıkan dairelerde derz, harç, boya damlası, pencere bandı ve ince alçı tozunu endüstriyel vakum ve özel çözücülerle, cam ve parkelere zarar vermeden temizliyoruz.',
    image: { src: postConstructionImg, alt: 'İnşaat sonrası temizliği yapılmış boş daire' },
    span: 'lg:col-span-7',
  },
];

export function ServicesBento() {
  return (
    <section id="hizmetler" className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <p className="text-sm font-medium text-sky-800">Hizmetlerimiz</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Antalya Temizlik Hizmetleri
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Daireden apart ve villaya kadar her konut için uygun personel sayısı ve ekipmanla
            çalışıyoruz. Fiyat ve randevu için WhatsApp’tan yazın ya da arayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className={`${service.span} bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col`}
            >
              {service.image && (
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <ResilientImage
                    src={service.image.src}
                    alt={service.image.alt}
                    fallbackTitle={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-500">{service.meta.join(' · ')}</p>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  {service.includes && (
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700 list-disc pl-5">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <ContactButtons
                    waText={`Merhaba ŞN Temizlik, ${service.title.replace('Antalya ', '')} için fiyat ve randevu bilgisi almak istiyorum.`}
                    waLabel="WhatsApp’tan Sor"
                    phoneLabel="Ara"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
