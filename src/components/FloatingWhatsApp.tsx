import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/573185287144?text=Hola,%20vengo%20de%20la%20página%20web%20de%20Lubricar%20Codazzi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Lubricar Codazzi"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_12px_24px_-6px_rgba(32,33,36,0.3)] hover:scale-105 active:scale-95 transition-all border-2 border-white"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0 transition-opacity pointer-events-none"></span>
        <span className="material-symbols-outlined text-3xl z-10 font-bold">chat</span>
      </a>

      {/* Hover pill tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#202124] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#D8DCE1]/30">
        ¿En qué podemos ayudarte?
      </div>
    </aside>
  );
};
