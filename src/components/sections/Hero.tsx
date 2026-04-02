import { Button } from "@/components/ui/Button";
import Image from "next/image";

const stats = [
  { value: "17.5M", label: "colombianos en riesgo" },
  { value: "0", label: "apps de rehab cardíaca" },
  { value: "100%", label: "desde casa" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-ser-purple pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-white">Primera en Colombia</span>
          </div>

          <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight">
            No estás solo en&nbsp;esto.
            <br />
            <span className="text-ser-lavender opacity-90">SER te acompaña.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
            La primera app de rehabilitación cardíaca en Colombia.
            Acompañamiento real, desde casa y a tu ritmo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
            <Button href="#cta">Quiero empezar mi recuperación</Button>
          </div>

          {/* Stats inline */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App screenshot mockup */}
        <div className="flex-shrink-0 relative">
          <div className="w-64 md:w-72 rounded-[2.5rem] bg-[#F2F1EF] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
            <Image
              src="/images/screens/home.png"
              alt="SER App - Pantalla principal"
              width={390}
              height={944}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
