import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckIcon } from "@/components/ui/icons";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

interface BenefitsProps {
  dict: Dictionary["benefits"];
}

export function Benefits({ dict }: BenefitsProps) {
  return (
    <section id="beneficios" aria-label={dict.label} className="bg-ser-lavender py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>{dict.label}</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-ser-purple leading-tight">
          {dict.title}{" "}
          <br className="hidden sm:block" />
          {dict.titleHighlight}
        </h2>

        {/* Benefits grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dict.items.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-[20px] px-5 py-4 shadow-sm text-left"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ser-green flex items-center justify-center text-white">
                <CheckIcon size={16} />
              </div>
              <span className="font-medium text-gray-900">{b}</span>
            </div>
          ))}
        </div>

        {/* App screenshots */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
          {dict.mockups.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-3">
              <div className="w-48 h-[380px] rounded-[1.75rem] bg-white border-[3px] border-ser-purple shadow-lg overflow-hidden p-1.5">
                <Image
                  src={m.src}
                  alt={`SER App - ${m.label}`}
                  width={390}
                  height={844}
                  loading="lazy"
                  sizes="(max-width: 768px) 80vw, 25vw"
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
