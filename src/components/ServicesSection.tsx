import React from 'react';

interface ServicesSectionProps {
  onOpenAppointment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]" id="servicios">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image & Floating Badge */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl bg-[#FFFFFF] border border-[#D8DCE1]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS1tdy7WIItncF6pw9xlQ5Tw40IfHbW-YlZfp9MSCAMes7hq1QGcM0Ax3_hd9vHeRGE3cQgTKkXV4IYYLzORM_EwfmcMqTBoSO_bqesfNTKivYv8o2-4Bux9tU24p_tNBBM5NqX-TKtlH7UpQnIOU06J4w3gAPL4QH5nMDj5PSjqz3BcxBgy6XacbvfZPPrajJ8tGU2zsfB29Z9eUREgSHVohXQLxVntKOfXSLDAAoKBvcugzdOtpj"
              alt="Mecánico realizando cambio de aceite profesional en Agustín Codazzi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FFFFFF]/95 backdrop-blur-md rounded-2xl shadow-md border border-[#D8DCE1]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#FFD21F] text-3xl fill">verified</span>
                <div>
                  <p className="font-black text-sm text-[#202124]">Mano de Obra 100% Incluida</p>
                  <p className="text-xs text-[#202124]/75">Servicio técnico sin costo adicional con tu compra de lubricante</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy and Checklist */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded self-start">
              Mantenimiento Rápido y Limpio
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] leading-tight">
              Cuida tu motor con productos adecuados y atención confiable
            </h2>

            <p className="text-sm sm:text-base text-[#202124]/80 leading-relaxed">
              Brindamos servicio de cambio de aceite y filtros para carros particulares, camionetas, motocicletas y motocarros con protocolos técnicos de extracción completa, apriete de tapón con torquímetro e inspección de niveles complementarios.
            </p>

            {/* Benefit Box */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] text-[#202124] flex items-start gap-3 border border-[#D8DCE1] shadow-xs">
              <span className="material-symbols-outlined text-[#FFD21F] text-2xl shrink-0 fill">check_circle</span>
              <div className="text-xs leading-relaxed">
                <strong className="font-black text-[#202124]">Recordatorio importante:</strong> El servicio de cambio de aceite es totalmente gratuito al comprar el lubricante en nuestras instalaciones de Almacén Lubricar Codazzi.
              </div>
            </div>

            {/* 5 Points Inspection */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-black text-[#202124] uppercase tracking-wider">
                Puntos de inspección incluidos en cada servicio:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202124]/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD21F]"></span>
                  <span>Revisión de líquido de frenos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD21F]"></span>
                  <span>Chequeo de refrigerante</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD21F]"></span>
                  <span>Comprobación de voltaje de batería</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD21F]"></span>
                  <span>Calibración de presión de llantas</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="https://wa.me/573185287144?text=Hola,%20vi%20el%20servicio%20de%20cambio%20de%20aceite%20en%20la%20página%20web%20y%20quiero%20conocer%20los%20detalles%20y%20disponibilidad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-all shadow-md border border-[#FFD21F]"
              >
                <span className="material-symbols-outlined text-xl font-bold">build</span>
                <span>Consultar servicio por WhatsApp</span>
              </a>

              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFFFF] text-[#202124] hover:bg-[#D8DCE1]/40 text-xs font-bold transition-colors border border-[#D8DCE1]"
              >
                <span className="material-symbols-outlined text-base text-[#202124]">event</span>
                <span>Agendar Turno en Bahía</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
