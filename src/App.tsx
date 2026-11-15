import { About } from './components/About';
import { Contact } from './components/Contact';
import { Districts } from './components/Districts';
import { Faq } from './components/Faq';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServicesBento } from './components/ServicesBento';
import { StructuredData } from './components/StructuredData';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesBento />
        <About />
        <Districts />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
