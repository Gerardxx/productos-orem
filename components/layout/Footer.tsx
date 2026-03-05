import { TOKENS } from "@/lib/data";

const SOCIAL = ["Instagram", "LinkedIn"];
const EXPLORE = [
  "Catálogo Residencial",
  "Soluciones Corporativas",
  "Nuestro Manifiesto",
];

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: TOKENS.negro }}
      className="pt-16 md:pt-32 pb-10 px-6 rounded-t-[2rem] md:rounded-t-[4rem]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 mb-16 md:mb-32">
          {/* Logo + descripción */}
          <div className="md:col-span-6">
            <div className="serif italic text-3xl md:text-5xl text-white mb-6 md:mb-10 tracking-tighter">
              Productos<span style={{ color: TOKENS.terracota }}>.ORE M</span>
            </div>
            <p className="sans text-stone-500 text-base md:text-xl font-light leading-relaxed max-w-md">
              Elevamos el estándar de los espacios peruanos a través de una
              limpieza con alma y propósito.
            </p>
          </div>

          {/* Explorar + Contacto en la misma fila en tablet */}
          <div className="grid grid-cols-2 md:contents gap-10">
            <div className="md:col-span-3 space-y-4 md:space-y-6">
              <h5 className="sans text-[10px] uppercase tracking-[0.3em] text-stone-600 font-bold">
                Explorar
              </h5>
              <ul className="space-y-3 md:space-y-4 sans text-sm text-stone-400 font-light">
                {EXPLORE.map((item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-4 md:space-y-6">
              <h5 className="sans text-[10px] uppercase tracking-[0.3em] text-stone-600 font-bold">
                Contacto
              </h5>
              <p className="sans text-sm text-stone-400 font-light leading-relaxed">
                Lince, Lima — Perú <br />
                hola@productosorem.pe <br />
                +51 900 000 000
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <span className="sans text-[9px] uppercase tracking-[0.5em] text-stone-600">
            © 2026 Productos.ORE M — Todos los derechos reservados
          </span>
          <div className="flex gap-8">
            {SOCIAL.map((s) => (
              <span
                key={s}
                className="sans text-[9px] uppercase tracking-widest text-stone-500 hover:text-white cursor-pointer transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
