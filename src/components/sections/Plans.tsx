import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/i18n/types";

interface PlansProps {
  dict: Dictionary["plans"];
}

const colorMap: Record<string, { tag: string; check: string; btn: string }> = {
  green: { tag: "bg-ser-green", check: "text-ser-green", btn: "bg-ser-purple hover:bg-ser-purple-dark" },
  zafiro: { tag: "bg-ser-zafiro", check: "text-white", btn: "bg-white hover:bg-gray-100 !text-ser-purple" },
  gold: { tag: "bg-ser-gold", check: "text-ser-gold", btn: "bg-ser-purple hover:bg-ser-purple-dark" },
};

export function Plans({ dict }: PlansProps) {
  return (
    <section id="planes" aria-label={dict.label} className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>{dict.label}</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          {dict.title}{" "}
          <br className="hidden sm:block" />
          {dict.titleHighlight}
        </h2>

        <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
          {dict.subtitle}
        </p>

        {/* Plans grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {dict.items.map((plan) => {
            const c = colorMap[plan.color];
            return (
              <div
                key={plan.name}
                className={`relative rounded-[20px] p-8 text-left transition-shadow ${
                  plan.highlighted
                    ? "bg-ser-purple text-white shadow-xl ring-2 ring-ser-purple-light lg:scale-[1.02]"
                    : "bg-white text-gray-900 shadow-sm hover:shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-ser-purple text-xs font-bold px-4 py-1 rounded-full shadow">
                    {dict.popularBadge}
                  </span>
                )}

                <span className={`inline-block ${c.tag} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  Plan {plan.name}
                </span>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-white/60" : "text-gray-500"}>
                    {dict.perMonth}
                  </span>
                </div>

                <p className={`mt-2 text-sm font-semibold ${
                  plan.highlighted ? "text-ser-lavender" : `${c.check}`
                }`}>
                  {plan.tagline}
                </p>

                <p className={`mt-4 text-sm leading-relaxed ${
                  plan.highlighted ? "text-white/70" : "text-gray-800"
                }`}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={`font-bold flex-shrink-0 ${c.check}`}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className={`mt-6 text-xs ${
                  plan.highlighted ? "text-white/50" : "text-gray-500"
                }`}>
                  {plan.ideal}
                </p>

                <a
                  href="#cta"
                  className={`mt-6 block text-center rounded-[28px] py-3 text-base font-semibold text-white transition-colors ${c.btn}`}
                >
                  {dict.choosePlan}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm font-medium text-ser-purple-light">
          {dict.trialNote}
        </p>
      </div>
    </section>
  );
}
