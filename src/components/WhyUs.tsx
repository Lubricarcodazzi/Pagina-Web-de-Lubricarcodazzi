import React from 'react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      icon: 'payments',
      title: 'Buenos precios',
      description: 'Precios asequibles y justos que cuidan la economía de transportadores, motociclistas y particulares.'
    },
    {
      icon: 'category',
      title: 'Variedad de marcas',
      description: 'Amplio surtido en lubricantes nacionales e importados, filtros y baterías para toda necesidad mecánica.'
    },
    {
      icon: 'verified_user',
      title: 'Productos originales',
      description: 'Garantía total de procedencia y sellos de seguridad en cada envase y batería comercializada.'
    },
    {
      icon: 'location_city',
      title: 'Experiencia local',
      description: 'Confianza consolidada en Agustín Codazzi gracias a la atención personalizada y transparente.'
    }
  ];

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Compromiso y Valor
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-1">
            ¿Por qué elegir Lubricar Codazzi?
          </h2>
          <p className="text-sm text-[#202124]/80">
            Combinamos productos originales, precios justos y una trayectoria basada en el servicio honesto en todo el Cesar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3 items-start hover:-translate-y-0.5 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD21F] text-[#202124] flex items-center justify-center border border-[#FFD21F] shadow-xs">
                <span className="material-symbols-outlined text-2xl font-bold">{pillar.icon}</span>
              </div>
              <h3 className="text-base font-bold text-[#202124]">{pillar.title}</h3>
              <p className="text-xs text-[#202124]/75 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
