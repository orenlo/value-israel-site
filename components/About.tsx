"use client";

import { motion } from "motion/react";

function BiblicalSandalsMark({ gradientId }: { gradientId: string }) {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full max-w-[300px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="40" y1="20" x2="360" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B341F" />
          <stop offset="0.42" stopColor="#8A5430" />
          <stop offset="0.76" stopColor="#B97845" />
          <stop offset="1" stopColor="#D6A06A" />
        </linearGradient>
        <linearGradient id={`${gradientId}Fill`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8B5E3C" stopOpacity="0.20" />
          <stop offset="1" stopColor="#D4A373" stopOpacity="0.07" />
        </linearGradient>
      </defs>

      {/* Left sandal */}
      <g transform="translate(35 28) rotate(-7 95 130)">
        <path
          d="M88 8C53 11 35 44 30 92C25 139 30 202 48 249C58 275 79 288 101 282C128 274 143 246 148 197C154 147 150 78 133 38C124 17 108 6 88 8Z"
          fill={`url(#${gradientId}Fill)`}
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
        />
        <path d="M42 96C71 77 105 72 139 86" stroke={`url(#${gradientId})`} strokeWidth="13" strokeLinecap="round" />
        <path d="M49 139C76 121 108 117 143 129" stroke={`url(#${gradientId})`} strokeWidth="12" strokeLinecap="round" />
        <path d="M61 205C84 190 110 188 136 196" stroke={`url(#${gradientId})`} strokeWidth="10" strokeLinecap="round" />
        <path d="M52 205C52 234 67 253 94 262" stroke={`url(#${gradientId})`} strokeWidth="7" strokeLinecap="round" />
        <path d="M136 196C134 224 119 246 94 262" stroke={`url(#${gradientId})`} strokeWidth="7" strokeLinecap="round" />
        <path d="M79 74L115 138" stroke={`url(#${gradientId})`} strokeWidth="9" strokeLinecap="round" />
        <circle cx="117" cy="138" r="6.5" fill="#D7A46D" />
        <path d="M57 231C80 241 106 241 130 230" stroke="#C58A52" strokeOpacity="0.34" strokeWidth="3" strokeDasharray="5 7" strokeLinecap="round" />
      </g>

      {/* Right sandal */}
      <g transform="translate(218 30) rotate(8 95 130)">
        <path
          d="M88 8C53 11 35 44 30 92C25 139 30 202 48 249C58 275 79 288 101 282C128 274 143 246 148 197C154 147 150 78 133 38C124 17 108 6 88 8Z"
          fill={`url(#${gradientId}Fill)`}
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
        />
        <path d="M42 96C71 77 105 72 139 86" stroke={`url(#${gradientId})`} strokeWidth="13" strokeLinecap="round" />
        <path d="M49 139C76 121 108 117 143 129" stroke={`url(#${gradientId})`} strokeWidth="12" strokeLinecap="round" />
        <path d="M61 205C84 190 110 188 136 196" stroke={`url(#${gradientId})`} strokeWidth="10" strokeLinecap="round" />
        <path d="M52 205C52 234 67 253 94 262" stroke={`url(#${gradientId})`} strokeWidth="7" strokeLinecap="round" />
        <path d="M136 196C134 224 119 246 94 262" stroke={`url(#${gradientId})`} strokeWidth="7" strokeLinecap="round" />
        <path d="M116 74L80 138" stroke={`url(#${gradientId})`} strokeWidth="9" strokeLinecap="round" />
        <circle cx="78" cy="138" r="6.5" fill="#D7A46D" />
        <path d="M57 231C80 241 106 241 130 230" stroke="#C58A52" strokeOpacity="0.34" strokeWidth="3" strokeDasharray="5 7" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#2B2F34] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/45 to-transparent" />
      <div className="absolute left-1/2 top-0 h-80 w-[72%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),rgba(14,165,233,0.10)_38%,rgba(103,232,249,0.05)_58%,transparent_76%)] blur-2xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-900/18 blur-3xl" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-[0.38fr_1.62fr] lg:items-start"
        >
          <div className="flex flex-col items-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-cyan-300 sm:text-xs">
              About
            </p>

            <motion.div
              initial={{ opacity: 0, x: -22, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 hidden w-full justify-center rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(59,65,72,0.92),rgba(51,56,62,0.72))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_55px_rgba(0,0,0,0.13)] lg:flex"
            >
              <BiblicalSandalsMark gradientId="sandalBlueDesktop" />
            </motion.div>
          </div>

          <div className="max-w-5xl">
            <h2 className="text-[2.5rem] font-extralight leading-[1.18] tracking-[-0.045em] text-white sm:text-[3.6rem] lg:text-[4.35rem]">
              Value Israel provides global investors differentiated access to high-quality Israeli growth companies through trusted local relationships, rigorous filtering, and direct market intelligence.
            </h2>

            <p className="mt-10 max-w-4xl text-xl font-light leading-[1.6] tracking-[-0.018em] text-white/72 sm:text-2xl lg:text-[1.75rem]">
              Value Israel invests alongside its partners in every deal, creating long-term alignment of interests between the company, the investor, and Value Israel.
            </p>

            <div className="mt-10 flex justify-center lg:hidden">
              <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(59,65,72,0.92),rgba(51,56,62,0.72))] p-7">
                <BiblicalSandalsMark gradientId="sandalBlueMobile" />
              </div>
            </div>

            <div className="mt-12 h-px w-full bg-gradient-to-r from-blue-950/20 via-blue-400/65 to-cyan-300/25" />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-center text-lg font-medium tracking-[-0.02em] text-white/88 sm:text-xl lg:text-2xl"
            >
              Not boots on the ground. <span className="text-cyan-300">Sandals on the ground.</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
