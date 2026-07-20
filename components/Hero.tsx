"use client";

import { motion } from "motion/react";
import Logo from "./Logo";

function DownArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#161719]">
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-center brightness-[0.80] contrast-[1.03] saturate-[0.96]"
        style={{ backgroundImage: "url('/images/tel-aviv-hero-real.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,12,22,0.58)_0%,rgba(8,15,26,0.42)_28%,rgba(7,12,20,0.58)_56%,rgba(8,12,18,0.86)_100%)]" />
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.07)_0%,rgba(0,0,0,0.12)_22%,rgba(0,0,0,0.58)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(100%-2rem,1540px)] items-center justify-center px-4 pb-16 pt-28 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 26, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 sm:mb-10"
          >
            <Logo className="h-24 w-28 sm:h-28 sm:w-32" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="glass-pill rounded-full border border-white/10 px-6 py-3 sm:px-10"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.42em] text-blue-300 sm:text-xs">
              Scouting exceptional companies
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 overflow-visible"
          >
            <h1 className="whitespace-nowrap text-[18vw] font-extralight leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[9rem] xl:text-[10rem]">
              <span className="text-white">Value</span>
              <span className="gradient-text inline-block pr-[0.18em] font-light">
                Israel
              </span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-5xl text-balance text-2xl font-light leading-[1.28] tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl"
          >
            Creating needle-moving value for the world&apos;s best investors in Israel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68, duration: 1.2 }}
            className="mt-5 max-w-2xl text-sm font-light leading-7 text-white/72 sm:text-base"
          >
            Value Israel provides global investors with differentiated access to high-quality Israeli growth companies through trusted local relationships, rigorous filtering and direct market intelligence.
          </motion.p>

          <motion.button
            onClick={() => document.getElementById("advisory")?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-14 cursor-pointer rounded-full border border-white/12 bg-black/18 p-3 text-white/75 backdrop-blur transition hover:border-blue-400/40 hover:text-white"
            aria-label="Scroll to advisory section"
          >
            <DownArrow />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
