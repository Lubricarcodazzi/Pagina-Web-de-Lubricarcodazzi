import React, { useState } from 'react';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onClose }) => {
  const [vehicle, setVehicle] = useState('Carro');
  const [year, setYear] = useState('2018');
  const [mileage, setMileage] = useState('80.000');
  const [lookingFor, setLookingFor] = useState<'aceite' | 'bateria' | 'ambos'>('ambos');

  if (!isOpen) return null;

  const getOilSuggestion = () => {
    const numMileage = parseInt(mileage.replace(/\D/g, ''), 10) || 80000;
    if (vehicle === 'Moto') return '10W-40 o 20W-50 4T (JASO MA2)';
    if (vehicle === 'Motocarro') return '20W-50 Mineral de Trabajo Pesado';
    if (numMileage < 60000) return '0W-20 o 5W-30 100% Sintético';
    if (numMileage < 120000) return '5W-30 o 10W-40 Semisintético';
    return '20W-50 Mineral de Alto Kilometraje';
  };

  const getBatterySuggestion = () => {
    if (vehicle === 'Camioneta') return '1000A - 1250A (Willard Titanio o Extrema Titanio)';
    if (vehicle === 'Moto') return 'Batería 12V 5Ah a 9Ah';
    if (vehicle === 'Motocarro') return 'Batería 12V 32Ah a 35Ah';
    return '850A a 950A (Willard Plata o Willard Titanio)';
  };

  const handleWhatsApp = () => {
    const msg = `Hola Lubricar Codazzi, utilicé el Asesor Automotriz de su página web para mi ${vehicle} (Año aprox: ${year}, Kilometraje: ${mileage} km).\n\n` +
      `• Asesoría solicitada: ${lookingFor.toUpperCase()}\n` +
      `• Aceite sugerido: ${getOilSuggestion()}\n` +
      `• Batería sugerida: ${getBatterySuggestion()}\n\n` +
      `¿Podrían confirmarme precios y disponibilidad en Agustín Codazzi? ¡Gracias!`;

    window.open(`https://wa.me/573185287144?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl shadow-2xl overflow-hidden border border-[#D8DCE1] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#D8DCE1] flex items-center justify-between bg-[#FFFFFF]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#202124] text-2xl">auto_fix_high</span>
            <div>
              <h2 className="font-extrabold text-base text-[#202124]">Asesor de Aceites y Baterías</h2>
              <p className="text-[11px] text-[#5f6368] font-bold">Recomendación técnica personalizada en 2 pasos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#D8DCE1]/40 text-[#202124] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setLookingFor('aceite')}
              className={`p-2 rounded-xl text-xs font-black transition-all border ${
                lookingFor === 'aceite'
                  ? 'bg-[#FFD21F] text-[#202124] border-[#FFD21F] shadow-xs'
                  : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
              }`}
            >
              Solo Aceite
            </button>
            <button
              onClick={() => setLookingFor('bateria')}
              className={`p-2 rounded-xl text-xs font-black transition-all border ${
                lookingFor === 'bateria'
                  ? 'bg-[#FFD21F] text-[#202124] border-[#FFD21F] shadow-xs'
                  : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
              }`}
            >
              Solo Batería
            </button>
            <button
              onClick={() => setLookingFor('ambos')}
              className={`p-2 rounded-xl text-xs font-black transition-all border ${
                lookingFor === 'ambos'
                  ? 'bg-[#FFD21F] text-[#202124] border-[#FFD21F] shadow-xs'
                  : 'bg-[#FFFFFF] text-[#202124] border-[#D8DCE1] hover:bg-[#D8DCE1]/30'
              }`}
            >
              Ambos
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Vehículo:</label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              >
                <option value="Carro">Carro / Sedán</option>
                <option value="Camioneta">Camioneta / SUV</option>
                <option value="Moto">Motocicleta</option>
                <option value="Motocarro">Motocarro</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Año aprox:</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2018"
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Kilometraje:</label>
              <input
                type="text"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                placeholder="80.000 km"
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              />
            </div>
          </div>

          {/* Diagnosis Preview */}
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs flex flex-col gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2 py-0.5 rounded self-start">
              Diagnóstico Preliminar:
            </span>
            {(lookingFor === 'aceite' || lookingFor === 'ambos') && (
              <div className="text-xs mt-1">
                <span className="font-bold text-[#202124]">Aceite recomendado: </span>
                <span className="text-[#202124] font-black bg-[#FFD21F]/30 px-1.5 py-0.5 rounded">{getOilSuggestion()}</span>
                <p className="text-[11px] text-[#202124]/70 mt-1">
                  Incluye mano de obra de cambio gratis en Agustín Codazzi.
                </p>
              </div>
            )}
            {(lookingFor === 'bateria' || lookingFor === 'ambos') && (
              <div className="text-xs mt-1">
                <span className="font-bold text-[#202124]">Batería sugerida: </span>
                <span className="text-[#202124] font-black bg-[#FFD21F]/30 px-1.5 py-0.5 rounded">{getBatterySuggestion()}</span>
                <p className="text-[11px] text-[#202124]/70 mt-1">
                  Con garantía nacional y diagnóstico de alternador incluido.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-[#D8DCE1] bg-[#FFFFFF] flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#202124]/70 hover:bg-[#D8DCE1]/30"
          >
            Cerrar
          </button>
          <button
            onClick={handleWhatsApp}
            className="px-6 py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black flex items-center gap-2 shadow-md border border-[#FFD21F]"
          >
            <span className="material-symbols-outlined text-base font-bold">chat</span>
            <span>Consultar disponibilidad en WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
