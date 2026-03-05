"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CartSheet } from "@/components/ui/CartSheet";
import Link from "next/link";

const NAV_LINKS = ["Colecciones", "Tecnología", "Sostenibilidad"];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // Añadimos el fix del padding-right para que no salte al abrir el carrito
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none pr-[var(--removed-body-scroll-bar-size)]"
    >
      <nav
        className={`
          pointer-events-auto flex items-center justify-between px-6 md:px-8
          transition-all duration-700 w-full backdrop-blur-md border-b
          ${
            isScrolled
              ? "py-3 bg-crema/80 border-arena shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              : "py-5 bg-transparent border-transparent"
          }
        `}
      >
        {/* Logo */}
        <div className="font-serif italic text-xl md:text-2xl font-semibold tracking-tight cursor-pointer leading-tight">
          <span className="text-negro">Productos</span>
          <span className="text-terracota">.ORE M</span>
        </div>

        {/* Links — solo desktop */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href="#"
              className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-500 hover:text-negro transition-all hover:translate-y-[-1px]"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <CartSheet />

          {/* Botón Administrar - Usando clases en lugar de TOKENS */}
          <Link
            href="/dashboard"
            className="hidden sm:flex px-6 py-3 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold bg-negro text-crema hover:bg-stone-800 transition-all active:scale-95 shadow-lg"
          >
            Administrar
          </Link>

          {/* Mobile: Admin */}
          <Link
            href="/dashboard"
            className="flex sm:hidden px-4 py-2 rounded-full font-sans text-[9px] uppercase tracking-widest font-bold bg-negro text-crema active:scale-95 transition-all"
          >
            Admin
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
