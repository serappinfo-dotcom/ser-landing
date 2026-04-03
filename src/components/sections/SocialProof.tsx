import { SectionLabel } from "@/components/ui/SectionLabel";
import { ShieldIcon, StarIcon } from "@/components/ui/icons";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

interface SocialProofProps {
  dict: Dictionary["socialProof"];
}

function Stars() {
  return (
    <div className="flex gap-1 mb-3" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="text-ser-purple-light" />
      ))}
    </div>
  );
}

export function SocialProof({ dict }: SocialProofProps) {
  return (
    <section aria-label={dict.label} className="bg-ser-lavender py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero image with overlay text */}
        <div className="relative rounded-[24px] overflow-hidden mb-16 h-64 sm:h-80 md:h-96">
          <Image
            src="/images/photos/couple-laptop.jpg"
            alt=""
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ser-purple/80 via-ser-purple/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16">
            <SectionLabel color="text-white/70">{dict.label}</SectionLabel>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-lg">
              {dict.title}{" "}
              <br className="hidden sm:block" />
              {dict.titleHighlight}
            </h2>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {dict.trustBadges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm"
            >
              <ShieldIcon className="stroke-ser-purple" />
              {badge}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Photo - taller to show faces properly */}
              <div className="relative h-48 sm:h-52">
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              </div>

              <div className="px-7 pb-7 -mt-2 relative">
                <Stars />
                <p className="text-gray-800 leading-relaxed italic text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
