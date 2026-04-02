import Image from "next/image";

const stats = [
  { value: "17.5M", label: "colombianos con riesgo cardiovascular" },
  { value: "0", label: "apps de rehabilitación cardíaca en el país" },
  { value: "100%", label: "desde casa, sin desplazamientos" },
];

export function UniqueInColombia() {
  return (
    <section className="bg-ser-lavender py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-ser-purple px-5 py-2 mb-8">
          <Image src="/images/logo-white.png" alt="" width={16} height={16} className="object-contain" />
          <span className="text-sm font-semibold text-white">Primera en Colombia</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-ser-purple leading-tight">
          La única app de rehabilitación
          <br className="hidden sm:block" />
          cardíaca en el país
        </h2>

        <p className="mt-5 text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
          En Colombia no existe un servicio digital de acompañamiento para personas
          con enfermedades cardiovasculares. SER llega para cambiar eso.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-white rounded-[20px] p-6 shadow-sm"
            >
              <div className="text-4xl font-bold text-ser-purple">{s.value}</div>
              <p className="mt-2 text-sm text-gray-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
