import React from 'react';

export const HowToBuy: React.FC = () => {
  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        <div className="max-w-2xl">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Fácil, Rápido y Seguro
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
            Cómo comprar en 3 pasos
          </h2>
          <p className="text-sm sm:text-base text-[#202124]/80 mt-2">
            Sin registros engorrosos ni procesos complicados. Comunicación directa de persona a persona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3 relative overflow-hidden">
            <span className="text-5xl font-black text-[#FFD21F] select-none">01</span>
            <h3 className="text-lg font-bold text-[#202124] -mt-2">Encuentra tu producto</h3>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Revisa nuestro catálogo de aceites, filtros, baterías o accesorios para tu tipo de motor o modelo vehicular.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3 relative overflow-hidden">
            <span className="text-5xl font-black text-[#FFD21F] select-none">02</span>
            <h3 className="text-lg font-bold text-[#202124] -mt-2">Escríbenos por WhatsApp</h3>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Consúltanos precio exacto y disponibilidad inmediata con solo un clic en cualquier botón o agregándolo al cotizador.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3 relative overflow-hidden">
            <span className="text-5xl font-black text-[#FFD21F] select-none">03</span>
            <h3 className="text-lg font-bold text-[#202124] -mt-2">Confirma los detalles</h3>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Acuerda tu retiro en el servicentro, programa tu cambio de aceite gratis en bahía o coordina tu despacho local.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/573185287144?text=Hola,%20vi%20la%20página%20web%20de%20Lubricar%20Codazzi%20y%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-transform active:scale-95 shadow-md border border-[#FFD21F]"
          >
            <span className="material-symbols-outlined text-xl font-bold">chat</span>
            <span>Consultar por WhatsApp ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
};
