import React from 'react';

interface HeroProps {
  onOpenAdvisor: () => void;
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdvisor, onOpenAppointment }) => {
  return (
    <section className="relative overflow-hidden bg-[#D9DDE2] pt-6 pb-16 lg:py-20 border-b border-[#D8DCE1]" id="inicio">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#FFD21F] text-[#202124] border border-[#FFD21F]">
              <span className="w-2 h-2 rounded-full bg-[#202124] animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-wider">
                Agustín Codazzi • Especialistas Automotrices
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#202124] tracking-tight leading-[1.15]">
              Lubricar Codazzi: <span className="bg-[#FFD21F] px-1.5 py-0.5 rounded-lg text-[#202124] inline-block">todo para mantener</span> tu vehículo en marcha
            </h1>

            <p className="text-base sm:text-lg text-[#202124]/80 max-w-2xl leading-relaxed">
              Aceites, lubricantes, filtros, baterías y accesorios para carros, motos, motocarros y vehículos de trabajo. Buenos precios, variedad y atención confiable en Agustín Codazzi.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="https://wa.me/573185287144?text=Hola,%20vi%20la%20página%20web%20de%20Lubricar%20Codazzi%20y%20quiero%20consultar%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-sm font-black transition-all shadow-md group border border-[#FFD21F]"
              >
                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">chat</span>
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-[#FFFFFF] text-[#202124] hover:bg-[#D8DCE1]/40 text-sm font-bold transition-colors border border-[#D8DCE1]"
              >
                <span>Conocer productos</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </a>

              <button
                onClick={onOpenAdvisor}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#202124] text-[#FFFFFF] hover:bg-[#323438] text-sm font-bold transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-lg text-[#FFD21F]">auto_fix_high</span>
                <span>Asesor de Aceite & Batería</span>
              </button>
            </div>

            {/* 3 Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#D8DCE1]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs">
                <span className="material-symbols-outlined text-[#FFD21F] text-2xl fill drop-shadow-xs">verified</span>
                <span className="text-xs text-[#202124] font-bold">Variedad de marcas y productos</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs">
                <span className="material-symbols-outlined text-[#FFD21F] text-2xl fill drop-shadow-xs">oil_barrel</span>
                <span className="text-xs text-[#202124] font-bold">Cambio de aceite GRATIS con compra</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs">
                <span className="material-symbols-outlined text-[#FFD21F] text-2xl fill drop-shadow-xs">handshake</span>
                <span className="text-xs text-[#202124] font-bold">Atención cercana y confiable</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-[#FFFFFF] border border-[#D8DCE1]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUeaO203VOYrG_qCQWZ-BkMQ8HLMT1MJvgZu6-G3Q_1G4hm5xL8rswlocPt1qSPMe3jb3KTZZyLjqkDHaXuCC6rURueBfrayDA5HJug7UqC8ZzH7EXDOMqqisEDbPHV2evr5SbeCFpkxbZfY_bxZGDnt75ytLpxMegQJaYo1r-16gTK5ALn948QnKLveqZYmcAAn7uswHGwVp5yhwLj-ygLx5uAA4Zp2W_E-anWEldBz42mfgCXiz9"
                alt="Taller de servicio técnico automotriz y lubricación en Agustín Codazzi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/90 via-[#202124]/25 to-transparent flex items-end p-5 sm:p-6">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-[#FFD21F] text-3xl">build_circle</span>
                    <div>
                      <p className="font-extrabold text-base leading-tight text-white">Taller Especializado</p>
                      <p className="text-xs text-[#D8DCE1]">Carrera 18 con calle 23 esquina • Agustín Codazzi</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenAppointment}
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFD21F] text-[#202124] text-xs font-black hover:bg-[#f0c213] transition-all shadow-sm"
                  >
                    <span>Turnos</span>
                    <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
