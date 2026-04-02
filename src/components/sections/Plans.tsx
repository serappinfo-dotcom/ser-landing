import { SectionLabel } from "@/components/ui/SectionLabel";

const plans = [
  {
    name: "Estándar",
    price: "$120.000",
    tagline: "Tu primer paso hacia la recuperación",
    description:
      "Ideal para quienes quieren empezar su proceso con acompañamiento profesional y terapias seguras desde casa.",
    features: [
      "36 sesiones de terapia guiada",
      "1 sesión en vivo semanal",
      "Kit deportivo incluido",
      "1 control médico",
      "Seguimiento de signos vitales",
      "Recordatorio de medicamentos",
    ],
    ideal: "Ideal si quieres empezar poco a poco",
    color: "green",
    highlighted: false,
  },
  {
    name: "Zafiro",
    price: "$180.000",
    tagline: "El más elegido por nuestros usuarios",
    description:
      "Para quienes quieren un seguimiento más cercano y la tranquilidad de tener controles médicos adicionales.",
    features: [
      "Todo lo del plan Estándar",
      "2 controles médicos",
      "Seguimiento profesional semanal",
      "Chat de orientación",
      "Informes de progreso",
      "Prioridad en sesiones en vivo",
    ],
    ideal: "Ideal si necesitas orientación constante",
    color: "zafiro",
    highlighted: true,
  },
  {
    name: "Diamante",
    price: "$250.000",
    tagline: "La experiencia completa de cuidado",
    description:
      "El máximo nivel de acompañamiento. Para quienes buscan tranquilidad total y atención premium.",
    features: [
      "Todo lo del plan Zafiro",
      "3 controles médicos",
      "Seguimiento diario dedicado",
      "Equipo profesional exclusivo",
      "Atención prioritaria 24/7",
      "Acompañamiento familiar incluido",
    ],
    ideal: "Ideal si buscas tranquilidad total",
    color: "gold",
    highlighted: false,
  },
];

const colorMap: Record<string, { tag: string; check: string; btn: string }> = {
  green: { tag: "bg-ser-green", check: "text-ser-green", btn: "bg-ser-purple hover:bg-ser-purple-dark" },
  zafiro: { tag: "bg-ser-zafiro", check: "text-white", btn: "bg-white hover:bg-gray-100 !text-ser-purple" },
  gold: { tag: "bg-ser-gold", check: "text-ser-gold", btn: "bg-ser-purple hover:bg-ser-purple-dark" },
};

export function Plans() {
  return (
    <section id="planes" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>Elige tu plan</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Un plan para cada momento{" "}
          <br className="hidden sm:block" />
          de tu proceso
        </h2>

        <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
          Todos incluyen terapias guiadas, sesiones en vivo y acompañamiento profesional.
          Tú eliges el nivel de atención que necesitas.
        </p>

        {/* Plans grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const c = colorMap[plan.color];
            return (
              <div
                key={plan.name}
                className={`relative rounded-[20px] p-8 text-left transition-shadow ${
                  plan.highlighted
                    ? "bg-ser-purple text-white shadow-xl ring-2 ring-ser-purple-light scale-[1.02]"
                    : "bg-gray-100 text-gray-900 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-ser-purple text-xs font-bold px-4 py-1 rounded-full shadow">
                    Más popular
                  </span>
                )}

                {/* Tag */}
                <span className={`inline-block ${c.tag} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  Plan {plan.name}
                </span>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-white/60" : "text-gray-500"}>
                    /mes
                  </span>
                </div>

                {/* Tagline */}
                <p className={`mt-2 text-sm font-semibold ${
                  plan.highlighted ? "text-ser-lavender" : `${c.check}`
                }`}>
                  {plan.tagline}
                </p>

                {/* Description */}
                <p className={`mt-4 text-sm leading-relaxed ${
                  plan.highlighted ? "text-white/70" : "text-gray-800"
                }`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`font-bold flex-shrink-0 ${c.check}`}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal */}
                <p className={`mt-6 text-xs ${
                  plan.highlighted ? "text-white/50" : "text-gray-500"
                }`}>
                  {plan.ideal}
                </p>

                {/* CTA */}
                <a
                  href="#cta"
                  className={`mt-6 block text-center rounded-[28px] py-3 text-base font-semibold text-white transition-colors ${c.btn}`}
                >
                  Elegir plan
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm font-medium text-ser-purple-light">
          Todos los planes incluyen 2 sesiones de prueba gratis para que conozcas SER sin compromiso.
        </p>
      </div>
    </section>
  );
}
