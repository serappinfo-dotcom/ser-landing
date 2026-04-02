import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

const benefits = [
  "Seguimiento en vivo por un profesional",
  "Registra tus signos vitales y tensión arterial",
  "Control y recordatorio de medicamentos",
  "Ahorra tiempo y evita desplazamientos",
  "36 sesiones de terapia desde tu casa",
  "Sesión en vivo semanal con terapeuta",
];

const mockups = [
  { label: "Terapias", desc: "Sesiones guiadas paso a paso", src: "/images/screens/therapies.png" },
  { label: "Calendario", desc: "Organiza tu proceso", src: "/images/screens/calendar.png" },
  { label: "Planes", desc: "Elige el plan ideal para ti", src: "/images/screens/plans.png" },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-ser-lavender py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>Una app 360° para tu salud</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-ser-purple leading-tight">
          Todo lo que necesitas{" "}
          <br className="hidden sm:block" />
          en un solo lugar
        </h2>

        {/* Benefits grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-4 bg-white rounded-[20px] px-5 py-4 shadow-sm text-left"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ser-green flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-medium text-gray-900">{b}</span>
            </div>
          ))}
        </div>

        {/* App screenshots */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
          {mockups.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-3">
              <div className="w-48 h-[380px] rounded-[1.75rem] bg-white border-[3px] border-ser-purple shadow-lg overflow-hidden p-1.5">
                <Image
                  src={m.src}
                  alt={`SER App - ${m.label}`}
                  width={390}
                  height={844}
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
              <span className="text-sm font-semibold text-gray-900">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
