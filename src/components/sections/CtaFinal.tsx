import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

interface CtaFinalProps {
  dict: Dictionary["ctaFinal"];
}

export function CtaFinal({ dict }: CtaFinalProps) {
  return (
    <section id="cta" aria-label="CTA" className="relative bg-ser-purple py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/exercise-home.jpg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ser-purple/80 to-ser-purple" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl md:text-[2.75rem] font-bold text-white leading-tight">
          {dict.title}
        </h2>

        <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          {dict.description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="#cta">
            {dict.cta1}
          </Button>
          <Button variant="outline" href="#cta">
            {dict.cta2}
          </Button>
        </div>

        <p className="mt-5 text-sm text-white/50">
          {dict.note}
        </p>

        {/* Store badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl px-5 py-3 transition-colors"
          >
            <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-74.3-19.7C63.1 141.2 0 184.8 0 273.5c0 26.9 4.9 54.8 14.6 83.8 12.8 38.2 59.2 131.1 107.3 129.5 24.9-.7 42.6-18.4 73.8-18.4 30.1 0 46.4 18.4 74.3 18.4 48.6-.7 90.6-82.5 102.9-120.8-65.3-31-61.4-91-61.2-93.3zM236.3 88.3c23.2-28.5 20.7-54.5 19.9-63.7-19.9 1.3-43.2 14-56.8 30.2-14.5 17.3-23.4 38.7-21.6 63.3 21.6 1.6 41.3-10.2 58.5-29.8z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-70">{dict.comingSoon}</div>
              <div className="text-sm font-semibold leading-tight">{dict.appStore}</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl px-5 py-3 transition-colors"
          >
            <svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
              <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43 71.65-39.46c18.2-10.05 18.2-39.92 0-49.97z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-70">{dict.comingSoon}</div>
              <div className="text-sm font-semibold leading-tight">{dict.googlePlay}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
