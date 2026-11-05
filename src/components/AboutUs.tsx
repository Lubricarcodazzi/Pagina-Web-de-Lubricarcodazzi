import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded self-start">
              Nuestra Trayectoria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] leading-tight">
              Compromiso con la movilidad de nuestra gente
            </h2>
            <p className="text-sm sm:text-base text-[#202124]/80 leading-relaxed">
              Lubricar Codazzi nació con el propósito de ofrecer productos de calidad certificada y un servicio honesto para quienes mueven sus vehículos de transporte, vehículos familiares, motocicletas y el desarrollo agrícola y comercial de nuestro municipio. Nuestro compromiso es construir relaciones de largo plazo y responder con seriedad a cada necesidad mecánica.
            </p>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-xs">
              <p className="text-xs sm:text-sm text-[#202124] font-bold italic leading-relaxed">
                «Lubricar Codazzi no solo comercializa productos; acompaña caminos, impulsa motores y construye confianza día a día en Agustín Codazzi».
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div>
                <p className="text-2xl font-black text-[#202124]">100%</p>
                <p className="text-[11px] text-[#5f6368] uppercase font-bold">Aceites Genuinos</p>
              </div>
              <div className="w-px h-8 bg-[#D8DCE1]"></div>
              <div>
                <p className="text-2xl font-black text-[#202124]">+7</p>
                <p className="text-[11px] text-[#5f6368] uppercase font-bold">Marcas Líderes</p>
              </div>
              <div className="w-px h-8 bg-[#D8DCE1]"></div>
              <div>
                <p className="text-2xl font-black text-[#202124] bg-[#FFD21F] px-2 py-0.5 rounded">$0</p>
                <p className="text-[11px] text-[#5f6368] uppercase font-bold mt-0.5">Mano de Obra en Cambio</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-[#FFFFFF] border border-[#D8DCE1]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjGUy0XZIzHAvO9Wk2d0nxbwwTwy99PJGVSx_4Hv6iF50ajUgRWWxjxZbkOgJLHujzkDIvWM3gvTVXZIA0edQ6MlqGyxcJdetzAAOo68zdQpTT5wLqPu-BPFh2ZkO3inZYM03TbKKUNyb3HEXoVmn173C4HUPwc43SaneNxFkgwR-h6nqFrwfCf7Iochjcyd36sYANS6yqNj2BXEjjjuJ3AxXSJwPD2Oo1bkX1fHcP-FsA1INzRBya"
                alt="Atención al cliente y asesoría en Almacén Lubricar Codazzi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
