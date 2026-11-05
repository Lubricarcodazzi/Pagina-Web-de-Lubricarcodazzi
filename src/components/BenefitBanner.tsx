import React from 'react';

export const BenefitBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#D9DDE2] py-8 border-b border-[#D8DCE1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-[#202124] text-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-[#D8DCE1]">
          <div className="absolute -right-8 -top-8 w-52 h-52 bg-[#FFD21F]/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col gap-2 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD21F] text-[#202124] text-xs font-black uppercase tracking-wider self-start shadow-xs">
              <span className="material-symbols-outlined text-sm font-bold">stars</span>
              <span>Beneficio Exclusivo</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              ¡Compra tu aceite y recibe el servicio de cambio gratis!
            </h2>
            
            <p className="text-sm sm:text-base text-[#D8DCE1] leading-relaxed">
              Además, encuentra premios y obsequios según tus compras y fidelidad al realizar tu mantenimiento preventivo con nosotros en Agustín Codazzi.
            </p>
          </div>

          <a
            href="https://wa.me/573185287144?text=Hola,%20vi%20los%20beneficios%20de%20Lubricar%20Codazzi%20en%20su%20página%20web%20y%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] font-black text-sm transition-transform active:scale-95 shadow-md shrink-0 border border-[#FFD21F]"
          >
            <span className="material-symbols-outlined text-xl font-bold">redeem</span>
            <span>Consultar beneficios por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
