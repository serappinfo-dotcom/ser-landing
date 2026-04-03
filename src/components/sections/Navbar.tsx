"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { GlobeIcon, MenuIcon, CloseIcon } from "@/components/ui/icons";
import type { Dictionary, Locale } from "@/i18n/types";

interface NavbarProps {
  dict: Dictionary["navbar"];
  locale: Locale;
}

export function Navbar({ dict, locale }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const otherLocale = locale === "es" ? "en" : "es";
  const otherLabel = locale === "es" ? "EN" : "ES";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ser-purple/95 backdrop-blur-sm" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#hero">
          <Logo variant="white" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {dict.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href={`/${otherLocale}`}
            className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
            aria-label={`Switch to ${otherLabel}`}
          >
            <GlobeIcon />
            {otherLabel}
          </a>

          <a
            href="#cta"
            className="rounded-[28px] border border-white/40 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            {dict.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? dict.closeMenu : dict.openMenu}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ser-purple-dark px-6 pb-6 space-y-4">
          {dict.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href={`/${otherLocale}`}
            className="flex items-center gap-2 text-white/60 hover:text-white py-2"
            onClick={() => setOpen(false)}
          >
            <GlobeIcon />
            {otherLabel === "EN" ? "English" : "Español"}
          </a>

          <a
            href="#cta"
            className="block text-center rounded-[28px] border border-white/40 px-5 py-2 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            {dict.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
