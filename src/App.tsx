/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BookingSection } from './components/BookingSection';
import { DistrictsAndProof } from './components/DistrictsAndProof';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ServicesBento } from './components/ServicesBento';
import type { DistrictId, PropertyTypeId, ScopeTypeId } from './data/cleaningData';

export default function App() {
  const [propertyType, setPropertyType] = useState<PropertyTypeId>('2plus1');
  const [scopeType, setScopeType] = useState<ScopeTypeId>('standart');
  const [districtId, setDistrictId] = useState<DistrictId>('muratpasa-lara');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [bookingNote, setBookingNote] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPreset = (property: PropertyTypeId, scope: ScopeTypeId) => {
    setPropertyType(property);
    setScopeType(scope);
    scrollToSection('teklif-al');
  };

  const handleToggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectDistrictForQuote = (distId: DistrictId) => {
    setDistrictId(distId);
    scrollToSection('teklif-al');
  };

  const handleBookWithQuote = (summaryText: string) => {
    setBookingNote(summaryText);
    scrollToSection('randevu');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero onJumpToPlanner={() => scrollToSection('teklif-al')} />
        <ServicesBento onSelectPreset={handleSelectPreset} />
        <QuoteCalculator
          propertyType={propertyType}
          onChangeProperty={setPropertyType}
          scopeType={scopeType}
          onChangeScope={setScopeType}
          districtId={districtId}
          onChangeDistrict={setDistrictId}
          selectedAddons={selectedAddons}
          onToggleAddon={handleToggleAddon}
          onBookWithQuote={handleBookWithQuote}
        />
        <DistrictsAndProof onSelectDistrictForQuote={handleSelectDistrictForQuote} />
        <BookingSection
          prefilledProperty={propertyType}
          prefilledDistrict={districtId}
          prefilledNote={bookingNote}
        />
      </main>
      <Footer />
    </div>
  );
}
