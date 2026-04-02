"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "¿Es seguro hacer terapias con mi condición?",
    a: "Sí. Todas las terapias siguen guías médicas internacionales y son supervisadas por profesionales. Además, tienes una valoración inicial antes de empezar.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. SER está diseñado para ser muy fácil de usar. Si puedes usar WhatsApp, puedes usar SER.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Tenemos 3 planes desde $120.000/mes. Todos incluyen 36 terapias, sesiones en vivo semanales y kit deportivo. Además, tienes 2 sesiones gratis para probar.",
  },
  {
    q: "¿Qué incluyen las sesiones en vivo?",
    a: "Cada semana tienes una sesión guiada por un profesional de salud en tiempo real, donde puedes hacer preguntas y recibir orientación personalizada.",
  },
  {
    q: "¿Puedo hacer seguimiento de mi presión arterial?",
    a: "Sí. La app te permite registrar tus signos vitales, tensión arterial y medicamentos. Todo queda en tu historial para que tú y tu profesional puedan ver tu progreso.",
  },
  {
    q: "¿Funciona si vivo lejos de una ciudad grande?",
    a: "Sí. SER funciona desde cualquier lugar con internet. Está pensado para personas que no tienen acceso fácil a servicios de salud.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay permanencia mínima. Puedes cancelar tu plan cuando quieras sin penalidades.",
  },
  {
    q: "¿Mi familia puede usar SER conmigo?",
    a: "El plan Diamante incluye acompañamiento familiar. En los demás planes, cada persona necesita su propia cuenta.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3621A4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
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

export function Faq() {
  return (
    <section id="faq" className="bg-gray-100 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionLabel>Preguntas frecuentes</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Resolvemos tus dudas
        </h2>

        <div className="mt-14 space-y-4 text-left">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
