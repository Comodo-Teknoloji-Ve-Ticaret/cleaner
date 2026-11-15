import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/cleaningData';

export function Faq() {
  return (
    <section id="sss" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-sky-800">Sıkça Sorulan Sorular</p>
        <h2 className="mt-1.5 font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Antalya Temizlik Hizmeti Hakkında Merak Edilenler
        </h2>

        <div className="mt-8 divide-y divide-slate-200 border-t border-b border-slate-200">
          {FAQS.map((faq, index) => (
            <details key={faq.question} className="group" open={index === 0}>
              <summary className="w-full py-4 flex items-center justify-between gap-4 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{faq.question}</h3>
                <ChevronDown
                  className="w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-4 pr-6 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
