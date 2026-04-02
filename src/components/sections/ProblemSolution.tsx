import { SectionLabel } from "@/components/ui/SectionLabel";

const before = [
  "Semanas esperando una cita de control",
  "Sin guía clara después del diagnóstico",
  "Enfrentar el proceso solo genera más riesgo",
];

const after = [
  { title: "Terapias guiadas", desc: "36 sesiones seguras y adaptadas, desde casa." },
  { title: "Sesiones en vivo", desc: "Cada semana, un profesional te guía en tiempo real." },
  { title: "Educación práctica", desc: "Entiende tu salud sin tecnicismos." },
  { title: "Acompañamiento humano", desc: "Siempre hay alguien pendiente de ti." },
];

export function ProblemSolution() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>La realidad vs. lo que mereces</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Después de un diagnóstico, la vida cambia.{" "}
            <br className="hidden sm:block" />
            SER cambia cómo la enfrentas.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-gray-100 rounded-[20px] p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Sin SER</h3>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ser-coral/20 flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-ser-lavender rounded-[20px] p-8">
            <h3 className="text-lg font-bold text-ser-purple mb-6">Con SER</h3>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ser-green flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <p className="text-sm text-gray-700 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
