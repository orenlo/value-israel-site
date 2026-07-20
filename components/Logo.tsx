type LogoProps = {
  className?: string;
  withWordmark?: boolean;
  darkWordmark?: boolean;
};

export default function Logo({
  className = "h-12 w-14",
  withWordmark = false,
  darkWordmark = false,
}: LogoProps) {
  return (
    <div className="group/logo flex items-center gap-3" aria-label="Value Israel">
      <svg
        viewBox="0 0 76 72"
        className={`${className} logo-mark overflow-visible`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Value Israel logo mark"
      >
        <defs>
          <linearGradient id="valueGrey" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2F2F3" />
            <stop offset="100%" stopColor="#AEB2B8" />
          </linearGradient>
          <linearGradient id="valueBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3C9BFF" />
            <stop offset="100%" stopColor="#0068D7" />
          </linearGradient>
        </defs>
        <polygon points="6,10 22,10 40,58 25,58" fill="url(#valueGrey)" />
        <polygon points="23,10 40,10 28,42 18,31" fill="#BFC3C8" />
        <polygon points="45,10 61,10 43,58 27,58" fill="url(#valueBlue)" />
      </svg>

      {withWordmark && (
        <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.30em] sm:text-sm">
          <span className={darkWordmark ? "text-[#15171b]" : "text-white"}>Value</span>
          <span className={`h-5 w-px ${darkWordmark ? "bg-black/25" : "bg-white/35"}`} />
          <span className="font-normal text-[#4c86e8]">Israel</span>
        </div>
      )}
    </div>
  );
}
