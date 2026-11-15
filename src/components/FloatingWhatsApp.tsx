import { MessageCircle } from 'lucide-react';
import { DEFAULT_WA_TEXT, waLink } from '../data/cleaningData';

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(DEFAULT_WA_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1DA851] hover:bg-[#178F44] text-white shadow-lg px-4 py-3.5 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1DA851]"
    >
      <MessageCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
