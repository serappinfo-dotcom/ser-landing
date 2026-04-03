import type { Locale, Dictionary } from "./types";
import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type { Locale, Dictionary };
