import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-[#202124] text-white relative overflow-hidden border-b border-[#D8DCE1]">
      <div className="absolute inset-0 bg-[radial-gradient(#FFD21F_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center flex flex-col items-center gap-5 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFD21F] text-[#202124] border border-[#FFD21F]">
          <span className="material-symbols-outlined text-sm font-bold">bolt</span>
          <span className="text-xs font-black uppercase tracking-wider">Atención Inmediata</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white max-w-3xl leading-tight">
          Tu vehículo merece productos de calidad y atención confiable
        </h2>

        <p className="text-sm sm:text-base text-[#D8DCE1] max-w-2xl leading-relaxed">
          Encuentra lo que necesitas para seguir en marcha. Estamos listos para responder tus consultas, verificar compatibilidad y recibirte en nuestra bahía de servicio en Agustín Codazzi.
        </p>

        <a
          href="https://wa.me/573185287144?text=Hola,%20vi%20la%20página%20web%20de%20Lubricar%20Codazzi%20y%20quiero%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-sm font-black shadow-lg transition-transform active:scale-95 border border-[#FFD21F]"
        >
          <span className="material-symbols-outlined text-2xl font-bold">chat</span>
          <span>Hablar con un Asesor de Lubricar Codazzi</span>
        </a>
      </div>
    </section>
  );
};
