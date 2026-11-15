import { CheckCircle2, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import {
  DISTRICTS,
  FAQS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROPERTY_OPTIONS,
  WHATSAPP_BASE,
  type DistrictId,
  type PropertyTypeId,
} from '../data/cleaningData';

interface BookingSectionProps {
  prefilledProperty: PropertyTypeId;
  prefilledDistrict: DistrictId;
  prefilledNote: string;
}

export function BookingSection({
  prefilledProperty,
  prefilledDistrict,
  prefilledNote,
}: BookingSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [property, setProperty] = useState<PropertyTypeId>(prefilledProperty);
  const [district, setDistrict] = useState<DistrictId>(prefilledDistrict);
  const [preferredDate, setPreferredDate] = useState('');
  const [note, setNote] = useState(prefilledNote);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  useEffect(() => {
    setProperty(prefilledProperty);
  }, [prefilledProperty]);

  useEffect(() => {
    setDistrict(prefilledDistrict);
  }, [prefilledDistrict]);

  useEffect(() => {
    if (prefilledNote) {
      setNote(prefilledNote);
    }
  }, [prefilledNote]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const digitsOnly = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setErrorMsg('Lütfen adınızı ve soyadınızı girin.');
      return;
    }

    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      setErrorMsg('Lütfen geçerli bir telefon numarası girin (ör. 0555 659 47 57).');
      return;
    }

    const propLabel = PROPERTY_OPTIONS.find((p) => p.id === property)?.label ?? property;
    const distLabel = DISTRICTS.find((d) => d.id === district)?.name ?? district;
    const dateLabel = preferredDate ? ` · Tarih: ${preferredDate}` : '';
    const extraNote = note.trim() ? ` · Not: ${note.trim()}` : '';

    const fullText = `ŞN Temizlik Randevu Talebi — Ad: ${trimmedName} · Tel: ${phone.trim()} · Konut: ${propLabel} · Bölge: ${distLabel}${dateLabel}${extraNote}`;
    setSubmittedSummary(fullText);
  };

  return (
    <section id="randevu" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Lead Capture / Appointment Request Form */}
          <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-8">
            <p className="text-sm font-medium text-sky-800">Hızlı Randevu ve Geri Arama</p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ekip Planlaması İçin Bilgilerinizi Bırakın
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Formu doldurduktan sonra dilerseniz tek tıkla WhatsApp üzerinden gönderin, dilerseniz
              doğrudan <span className="font-semibold text-slate-900 tabular-nums">{PHONE_DISPLAY}</span>{' '}
              numaramızdan bize ulaşın.
            </p>

            {submittedSummary ? (
              <div className="mt-6 bg-white border border-sky-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      Randevu Özeti Hazır
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      Talebiniz oluşturuldu. En hızlı onay ve saat planlaması için aşağıdaki
                      butonla bilgilerinizi doğrudan WhatsApp hattımıza iletebilir veya bizi
                      arayabilirsiniz.
                    </p>
                    <p className="mt-3 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg p-3">
                      {submittedSummary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={`${WHATSAPP_BASE}?text=${encodeURIComponent(submittedSummary)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>WhatsApp’ta Gönder</span>
                      </a>
                      <a
                        href={PHONE_TEL}
                        className="inline-flex items-center gap-2 px-4 py-3 min-h-[44px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap"
                      >
                        <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                        <span>{PHONE_DISPLAY}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedSummary(null)}
                        className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Yeni Talep Oluştur
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800 font-medium"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Ad Soyad
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Örn. Ayşe Yılmaz"
                      className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Telefon Numarası
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white text-sm text-slate-900 tabular-nums placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-property" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Konut Tipi
                    </label>
                    <select
                      id="lead-property"
                      value={property}
                      onChange={(e) => setProperty(e.target.value as PropertyTypeId)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                    >
                      {PROPERTY_OPTIONS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="lead-district" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Antalya İlçesi
                    </label>
                    <select
                      id="lead-district"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value as DistrictId)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                    >
                      {DISTRICTS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tercih Edilen Gün (İsteğe Bağlı)
                  </label>
                  <input
                    id="lead-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                  />
                </div>

                <div>
                  <label htmlFor="lead-note" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Kısa Not (Mahalle, kat veya özel talep)
                  </label>
                  <textarea
                    id="lead-note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Örn. Lara Fener Mah., eşyalı 2+1 daire, cam balkon dahil..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-5 py-3.5 min-h-[44px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
                >
                  Randevu Özeti Oluştur
                </button>
              </form>
            )}
          </div>

          {/* Frequently Asked Questions (SSS) */}
          <div id="sss" className="lg:col-span-6">
            <p className="text-sm font-medium text-sky-800">Sıkça Sorulan Sorular</p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Temizlik Süreci Hakkında Merak Edilenler
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Antalya’da 2+1 daire, apart ve villa temizliği öncesinde müşterilerimizin en çok
              sorduğu soruların net yanıtları.
            </p>

            <div className="mt-6 divide-y divide-slate-200 border-t border-b border-slate-200">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full py-4 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-4 pr-6 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
