import { Logo } from "@/components/ui/Logo";
import type { Dictionary } from "@/i18n/types";

interface FooterProps {
  dict: Dictionary["footer"];
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo variant="white" />
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {dict.tagline}
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/ser.salud.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-10 sm:gap-16">
            <div>
              <h4 className="font-semibold text-sm mb-4">{dict.productTitle}</h4>
              <ul className="space-y-3">
                {dict.productLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">{dict.supportTitle}</h4>
              <ul className="space-y-3">
                {dict.supportLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-600 text-center">
            {dict.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
