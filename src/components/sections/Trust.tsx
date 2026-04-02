import { SectionLabel } from "@/components/ui/SectionLabel";

const trustItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Guías médicas internacionales",
    description: "Cada recomendación está basada en evidencia científica actualizada.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Seguridad y privacidad",
    description: "Tu información está protegida. Tu salud, en buenas manos.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Equipo profesional real",
    description: "Profesionales de salud que entienden tu proceso y te acompañan.",
  },
];

export function Trust() {
  return (
    <section className="bg-ser-purple py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel color="text-white/60">Tu tranquilidad es lo primero</SectionLabel>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
          Respaldado por la ciencia,
          <br className="hidden sm:block" />
          diseñado para personas reales
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((t) => (
            <div
              key={t.title}
              className="bg-ser-purple-dark/60 rounded-[20px] p-8 text-left border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-ser-purple-light/30 flex items-center justify-center mb-5">
                {t.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{t.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
