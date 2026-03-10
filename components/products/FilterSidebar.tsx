"use client";

import { X } from "lucide-react";
import { CheckFilter } from "@/components/products/CheckFilter";
import { LINEAS, AROMAS, FORMATOS } from "@/lib/products";

interface FilterSidebarProps {
  lineasActivas: string[];
  aromasActivos: string[];
  formatosActivos: string[];
  soloBio: boolean;
  soloConcentrado: boolean;
  ordenPrecio: "asc" | "desc" | null;
  totalFiltros: number;
  onToggleLinea: (val: string) => void;
  onToggleAroma: (val: string) => void;
  onToggleFormato: (val: string) => void;
  onToggleBio: () => void;
  onToggleConcentrado: () => void;
  onToggleOrden: (val: "asc" | "desc") => void;
  onReset: () => void;
}

export function FilterSidebar({
  lineasActivas,
  aromasActivos,
  formatosActivos,
  soloBio,
  soloConcentrado,
  ordenPrecio,
  totalFiltros,
  onToggleLinea,
  onToggleAroma,
  onToggleFormato,
  onToggleBio,
  onToggleConcentrado,
  onToggleOrden,
  onReset,
}: FilterSidebarProps) {
  return (
    // He añadido w-full y overflow-x-hidden para evitar desplazamientos raros
    <div className="space-y-10 w-full max-w-full pb-10 overflow-x-hidden">
      {/* Línea */}
      <section className="flex flex-col">
        <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-5">
          Línea
        </h4>
        <div className="flex flex-col gap-3">
          {LINEAS.map((l) => (
            <CheckFilter
              key={l}
              label={l}
              checked={lineasActivas.includes(l)}
              onChange={() => onToggleLinea(l)}
            />
          ))}
        </div>
      </section>

      {/* Aroma */}
      <section className="flex flex-col">
        <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-5">
          Aroma
        </h4>
        <div className="flex flex-col gap-3">
          {AROMAS.map((a) => (
            <CheckFilter
              key={a}
              label={a}
              checked={aromasActivos.includes(a)}
              onChange={() => onToggleAroma(a)}
            />
          ))}
        </div>
      </section>

      {/* Formato */}
      <section className="flex flex-col">
        <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-5">
          Formato
        </h4>
        <div className="flex flex-col gap-3">
          {FORMATOS.map((f) => (
            <CheckFilter
              key={f}
              label={f}
              checked={formatosActivos.includes(f)}
              onChange={() => onToggleFormato(f)}
            />
          ))}
        </div>
      </section>

      {/* Atributos */}
      <section className="flex flex-col">
        <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-5">
          Atributos
        </h4>
        <div className="flex flex-col gap-3">
          <CheckFilter
            label="Solo Biodegradable"
            checked={soloBio}
            onChange={onToggleBio}
          />
          <CheckFilter
            label="Solo Concentrado"
            checked={soloConcentrado}
            onChange={onToggleConcentrado}
          />
        </div>
      </section>

      {/* Precio */}
      <section className="flex flex-col">
        <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-5">
          Ordenar por precio
        </h4>
        <div className="flex flex-col gap-3">
          <CheckFilter
            label="Menor a mayor"
            checked={ordenPrecio === "asc"}
            onChange={() => onToggleOrden("asc")}
          />
          <CheckFilter
            label="Mayor a menor"
            checked={ordenPrecio === "desc"}
            onChange={() => onToggleOrden("desc")}
          />
        </div>
      </section>

      {/* Botón de Reset */}
      {totalFiltros > 0 && (
        <div className="pt-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <button
            onClick={onReset}
            className="w-full py-4 rounded-xl border border-stone-200 font-sans text-[10px] uppercase tracking-widest text-stone-500 hover:bg-stone-50 hover:border-red-200 hover:text-red-500 transition-all flex items-center justify-center gap-2 group"
          >
            <X
              size={12}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
            Limpiar filtros ({totalFiltros})
          </button>
        </div>
      )}
    </div>
  );
}
