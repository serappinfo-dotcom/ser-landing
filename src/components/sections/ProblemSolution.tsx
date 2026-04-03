import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckIcon, XIcon } from "@/components/ui/icons";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

interface ProblemSolutionProps {
  dict: Dictionary["problemSolution"];
}

export function ProblemSolution({ dict }: ProblemSolutionProps) {
  return (
    <section aria-label={dict.label} className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>{dict.label}</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            {dict.title}{" "}
            <br className="hidden sm:block" />
            {dict.titleHighlight}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before - Sin SER */}
          <div className="bg-gray-100 rounded-[20px] overflow-hidden">
            <div className="relative h-48 sm:h-56">
              <Image
                src="/images/photos/worried-man.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/30 to-transparent" />
            </div>

            <div className="p-8 pt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-6">{dict.sinSer.title}</h3>
              <ul className="space-y-4">
                {dict.sinSer.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ser-coral/20 flex items-center justify-center mt-0.5 text-ser-coral">
                      <XIcon />
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-400 font-medium text-center">{dict.sinSer.emptyMessage}</p>
            </div>
          </div>

          {/* After - Con SER */}
          <div className="bg-ser-lavender rounded-[20px] overflow-hidden">
            <div className="relative h-48 sm:h-56">
              <Image
                src="/images/photos/videocall-phone.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ser-lavender via-ser-lavender/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-ser-purple shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-ser-green animate-pulse" />
                  {dict.conSer.liveBadge}
                </span>
              </div>
            </div>

            <div className="p-8 pt-4">
              <h3 className="text-lg font-bold text-ser-purple mb-6">{dict.conSer.title}</h3>
              <ul className="space-y-4">
                {dict.conSer.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ser-green flex items-center justify-center mt-0.5 text-white">
                      <CheckIcon />
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <p className="text-sm text-gray-700 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
