import { cn } from "@/lib/utils";

export function BrandMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("drop-shadow-[0_2px_8px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-105", className)}
    >
      {/* Circuit Paths */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Thick Center Line (Cyan) */}
        <path d="M 10 50 L 76 50" stroke="#06b6d4" strokeWidth="4.5" />

        {/* Top Traces (Purple) */}
        <path d="M 10 44 L 26 44 L 34 36 L 42 44 L 50 44 L 56 38 L 62 38" stroke="#a855f7" strokeWidth="3" />
        <path d="M 10 38 L 22 38 L 34 26 L 46 38 L 52 38 L 58 32 L 66 32" stroke="#a855f7" strokeWidth="3" />
        <path d="M 42 34 L 50 26 L 68 26" stroke="#a855f7" strokeWidth="3" />
        <path d="M 38 30 L 48 20 L 70 20" stroke="#a855f7" strokeWidth="3" />
        <path d="M 34 26 L 44 14 L 64 14" stroke="#a855f7" strokeWidth="3" />

        {/* Bottom Traces (Purple) */}
        <path d="M 10 56 L 26 56 L 34 64 L 42 56 L 50 56 L 56 62 L 62 62" stroke="#a855f7" strokeWidth="3" />
        <path d="M 10 62 L 22 62 L 34 74 L 46 62 L 52 62 L 58 68 L 66 68" stroke="#a855f7" strokeWidth="3" />
        <path d="M 42 66 L 50 74 L 68 74" stroke="#a855f7" strokeWidth="3" />
        <path d="M 38 70 L 48 80 L 70 80" stroke="#a855f7" strokeWidth="3" />
        <path d="M 34 74 L 44 86 L 64 86" stroke="#a855f7" strokeWidth="3" />
      </g>

      {/* Circular Terminal Nodes */}
      {/* Center Node (Cyan) */}
      <circle cx="81" cy="50" r="5.5" fill="#06b6d4" />
      
      {/* Top Nodes (Purple) */}
      <g fill="#a855f7">
        <circle cx="62" cy="38" r="3.2" />
        <circle cx="66" cy="32" r="3.2" />
        <circle cx="68" cy="26" r="3.2" />
        <circle cx="70" cy="20" r="3.2" />
        <circle cx="64" cy="14" r="3.2" />
      </g>

      {/* Bottom Nodes (Purple) */}
      <g fill="#a855f7">
        <circle cx="62" cy="62" r="3.2" />
        <circle cx="66" cy="68" r="3.2" />
        <circle cx="68" cy="74" r="3.2" />
        <circle cx="70" cy="80" r="3.2" />
        <circle cx="64" cy="86" r="3.2" />
      </g>
    </svg>
  );
}
