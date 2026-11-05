import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitBanner } from './components/BenefitBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { BatterySection } from './components/BatterySection';
import { OilViscosityGuide } from './components/OilViscosityGuide';
import { FiltersGuide } from './components/FiltersGuide';
import { ServicesSection } from './components/ServicesSection';
import { WhyUs } from './components/WhyUs';
import { HowToBuy } from './components/HowToBuy';
import { Testimonials } from './components/Testimonials';
import { AboutUs } from './components/AboutUs';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteDrawer } from './components/QuoteDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AppointmentModal } from './components/AppointmentModal';
import { AdvisorModal } from './components/AdvisorModal';
import { Product } from './data/catalog';

export default function App() {
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  // Quote handlers
  const handleAddToQuote = (product: Product) => {
    if (!quoteItems.some((item) => item.id === product.id)) {
      setQuoteItems([...quoteItems, product]);
    }
  };

  const handleRemoveFromQuote = (id: string) => {
    setQuoteItems(quoteItems.filter((item) => item.id !== id));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#D9DDE2] text-[#202124] antialiased selection:bg-[#FFD21F] selection:text-[#202124]">
      {/* Top Bar Header */}
      <Header
        quoteCount={quoteItems.length}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-grow">
        {/* 1. Hero */}
        <Hero
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* 2. Benefit Banner */}
        <BenefitBanner />

        {/* 3. Product Catalog (#productos) */}
        <ProductCatalog
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToQuote={handleAddToQuote}
          quoteItems={quoteItems}
        />

        {/* 4. Batteries (#baterias) */}
        <BatterySection />

        {/* 5. Oil Viscosity Guide (#aceites) */}
        <OilViscosityGuide />

        {/* 6. Filters Guide */}
        <FiltersGuide />

        {/* 7. Services (#servicios) */}
        <ServicesSection
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* 8. Why Choose Lubricar Codazzi */}
        <WhyUs />

        {/* 9. How to Buy in 3 Steps */}
        <HowToBuy />

        {/* 10. Customer Testimonials (#testimonios) */}
        <Testimonials />

        {/* 11. About Us / History */}
        <AboutUs />

        {/* 12. FAQ */}
        <FaqSection />

        {/* 13. Final CTA */}
        <CallToAction />

        {/* 14. Contact & Map Location (#contacto) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveFromQuote}
        onClearAll={handleClearQuote}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={selectedProduct ? quoteItems.some((i) => i.id === selectedProduct.id) : false}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <AdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
      />
    </div>
  );
}
