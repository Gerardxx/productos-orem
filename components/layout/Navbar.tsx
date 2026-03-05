"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Settings2, User } from "lucide-react";
import { TOKENS } from "@/lib/data";
import { CartSheet } from "@/components/ui/CartSheet";
import Link from "next/link";
import { IconAuth2fa, IconDashboard } from "@tabler/icons-react";

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
      className="fixed top-0 inset-x-0 z-40 pointer-events-none"
    >
      <nav
        style={{
          backgroundColor: isScrolled
            ? "rgba(249, 247, 242, 0.8)"
            : "transparent",
          borderColor: isScrolled ? TOKENS.arena : "transparent",
        }}
        className={`
          pointer-events-auto flex items-center justify-between px-6 md:px-8
          transition-all duration-700 w-full backdrop-blur-md border-b
          ${isScrolled ? "py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "py-5"}
        `}
      >
        {/* Logo */}
        <div className="serif italic text-xl md:text-2xl font-semibold tracking-tight cursor-pointer leading-tight">
          <span>Productos</span>
          <span style={{ color: TOKENS.terracota }}>.ORE M</span>
        </div>

        {/* Links — solo desktop */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href="#"
              className="sans text-[10px] uppercase tracking-[0.25em] font-semibold opacity-60 hover:opacity-100 transition-all hover:translate-y-[-1px]"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <CartSheet />

          {/* Desktop: texto completo */}
          <Link
            href="/dashboard"
            style={{ backgroundColor: TOKENS.negro, color: TOKENS.crema }}
            className="hidden sm:flex px-6 py-3 rounded-full sans text-[10px] uppercase tracking-widest font-bold hover:shadow-xl transition-all active:scale-95"
          >
            Administrar
          </Link>

          {/* Mobile: ícono */}
          {/* Mobile: texto pequeño */}
          <Link
            href="/dashboard"
            style={{ backgroundColor: TOKENS.negro, color: TOKENS.crema }}
            className="flex sm:hidden px-4 py-2 rounded-full sans text-[9px] uppercase tracking-widest font-bold active:scale-95 transition-all"
          >
            Admin
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
