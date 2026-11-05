import React, { useState } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState('Carro Particular');
  const [vehicleModel, setVehicleModel] = useState('');
  const [service, setService] = useState('Cambio de Aceite + Filtro (Mano de obra gratis)');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Mañana (8:00 AM - 12:00 PM)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `¡Hola Lubricar Codazzi! Quiero agendar un turno para mi vehículo:\n\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `• Tipo de vehículo: ${vehicleType}\n` +
      `• Modelo / Año: ${vehicleModel || 'Por confirmar en el taller'}\n` +
      `• Servicio solicitado: ${service}\n` +
      `• Fecha deseada: ${preferredDate || 'Lo más pronto posible'}\n` +
      `• Horario preferido: ${preferredTime}\n\n` +
      `¿Tienen disponibilidad en bahía para esta fecha? ¡Muchas gracias!`;

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
            <span className="material-symbols-outlined text-[#202124] text-2xl">event_available</span>
            <div>
              <h2 className="font-extrabold text-base text-[#202124]">Agendar Turno en Bahía</h2>
              <p className="text-[11px] text-[#5f6368] font-bold">Almacén Lubricar Codazzi • Carrera 18 con calle 23</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#D8DCE1]/40 text-[#202124] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
          <div className="p-3 bg-[#FFD21F]/20 border border-[#FFD21F] rounded-xl text-xs text-[#202124] flex items-center gap-2 shadow-xs">
            <span className="material-symbols-outlined text-base text-[#202124] font-bold">stars</span>
            <span className="font-bold">¡Recuerda que la mano de obra del cambio de aceite es GRATIS al comprar el lubricante!</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Nombre completo:</label>
              <input
                type="text"
                required
                placeholder="Ej. Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Número de teléfono / WhatsApp:</label>
              <input
                type="tel"
                required
                placeholder="Ej. 318 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Tipo de Vehículo:</label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              >
                <option value="Carro Particular">Carro Particular / Sedán</option>
                <option value="Camioneta / SUV">Camioneta / SUV / 4x4</option>
                <option value="Motocicleta">Motocicleta (4T / 2T)</option>
                <option value="Motocarro">Motocarro Comercial</option>
                <option value="Camión Diésel">Camión Liviano / Diésel</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Marca, Modelo y Año:</label>
              <input
                type="text"
                placeholder="Ej. Renault Duster 2017"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#202124] block mb-1">Servicio Requerido:</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
            >
              <option value="Cambio de Aceite + Filtro (Mano de obra gratis)">Cambio de Aceite + Filtro (Mano de obra gratis)</option>
              <option value="Cambio o Diagnóstico de Batería">Cambio o Diagnóstico de Batería Willard/Extrema</option>
              <option value="Cambio de Filtro de Aire y Combustible">Cambio de Filtros (Aire / Combustible / Cabina)</option>
              <option value="Revisión de Refrigerante y Grasas de Chasis">Revisión de Refrigerante y Grasas</option>
              <option value="Mantenimiento Preventivo Completo">Mantenimiento Preventivo Completo</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Fecha sugerida:</label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">Franja horaria:</label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
              >
                <option value="Mañana (7:30 AM - 10:00 AM)">Mañana temprana (7:30 AM - 10:00 AM)</option>
                <option value="Media mañana (10:00 AM - 12:30 PM)">Media mañana (10:00 AM - 12:30 PM)</option>
                <option value="Tarde (1:30 PM - 3:30 PM)">Tarde (1:30 PM - 3:30 PM)</option>
                <option value="Tarde final (3:30 PM - 5:00 PM)">Tarde final (3:30 PM - 5:00 PM)</option>
              </select>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D8DCE1] flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#202124]/70 hover:bg-[#D8DCE1]/30"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black flex items-center gap-2 shadow-md transition-all border border-[#FFD21F]"
            >
              <span className="material-symbols-outlined text-base font-bold">chat</span>
              <span>Confirmar Turno por WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
