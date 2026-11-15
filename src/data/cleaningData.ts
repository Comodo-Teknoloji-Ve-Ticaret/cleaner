export type PropertyTypeId =
  | '1plus1'
  | '2plus1'
  | '3plus1'
  | 'apart'
  | 'villa';

export type ScopeTypeId =
  | 'standart'
  | 'detayli'
  | 'apart-devir'
  | 'insaat-sonrasi';

export type DistrictId =
  | 'muratpasa-lara'
  | 'konyaalti'
  | 'kepez'
  | 'dosemealti'
  | 'aksu-belek'
  | 'kemer';

export interface PropertyOption {
  id: PropertyTypeId;
  label: string;
  shortLabel: string;
  areaHint: string;
  defaultTeam: number;
  baseHoursMin: number;
  baseHoursMax: number;
}

export interface ScopeOption {
  id: ScopeTypeId;
  label: string;
  description: string;
  extraHours: number;
  extraStaff: number;
}

export interface AddonOption {
  id: string;
  label: string;
  detail: string;
  hoursAdd: number;
}

export interface DistrictInfo {
  id: DistrictId;
  name: string;
  neighborhoods: string;
  dispatchTime: string;
  specialty: string;
  summary: string;
  popularPackage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  district: string;
  propertyType: string;
  beforeAfter: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PHONE_DISPLAY = '0555 659 47 57';
export const PHONE_TEL = 'tel:+905556594757';
export const WHATSAPP_BASE = 'https://wa.me/905556594757';

export const PROPERTY_OPTIONS: PropertyOption[] = [
  {
    id: 'apart',
    label: 'Apart / Stüdyo',
    shortLabel: 'Apart',
    areaHint: '35–65 m²',
    defaultTeam: 2,
    baseHoursMin: 2.5,
    baseHoursMax: 3.5,
  },
  {
    id: '1plus1',
    label: '1+1 Daire',
    shortLabel: '1+1 Daire',
    areaHint: '55–75 m²',
    defaultTeam: 2,
    baseHoursMin: 3,
    baseHoursMax: 4,
  },
  {
    id: '2plus1',
    label: '2+1 Daire',
    shortLabel: '2+1 Daire',
    areaHint: '85–115 m²',
    defaultTeam: 2,
    baseHoursMin: 4,
    baseHoursMax: 5.5,
  },
  {
    id: '3plus1',
    label: '3+1 Daire',
    shortLabel: '3+1 Daire',
    areaHint: '125–165 m²',
    defaultTeam: 3,
    baseHoursMin: 5,
    baseHoursMax: 6.5,
  },
  {
    id: 'villa',
    label: 'Müstakil Villa / Dubleks',
    shortLabel: 'Villa',
    areaHint: '220–450 m²',
    defaultTeam: 4,
    baseHoursMin: 6,
    baseHoursMax: 8,
  },
];

export const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: 'standart',
    label: 'Eşyalı Ev Temizliği',
    description: 'Tüm odalar, mutfak dolap dış/tezgah, banyo hijyeni, cam iç-dış ve zemin temizliği.',
    extraHours: 0,
    extraStaff: 0,
  },
  {
    id: 'detayli',
    label: 'Dip Köşe Detaylı',
    description: 'Mutfak dolap içleri, kapı-pervaz, priz, petek ve balkon dahil kapsamlı temizlik.',
    extraHours: 1.5,
    extraStaff: 1,
  },
  {
    id: 'apart-devir',
    label: 'Apart Çıkış-Giriş Devir',
    description: 'Misafir değişimi için hızlı sterilizasyon, nevresim değişimi ve banyo/mutfak kontrolü.',
    extraHours: -0.5,
    extraStaff: 0,
  },
  {
    id: 'insaat-sonrasi',
    label: 'İnşaat / Tadilat Sonrası',
    description: 'Boya, harç, silikon ve ince toz arındırması; taşınmaya hazır anahtar teslim temizlik.',
    extraHours: 2,
    extraStaff: 1,
  },
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'cam-balkon',
    label: 'Cam Balkon ve Cephe Silimi',
    detail: 'Katlanır cam balkon ve yüksek doğramalar',
    hoursAdd: 1,
  },
  {
    id: 'buharli-banyo',
    label: 'Buharlı Banyo & Derz Hijyeni',
    detail: '140°C buhar ile kireç ve derz dezenfeksiyonu',
    hoursAdd: 0.5,
  },
  {
    id: 'beyaz-esya-ici',
    label: 'Fırın, Davlumbaz & Buzdolabı İçi',
    detail: 'Yağ çözücü ve gıdaya uygun iç temizlik',
    hoursAdd: 0.5,
  },
  {
    id: 'teras-havuz',
    label: 'Geniş Teras / Veranda Yıkama',
    detail: 'Villa ve dubleks dış oturma zeminleri',
    hoursAdd: 1,
  },
];

export const DISTRICTS: DistrictInfo[] = [
  {
    id: 'muratpasa-lara',
    name: 'Muratpaşa & Lara',
    neighborhoods: 'Fener, Şirinyalı, Çağlayan, Güzeloba, Meltem, Kırcami',
    dispatchTime: '45–60 dk içinde ekip yönlendirme',
    specialty: '2+1 ve 3+1 rezidans daireleri, Lara falez bandı lüks konutlar',
    summary:
      'Muratpaşa ve Lara bölgesindeki 2+1 daireler, site içi rezidanslar ve deniz cepheli geniş konutlarda tuz ve nem kalıntısına karşı iz bırakmayan cam ve yüzey bakımı uyguluyoruz.',
    popularPackage: '2+1 Detaylı Ev Temizliği · Cam Balkon Dahil',
  },
  {
    id: 'konyaalti',
    name: 'Konyaaltı',
    neighborhoods: 'Liman, Hurma, Sarısu, Gürsu, Arapsuyu, Uncalı, Altınkum',
    dispatchTime: '45–60 dk içinde ekip yönlendirme',
    specialty: 'Apart daire devir temizliği, 1+1 / 2+1 yazlık ve site daireleri',
    summary:
      'Liman, Hurma ve Gürsu yoğunluğundaki kısa dönem kiralık apartlar ile 2+1 aile daireleri için aynı gün çıkış-giriş (11:00–15:00 arası) hızlı devir ekipleri hazır bulunduruyoruz.',
    popularPackage: 'Apart Çıkış-Giriş Devir & 2+1 Standart Paket',
  },
  {
    id: 'kepez',
    name: 'Kepez',
    neighborhoods: 'Kültür, Ahatlı, Varsak, Dokuma, Göksu, Barış, Sütçüler',
    dispatchTime: '50–70 dk içinde ekip yönlendirme',
    specialty: 'Yeni teslim 2+1 / 3+1 dairelerde inşaat sonrası temizlik',
    summary:
      'Yeni konut projelerinin yoğun olduğu Kepez bölgesinde taşınma öncesi boş ev temizliği, harç ve boya lekesi çıkarma işlemlerini çiziksiz kazıma aparatlarıyla tamamlıyoruz.',
    popularPackage: 'İnşaat Sonrası 2+1 Anahtar Teslim Temizlik',
  },
  {
    id: 'dosemealti',
    name: 'Döşemealtı',
    neighborhoods: 'Yeşilbayır, Altınkale, Yeniköy, Çıplaklı, Bahçeyaka',
    dispatchTime: '60–75 dk içinde ekip yönlendirme',
    specialty: 'Müstakil villalar, ikiz villalar, yüksek tavan ve kış bahçeleri',
    summary:
      'Döşemealtı’ndaki bahçeli müstakil villalara 4–5 kişilik tam donanımlı ekiple giderek aynı gün içinde iç mekan, çoklu banyo, giyinme odası ve geniş teras temizliğini bitiriyoruz.',
    popularPackage: '4+1 / 5+1 Müstakil Villa Kapsamlı Ekip Paketi',
  },
  {
    id: 'aksu-belek',
    name: 'Aksu, Kundu & Belek',
    neighborhoods: 'Kundu, Altıntaş, Kadriye, Belek Merkez, Boğazkent',
    dispatchTime: '60–80 dk içinde ekip yönlendirme',
    specialty: 'Altıntaş yeni daireler ve Belek / Kadriye tatil villaları',
    summary:
      'Altıntaş bölgesindeki yeni teslim 1+1 ve 2+1 dairelerin inşaat temizliğinden Belek’teki sezonluk kiralık villaların misafir hazırlığına kadar tek noktadan servis sunuyoruz.',
    popularPackage: 'Altıntaş İnşaat Sonrası & Belek Villa Hazırlığı',
  },
  {
    id: 'kemer',
    name: 'Kemer & Göynük',
    neighborhoods: 'Göynük, Beldibi, Kemer Merkez, Çamyuva, Tekirova',
    dispatchTime: '75–90 dk içinde ekip yönlendirme',
    specialty: 'Sezonluk apart oteller, dağ/deniz manzaralı müstakil villalar',
    summary:
      'Kemer ve Göynük’te sezon açılışı genel temizliği, villa havuz başı veranda yıkama ve apart ünite devir temizliklerini randevulu ekiplerimizle yönetiyoruz.',
    popularPackage: 'Sezon Açılışı Villa & Apart Genel Temizliği',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Selin Aksoy',
    role: 'Ev Sahibi',
    district: 'Lara · Muratpaşa',
    propertyType: '2+1 Daire Detaylı Temizlik',
    beforeAfter:
      'Taşınma öncesi önceki kiracıdan kalan mutfak yağları ve cam balkon izleri tamamen temizlendi; 2 kişilik ekip 4,5 saatte evi teslim etti.',
  },
  {
    id: 't2',
    name: 'Murat Demirtaş',
    role: 'Apart İşletmecisi (9 Ünite)',
    district: 'Liman · Konyaaltı',
    propertyType: '1+1 & 2+1 Apart Devir Temizliği',
    beforeAfter:
      'Yaz sezonunda 11:00 çıkış – 14:00 giriş arasındaki sıkışık saatlerde hiç aksama yaşamadık; tek telefonla aynı gün ekip planlayabiliyoruz.',
  },
  {
    id: 't3',
    name: 'Hakan & Zeynep Karaca',
    role: 'Villa Sakinleri',
    district: 'Altınkale · Döşemealtı',
    propertyType: '380 m² Müstakil Villa',
    beforeAfter:
      'Tadilat sonrası mermer zemin ve alüminyum doğramalardaki ince toz ve silikon kalıntıları çizik olmadan çıkarıldı, 4 kişilik ekip aynı gün tamamladı.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Temizlik malzemelerini ve ekipmanları ŞN Temizlik mi getiriyor?',
    answer:
      'Evet. Endüstriyel vakum makineleri, buharlı hijyen ekipmanları, cam silme aparatları ve yüzey tipine (mermer, parke, kuvars, ahşap) uygun çevre dostu temizlik ürünleri ekibimiz tarafından getirilir. İsterseniz evinizdeki ürünleri de kullanabiliriz.',
  },
  {
    id: 'f2',
    question: 'Antalya’da 2+1 daire temizliği kaç kişiyle ve kaç saatte biter?',
    answer:
      'Standart bir 2+1 daire için genellikle 2 profesyonel personel yönlendiriyoruz ve ortalama 4 ila 5 saat içinde temizliği tamamlıyoruz. İnşaat sonrası veya çok detaylı taleplerde 3 kişilik ekip kurarak süreyi aynı gün içine sabitliyoruz.',
  },
  {
    id: 'f3',
    question: 'Apart ve günlük kiralık daireler için düzenli veya aynı gün servisiniz var mı?',
    answer:
      'Konyaaltı, Lara ve Muratpaşa başta olmak üzere apart işletmeleri için saatli çıkış-giriş devir temizliği yapıyoruz. Birden fazla ünitesi olan apart sahipleri için aylık sabit program ve öncelikli ekip planlaması sunuyoruz.',
  },
  {
    id: 'f4',
    question: 'Müstakil villalarda dış camlar, teras ve çoklu banyolar dahil mi?',
    answer:
      'Villa temizliğinde kat sayısı, banyo adedi ve teras/cam cephe büyüklüğüne göre 4 ila 5 kişilik ekip görevlendirilir. 0555 659 47 57 numaramızı arayarak veya WhatsApp üzerinden fotoğraf paylaşarak dakikalar içinde ekip planlaması ve özel teklif alabilirsiniz.',
  },
  {
    id: 'f5',
    question: 'Nasıl hızlıca bilgi ve randevu alabilirim?',
    answer:
      'Sabit fiyat listesi yerine konutunuzun gerçek durumuna göre en doğru teklifi sunuyoruz. Doğrudan 0555 659 47 57 numaramızı arayabilir veya WhatsApp’tan daire tipi (1+1, 2+1, apart, villa) ile ilçenizi yazarak hemen geri dönüş alabilirsiniz.',
  },
];
