"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-28 lg:pt-16 px-6 overflow-hidden bg-white">
      {/* Luces de fondo */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-salvia/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-terracota/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center relative z-0">
        {/* BLOQUE DE TEXTO - Corregido para iPad */}
        <motion.div
          className="lg:col-span-7 mt-8 md:mt-12 lg:mt-0 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-6 md:mb-8 block font-semibold">
            Naturaleza que transforma — Lima 2026
          </span>

          <h1 className="font-serif italic text-[11vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.82] mb-10 text-stone-900 tracking-tighter">
            Limpieza <br /> con{" "}
            <span className="text-musgo not-italic">espíritu</span> <br />{" "}
            botánico.
          </h1>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <Link
              href="/catalogos"
              className="px-10 py-5 rounded-full bg-terracota text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-3 group shadow-2xl shadow-terracota/20 hover:scale-105 transition-all duration-500"
            >
              Ver Catálogo
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </Link>

            <p className="font-sans text-sm font-light text-stone-500 max-w-[240px] leading-relaxed">
              Redefiniendo el estándar de higiene a través de la naturaleza y la
              ciencia.
            </p>
          </div>
        </motion.div>

        {/* BLOQUE DE IMAGEN - Corregido tamaño y ajuste */}
        <motion.div
          className="lg:col-span-5 relative mt-6 lg:mt-0 z-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[8px] md:border-[12px] border-white bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=870&auto=format&fit=crop"
              alt="Atmósfera de Limpieza Refinada"
              fill
              priority
              className="object-cover transition-transform duration-[4s] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-90 mb-1 font-semibold">
                Colección 01
              </p>
              <p className="font-serif text-2xl italic tracking-tight">
                Pureza Esencial
              </p>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-stone-100 rounded-[2.5rem]" />
        </motion.div>
      </div>
    </section>
  );
}
