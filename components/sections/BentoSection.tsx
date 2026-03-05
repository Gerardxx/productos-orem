"use client";

import Image from "next/image";
import { Sparkles, ShieldCheck, Leaf, Globe } from "lucide-react";

export function BentoSection() {
  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card grande izquierda - Suscripción */}
        <div className="md:col-span-2 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden min-h-[400px] flex flex-col justify-end group bg-negro">
          <div className="absolute top-8 right-8 md:top-12 md:right-12 w-20 h-20 md:w-24 md:h-24 border border-stone-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-1000">
            <Sparkles className="text-salvia" size={32} />
          </div>
          <h3 className="font-serif text-4xl md:text-5xl text-white italic mb-6 leading-tight">
            Suscripción <br />
            <span className="text-salvia not-italic">Consciente</span>
          </h3>
          <p className="font-sans text-stone-400 max-w-sm font-light leading-relaxed">
            Recarga tus botellas de vidrio infinito y reduce el plástico en un
            85%. Un ciclo perfecto para tu hogar y el planeta.
          </p>
        </div>

        {/* Card derecha - Grado Hospitalario */}
        <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-arena flex flex-col justify-between group hover:bg-white transition-all duration-700 bg-transparent">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-stone-100 group-hover:scale-110 transition-transform">
            <ShieldCheck size={28} className="text-musgo" />
          </div>
          <div className="mt-12 md:mt-0">
            <h4 className="font-serif text-3xl italic mb-3 text-negro">
              Grado Hospitalario
            </h4>
            <p className="font-sans text-sm text-stone-500 leading-relaxed font-light">
              Elimina el 99.9% de patógenos sin químicos agresivos.
            </p>
          </div>
        </div>

        {/* Card verde - Eco-Logística */}
        <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between text-white relative overflow-hidden bg-musgo min-h-[220px]">
          <Globe size={100} className="absolute -top-10 -right-10 opacity-10" />
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md">
            <Leaf size={24} />
          </div>
          <h4 className="font-serif text-3xl italic">Eco-Logística Lima</h4>
        </div>

        {/* Card fragancias - Horizontal abajo */}
        <div className="md:col-span-2 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-arena flex flex-col sm:flex-row items-center gap-8 md:gap-10 bg-crema">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl rotate-3 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400"
              alt="Fragancias"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-3xl italic mb-2 tracking-tight text-negro">
              Fragancias de Autor
            </h4>
            <p className="font-sans text-stone-500 font-light text-sm max-w-md">
              Desarrolladas por perfumistas locales usando aceites esenciales de
              la selva y los andes peruanos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
