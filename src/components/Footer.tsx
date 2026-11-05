import React from 'react';

export const Footer: React.FC = () => {
  const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1V_yBlC0ZsQLJR9JQpQ8mkrjlt0fjZxCN1kkc1drt4UrSruxLVEsH31gnwUp5fYfBBvAv0De-n3aEJ44zIHwLFRFhg7YFXTXP6nCdd_E-h_b6ckprVFWGXihBYNcjRZlFPf9DwWCGwzJwmwD2UnF2toCAU8BZfDWAtqDimDM9U6NfsnXMNDfjybIovWBA2833ZKe5GADCBs2xixlPOLwKvLS_EHR4JUrHwClg50IkoKMgZkVYthmhKivjwDHjDWS-zC5s6ZIxyvAQ';

  return (
    <footer className="w-full bg-[#202124] text-[#D8DCE1] border-t border-[#D8DCE1]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Lubricar Codazzi"
                className="w-10 h-10 object-contain rounded-full border border-[#D8DCE1] bg-[#202124]"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-white tracking-tight">
                  Lubricar Codazzi
                </span>
                <span className="text-[10px] font-bold text-[#FFD21F] uppercase tracking-wider">
                  Los Profesionales en Aceites
                </span>
              </div>
            </div>
            <p className="text-xs text-[#D8DCE1]/80 leading-relaxed">
              Centro automotriz especializado en lubricantes de alto rendimiento, baterías de uso pesado y mantenimiento preventivo con precisión en Agustín Codazzi, Cesar.
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-black text-white uppercase tracking-wider mb-1">
              Ubicación Principal
            </span>
            <div className="flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-[#FFD21F] text-lg shrink-0">location_on</span>
              <p>Almacén Lubricar Codazzi, carrera 18 con 23, esquina, Agustín Codazzi, Cesar, Colombia.</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-black text-white uppercase tracking-wider mb-1">
              Horarios de Atención
            </span>
            <div className="flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-[#FFD21F] text-lg shrink-0">schedule</span>
              <div className="flex flex-col gap-1">
                <p><span className="font-bold text-white">Lunes a Viernes:</span> 7:30 a. m. a 5:00 p. m.</p>
                <p><span className="font-bold text-white">Sábados:</span> 7:30 a. m. a 3:30 p. m.</p>
                <p className="text-[11px] text-[#D8DCE1]/60">Domingos y festivos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-black text-white uppercase tracking-wider mb-1">
              Canales de Contacto
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="https://wa.me/573185287144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D8DCE1] hover:text-[#FFD21F] transition-colors"
              >
                <span className="material-symbols-outlined text-[#FFD21F] text-lg">call</span>
                <span>WhatsApp: 318 528 7144</span>
              </a>
              <a
                href="mailto:Lubricarcodazzi@gmail.com"
                className="flex items-center gap-2 text-[#D8DCE1] hover:text-[#FFD21F] transition-colors"
              >
                <span className="material-symbols-outlined text-[#FFD21F] text-lg">mail</span>
                <span>Lubricarcodazzi@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FFD21F] text-lg">share</span>
                <span>@Lubricarcodazzi (Instagram, Facebook)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#D8DCE1]/20 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-xs">
          <p>© {new Date().getFullYear()} Lubricar Codazzi. Todos los derechos reservados. Agustín Codazzi, Cesar.</p>
          <p className="text-[#D8DCE1]/60">Servicio mecánico e inspección de lubricación certificada.</p>
        </div>
      </div>
    </footer>
  );
};
