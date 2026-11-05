import React, { useState } from 'react';
import { BATTERY_CAPACITIES } from '../data/catalog';

export const BatterySection: React.FC = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('compacto');

  const vehicleOptions = [
    {
      id: 'compacto',
      label: 'Compacto / Urbano (Spark, Picanto, March)',
      recommendedAmp: '850 A',
      line: 'Willard Plata / Willard Titanio',
      notes: 'Batería compacta con excelente respuesta en arranques continuos urbanos.',
      whatsappMsg: 'Hola, vi la sección de baterías en la página web y quiero cotizar una batería de 850A para mi vehículo compacto/urbano.'
    },
    {
      id: 'sedan',
      label: 'Sedán Familiar / Crossover (Logan, Sandero, Aveo, Duster 1.6)',
      recommendedAmp: '950 A',
      line: 'Willard Titanio 950 / Extrema Titanio',
      notes: 'Soporta sistema de audio, pantalla multimedia y demanda de aire acondicionado.',
      whatsappMsg: 'Hola, vi la sección de baterías en la página web y quiero cotizar una batería de 950A para sedán/crossover.'
    },
    {
      id: 'suv',
      label: 'SUV / Camioneta Mediana (Tracker, CX-5, Tucson, Prado)',
      recommendedAmp: '1000 A',
      line: 'Willard Titanio 1000 / Extrema Titanio',
      notes: 'Fuerza de arranque reforzada para motores 2.0L o superiores y múltiples sensores.',
      whatsappMsg: 'Hola, vi la sección de baterías en la página web y quiero cotizar una batería de 1000A para camioneta/SUV.'
    },
    {
      id: 'pesado',
      label: 'Pick-up Diésel / Camión (Hilux, D-Max, Ranger, Turbo NPR)',
      recommendedAmp: '1250 A',
      line: 'Extrema Titanio 1250 Pesado',
      notes: 'Máxima potencia CCA para motores diésel de alta compresión y jornadas agrícolas o comerciales.',
      whatsappMsg: 'Hola, vi la sección de baterías en la página web y quiero cotizar una batería de 1250A para camioneta diésel o camión.'
    }
  ];

  const currentSelection = vehicleOptions.find((o) => o.id === selectedVehicleType) || vehicleOptions[0];

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]" id="baterias">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Potencia y Encendido Certificado
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
            Baterías de Alto Rendimiento
          </h2>
          <p className="text-sm sm:text-base text-[#202124]/80 mt-2 leading-relaxed">
            Contamos con marcas autorizadas y líderes del mercado para garantizar un arranque instantáneo en todo tipo de clima y terreno en Agustín Codazzi y la región.
          </p>
        </div>

        {/* 3 Authorized Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-[#202124]">Willard</span>
              <span className="material-symbols-outlined text-[#FFD21F] text-2xl fill">bolt</span>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Confiabilidad probada con excelente respuesta de arranque en frío y prolongada vida útil para todo el parque automotor nacional.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-[#202124]">Willard Titanio</span>
              <span className="material-symbols-outlined text-[#FFD21F] text-2xl fill">electric_bolt</span>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Tecnología de aleación titanio que soporta altas demandas eléctricas y las exigentes temperaturas del clima del Cesar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-[#202124]">Extrema Titanio</span>
              <span className="material-symbols-outlined text-[#FFD21F] text-2xl fill">battery_charging_full</span>
            </div>
            <p className="text-xs text-[#202124]/75 leading-relaxed">
              Rendimiento para trabajo pesado, flotas comerciales, camionetas de carga, motores diésel y jornadas continuas.
            </p>
          </div>
        </div>

        {/* Commercial Reference Capacities */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-[#202124]">Capacidades Comerciales de Referencia</h3>
            <p className="text-xs text-[#202124]/70">
              Las siguientes aplicaciones son únicamente referenciales para orientar tu búsqueda rápida:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BATTERY_CAPACITIES.map((cap) => (
              <div key={cap.amperage} className="p-4 rounded-xl bg-[#FFFFFF] flex flex-col gap-2 border border-[#D8DCE1] shadow-xs">
                <span className="text-2xl font-black text-[#202124] bg-[#FFD21F]/30 px-2 py-0.5 rounded self-start">{cap.amperage}</span>
                <span className="text-sm font-bold text-[#202124]">{cap.category}</span>
                <p className="text-xs text-[#202124]/75 leading-relaxed">{cap.description}</p>
                <div className="mt-2 pt-2 border-t border-[#D8DCE1]">
                  <span className="text-[10px] uppercase font-bold text-[#5f6368]">Modelos comunes:</span>
                  <p className="text-[11px] text-[#202124] font-medium">{cap.examples}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Vehicle Battery Matcher */}
          <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] flex flex-col gap-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#202124]">tune</span>
              <h4 className="font-bold text-sm text-[#202124]">
                Buscador Rápido: Selecciona el tipo de tu vehículo
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {vehicleOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedVehicleType(opt.id)}
                  className={`p-3 text-left rounded-xl text-xs font-semibold transition-all border ${
                    selectedVehicleType === opt.id
                      ? 'bg-[#202124] text-white border-[#202124] shadow-sm'
                      : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
                  }`}
                >
                  <p className="font-black text-sm">{opt.recommendedAmp}</p>
                  <p className="text-[11px] opacity-85 mt-0.5 truncate">{opt.label}</p>
                </button>
              ))}
            </div>

            {/* Recommendation Result */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2 py-0.5 rounded self-start">
                  Recomendación para: {currentSelection.label}
                </span>
                <p className="text-sm font-extrabold text-[#202124] mt-1">
                  Capacidad sugerida: {currentSelection.recommendedAmp} • Línea: {currentSelection.line}
                </p>
                <p className="text-xs text-[#202124]/75">{currentSelection.notes}</p>
              </div>

              <a
                href={`https://wa.me/573185287144?text=${encodeURIComponent(currentSelection.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-transform active:scale-95 shrink-0 border border-[#FFD21F] shadow-sm"
              >
                <span className="material-symbols-outlined text-base font-bold">chat</span>
                <span>Cotizar esta batería</span>
              </a>
            </div>
          </div>

          {/* Consultation Box */}
          <div className="p-6 rounded-xl bg-[#202124] text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-[#D8DCE1]">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#FFD21F] text-3xl">help_outline</span>
              <div>
                <h4 className="text-base font-bold text-white">
                  ¿No sabes cuál batería necesita tu vehículo exactamente?
                </h4>
                <p className="text-xs text-[#D8DCE1] mt-1">
                  Cuéntanos la marca, el modelo y el año por WhatsApp, y te ayudaremos a consultar la opción y medidas adecuadas.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/573185287144?text=Hola,%20vi%20la%20sección%20de%20baterías%20en%20la%20página%20web%20y%20quiero%20consultar%20una%20batería%20para%20mi%20vehículo"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFD21F] text-[#202124] text-xs font-black hover:bg-[#f0c213] transition-colors shrink-0 border border-[#FFD21F] shadow-sm"
            >
              <span className="material-symbols-outlined text-base font-bold">chat</span>
              <span>Consultar batería para mi vehículo</span>
            </a>
          </div>

          <p className="text-xs text-[#5f6368] italic">
            * Nota: La compatibilidad debe verificarse según las especificaciones del fabricante, polaridad de los bornes y características individuales de cada vehículo. Incluye chequeo de sistema de carga gratis.
          </p>
        </div>
      </div>
    </section>
  );
};
