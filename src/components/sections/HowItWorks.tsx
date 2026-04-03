import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

interface HowItWorksProps {
  dict: Dictionary["howItWorks"];
}

export function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section id="como-funciona" aria-label={dict.label} className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>{dict.label}</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            {dict.title}
          </h2>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row items-stretch gap-10">
          {/* Image side */}
          <div className="lg:w-2/5 relative rounded-[24px] overflow-hidden min-h-[300px] lg:min-h-0">
            <Image
              src="/images/photos/couple-consultation.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ser-purple/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg leading-snug">
                {dict.imageCaption}
              </p>
            </div>
          </div>

          {/* Steps side */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dict.steps.map((s) => (
              <div
                key={s.num}
                className="bg-gray-50 rounded-[20px] p-7"
              >
                <div className="w-11 h-11 rounded-full bg-ser-purple flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{s.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
