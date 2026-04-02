import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

const problems = [
  {
    title: "Citas que no llegan",
    description: "Semanas o meses esperando un control. La incertidumbre crece.",
  },
  {
    title: "Sin guía en el día a día",
    description: "Después del diagnóstico, muchos quedan sin orientación clara.",
  },
  {
    title: "La soledad del proceso",
    description: "Enfrentar un problema de salud solo genera miedo y más riesgo.",
  },
];

export function Problem() {
  return (
    <section className="bg-gray-100 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>La realidad que muchos viven</SectionLabel>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Después de un diagnóstico, la vida cambia.
          <br className="hidden sm:block" />
          Pero el acompañamiento no siempre llega.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-[20px] p-8 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-ser-lavender flex items-center justify-center mb-5">
                <Image src="/images/logo-small-purple.png" alt="" width={24} height={24} className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-3 text-gray-800 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
