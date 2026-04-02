import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Después de mi cirugía me sentía perdido. Con SER volví a sentir que podía hacer cosas por mí mismo.",
    name: "Carlos, 62 años",
    location: "Bogotá",
  },
  {
    quote:
      "Mi mamá tiene hipertensión y no sabía cómo ayudarla. SER nos dio una guía clara y ahora ella se siente más tranquila.",
    name: "Andrea, 38 años",
    location: "Medellín",
  },
  {
    quote:
      "Es tan sencillo que hasta mi esposa la usa conmigo. Nos sentimos acompañados de verdad.",
    name: "Jorge, 55 años",
    location: "Cali",
  },
];

const trustBadges = [
  "Guías médicas internacionales",
  "Datos protegidos y seguros",
  "Equipo profesional real",
];

function Stars() {
  return (
    <div className="flex gap-1 mb-3" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#5F33E1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="bg-ser-lavender py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>Personas reales, resultados reales</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Respaldado por la ciencia,{" "}
          <br className="hidden sm:block" />
          diseñado para ti
        </h2>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3621A4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {badge}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[20px] p-7 text-left shadow-sm"
            >
              <Stars />
              <p className="text-gray-800 leading-relaxed italic text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ser-lavender flex items-center justify-center">
                  <span className="text-sm font-bold text-ser-purple">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
