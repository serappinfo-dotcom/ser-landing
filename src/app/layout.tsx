import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SER — Tu compañero en rehabilitación cardíaca",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/images/app-icon.png", sizes: "180x180" }],
  },
  description:
    "La primera app de rehabilitación cardíaca en Colombia. Acompañamiento real, terapias guiadas y seguimiento profesional desde casa.",
  keywords: [
    "rehabilitación cardíaca",
    "salud cardiovascular",
    "terapia cardíaca",
    "Colombia",
    "app salud",
    "acompañamiento",
  ],
  openGraph: {
    title: "SER — Tu compañero en rehabilitación cardíaca",
    description:
      "La primera app de rehabilitación cardíaca en Colombia. Acompañamiento real desde casa.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
