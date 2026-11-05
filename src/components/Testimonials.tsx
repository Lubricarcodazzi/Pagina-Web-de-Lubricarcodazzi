import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/catalog';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview = {
      name,
      role: role || 'Cliente',
      city: 'Agustín Codazzi, Cesar',
      quote: comment,
      rating,
      initial: name.charAt(0).toUpperCase()
    };

    setReviews([newReview, ...reviews]);
    setSubmittedMessage(true);
    setName('');
    setRole('');
    setComment('');
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section className="py-16 bg-[#D9DDE2] border-b border-[#D8DCE1]" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#202124] bg-[#FFD21F] px-2.5 py-0.5 rounded">
              Opiniones Genuinas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mt-2">
              Testimonios de Clientes
            </h2>
            <p className="text-sm sm:text-base text-[#202124]/80 mt-2">
              La satisfacción de quienes confían el cuidado de sus vehículos y motores en nuestras manos en Agustín Codazzi.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#D8DCE1]/40 text-[#202124] text-xs font-bold border border-[#D8DCE1] transition-colors self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-base text-[#202124]">edit_note</span>
            <span>{showForm ? 'Cerrar formulario' : 'Compartir mi experiencia'}</span>
          </button>
        </div>

        {/* Optional Review Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8DCE1] shadow-md flex flex-col gap-4 animate-in fade-in duration-200"
          >
            <h3 className="font-bold text-base text-[#202124]">Dejar una opinión sobre Lubricar Codazzi</h3>
            {submittedMessage ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2 border border-emerald-200">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>¡Muchas gracias por compartir tu experiencia! Tu reseña ha sido publicada.</span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#202124] block mb-1">Nombre completo:</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Andrés Ramírez"
                      className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#202124] block mb-1">Tipo de vehículo / ocupación:</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Ej. Particular / Conductor de Camioneta"
                      className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">Calificación:</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="text-xl text-[#FFD21F] hover:scale-110 transition-transform"
                      >
                        <span className={`material-symbols-outlined ${star <= rating ? 'fill' : ''}`}>
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">Comentario sobre el servicio:</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Cuéntanos cómo fue tu experiencia en el servicentro, la atención o el cambio de aceite..."
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#D8DCE1] text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#FFD21F]"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#202124]/70 hover:bg-[#D8DCE1]/30"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#FFD21F] text-[#202124] hover:bg-[#f0c213] text-xs font-black transition-all shadow-sm border border-[#FFD21F]"
                  >
                    Publicar comentario
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] shadow-sm border border-[#D8DCE1] flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#202124] text-3xl">format_quote</span>
                  <div className="flex items-center text-[#FFD21F]">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#202124] italic leading-relaxed">
                  «{t.quote}»
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#D8DCE1]">
                <div className="w-10 h-10 rounded-full bg-[#FFD21F] text-[#202124] flex items-center justify-center font-black text-sm shrink-0 border border-[#FFD21F]">
                  {t.initial}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#202124]">{t.name}</p>
                  <p className="text-[11px] text-[#5f6368]">{t.role} • {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
