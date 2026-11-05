import React, { useState } from 'react';

export const FiltersGuide: React.FC = () => {
  const [activeSymptom, setActiveSymptom] = useState<number | null>(null);

  const symptoms = [
    {
      label: 'Pérdida de fuerza y humo oscuro al acelerar',
      diagnosis: 'Filtro de aire del motor saturado de polvo. Al no ingresar suficiente oxígeno, la mezcla queda rica y el combustible no se quema por completo.',
      recommendedFilter: 'Filtro de Aire de Motor'
    },
    {
      label: 'Olor a humedad o polvo al encender el aire acondicionado',
      diagnosis: 'Filtro de cabina/habitáculo lleno de moho, polen y suciedad. Reduce el flujo de aire frío y afecta la calidad del aire respirable.',
      recommendedFilter: 'Filtro de Habitáculo / A/C'
    },
    {
      label: 'Tirones o demora al encender en frío / acelerar a fondo',
      diagnosis: 'Filtro de combustible obstruido con sedimentos del tanque. Disminuye la presión de los inyectores y puede forzar la bomba de gasolina.',
      recommendedFilter: 'Filtro de Combustible'
    },
    {
      label: 'El aceite nuevo se oscurece inmediatamente tras el cambio',
      diagnosis: 'No se cambió el filtro de aceite anterior. La válvula de bypass deja pasar lodo y partículas acumuladas directo al aceite recién comprado.',
      recommendedFilter: 'Filtro de Aceite (Cambiar con cada cambio de lubricante)'
    }
  ];

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Protección Integral
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
            Guía Esencial de Filtros Automotrices
          </h2>
          <p className="text-sm sm:text-base text-[#202124]/80 mt-2 leading-relaxed">
            Los 4 filtros vitales para el funcionamiento limpio, suave y eficiente de cualquier motor a gasolina o diésel en Agustín Codazzi.
          </p>
        </div>

        {/* 4 Filter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Filter 1 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#FFD21F] text-[#202124] flex items-center justify-center font-black text-base shrink-0 border border-[#FFD21F]">
                1
              </span>
              <h3 className="text-lg font-bold text-[#202124]">Filtro de Aceite</h3>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Retiene impurezas, partículas metálicas de fricción y residuos de combustión para que el aceite circule limpio por los conductos vitales del motor.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] flex flex-col gap-1.5 text-xs text-[#202124] border border-[#D8DCE1]">
              <p><strong className="text-[#202124] font-black">Frecuencia de cambio:</strong> Obligatoriamente en cada cambio de aceite (5.000, 7.000 o 10.000 km).</p>
              <p><strong>Tipos disponibles:</strong> Rosca metálica blindada y elemento / cartucho interno ecológico.</p>
            </div>
          </div>

          {/* Filter 2 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#FFD21F] text-[#202124] flex items-center justify-center font-black text-base shrink-0 border border-[#FFD21F]">
                2
              </span>
              <h3 className="text-lg font-bold text-[#202124]">Filtro de Aire del Motor</h3>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Limpia el aire que entra a la cámara de combustión. Retiene polvo ambiental, arena y partículas secas del camino.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] flex flex-col gap-1.5 text-xs text-[#202124] border border-[#D8DCE1]">
              <p><strong className="text-[#202124] font-black">Frecuencia de cambio:</strong> Cada 10.000 a 15.000 km según el entorno de rodamiento.</p>
              <p><strong>Impacto crítico:</strong> Un filtro tapado reduce la potencia del motor y eleva notablemente el consumo de gasolina.</p>
            </div>
          </div>

          {/* Filter 3 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#FFD21F] text-[#202124] flex items-center justify-center font-black text-base shrink-0 border border-[#FFD21F]">
                3
              </span>
              <h3 className="text-lg font-bold text-[#202124]">Filtro de Habitáculo / Aire Acondicionado</h3>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Atrapa polen, polvo de carretera, hollín y bacterias protegiendo la salud respiratoria de los ocupantes dentro de la cabina.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] flex flex-col gap-1.5 text-xs text-[#202124] border border-[#D8DCE1]">
              <p><strong className="text-[#202124] font-black">Frecuencia de cambio:</strong> Anual o cada 10.000 a 15.000 km.</p>
              <p><strong>Señales de alerta:</strong> Olor a humedad al encender el AC, poco flujo de aire en rejillas o vidrios empañados.</p>
            </div>
          </div>

          {/* Filter 4 */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#FFD21F] text-[#202124] flex items-center justify-center font-black text-base shrink-0 border border-[#FFD21F]">
                4
              </span>
              <h3 className="text-lg font-bold text-[#202124]">Filtro de Combustible (Gasolina o Diésel)</h3>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Elimina impurezas, sedimentos y humedad antes de que el carburante alcance los inyectores de alta presión.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] flex flex-col gap-1.5 text-xs text-[#202124] border border-[#D8DCE1]">
              <p><strong className="text-[#202124] font-black">Frecuencia de cambio:</strong> Cada 20.000 a 40.000 km (en diésel incluye drenaje de trampa de agua).</p>
              <p><strong>Tipos:</strong> Filtro externo en línea bajo el chasis o módulo integrado en la bomba del tanque.</p>
            </div>
          </div>
        </div>

        {/* Interactive Symptom Troubleshooter */}
        <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] flex flex-col gap-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#202124]">stethoscope</span>
            <h3 className="text-base font-bold text-[#202124]">
              ¿Tienes algún síntoma en tu vehículo? Identifícalo aquí:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {symptoms.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSymptom(activeSymptom === idx ? null : idx)}
                className={`p-3 text-left rounded-xl text-xs font-semibold transition-all border flex items-center justify-between gap-2 ${
                  activeSymptom === idx
                    ? 'bg-[#202124] text-white border-[#202124]'
                    : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
                }`}
              >
                <span>{s.label}</span>
                <span className="material-symbols-outlined text-sm shrink-0">
                  {activeSymptom === idx ? 'expand_less' : 'expand_more'}
                </span>
              </button>
            ))}
          </div>

          {activeSymptom !== null && (
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in duration-200 shadow-xs">
              <div className="text-xs">
                <span className="font-black text-[#202124] bg-[#FFD21F] px-2 py-0.5 rounded uppercase inline-block">
                  Revisar: {symptoms[activeSymptom].recommendedFilter}
                </span>
                <p className="text-[#202124] mt-1.5 font-medium">{symptoms[activeSymptom].diagnosis}</p>
              </div>
              <a
                href={`https://wa.me/573185287144?text=${encodeURIComponent(
                  `Hola, vi la guía de filtros de Lubricar Codazzi. Mi carro presenta: "${symptoms[activeSymptom].label}". Quiero consultar disponibilidad para cambiar el ${symptoms[activeSymptom].recommendedFilter}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-4 py-2 rounded-xl bg-[#FFD21F] text-[#202124] text-xs font-black hover:bg-[#f0c213] transition-colors shrink-0 border border-[#FFD21F]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/573185287144?text=Hola,%20vi%20la%20guía%20de%20filtros%20en%20la%20página%20web%20y%20quiero%20consultar%20filtros"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-sm font-black transition-colors shadow-md border border-[#FFD21F]"
          >
            <span className="material-symbols-outlined text-xl font-bold">chat</span>
            <span>Consultar filtros para mi vehículo por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
