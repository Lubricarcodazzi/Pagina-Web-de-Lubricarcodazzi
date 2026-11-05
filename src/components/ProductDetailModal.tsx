import React from 'react';
import { Product } from '../data/catalog';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote
}) => {
  if (!product) return null;

  const whatsappMsg = encodeURIComponent(
    `Hola Lubricar Codazzi, vi los detalles del producto "${product.name}" (${product.tag}) en su página web y quiero consultar precio y disponibilidad.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-3xl shadow-2xl overflow-hidden border border-[#D8DCE1] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 px-6 border-b border-[#D8DCE1] flex items-center justify-between bg-[#FFFFFF]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFD21F] text-[#202124] text-xs font-black border border-[#FFD21F]">
              {product.categoryLabel}
            </span>
            <span className="text-xs text-[#5f6368] font-bold">• Ficha Técnica</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#D8DCE1]/40 text-[#202124] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 flex flex-col gap-5">
          <div className="w-full aspect-video rounded-2xl bg-[#FFFFFF] overflow-hidden border border-[#D8DCE1] relative shadow-xs">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-[#202124]/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold border border-[#D8DCE1]/30">
              {product.tag}
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#202124] leading-snug">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#202124]/80 mt-2 leading-relaxed">
              {product.details}
            </p>
          </div>

          {/* Specs Table */}
          <div className="rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] p-4 flex flex-col gap-2 shadow-xs">
            <h3 className="text-xs font-black text-[#202124] uppercase tracking-wider mb-1">
              Especificaciones & Compatibilidad
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#5f6368] uppercase">{key}:</span>
                  <span className="text-[#202124] font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complimentary Service Notice */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-[#202124] text-xs flex items-center gap-3 shadow-xs">
            <span className="material-symbols-outlined text-[#FFD21F] text-2xl shrink-0 fill">oil_barrel</span>
            <div>
              <p className="font-black text-[#202124]">Mano de obra incluida</p>
              <p className="text-[11px] text-[#202124]/80">
                Al comprar cualquier aceite o filtro para tu vehículo en Lubricar Codazzi, el servicio de cambio e inspección es gratuito.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-[#D8DCE1] bg-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onAddToQuote(product)}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
              isInQuote
                ? 'bg-[#FFD21F] border-[#FFD21F] text-[#202124] font-black'
                : 'bg-[#FFFFFF] border-[#D8DCE1] text-[#202124] hover:bg-[#D8DCE1]/30'
            }`}
          >
            <span className="material-symbols-outlined text-base">
              {isInQuote ? 'check_circle' : 'add_circle'}
            </span>
            <span>{isInQuote ? 'Agregado a la lista' : 'Añadir a lista de cotización'}</span>
          </button>

          <a
            href={`https://wa.me/573185287144?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-transform active:scale-95 flex items-center justify-center gap-2 border border-[#FFD21F] shadow-sm"
          >
            <span className="material-symbols-outlined text-base font-bold">chat</span>
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
