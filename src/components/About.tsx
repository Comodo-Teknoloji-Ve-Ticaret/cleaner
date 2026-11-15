const POINTS = [
  {
    title: 'Malzeme ve ekipman bizden',
    text: 'Endüstriyel vakum, buhar makinesi ve yüzeye uygun temizlik ürünleriyle geliyoruz.',
  },
  {
    title: 'Konut tipine göre ekip',
    text: '2+1 daireye 2, villaya 4–5 kişilik ekip; iş aynı gün içinde teslim edilir.',
  },
  {
    title: 'Net fiyat, sürpriz yok',
    text: 'WhatsApp’tan fotoğraf gönderin, evinize göre fiyatı baştan söyleyelim.',
  },
  {
    title: 'Haftanın 7 günü',
    text: '08:00–21:00 arası, hafta sonu dahil hizmet veriyoruz.',
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-sky-800">Neden ŞN Temizlik?</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Antalya’da Güvenilir Temizlik Firması
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            ŞN Temizlik, Antalya merkez ilçeleri ve çevresinde ev, apart, villa ve inşaat sonrası
            temizlik yapan yerel bir temizlik şirketidir. Müşterilerimizle doğrudan WhatsApp ve
            telefon üzerinden iletişim kurar, ekibi konutun büyüklüğüne göre planlarız.
          </p>
        </div>
        <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {POINTS.map((point) => (
            <li key={point.title} className="border border-slate-200 rounded-xl p-6 bg-[#F8FAFC]">
              <h3 className="font-display text-lg font-bold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
