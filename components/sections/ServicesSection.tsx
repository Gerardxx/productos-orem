"use client";

import { Leaf, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import { services } from "@/lib/data";
import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  leaf: <Leaf size={20} strokeWidth={1.5} />,
  shield: <ShieldCheck size={20} strokeWidth={1.5} />,
  sparkles: <Sparkles size={20} strokeWidth={1.5} />,
};

export function ServicesSection() {
  return (
    /* CORRECCIÓN: bg-crema para mantener la paleta orgánica */
    <section className="py-20 md:py-32 px-6 bg-crema/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4">
          <h2 className="font-serif text-4xl md:text-6xl italic text-stone-900 leading-tight">
            Soluciones <br className="hidden md:block" />
            <span className="not-italic text-stone-300">a medida</span>
          </h2>
          <p className="font-sans text-stone-400 text-[9px] md:text-[10px] uppercase tracking-[0.3em] pb-2 border-b border-stone-200">
            Servicios Exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 rounded-[2rem] bg-white border border-stone-100 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-500 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-2xl bg-stone-50 text-stone-400 group-hover:bg-musgo group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {ICONS[service.iconName]}
              </div>

              <h4 className="font-serif text-xl md:text-2xl italic mb-3 text-stone-800">
                {service.title}
              </h4>

              <p className="font-sans text-stone-500 font-light text-sm leading-relaxed mb-8 flex-1">
                {service.desc}
              </p>

              <button className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 text-stone-400 group-hover:text-musgo transition-all">
                Saber más
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
