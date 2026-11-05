import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../data/catalog';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteItems: Product[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToQuote,
  quoteItems
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'aceites', label: 'Aceites y Lubricantes' },
    { id: 'filtros', label: 'Filtros' },
    { id: 'baterias', label: 'Baterías' },
    { id: 'grasas', label: 'Grasas y Refrigerantes' },
    { id: 'accesorios', label: 'Accesorios y Estética' },
    { id: 'repuestos', label: 'Tornillería y Repuestos' },
    { id: 'correas', label: 'Correas de Tiempo' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const isItemInQuote = (id: string) => quoteItems.some((item) => item.id === id);

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]" id="productos">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
              Catálogo Automotriz
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
              Productos Destacados
            </h2>
            <p className="text-sm sm:text-base text-[#202124]/80 max-w-xl mt-1">
              Soluciones completas y repuestos garantizados para el óptimo desempeño de tu motor en cada trayecto.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#202124]/80 font-bold bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#D8DCE1]">
            <span className="material-symbols-outlined text-base text-[#202124]">verified</span>
            <span>Precios y disponibilidad directa por WhatsApp</span>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-[#5f6368]">
                search
              </span>
              <input
                type="text"
                placeholder="Buscar aceites, filtros, baterías, marcas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-sm text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#FFD21F] focus:border-[#202124] placeholder:text-[#5f6368]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5f6368] hover:text-[#202124]"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>

            <span className="text-xs text-[#202124]/70 self-start sm:self-auto font-bold">
              Mostrando {filteredProducts.length} categorías y líneas de producto
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 border ${
                  selectedCategory === cat.id
                    ? 'bg-[#202124] text-white border-[#202124] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#202124] hover:bg-[#D8DCE1]/40 border-[#D8DCE1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inQuote = isItemInQuote(product.id);
            const whatsappText = encodeURIComponent(
              `Hola, vi la sección de ${product.categoryLabel} (${product.name}) en la página web de Lubricar Codazzi y quiero consultar precios y disponibilidad.`
            );

            return (
              <div
                key={product.id}
                className="flex flex-col rounded-2xl bg-[#FFFFFF] p-4 shadow-sm hover:shadow-md transition-all border border-[#D8DCE1] group"
              >
                {/* Image */}
                <div 
                  className="w-full aspect-video rounded-xl bg-[#FFFFFF] overflow-hidden mb-3 relative cursor-pointer border border-[#D8DCE1]"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-[#202124]/85 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-bold">
                    Ver ficha
                  </div>
                </div>

                {/* Tag & Status */}
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#FFD21F] text-[#202124] text-[11px] font-black border border-[#FFD21F]">
                    {product.tag}
                  </span>
                  <span className="text-[11px] font-bold text-[#202124]">
                    Consultar precio
                  </span>
                </div>

                {/* Title & Description */}
                <h3 
                  onClick={() => onSelectProduct(product)}
                  className="font-bold text-base text-[#202124] hover:text-[#202124] cursor-pointer transition-colors leading-snug line-clamp-1"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#202124]/75 flex-grow my-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#D8DCE1]">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onAddToQuote(product)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 border ${
                        inQuote
                          ? 'bg-[#FFD21F] border-[#FFD21F] text-[#202124]'
                          : 'bg-[#FFFFFF] border-[#D8DCE1] text-[#202124] hover:bg-[#D8DCE1]/30'
                      }`}
                      title={inQuote ? 'Producto en lista de cotización' : 'Añadir a cotización'}
                    >
                      <span className="material-symbols-outlined text-base">
                        {inQuote ? 'check_circle' : 'add_circle'}
                      </span>
                      <span>{inQuote ? 'En lista' : 'Cotizar'}</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-1.5 px-2 rounded-lg text-xs font-bold text-[#202124] bg-[#FFFFFF] hover:bg-[#D8DCE1]/30 border border-[#D8DCE1] transition-colors flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">info</span>
                      <span>Ficha</span>
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/573185287144?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-[#202124] text-white hover:bg-[#323438] text-xs font-bold transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#FFD21F] text-base">chat</span>
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Card 8: Direct Consultation */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#202124] text-white p-6 shadow-sm border border-[#D8DCE1]">
            <div className="flex flex-col gap-3">
              <span className="material-symbols-outlined text-[#FFD21F] text-4xl">contact_support</span>
              <h3 className="text-lg font-bold text-white">¿Buscas otro producto o referencia?</h3>
              <p className="text-xs text-[#D8DCE1] leading-relaxed">
                Pregúntanos directamente. Manejamos un amplio inventario con reposición continua en Agustín Codazzi. Te confirmamos stock de inmediato.
              </p>
            </div>
            <a
              href="https://wa.me/573185287144?text=Hola,%20estoy%20buscando%20un%20producto%20o%20repuesto%20específico%20en%20Lubricar%20Codazzi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-all shadow-md border border-[#FFD21F]"
            >
              <span className="material-symbols-outlined text-base font-bold">send</span>
              <span>Preguntar a un Asesor</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
