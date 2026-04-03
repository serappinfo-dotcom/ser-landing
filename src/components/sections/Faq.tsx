"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n/types";

interface FaqProps {
  dict: Dictionary["faq"];
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ser-purple"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{q}</span>
        <ChevronDownIcon
          className={`flex-shrink-0 stroke-ser-purple transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-800 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ dict }: FaqProps) {
  return (
    <section id="faq" aria-label={dict.label} className="bg-gray-100 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionLabel>{dict.label}</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          {dict.title}
        </h2>

        <div className="mt-14 space-y-4 text-left">
          {dict.items.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
