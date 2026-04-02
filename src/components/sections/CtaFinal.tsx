import { Button } from "@/components/ui/Button";

export function CtaFinal() {
  return (
    <section id="cta" className="bg-ser-purple py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl md:text-[2.75rem] font-bold text-white leading-tight">
          Tu salud merece compañía.
        </h2>

        <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          No tienes que hacer esto solo. Da el primer paso
          y deja que SER camine contigo.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="#cta">
            Quiero empezar mi recuperación
          </Button>
          <Button variant="outline" href="#cta">
            Únete a la lista de espera
          </Button>
        </div>

        <p className="mt-5 text-sm text-white/50">
          Sin compromiso · 2 sesiones gratis · Cancela cuando quieras
        </p>

        {/* Store badges */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg px-5 py-3 transition-colors"
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
              <path d="M17.05 12.54c-.02-2.15 1.08-3.78 3.32-4.98-1.21-1.74-3.02-2.7-5.37-2.88-2.24-.17-4.69 1.32-5.59 1.32-.94 0-3.08-1.26-4.7-1.26C2.09 4.8 0 6.84 0 12.74c0 1.75.32 3.55.96 5.42.86 2.44 3.96 8.43 7.2 8.34 1.68-.04 2.87-1.2 4.69-1.2 1.76 0 2.86 1.2 4.7 1.16 3.28-.05 6.05-5.47 6.87-7.92-4.38-2.08-4.37-6.09-4.37-6z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight">Próximamente en</div>
              <div className="text-sm font-semibold leading-tight">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg px-5 py-3 transition-colors"
          >
            <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
              <path d="M1 1l9.5 10L1 21V1zm12.5 7L3 1.5l8.25 8.5L15.5 6l-2-2v4zm0 6l-4.25 4L3 20.5l10.5-6.5zM16 11l-2.5-2L11 11l2.5 2L16 11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight">Próximamente en</div>
              <div className="text-sm font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
