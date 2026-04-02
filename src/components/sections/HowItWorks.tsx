import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "1",
    title: "Regístrate",
    description: "Crea tu cuenta en menos de 2 minutos. Solo necesitas tus datos básicos.",
  },
  {
    num: "2",
    title: "Elige tu plan",
    description: "Escoge el nivel de acompañamiento que mejor se adapte a ti.",
  },
  {
    num: "3",
    title: "Valoración inicial",
    description: "Un profesional evalúa tu condición para personalizar tu programa.",
  },
  {
    num: "4",
    title: "Empieza tu proceso",
    description: "Terapias, seguimiento y acompañamiento desde el primer día.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>Cómo funciona</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Empezar es muy sencillo
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-gray-100 rounded-[20px] p-8 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-ser-purple flex items-center justify-center mb-5">
                <span className="text-white font-bold text-lg">{s.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-sm text-gray-800 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
