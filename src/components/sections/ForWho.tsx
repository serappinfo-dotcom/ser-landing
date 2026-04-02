import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

const profiles = [
  {
    title: "Te dijeron que debes cuidarte más",
    description: "Tu médico te recomendó cambiar hábitos pero no sabes por dónde empezar.",
  },
  {
    title: "Tuviste un susto cardíaco",
    description: "Recuperar la confianza después de un evento cardiovascular es difícil.",
  },
  {
    title: "Quieres prevenir",
    description: "Tienes factores de riesgo y quieres actuar antes de que sea tarde.",
  },
  {
    title: "Cuidas a alguien",
    description: "Un familiar necesita apoyo y quieres ayudar. SER también es para ti.",
  },
];

export function ForWho() {
  return (
    <section className="bg-gray-100 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>¿Esto es para mí?</SectionLabel>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ser-purple leading-tight">
          SER es para ti si...
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-[20px] p-8 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-ser-lavender flex items-center justify-center mb-5">
                <Image src="/images/logo-small-purple.png" alt="" width={22} height={22} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-3 text-sm text-gray-800 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
