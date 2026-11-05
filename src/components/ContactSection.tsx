import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText('Almacén Lubricar Codazzi, Carrera 18 con calle 23 esquina, Agustín Codazzi, Cesar, Colombia');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]" id="contacto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Ubicación y Canales Oficiales
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
            Contacto y Localización
          </h2>
          <p className="text-sm sm:text-base text-[#202124]/80 mt-2">
            Visítanos directamente en Agustín Codazzi o contáctanos por nuestros canales oficiales para cotizaciones y asesoría en vivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Address */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs flex items-start gap-4">
              <span className="material-symbols-outlined text-[#202124] text-3xl shrink-0 mt-0.5">pin_drop</span>
              <div className="flex-grow">
                <h3 className="font-bold text-sm text-[#202124]">Dirección del Almacén</h3>
                <p className="text-xs text-[#202124]/80 mt-1 leading-relaxed">
                  Almacén Lubricar Codazzi, carrera 18 con calle 23, esquina, Agustín Codazzi, Cesar, Colombia.
                </p>
                <button
                  onClick={copyAddress}
                  className="mt-2 text-[11px] font-bold text-[#202124] hover:underline inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span>{copied ? '¡Dirección copiada!' : 'Copiar dirección'}</span>
                </button>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs flex items-start gap-4">
              <span className="material-symbols-outlined text-[#202124] text-3xl shrink-0 mt-0.5">schedule</span>
              <div>
                <h3 className="font-bold text-sm text-[#202124]">Horarios de Atención</h3>
                <p className="text-xs text-[#202124]/80 mt-1">
                  <strong className="text-[#202124]">Lunes a Viernes:</strong> 7:30 a. m. a 5:00 p. m. (Jornada continua)
                </p>
                <p className="text-xs text-[#202124]/80 mt-0.5">
                  <strong className="text-[#202124]">Sábados:</strong> 7:30 a. m. a 3:30 p. m.
                </p>
                <p className="text-[11px] text-[#5f6368] mt-1 italic">Domingos y festivos: Cerrado</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs flex items-start gap-4">
              <span className="material-symbols-outlined text-[#202124] text-3xl shrink-0 mt-0.5">phone_iphone</span>
              <div>
                <h3 className="font-bold text-sm text-[#202124]">Línea de WhatsApp</h3>
                <p className="text-xs text-[#202124] mt-1 font-black text-base">318 528 7144</p>
                <a
                  href="https://wa.me/573185287144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#202124] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <span>Escribir ahora</span>
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Social & Email */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs flex items-start gap-4">
              <span className="material-symbols-outlined text-[#202124] text-3xl shrink-0 mt-0.5">share</span>
              <div>
                <h3 className="font-bold text-sm text-[#202124]">Canales Digitales</h3>
                <p className="text-xs text-[#202124]/80 mt-1">
                  <strong>Redes:</strong> @Lubricarcodazzi (Instagram y Facebook)
                </p>
                <p className="text-xs text-[#202124]/80 mt-0.5">
                  <strong>Correo:</strong> Lubricarcodazzi@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[380px]">
            <div
              className="w-full h-full min-h-[380px] rounded-3xl bg-[#FFFFFF] shadow-md bg-cover bg-center overflow-hidden flex flex-col justify-between p-6 relative border border-[#D8DCE1]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLlDAg0EjN5tY5hSBnUL6THS936w10MXQlXHvR8sgkKy7fejy-2GcKGUaWV9FvuBoY1kE2N_6p_4-rYJ6Z93t6fmRwNE2k6ZwDePBK3Ho5QWdvITounlzRFLpzFJ6hYWEEJegHtBDeSD7DQredfcvgnq3gPL0ifqicim1OjcHm0gUm4yHJjQKMtCkyckmSo3jboo3XpK5fQZznw2UrVULcup6NKlxxj2c-XsubBkbkEjir0agtlnWy')"
              }}
            >
              <div className="flex justify-end">
                <span className="bg-[#202124]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#D8DCE1]/40">
                  <span className="w-2 h-2 rounded-full bg-[#FFD21F]"></span>
                  <span>Bahía Abierta</span>
                </span>
              </div>

              <div className="relative z-10 bg-[#FFFFFF]/95 backdrop-blur-md p-5 rounded-2xl max-w-sm shadow-md border border-[#D8DCE1] flex flex-col gap-2">
                <span className="text-[10px] font-black text-[#202124] uppercase tracking-wider bg-[#FFD21F] px-2 py-0.5 rounded self-start">
                  Punto de Referencia Automotriz
                </span>
                <p className="font-extrabold text-base text-[#202124]">Almacén Lubricar Codazzi</p>
                <p className="text-xs text-[#202124]/80">Carrera 18 con calle 23, Esquina • Agustín Codazzi, Cesar</p>

                <div className="flex items-center gap-2 pt-2 border-t border-[#D8DCE1]">
                  <a
                    href="https://maps.google.com/?q=Agustin+Codazzi+Cesar+Carrera+18+calle+23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#202124] text-white text-xs font-bold hover:bg-[#323438] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">directions</span>
                    <span>Cómo llegar</span>
                  </a>
                  <a
                    href="https://wa.me/573185287144?text=Hola,%20necesito%20indicaciones%20para%20llegar%20a%20Lubricar%20Codazzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#FFD21F] text-[#202124] text-xs font-black hover:bg-[#f0c213] transition-colors border border-[#FFD21F]"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Preguntar ruta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
