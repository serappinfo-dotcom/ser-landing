import { getDictionary, isValidLocale } from "@/i18n";
import type { Locale } from "@/i18n";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Plans } from "@/components/sections/Plans";
import { SocialProof } from "@/components/sections/SocialProof";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "es";
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "SER",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "iOS, Android",
            "description": dict.hero.description,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "COP"
            }
          })
        }}
      />
      <Navbar dict={dict.navbar} locale={locale} />
      <main>
        <Hero dict={dict.hero} />
        <ProblemSolution dict={dict.problemSolution} />
        <Benefits dict={dict.benefits} />
        <HowItWorks dict={dict.howItWorks} />
        <Plans dict={dict.plans} />
        <SocialProof dict={dict.socialProof} />
        <Faq dict={dict.faq} />
        <CtaFinal dict={dict.ctaFinal} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
