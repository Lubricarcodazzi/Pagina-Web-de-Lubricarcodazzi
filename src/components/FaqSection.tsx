import React, { useState } from 'react';
import { FAQ_LIST } from '../data/catalog';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQ_LIST.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
            Dudas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-1">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-[#202124]/80">
            Resolvemos las consultas más habituales sobre nuestros productos y servicios en Agustín Codazzi.
          </p>
        </div>

        {/* Search Input for FAQs */}
        <div className="relative max-w-md mx-auto w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-[#5f6368]">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar duda (ej. cambio gratis, horarios, marcas)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#FFD21F] focus:border-[#202124]"
          />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#202124] hover:bg-[#D8DCE1]/20 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#202124]' : 'text-[#5f6368]'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#202124]/80 leading-relaxed border-t border-[#D8DCE1] pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-2">
          <a
            href="https://wa.me/573185287144?text=Hola,%20vi%20la%20página%20web%20de%20Lubricar%20Codazzi%20y%20tengo%20otra%20pregunta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#D8DCE1]/30 text-[#202124] text-xs font-bold border border-[#D8DCE1] transition-colors shadow-xs"
          >
            <span className="material-symbols-outlined text-[#202124] text-base">help</span>
            <span>Tengo otra pregunta personalizada</span>
          </a>
        </div>
      </div>
    </section>
  );
};
