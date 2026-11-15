export const BUSINESS_NAME = 'ŞN Temizlik Antalya';
export const SITE_ORIGIN = 'https://comodo-teknoloji-ve-ticaret.github.io';
export const SITE_URL = `${SITE_ORIGIN}/cleaner/`;

export const PHONE_DISPLAY = '0555 659 47 57';
export const PHONE_E164 = '+905556594757';
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const WHATSAPP_BASE = 'https://wa.me/905556594757';

export const OPENING_HOURS = 'Pazartesi – Pazar · 08:00 – 21:00';

export const waLink = (text: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;

export const DEFAULT_WA_TEXT =
  'Merhaba ŞN Temizlik, Antalya’da temizlik hizmeti hakkında bilgi ve randevu almak istiyorum.';

export interface DistrictInfo {
  id: string;
  name: string;
  neighborhoods: string;
  specialty: string;
  summary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const DISTRICTS: DistrictInfo[] = [
  {
    id: 'muratpasa-lara',
    name: 'Muratpaşa & Lara',
    neighborhoods: 'Fener, Şirinyalı, Çağlayan, Güzeloba, Meltem, Kırcami',
    specialty: '2+1 ve 3+1 rezidans daireleri, Lara falez bandı lüks konutlar',
    summary:
      'Muratpaşa ve Lara’daki 2+1 daireler, site içi rezidanslar ve deniz cepheli geniş konutlarda tuz ve nem kalıntısına karşı iz bırakmayan cam ve yüzey temizliği yapıyoruz.',
  },
  {
    id: 'konyaalti',
    name: 'Konyaaltı',
    neighborhoods: 'Liman, Hurma, Sarısu, Gürsu, Arapsuyu, Uncalı, Altınkum',
    specialty: 'Apart daire devir temizliği, 1+1 / 2+1 yazlık ve site daireleri',
    summary:
      'Liman, Hurma ve Gürsu’daki kısa dönem kiralık apartlar ile 2+1 aile daireleri için aynı gün çıkış-giriş (11:00–15:00) devir temizliği yapıyoruz.',
  },
  {
    id: 'kepez',
    name: 'Kepez',
    neighborhoods: 'Kültür, Ahatlı, Varsak, Dokuma, Göksu, Barış, Sütçüler',
    specialty: 'Yeni teslim 2+1 / 3+1 dairelerde inşaat sonrası temizlik',
    summary:
      'Yeni konut projelerinin yoğun olduğu Kepez’de taşınma öncesi boş ev temizliği, harç ve boya lekesi çıkarma işlemlerini çiziksiz kazıma aparatlarıyla yapıyoruz.',
  },
  {
    id: 'dosemealti',
    name: 'Döşemealtı',
    neighborhoods: 'Yeşilbayır, Altınkale, Yeniköy, Çıplaklı, Bahçeyaka',
    specialty: 'Müstakil villalar, ikiz villalar, yüksek tavan ve kış bahçeleri',
    summary:
      'Döşemealtı’ndaki bahçeli müstakil villalara 4–5 kişilik ekiple gidip iç mekan, çoklu banyo, giyinme odası ve teras temizliğini aynı gün bitiriyoruz.',
  },
  {
    id: 'aksu-belek',
    name: 'Aksu, Kundu & Belek',
    neighborhoods: 'Kundu, Altıntaş, Kadriye, Belek Merkez, Boğazkent',
    specialty: 'Altıntaş yeni daireler ve Belek / Kadriye tatil villaları',
    summary:
      'Altıntaş’taki yeni teslim 1+1 ve 2+1 dairelerin inşaat sonrası temizliğinden Belek’teki kiralık villaların misafir hazırlığına kadar hizmet veriyoruz.',
  },
  {
    id: 'kemer',
    name: 'Kemer & Göynük',
    neighborhoods: 'Göynük, Beldibi, Kemer Merkez, Çamyuva, Tekirova',
    specialty: 'Sezonluk apart oteller, müstakil villalar',
    summary:
      'Kemer ve Göynük’te sezon açılışı genel temizliği, villa havuz başı veranda yıkama ve apart devir temizliklerini randevulu ekiplerimizle yapıyoruz.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'ŞN Temizlik Antalya’nın hangi ilçelerinde hizmet veriyor?',
    answer:
      'Antalya’da Muratpaşa, Lara, Konyaaltı, Kepez, Döşemealtı, Aksu, Kundu, Belek, Kemer ve Göynük bölgelerinde ev, apart, villa ve inşaat sonrası temizlik hizmeti veriyoruz.',
  },
  {
    question: 'Antalya’da 2+1 daire temizliği kaç kişiyle ve kaç saatte biter?',
    answer:
      'Standart bir 2+1 daire için genellikle 2 personel yönlendiriyoruz ve temizlik ortalama 4–5 saatte tamamlanır. İnşaat sonrası veya çok detaylı işlerde 3 kişilik ekip kurarak işi aynı gün bitiriyoruz.',
  },
  {
    question: 'Temizlik malzemelerini ve ekipmanları siz mi getiriyorsunuz?',
    answer:
      'Evet. Endüstriyel vakum, buharlı hijyen ekipmanı, cam silme aparatları ve yüzeye (mermer, parke, kuvars, ahşap) uygun temizlik ürünlerini ekibimiz getirir. İsterseniz evinizdeki ürünler de kullanılabilir.',
  },
  {
    question: 'Apart ve günlük kiralık daireler için aynı gün servisiniz var mı?',
    answer:
      'Evet. Konyaaltı, Lara ve Muratpaşa başta olmak üzere apart işletmeleri için çıkış-giriş saatlerine uygun devir temizliği yapıyoruz. Birden fazla ünitesi olan işletmelere aylık sabit program sunuyoruz.',
  },
  {
    question: 'Villa temizliğinde dış camlar, teras ve banyolar dahil mi?',
    answer:
      'Evet. Villa temizliğinde kat sayısı, banyo adedi ve teras/cam cephe büyüklüğüne göre 4–5 kişilik ekip görevlendirilir; iç mekan, banyolar, camlar ve teras aynı gün temizlenir.',
  },
  {
    question: 'Fiyat nasıl belirleniyor?',
    answer:
      'Sabit fiyat listesi yerine evin büyüklüğü, durumu ve istenen kapsama göre fiyat veriyoruz. WhatsApp’tan konut tipini (1+1, 2+1, apart, villa), ilçenizi ve varsa birkaç fotoğraf göndermeniz yeterli; kısa sürede net fiyat iletiyoruz.',
  },
  {
    question: 'Hafta sonu ve bayramlarda çalışıyor musunuz?',
    answer: 'Haftanın 7 günü 08:00–21:00 arasında hizmet veriyoruz. Randevu için 0555 659 47 57 numarasını arayabilir veya WhatsApp’tan yazabilirsiniz.',
  },
];
