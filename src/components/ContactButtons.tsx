import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/cleaningData';

interface ContactButtonsProps {
  waText: string;
  waLabel?: string;
  phoneLabel?: string;
  size?: 'md' | 'lg';
}

export function ContactButtons({
  waText,
  waLabel = 'WhatsApp’tan Yaz',
  phoneLabel = PHONE_DISPLAY,
  size = 'md',
}: ContactButtonsProps) {
  const pad = size === 'lg' ? 'px-6 py-3.5 min-h-[48px] text-base' : 'px-4 py-2 min-h-[40px] text-sm';

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={waLink(waText)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 ${pad} rounded-lg bg-[#1DA851] hover:bg-[#178F44] text-white font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2`}
      >
        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{waLabel}</span>
      </a>
      <a
        href={PHONE_TEL}
        className={`inline-flex items-center justify-center gap-2 ${pad} rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-semibold tabular-nums transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700`}
      >
        <Phone className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
        <span>{phoneLabel}</span>
      </a>
    </div>
  );
}
