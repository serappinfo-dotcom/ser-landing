import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getDictionary, isValidLocale, locales } from "@/i18n";
import type { Locale } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const metaByLocale: Record<Locale, { title: string; description: string; ogDescription: string }> = {
  es: {
    title: "SER — Tu compañero en rehabilitación cardíaca",
    description: "La primera app de rehabilitación cardíaca en Colombia. Acompañamiento real, terapias guiadas y seguimiento profesional desde casa.",
    ogDescription: "La primera app de rehabilitación cardíaca en Colombia. Acompañamiento real desde casa.",
  },
  en: {
    title: "SER — Your cardiac rehabilitation companion",
    description: "The first cardiac rehabilitation app in Colombia. Real support, guided therapies, and professional monitoring from home.",
    ogDescription: "The first cardiac rehabilitation app in Colombia. Real support from home.",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const meta = metaByLocale[locale];

  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon.png", type: "image/png", sizes: "64x64" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3621A4" }],
    },
    keywords: [
      "rehabilitación cardíaca",
      "cardiac rehabilitation",
      "salud cardiovascular",
      "Colombia",
      "app salud",
      "health app",
    ],
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
      siteName: "SER",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.ogDescription,
    },
    manifest: "/manifest.json",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  return (
    <html lang={locale} className={`${inter.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#3621A4" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3621A4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
