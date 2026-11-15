import { ArrowDownRight, Check, MessageCircle, Phone } from 'lucide-react';
import {
  ADDON_OPTIONS,
  DISTRICTS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROPERTY_OPTIONS,
  SCOPE_OPTIONS,
  WHATSAPP_BASE,
  type DistrictId,
  type PropertyTypeId,
  type ScopeTypeId,
} from '../data/cleaningData';

interface QuoteCalculatorProps {
  propertyType: PropertyTypeId;
  onChangeProperty: (val: PropertyTypeId) => void;
  scopeType: ScopeTypeId;
  onChangeScope: (val: ScopeTypeId) => void;
  districtId: DistrictId;
  onChangeDistrict: (val: DistrictId) => void;
  selectedAddons: string[];
  onToggleAddon: (id: string) => void;
  onBookWithQuote: (summaryText: string) => void;
}

export function QuoteCalculator({
  propertyType,
  onChangeProperty,
  scopeType,
  onChangeScope,
  districtId,
  onChangeDistrict,
  selectedAddons,
  onToggleAddon,
  onBookWithQuote,
}: QuoteCalculatorProps) {
  const property = PROPERTY_OPTIONS.find((p) => p.id === propertyType) ?? PROPERTY_OPTIONS[2];
  const scope = SCOPE_OPTIONS.find((s) => s.id === scopeType) ?? SCOPE_OPTIONS[0];
  const district = DISTRICTS.find((d) => d.id === districtId) ?? DISTRICTS[0];
  const addons = ADDON_OPTIONS.filter((a) => selectedAddons.includes(a.id));

  const addonsHours = addons.reduce((acc, item) => acc + item.hoursAdd, 0);
  const teamCount = Math.min(6, property.defaultTeam + scope.extraStaff);
  const minHours = Math.max(2, property.baseHoursMin + scope.extraHours + addonsHours);
  const maxHours = Math.max(3, property.baseHoursMax + scope.extraHours + addonsHours);

  const addonNames = addons.length > 0 ? addons.map((a) => a.label).join(', ') : 'Yok';

  const summaryText = `Merhaba ŞN Temizlik, ${district.name} bölgesinde ${property.label} (${property.areaHint}) için ${scope.label} hakkında bilgi ve randevu almak istiyorum. Ek talepler: ${addonNames}.`;

  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(summaryText)}`;

  return (
    <section id="teklif-al" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-sky-800">Hızlı Teklif ve Ekip Planlayıcı</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Konutunuzu Seçin, WhatsApp’tan Hemen Bilgi Alın
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Daire, apart veya villanızın tipini ve Antalya ilçenizi seçin; gereken ekip sayısını
            görün ve bilgilerinizi tek tıkla WhatsApp üzerinden iletin ya da bizi hemen arayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Konut Tipi */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                1. Konut veya İşletme Tipi
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PROPERTY_OPTIONS.map((opt) => {
                  const active = opt.id === propertyType;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onChangeProperty(opt.id)}
                      className={`text-left px-4 py-3 rounded-lg border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                        active
                          ? 'bg-sky-50 border-sky-700 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-sm font-semibold whitespace-nowrap truncate">
                        {opt.label}
                      </span>
                      <span className="block mt-0.5 text-xs text-slate-500 tabular-nums">
                        {opt.areaHint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Temizlik Kapsamı */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">2. Temizlik Kapsamı</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SCOPE_OPTIONS.map((opt) => {
                  const active = opt.id === scopeType;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onChangeScope(opt.id)}
                      className={`text-left p-4 rounded-lg border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                        active
                          ? 'bg-sky-50 border-sky-700 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block text-sm font-semibold">{opt.label}</span>
                      <span className="block mt-1 text-xs text-slate-600 leading-relaxed">
                        {opt.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: İlçe */}
            <div>
              <label htmlFor="calc-district" className="block text-sm font-semibold text-slate-900 mb-3">
                3. Antalya İlçesi / Bölge
              </label>
              <select
                id="calc-district"
                value={districtId}
                onChange={(e) => onChangeDistrict(e.target.value as DistrictId)}
                className="w-full px-4 py-3 min-h-[44px] rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
              >
                {DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.neighborhoods})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: Ek Hizmetler */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                4. İsteğe Bağlı Ek İşlemler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDON_OPTIONS.map((addon) => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => onToggleAddon(addon.id)}
                      aria-pressed={checked}
                      className={`flex items-start gap-3 text-left p-3.5 rounded-lg border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                        checked
                          ? 'bg-sky-50 border-sky-700 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                          checked
                            ? 'bg-sky-700 border-sky-700 text-white'
                            : 'bg-white border-slate-300'
                        }`}
                      >
                        {checked && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-slate-900">
                          {addon.label}
                        </span>
                        <span className="block text-xs text-slate-500 mt-0.5">{addon.detail}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-8">
            <p className="text-xs font-medium text-sky-800">Seçili Temizlik Planı</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
              {property.label} · {scope.label}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{district.name}</p>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <p className="text-sm text-slate-600 leading-relaxed">
                Fiyat bilgisi ve randevu saati, konutunuzun mevcut durumu ve taleplerinize göre{' '}
                <span className="font-semibold text-slate-900">WhatsApp veya telefon</span>{' '}
                üzerinden anında paylaşılmaktadır.
              </p>
            </div>

            <dl className="mt-6 pt-5 border-t border-slate-200 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Önerilen Ekip</dt>
                <dd className="font-semibold text-slate-900 tabular-nums">{teamCount} Personel</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Tahmini Tamamlanma</dt>
                <dd className="font-semibold text-slate-900 tabular-nums">
                  {minHours} – {maxHours} Saat
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Bölge Yönlendirme</dt>
                <dd className="font-medium text-slate-900 text-right">{district.dispatchTime}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Seçili Ek İşlemler</dt>
                <dd className="font-medium text-slate-900 text-right">
                  {addons.length > 0 ? `${addons.length} Adet Seçili` : 'Standart Kapsam'}
                </dd>
              </div>
            </dl>

            <div className="mt-7 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp ile Bilgi ve Teklif İste</span>
              </a>

              <a
                href={PHONE_TEL}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-900 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
              >
                <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                <span>Hemen Ara: {PHONE_DISPLAY}</span>
              </a>

              <button
                type="button"
                onClick={() => onBookWithQuote(summaryText)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-slate-600 hover:text-sky-800 cursor-pointer transition-colors"
              >
                <span>Veya Geri Arama Formuna Aktar</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
