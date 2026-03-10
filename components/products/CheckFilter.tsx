"use client";

interface CheckFilterProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function CheckFilter({ label, checked, onChange }: CheckFilterProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group select-none w-full py-0.5 overflow-hidden">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />

      <div
        className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
          checked
            ? "border-musgo bg-musgo shadow-sm"
            : "border-stone-400 group-hover:border-musgo bg-white" // stone-400 en vez de stone-200
        }`}
      >
        {checked && (
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            className="animate-in zoom-in duration-200"
          >
            <path
              d="M1 3l2 2 4-4"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <span
        className={`font-sans text-xs font-medium transition-colors duration-300 truncate flex-1 ${
          checked
            ? "text-musgo" // color musgo cuando activo
            : "text-stone-700 group-hover:text-stone-900" // stone-700 en vez de stone-400
        }`}
      >
        {label}
      </span>
    </label>
  );
}
