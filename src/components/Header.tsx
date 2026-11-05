import React, { useState } from 'react';

interface HeaderProps {
  quoteCount: number;
  onOpenQuote: () => void;
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ quoteCount, onOpenQuote, onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1V_yBlC0ZsQLJR9JQpQ8mkrjlt0fjZxCN1kkc1drt4UrSruxLVEsH31gnwUp5fYfBBvAv0De-n3aEJ44zIHwLFRFhg7YFXTXP6nCdd_E-h_b6ckprVFWGXihBYNcjRZlFPf9DwWCGwzJwmwD2UnF2toCAU8BZfDWAtqDimDM9U6NfsnXMNDfjybIovWBA2833ZKe5GADCBs2xixlPOLwKvLS_EHR4JUrHwClg50IkoKMgZkVYthmhKivjwDHjDWS-zC5s6ZIxyvAQ';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#D8DCE1] shadow-[0_1px_8px_rgba(32,33,36,0.05)]">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark with Logo */}
        <a 
          href="#inicio" 
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <img
            src={LOGO_URL}
            alt="Lubricar Codazzi - Los Profesionales en Aceites"
            className="w-11 h-11 object-contain rounded-full shadow-sm border border-[#D8DCE1] bg-[#202124]"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-[#202124] tracking-tight group-hover:text-[#202124] transition-colors leading-tight">
              Lubricar Codazzi
            </span>
            <span className="text-[11px] font-bold text-[#5f6368] uppercase tracking-wider">
              Los Profesionales en Aceites
            </span>
          </div>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-[#202124]/80">
          <a
            href="#inicio"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Inicio
          </a>
          <a
            href="#productos"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Productos
          </a>
          <a
            href="#baterias"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Baterías
          </a>
          <a
            href="#aceites"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Guía de Aceites
          </a>
          <a
            href="#servicios"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Servicios
          </a>
          <a
            href="#testimonios"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            className="hover:text-[#202124] px-2.5 py-1.5 rounded-lg hover:bg-[#D8DCE1]/40 transition-colors whitespace-nowrap"
          >
            Contacto
          </a>
        </nav>

        {/* Zone 3: Quote Bag + Primary WhatsApp Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Cotizador Button */}
          <button
            onClick={onOpenQuote}
            className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#D8DCE1]/40 text-[#202124] text-xs font-bold transition-all border border-[#D8DCE1]"
            title="Ver lista de cotización"
          >
            <span className="material-symbols-outlined text-lg text-[#202124]">receipt_long</span>
            <span className="hidden sm:inline">Cotizador</span>
            {quoteCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#FFD21F] text-[#202124] text-[11px] font-black flex items-center justify-center shadow-xs">
                {quoteCount}
              </span>
            )}
          </button>

          {/* Agendar Turno Quick CTA */}
          <button
            onClick={onOpenAppointment}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#D8DCE1]/30 text-[#202124] text-xs font-bold transition-colors border border-[#D8DCE1]"
          >
            <span className="material-symbols-outlined text-base text-[#202124]">calendar_month</span>
            <span>Agendar Cambio</span>
          </button>

          {/* Primary Action Button: Amarillo Eléctrico con Texto Negro Grafito */}
          <a
            href="https://wa.me/573185287144?text=Hola,%20vi%20la%20página%20web%20de%20Lubricar%20Codazzi%20y%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] transition-all shadow-sm font-black text-xs whitespace-nowrap border border-[#FFD21F]"
          >
            <span className="material-symbols-outlined text-base font-bold">chat</span>
            <span className="hidden md:inline">Consultar por WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#FFFFFF] text-[#202124] hover:bg-[#D8DCE1]/50 border border-[#D8DCE1] transition-colors"
            aria-label="Menú principal"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] border-b border-[#D8DCE1] px-6 py-5 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#D8DCE1]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5f6368]">Navegación</span>
            <span className="text-xs text-[#202124] font-black bg-[#FFD21F] px-2 py-0.5 rounded">Agustín Codazzi, Cesar</span>
          </div>
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Inicio</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>
          <a
            href="#productos"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Catálogo de Productos</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>
          <a
            href="#baterias"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Baterías (Willard / Extrema)</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>
          <a
            href="#aceites"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Guía de Aceites & Viscosidades</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Servicios de Cambio de Aceite</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Testimonios de Clientes</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-bold text-[#202124] hover:text-[#202124] flex items-center justify-between"
          >
            <span>Contacto y Ubicación</span>
            <span className="material-symbols-outlined text-base text-[#5f6368]">chevron_right</span>
          </a>

          <div className="pt-3 border-t border-[#D8DCE1] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-2.5 rounded-xl bg-[#FFFFFF] text-[#202124] border border-[#D8DCE1] font-bold text-xs flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg text-[#202124]">calendar_month</span>
              <span>Agendar Turno de Cambio</span>
            </button>
            <a
              href="https://wa.me/573185287144?text=Hola,%20vi%20la%20página%20web%20de%20Lubricar%20Codazzi%20y%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] font-black text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Hablar al WhatsApp: 318 528 7144</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
