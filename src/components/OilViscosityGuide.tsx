import React, { useState } from 'react';
import { OIL_VISCOSITIES, BRAND_MATRIX } from '../data/catalog';

export const OilViscosityGuide: React.FC = () => {
  const [vehicleCategory, setVehicleCategory] = useState<'carro' | 'camioneta' | 'moto' | 'motocarro' | 'diesel'>('carro');
  const [mileageRange, setMileageRange] = useState<'bajo' | 'medio' | 'alto'>('medio');

  // Interactive Recommendation Logic
  const getRecommendation = () => {
    if (vehicleCategory === 'moto') {
      return {
        viscosity: '10W-40 o 20W-50 4T',
        type: 'Semisintético o Mineral JASO MA2',
        explanation: 'Especialmente formulado para clutch húmedo de motocicletas evitando el deslizamiento de embrague.',
        recommendedBrands: ['Motul 5100 / 3000 4T', 'Mobil Super Moto', 'Castrol Actevo 4T']
      };
    }
    if (vehicleCategory === 'motocarro') {
      return {
        viscosity: '20W-50 Trabajo Pesado',
        type: 'Mineral de Alta Resistencia Térmica',
        explanation: 'Soporta las temperaturas elevadas del motor enfriado por aire bajo carga continua de pasajeros o mercancía.',
        recommendedBrands: ['Mobil Super 20W-50', 'Castrol GTX 20W-50', 'Shell Helix HX5']
      };
    }
    if (vehicleCategory === 'diesel') {
      return {
        viscosity: '15W-40 CK-4 / CI-4',
        type: 'Mineral / Semisintético para Motores Diésel',
        explanation: 'Fórmula robusta con aditivos detergentes para neutralizar hollín y proteger turbocompresores.',
        recommendedBrands: ['Mobil Delvac 15W-40', 'Shell Rimula', 'Castrol CRB']
      };
    }
    // Carro or Camioneta
    if (mileageRange === 'bajo') {
      return {
        viscosity: '0W-20 o 5W-30',
        type: '100% Sintético API SP / SN Plus',
        explanation: 'Máxima protección en arranques en frío, optimización del consumo de combustible y cuidado del catalizador.',
        recommendedBrands: ['Mobil 1', 'Castrol EDGE', 'Liqui Moly Top Tec', 'Motul 8100']
      };
    }
    if (mileageRange === 'medio') {
      return {
        viscosity: '5W-30 o 10W-40',
        type: 'Sintético o Semisintético de Alto Rendimiento',
        explanation: 'Protección equilibrada frente al calor y tráfico pesado urbano manteniendo limpios los conductos de lubricación.',
        recommendedBrands: ['Castrol Magnatec', 'Mobil Super', 'Shell Helix HX7', 'Valvoline MaxLife']
      };
    }
    return {
      viscosity: '20W-50 Alto Kilometraje',
      type: 'Mineral con Acondicionadores de Retenes',
      explanation: 'Mayor viscosidad que compensa holguras mecánicas naturales, reduce fugas menores y previene el consumo de aceite.',
      recommendedBrands: ['Mobil Super 20W-50 Alto Kilometraje', 'Castrol GTX Alto Kilometraje', 'Havoline Premium']
    };
  };

  const rec = getRecommendation();

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]" id="aceites">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Criterio Técnico Profesional
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
            Guía Completa de Aceites y Viscosidades
          </h2>
          <p className="text-sm sm:text-base text-[#202124]/80 mt-2 leading-relaxed">
            Entender la viscosidad correcta previene el desgaste prematuro de tu motor. Te explicamos los grados más comunes en el contexto automotriz y las condiciones climáticas de Agustín Codazzi.
          </p>
        </div>

        {/* Viscosity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OIL_VISCOSITIES.map((item, idx) => (
            <div
              key={item.grade}
              className={`p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs flex flex-col gap-2.5 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#FFD21F] text-[#202124] text-xs font-black border border-[#FFD21F]">
                  {item.grade}
                </span>
                <span className="text-[11px] uppercase font-bold text-[#5f6368]">
                  {item.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#202124] mt-1">{item.title}</h3>
              <p className="text-xs text-[#202124]/75 leading-relaxed">{item.description}</p>
              <div className="mt-2 pt-2 border-t border-[#D8DCE1]">
                <span className="text-[10px] uppercase font-bold text-[#5f6368]">Aplicaciones típicas:</span>
                <p className="text-xs text-[#202124] font-medium">{item.targetVehicles}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Oil Recommendation Wizard */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
                <span className="material-symbols-outlined text-sm font-bold">auto_awesome</span>
                <span>Asesor Interactivo de Lubricación</span>
              </div>
              <h3 className="text-xl font-bold text-[#202124] mt-2">
                ¿Qué aceite le corresponde a tu motor?
              </h3>
            </div>
            <span className="text-xs text-[#5f6368] font-medium">Configura tu vehículo abajo para ver la sugerencia</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Step 1: Vehicle Category */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#202124]">1. Tipo de Vehículo:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'carro', label: 'Carro Particular' },
                  { id: 'camioneta', label: 'Camioneta / SUV' },
                  { id: 'moto', label: 'Motocicleta 4T' },
                  { id: 'motocarro', label: 'Motocarro' },
                  { id: 'diesel', label: 'Diésel / Camión' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setVehicleCategory(type.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-left ${
                      vehicleCategory === type.id
                        ? 'bg-[#202124] text-white border-[#202124]'
                        : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Mileage (if applicable) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#202124]">
                2. Kilometraje aproximado:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bajo', label: '< 60.000 km', sub: 'Motor Nuevo' },
                  { id: 'medio', label: '60.000 - 120.000 km', sub: 'Uso Moderado' },
                  { id: 'alto', label: '> 120.000 km', sub: 'Alto Kilometraje' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMileageRange(m.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-left ${
                      mileageRange === m.id
                        ? 'bg-[#FFD21F] text-[#202124] border-[#FFD21F] font-black'
                        : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
                    }`}
                  >
                    <div>{m.label}</div>
                    <div className="text-[10px] opacity-75 font-normal">{m.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2 py-0.5 rounded self-start">
                Resultado técnico sugerido:
              </span>
              <p className="text-lg font-black text-[#202124]">
                Viscosidad recomendada: <span className="bg-[#FFD21F] px-1.5 py-0.5 rounded text-[#202124]">{rec.viscosity}</span> ({rec.type})
              </p>
              <p className="text-xs text-[#202124]/80 max-w-2xl">{rec.explanation}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-bold text-[#5f6368]">Marcas sugeridas:</span>
                <span className="text-xs font-bold text-[#202124]">{rec.recommendedBrands.join(' · ')}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/573185287144?text=${encodeURIComponent(
                `Hola, consulté la guía de aceites de Lubricar Codazzi. Mi vehículo es ${vehicleCategory} y quiero cotizar aceite viscosidad ${rec.viscosity}. ¿Tienen disponibilidad y cuándo puedo pasar por el cambio gratis?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-transform active:scale-95 shrink-0 border border-[#FFD21F] shadow-sm"
            >
              <span className="material-symbols-outlined text-base font-bold">chat</span>
              <span>Cotizar este aceite</span>
            </a>
          </div>
        </div>

        {/* Matrix of Leading Brands */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-sm overflow-x-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-lg font-bold text-[#202124]">Matriz de Marcas Líderes Disponibles</h3>
            <span className="text-xs text-[#5f6368] font-semibold">100% sellados y garantizados</span>
          </div>

          <table className="w-full text-left min-w-[560px]">
            <thead>
              <tr className="bg-[#202124] text-white text-xs font-bold uppercase tracking-wider">
                <th className="p-3.5 rounded-l-lg">Marca</th>
                <th className="p-3.5">Líneas Principales</th>
                <th className="p-3.5">Viscosidades Disponibles</th>
                <th className="p-3.5 text-right rounded-r-lg">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8DCE1] text-xs">
              {BRAND_MATRIX.map((row) => (
                <tr key={row.brand} className="hover:bg-[#D8DCE1]/20 transition-colors">
                  <td className="p-3.5 font-black text-[#202124]">{row.brand}</td>
                  <td className="p-3.5 text-[#202124]/80">{row.lines}</td>
                  <td className="p-3.5 text-[#202124] font-bold">{row.viscosities}</td>
                  <td className="p-3.5 text-right">
                    <a
                      href={`https://wa.me/573185287144?text=${encodeURIComponent(
                        `Hola, vi la tabla de aceites de Lubricar Codazzi y quiero consultar precios de la marca ${row.brand}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#202124] hover:bg-[#FFD21F] px-2.5 py-1 rounded bg-[#FFFFFF] border border-[#D8DCE1] transition-colors"
                    >
                      <span>Consultar</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <a
              href="https://wa.me/573185287144?text=Hola,%20vi%20la%20guía%20de%20aceites%20en%20la%20página%20web%20y%20quiero%20consultar%20referencias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#202124] text-white hover:bg-[#323438] text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-[#FFD21F] text-base">chat</span>
              <span>Consultar todos los aceites por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
