import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Después de mi cirugía me sentía perdido. Con SER volví a sentir que podía hacer cosas por mí mismo. Las terapias son seguras y me dan confianza.",
    name: "Carlos, 62 años",
    location: "Bogotá",
  },
  {
    quote:
      "Mi mamá tiene hipertensión y no sabía cómo ayudarla. SER nos dio una guía clara y ahora ella se siente más tranquila. Yo también.",
    name: "Andrea, 38 años",
    location: "Medellín",
  },
  {
    quote:
      "Pensé que sería difícil, pero es tan sencillo que hasta mi esposa la usa conmigo. Nos sentimos acompañados de verdad.",
    name: "Jorge, 55 años",
    location: "Cali",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#5F33E1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-ser-lavender py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>Lo que dicen quienes ya empezaron</SectionLabel>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Historias reales, personas reales
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[20px] p-8 text-left shadow-sm"
            >
              <Stars />
              <p className="text-gray-800 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
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
