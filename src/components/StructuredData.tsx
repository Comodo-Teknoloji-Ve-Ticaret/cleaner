import {
  BUSINESS_NAME,
  DISTRICTS,
  FAQS,
  PHONE_E164,
  SITE_URL,
  WHATSAPP_BASE,
} from '../data/cleaningData';

const SERVICES = [
  'Antalya Ev Temizliği (1+1, 2+1, 3+1 Daire)',
  'Antalya Apart ve Günlük Kiralık Daire Temizliği',
  'Antalya Villa ve Dubleks Temizliği',
  'Antalya İnşaat ve Tadilat Sonrası Temizlik',
];

const AREAS = [
  'Antalya',
  'Muratpaşa',
  'Lara',
  'Konyaaltı',
  'Kepez',
  'Döşemealtı',
  'Aksu',
  'Kundu',
  'Belek',
  'Kemer',
  'Göynük',
];

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}#business`,
      name: BUSINESS_NAME,
      alternateName: 'ŞN Temizlik',
      description:
        'Antalya’da 1+1, 2+1, 3+1 daire, apart, müstakil villa ve inşaat sonrası profesyonel temizlik hizmeti. WhatsApp ve telefonla randevu.',
      url: SITE_URL,
      image: `${SITE_URL}og-image.jpg`,
      telephone: PHONE_E164,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Antalya',
        addressRegion: 'Antalya',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.8969, longitude: 30.7133 },
      areaServed: AREAS.map((name) => ({ '@type': 'Place', name: `${name}, Antalya` })),
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE_E164,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['Turkish'],
        url: WHATSAPP_BASE,
      },
      knowsAbout: ['Ev temizliği', 'Apart temizliği', 'Villa temizliği', 'İnşaat sonrası temizlik'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Antalya Temizlik Hizmetleri',
        itemListElement: SERVICES.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name, areaServed: 'Antalya' },
        })),
      },
    },
    ...DISTRICTS.map((d) => ({
      '@type': 'Service',
      name: `${d.name} Temizlik Hizmeti`,
      serviceType: 'Ev, apart ve villa temizliği',
      description: d.summary,
      provider: { '@id': `${SITE_URL}#business` },
      areaServed: { '@type': 'Place', name: `${d.name}, Antalya` },
    })),
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: BUSINESS_NAME,
      inLanguage: 'tr-TR',
      publisher: { '@id': `${SITE_URL}#business` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
}
