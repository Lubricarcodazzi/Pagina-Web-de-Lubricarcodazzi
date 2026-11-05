import React, { useState } from 'react';
import { Product } from '../data/catalog';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll
}) => {
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  const [vehicleNote, setVehicleNote] = useState('');

  if (!isOpen) return null;

  const getQty = (id: string) => quantities[id] || 1;

  const updateQty = (id: string, delta: number) => {
    const current = getQty(id);
    const next = Math.max(1, current + delta);
    setQuantities({ ...quantities, [id]: next });
  };

  const handleSendToWhatsApp = () => {
    let message = '¡Hola Lubricar Codazzi! Quiero cotizar los siguientes productos desde su página web:\n\n';
    
    items.forEach((item, index) => {
      const qty = getQty(item.id);
      message += `${index + 1}. ${item.name} (${item.tag}) - Cantidad: ${qty}\n`;
    });

    if (vehicleNote.trim()) {
      message += `\nDetalles de mi vehículo: ${vehicleNote.trim()}\n`;
    }

    message += '\n¿Tienen disponibilidad y me podrían indicar el valor estimado? ¡Gracias!';

    window.open(`https://wa.me/573185287144?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFFFF] shadow-2xl flex flex-col justify-between border-l border-[#D8DCE1]">
          {/* Header */}
          <div className="p-5 border-b border-[#D8DCE1] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#202124] text-2xl">receipt_long</span>
              <div>
                <h2 className="font-extrabold text-base text-[#202124]">Lista de Cotización</h2>
                <p className="text-[11px] text-[#5f6368] font-bold">{items.length} productos seleccionados</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#D8DCE1]/40 text-[#202124] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-[#5f6368]">
                <span className="material-symbols-outlined text-5xl mb-2 text-[#D8DCE1]">shopping_basket</span>
                <p className="text-sm font-bold text-[#202124]">Tu lista está vacía</p>
                <p className="text-xs mt-1 text-[#202124]/70">Explora nuestro catálogo y agrega productos para cotizarlos en combo por WhatsApp.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[11px] font-black text-[#202124] uppercase tracking-wider">Productos</span>
                  <button
                    onClick={onClearAll}
                    className="text-[11px] font-bold text-rose-600 hover:underline"
                  >
                    Vaciar lista
                  </button>
                </div>

                {items.map((item) => {
                  const qty = getQty(item.id);
                  return (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] flex items-center gap-3 shadow-xs"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg bg-[#FFFFFF] border border-[#D8DCE1] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#202124] truncate">{item.name}</p>
                        <span className="text-[10px] text-[#202124] font-black bg-[#FFD21F] px-1.5 py-0.5 rounded inline-block mt-0.5">
                          {item.tag}
                        </span>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[11px] text-[#5f6368] font-bold">Cant:</span>
                          <div className="flex items-center border border-[#D8DCE1] rounded-md bg-[#FFFFFF]">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="px-2 py-0.5 text-xs text-[#202124] hover:bg-[#D8DCE1]/30 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-black text-[#202124]">{qty}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="px-2 py-0.5 text-xs text-[#202124] hover:bg-[#D8DCE1]/30 font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#5f6368] hover:text-rose-600 transition-colors"
                        title="Quitar"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  );
                })}

                {/* Additional vehicle info input */}
                <div className="mt-2 pt-3 border-t border-[#D8DCE1]">
                  <label className="block text-xs font-bold text-[#202124] mb-1">
                    Datos de tu vehículo (opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Chevrolet Sail 2016, 85.000 km, gasolina"
                    value={vehicleNote}
                    onChange={(e) => setVehicleNote(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
                  />
                  <p className="text-[10px] text-[#5f6368] mt-1">
                    Nos ayuda a verificar compatibilidad exacta antes de responderte.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-5 border-t border-[#D8DCE1] bg-[#FFFFFF] flex flex-col gap-2">
            <button
              disabled={items.length === 0}
              onClick={handleSendToWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-[#FFD21F] hover:bg-[#f0c213] text-[#202124] font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#FFD21F]"
            >
              <span className="material-symbols-outlined text-xl font-bold">chat</span>
              <span>Enviar Cotización a WhatsApp (318 528 7144)</span>
            </button>
            <p className="text-[10px] text-center text-[#5f6368]">
              Recibirás precios exactos y disponibilidad sin compromiso de compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
