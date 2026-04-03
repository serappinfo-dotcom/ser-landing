import { Button } from "@/components/ui/Button";
import { HeartIcon } from "@/components/ui/icons";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

interface HeroProps {
  dict: Dictionary["hero"];
}

export function Hero({ dict }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative bg-ser-purple pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/exercise-home.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-15"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ser-purple via-ser-purple/95 to-ser-purple/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-white">{dict.badge}</span>
          </div>

          <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight">
            {dict.title}{" "}
            <br className="hidden sm:block" />
            <span className="text-ser-lavender opacity-90">{dict.titleHighlight}</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {dict.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
            <Button href="#cta">{dict.cta}</Button>
          </div>

          {/* Stats inline */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
            {dict.stats.map((s) => (
              <div key={s.value} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex-shrink-0 relative">
          <div className="w-64 md:w-72 rounded-[2.5rem] bg-ser-phone-bezel border-[6px] border-gray-800 shadow-2xl overflow-hidden">
            <Image
              src="/images/screens/home.png"
              alt="SER App"
              width={390}
              height={944}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 md:-right-8 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ser-green flex items-center justify-center text-white">
              <HeartIcon />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-900">{dict.floatingTitle}</p>
              <p className="text-[10px] text-gray-500">{dict.floatingSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
